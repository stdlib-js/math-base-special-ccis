/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var abs = require( '@stdlib/math-base-special-abs' );
var EPS = require( '@stdlib/constants-float64-eps' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var ccis = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( ccis instanceof Error )
};


// FIXTURES //

var pureReal = require( './fixtures/julia/pure_real.json' );
var generalComplex = require( './fixtures/julia/general_complex.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ccis, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the cis function for a double-precision complex floating-point number', opts, function test( t ) {
	var v;
	var z;

	z = new Complex128( 0.0, 0.0 );
	v = ccis( z );

	t.strictEqual( real( v ), 1.0, 'returns expected value' );
	t.strictEqual( imag( v ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function computes cis(z) for pure real z', opts, function test( t ) {
	var delta;
	var cisre;
	var cisim;
	var tol;
	var re;
	var im;
	var i;
	var q;
	var z;

	re = pureReal.re;
	im = pureReal.im;
	cisre = pureReal.cisre;
	cisim = pureReal.cisim;

	for ( i = 0; i < re.length; i++ ) {
		z = new Complex128( re[ i ], im[ i ] );
		q = ccis( z );

		if ( real( q ) === cisre[ i ] ) {
			t.strictEqual( real( q ), cisre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - cisre[ i ] );
			tol = EPS * abs( cisre[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. real: '+real( q )+'. expected: '+cisre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === cisim[ i ] ) {
			t.strictEqual( imag( q ), cisim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - cisim[ i ] );
			tol = EPS * abs( cisim[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. imag: '+imag( q )+'. expected: '+cisim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes cis(z) for complex z', opts, function test( t ) {
	var delta;
	var cisre;
	var cisim;
	var tol;
	var re;
	var im;
	var i;
	var q;
	var z;

	re = generalComplex.re;
	im = generalComplex.im;
	cisre = generalComplex.cisre;
	cisim = generalComplex.cisim;

	for ( i = 0; i < re.length; i++ ) {
		z = new Complex128( re[ i ], im[ i ] );
		q = ccis( z );

		if ( real( q ) === cisre[ i ] ) {
			t.strictEqual( real( q ), cisre[ i ], 'returns expected real component' );
		} else {
			// NOTE: the results may differ slightly from the reference and JavaScript implementations due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
			delta = abs( real( q ) - cisre[ i ] );
			tol = 1.05 * EPS * abs( cisre[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. real: '+real( q )+'. expected: '+cisre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === cisim[ i ] ) {
			t.strictEqual( imag( q ), cisim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - cisim[ i ] );
			tol = EPS * abs( cisim[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. imag: '+imag( q )+'. expected: '+cisim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if real component is `+Infinity`, all components are `NaN`', opts, function test( t ) {
	var v;

	v = ccis( new Complex128( PINF, 0.0 ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'if real component is `-Infinity`, all components are `NaN`', opts, function test( t ) {
	var v;

	v = ccis( new Complex128( NINF, 0.0 ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'if imaginary component is `+Infinity`, all components are zeros', opts, function test( t ) {
	var v;

	v = ccis( new Complex128( 1.0, PINF ) );
	t.strictEqual( real( v ), 0.0, 'returns 0.0' );
	t.strictEqual( imag( v ), 0.0, 'returns 0.0' );
	t.end();
});

tape( 'if imaginary component is `-Infinity`, the function computes the correct result according to IEEE 754 rules', opts, function test( t ) {
	var v;

	v = ccis( new Complex128( 0.0, NINF ) );

	// The real component is computed as Infinity * 1.0 = Infinity:
	t.strictEqual( real( v ), PINF, 'returns +Infinity' );

	// The imaginary component is computed as Infinity * 0.0 = NaN:
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'if a real or imaginary component is `NaN`, all components are `NaN`', opts, function test( t ) {
	var v;

	v = ccis( new Complex128( NaN, 3.0 ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	v = ccis( new Complex128( 5.0, NaN ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	v = ccis( new Complex128( NaN, NaN ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	t.end();
});
