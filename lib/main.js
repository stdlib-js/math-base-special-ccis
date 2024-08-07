/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var sincos = require( '@stdlib/math-base-special-sincos' ).assign;
var exp = require( '@stdlib/math-base-special-exp' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );


// VARIABLES //

// Pre-allocate workspace array:
var WORKSPACE = [ 0.0, 0.0 ];


// MAIN //

/**
* Evaluates the cis function for a double-precision complex floating-point number.
*
* @param {Complex128} z - complex number
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
* var real = require( '@stdlib/complex-float64-real' );
* var imag = require( '@stdlib/complex-float64-imag' );
*
* var z = new Complex128( 0.0, 0.0 );
* // returns <Complex128>
*
* var out = ccis( z );
* // returns <Complex128>
*
* var re = real( out );
* // returns 1.0
*
* var im = imag( out );
* // returns 0.0
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
* var real = require( '@stdlib/complex-float64-real' );
* var imag = require( '@stdlib/complex-float64-imag' );
*
* var z = new Complex128( 1.0, 0.0 );
* // returns <Complex128>
*
* var out = ccis( z );
* // returns <Complex128>
*
* var re = real( out );
* // returns ~0.54
*
* var im = imag( out );
* // returns ~0.841
*/
function ccis( z ) {
	var re;
	var im;
	var e;

	re = real( z );
	im = imag( z );

	sincos( re, WORKSPACE, 1, 0 );
	if ( im !== 0.0 ) {
		e = exp( -im );
		WORKSPACE[ 0 ] *= e;
		WORKSPACE[ 1 ] *= e;
	}
	return new Complex128( WORKSPACE[ 1 ], WORKSPACE[ 0 ] );
}


// EXPORTS //

module.exports = ccis;
