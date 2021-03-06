# dom-nodes

[![Build Status][travis-image]][travis-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

## Installation

```bash
$ npm i dom-nodes -S
```

## Usage

```js
import {isVoid} from 'dom-nodes'
isVoid('div') // false
isVoid('img') // true
```

`dom-nodes` exports all the methods [listed below](#API) giving you some simple tests to understand which kind of node you are dealing with.

This project includes [html-tags](https://github.com/sindresorhus/html-tags) and [svg-tag-names](https://github.com/wooorm/svg-tag-names) directly in its source code avoiding to rely on third party npm modules for such simple list of strings.
This project couldn't have been made without the projects above!

[travis-image]: https://img.shields.io/travis/riot/dom-nodes.svg?style=flat-square

[travis-url]: https://travis-ci.org/riot/dom-nodes

[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square

[license-url]: LICENSE

[npm-version-image]: http://img.shields.io/npm/v/dom-nodes.svg?style=flat-square

[npm-downloads-image]: http://img.shields.io/npm/dm/dom-nodes.svg?style=flat-square

[npm-url]: https://npmjs.org/package/dom-nodes

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [VOID_SVG_TAGS_LIST](#void_svg_tags_list)
-   [HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_LIST](#html_elements_having_value_attribute_list)
-   [SVG_TAGS_LIST](#svg_tags_list)
-   [VOID_HTML_TAGS_LIST](#void_html_tags_list)
-   [HTML_TAGS_LIST](#html_tags_list)
-   [BOOLEAN_ATTRIBUTES_LIST](#boolean_attributes_list)
-   [HTML_TAGS_RE](#html_tags_re)
-   [SVG_TAGS_RE](#svg_tags_re)
-   [VOID_HTML_TAGS_RE](#void_html_tags_re)
-   [VOID_SVG_TAGS_RE](#void_svg_tags_re)
-   [HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_RE](#html_elements_having_value_attribute_re)
-   [BOOLEAN_ATTRIBUTES_RE](#boolean_attributes_re)
-   [isVoid](#isvoid)
    -   [Parameters](#parameters)
    -   [Examples](#examples)
-   [isHtml](#ishtml)
    -   [Parameters](#parameters-1)
    -   [Examples](#examples-1)
-   [isSvg](#issvg)
    -   [Parameters](#parameters-2)
    -   [Examples](#examples-2)
-   [isCustom](#iscustom)
    -   [Parameters](#parameters-3)
    -   [Examples](#examples-3)
-   [hasValueAttribute](#hasvalueattribute)
    -   [Parameters](#parameters-4)
    -   [Examples](#examples-4)
-   [isBoolAttribute](#isboolattribute)
    -   [Parameters](#parameters-5)
    -   [Examples](#examples-5)

### VOID_SVG_TAGS_LIST

SVG void elements that cannot be auto-closed and shouldn't contain child nodes.

Type: [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)

### HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_LIST

List of html elements where the value attribute is allowed

Type: [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)

### SVG_TAGS_LIST

-   **See: <https://github.com/wooorm/svg-tag-names>**

List of all the available svg tags

Type: [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)

### VOID_HTML_TAGS_LIST

-   **See: <http://www.w3.org/TR/html-markup/syntax.html#syntax-elements>**
-   **See: <http://www.w3.org/TR/html5/syntax.html#void-elements>**

HTML void elements that cannot be auto-closed and shouldn't contain child nodes.

Type: [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)

### HTML_TAGS_LIST

-   **See: <https://github.com/sindresorhus/html-tags>**

List of all the html tags

Type: [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)

### BOOLEAN_ATTRIBUTES_LIST

-   **See: <https://www.w3.org/TR/html5/infrastructure.html#sec-boolean-attributes>**

List of all boolean HTML attributes

Type: [RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### HTML_TAGS_RE

Regex matching all the html tags ignoring the cases

Type: [RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### SVG_TAGS_RE

Regex matching all the svg tags ignoring the cases

Type: [RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### VOID_HTML_TAGS_RE

Regex matching all the void html tags ignoring the cases

Type: [RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### VOID_SVG_TAGS_RE

Regex matching all the void svg tags ignoring the cases

Type: [RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_RE

Regex matching all the html tags where the value tag is allowed

Type: [RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### BOOLEAN_ATTRIBUTES_RE

Regex matching all the boolean attributes

Type: [RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### isVoid

True if it's a self closing tag

#### Parameters

-   `tag` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** test tag

#### Examples

```javascript
isVoid('meta') // true
isVoid('circle') // true
isVoid('IMG') // true
isVoid('div') // false
isVoid('mask') // false
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if void

### isHtml

True if it's a known HTML tag

#### Parameters

-   `tag` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** test tag

#### Examples

```javascript
isHtml('img') // true
isHtml('IMG') // true
isHtml('Img') // true
isHtml('path') // false
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if html tag

### isSvg

True if it's a known SVG tag

#### Parameters

-   `tag` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** test tag

#### Examples

```javascript
isSvg('g') // true
isSvg('radialGradient') // true
isSvg('radialgradient') // true
isSvg('div') // false
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if svg tag

### isCustom

True if it's not SVG nor a HTML known tag

#### Parameters

-   `tag` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** test tag

#### Examples

```javascript
isCustom('my-component') // true
isCustom('div') // false
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if custom element

### hasValueAttribute

True if the value attribute is allowed on this tag

#### Parameters

-   `tag` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** test tag

#### Examples

```javascript
hasValueAttribute('input') // true
hasValueAttribute('div') // false
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if the value attribute is allowed

### isBoolAttribute

True if it's a boolean attribute

#### Parameters

-   `attribute` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** test attribute

#### Examples

```javascript
isBoolAttribute('selected') // true
isBoolAttribute('class') // false
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if the attribute is a boolean type
