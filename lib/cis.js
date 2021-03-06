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

var sincos = require( '@stdlib/math-base-special-sincos' );
var exp = require( '@stdlib/math-base-special-exp' );


// MAIN //

/**
* Computes the cis function of a complex number.
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @returns {(Array|TypedArray|Object)} output array
*
* @example
* var out = [ 0.0, 0.0 ];
*
* var v = cis( out, 1.0, 0.0 );
* // returns [ ~0.540, ~0.841 ]
*
* var bool = ( v === out );
* // returns true
*/
function cis( out, re, im ) {
	var tmp;
	var e;

	sincos( out, re );
	tmp = out[ 0 ];
	if ( im !== 0.0 ) {
		e = exp( -im );
		tmp *= e;
		out[ 1 ] *= e;
	}
	out[ 0 ] = out[ 1 ];
	out[ 1 ] = tmp;
	return out;
}


// EXPORTS //

module.exports = cis;
