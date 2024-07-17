<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ccis

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [cis][cis] function for a double-precision complex floating-point number.

<section class="intro">

The [cis][cis] function is defined as

<!-- <equation class="equation" label="eq:cis_function" align="center" raw="\operatorname{cis}(z) = e^{iz} = \cos(z) + i \sin(z)" alt="cis function"> -->

```math
\mathop{\mathrm{cis}}(z) = e^{iz} = \cos(z) + i \sin(z)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{cis}(z) = e^{iz} = \cos(z) + i \sin(z)" data-equation="eq:cis_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d4edb68b52a6c646be5683023c5a24890300727f/lib/node_modules/@stdlib/math/base/special/ccis/docs/img/equation_cis_function.svg" alt="cis function">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
ccis = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ccis@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ccis = require( 'path/to/vendor/umd/math-base-special-ccis/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ccis@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ccis;
})();
</script>
```

#### ccis( z )

Evaluates the [cis][cis] function for a double-precision complex floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var z = new Complex128( 0.0, 0.0 );

var v = ccis( z );
// returns <Complex128>

var re = real( v );
// returns 1.0

var im = imag( v );
// returns 0.0

z = new Complex128( 1.0, 0.0 );

v = ccis( z );
// returns <Complex128>

re = real( v );
// returns ~0.540

im = imag( v );
// returns ~0.841
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ccis@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var z1;
var z2;
var i;

for ( i = 0; i < 100; i++ ) {
    z1 = new Complex128( uniform( -50.0, 50.0 ), uniform( -50.0, 50.0 ) );
    z2 = ccis( z1 );
    console.log( 'ccis(%s) = %s', z1.toString(), z2.toString() );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-ccis.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-ccis

[test-image]: https://github.com/stdlib-js/math-base-special-ccis/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-ccis/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-ccis/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-ccis?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-ccis.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-ccis/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-ccis/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-ccis/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-ccis/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-ccis/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-ccis/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-ccis/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-ccis/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-ccis/main/LICENSE

[cis]: https://en.wikipedia.org/wiki/Cis_%28mathematics%29

</section>

<!-- /.links -->
