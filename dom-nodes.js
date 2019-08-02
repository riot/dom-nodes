(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.domNodes = {}));
}(this, function (exports) { 'use strict';

  // similar to _.uniq
  const uniq = l => l.filter((x, i, a) => a.indexOf(x) === i);

  /**
   * SVG void elements that cannot be auto-closed and shouldn't contain child nodes.
   * @const {Array}
   */
  const VOID_SVG_TAGS_LIST = [
    'circle',
    'ellipse',
    'line',
    'path',
    'polygon',
    'polyline',
    'rect',
    'stop',
    'use'
  ];

  /**
   * List of html elements where the value attribute is allowed
   * @type {Array}
   */
  const HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_LIST = [
    'button',
    'data',
    'input',
    'select',
    'option',
    'output',
    'textarea'
  ];

  /**
   * List of all the available svg tags
   * @const {Array}
   * @see {@link https://github.com/wooorm/svg-tag-names}
   */
  const SVG_TAGS_LIST = uniq([
    'a',
    'altGlyph',
    'altGlyphDef',
    'altGlyphItem',
    'animate',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'animation',
    'audio',
    'canvas',
    'clipPath',
    'color-profile',
    'cursor',
    'defs',
    'desc',
    'discard',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'font',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-src',
    'font-face-uri',
    'foreignObject',
    'g',
    'glyph',
    'glyphRef',
    'handler',
    'hatch',
    'hatchpath',
    'hkern',
    'iframe',
    'image',
    'linearGradient',
    'listener',
    'marker',
    'mask',
    'mesh',
    'meshgradient',
    'meshpatch',
    'meshrow',
    'metadata',
    'missing-glyph',
    'mpath',
    'pattern',
    'prefetch',
    'radialGradient',
    'script',
    'set',
    'solidColor',
    'solidcolor',
    'style',
    'svg',
    'switch',
    'symbol',
    'tbreak',
    'text',
    'textArea',
    'textPath',
    'title',
    'tref',
    'tspan',
    'unknown',
    'video',
    'view',
    'vkern'
  ].concat(VOID_SVG_TAGS_LIST)).sort();

  /**
   * HTML void elements that cannot be auto-closed and shouldn't contain child nodes.
   * @type {Array}
   * @see   {@link http://www.w3.org/TR/html-markup/syntax.html#syntax-elements}
   * @see   {@link http://www.w3.org/TR/html5/syntax.html#void-elements}
   */
  const VOID_HTML_TAGS_LIST = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'menuitem',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
  ];

  /**
   * List of all the html tags
   * @const {Array}
   * @see {@link https://github.com/sindresorhus/html-tags}
   */
  const HTML_TAGS_LIST = uniq([
    'a',
    'abbr',
    'address',
    'article',
    'aside',
    'audio',
    'b',
    'bdi',
    'bdo',
    'blockquote',
    'body',
    'canvas',
    'caption',
    'cite',
    'code',
    'colgroup',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'html',
    'i',
    'iframe',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'main',
    'map',
    'mark',
    'math',
    'menu',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rb',
    'rp',
    'rt',
    'rtc',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'slot',
    'small',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'svg',
    'table',
    'tbody',
    'td',
    'template',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'u',
    'ul',
    'var',
    'video'
  ]
    .concat(VOID_HTML_TAGS_LIST)
    .concat(HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_LIST)
  ).sort();

  /**
   * List of all boolean HTML attributes
   * @const {RegExp}
   * @see {@link https://www.w3.org/TR/html5/infrastructure.html#sec-boolean-attributes}
   */
  const BOOLEAN_ATTRIBUTES_LIST = [
    'disabled',
    'visible',
    'checked',
    'readonly',
    'required',
    'allowfullscreen',
    'autofocus',
    'autoplay',
    'compact',
    'controls',
    'default',
    'formnovalidate',
    'hidden',
    'ismap',
    'itemscope',
    'loop',
    'multiple',
    'muted',
    'noresize',
    'noshade',
    'novalidate',
    'nowrap',
    'open',
    'reversed',
    'seamless',
    'selected',
    'sortable',
    'truespeed',
    'typemustmatch'
  ];

  /**
   * Join a list of items with the pipe symbol (usefull for regex list concatenation)
   * @private
   * @param   {Array} list - list of strings
   * @returns {string} the list received joined with pipes
   */
  function joinWithPipe(list) {
    return list.join('|')
  }

  /**
   * Convert list of strings to regex in order to test against it ignoring the cases
   * @private
   * @param   {...Array} lists - array of strings
   * @returns {RegExp} regex that will match all the strings in the array received ignoring the cases
   */
  function listsToRegex(...lists) {
    return new RegExp(`^/?(?:${joinWithPipe(lists.map(joinWithPipe))})$`, 'i')
  }

  /**
   * Regex matching all the html tags ignoring the cases
   * @const {RegExp}
   */
  const HTML_TAGS_RE = listsToRegex(HTML_TAGS_LIST);

  /**
   * Regex matching all the svg tags ignoring the cases
   * @const {RegExp}
   */
  const SVG_TAGS_RE = listsToRegex(SVG_TAGS_LIST);

  /**
   * Regex matching all the void html tags ignoring the cases
   * @const {RegExp}
   */
  const VOID_HTML_TAGS_RE =  listsToRegex(VOID_HTML_TAGS_LIST);

  /**
   * Regex matching all the void svg tags ignoring the cases
   * @const {RegExp}
   */
  const VOID_SVG_TAGS_RE =  listsToRegex(VOID_SVG_TAGS_LIST);

  /**
   * Regex matching all the html tags where the value tag is allowed
   * @const {RegExp}
   */
  const HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_RE = listsToRegex(HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_LIST);

  /**
   * Regex matching all the boolean attributes
   * @const {RegExp}
   */
  const BOOLEAN_ATTRIBUTES_RE =  listsToRegex(BOOLEAN_ATTRIBUTES_LIST);

  /**
   * True if it's a self closing tag
   * @param   {string}  tag - test tag
   * @returns {boolean} true if void
   * @example
   * isVoid('meta') // true
   * isVoid('circle') // true
   * isVoid('IMG') // true
   * isVoid('div') // false
   * isVoid('mask') // false
   */
  function isVoid(tag) {
    return [
      VOID_HTML_TAGS_RE,
      VOID_SVG_TAGS_RE
    ].some(r => r.test(tag))
  }

  /**
   * True if it's a known HTML tag
   * @param   {string}  tag - test tag
   * @returns {boolean} true if html tag
   * @example
   * isHtml('img') // true
   * isHtml('IMG') // true
   * isHtml('Img') // true
   * isHtml('path') // false
   */
  function isHtml(tag) {
    return HTML_TAGS_RE.test(tag)
  }

  /**
   * True if it's a known SVG tag
   * @param   {string}  tag - test tag
   * @returns {boolean} true if svg tag
   * @example
   * isSvg('g') // true
   * isSvg('radialGradient') // true
   * isSvg('radialgradient') // true
   * isSvg('div') // false
   */
  function isSvg(tag) {
    return SVG_TAGS_RE.test(tag)
  }

  /**
   * True if it's not SVG nor a HTML known tag
   * @param   {string}  tag - test tag
   * @returns {boolean} true if custom element
   * @example
   * isCustom('my-component') // true
   * isCustom('div') // false
   */
  function isCustom(tag) {
    return [
      HTML_TAGS_RE,
      SVG_TAGS_RE
    ].every(l => !l.test(tag))
  }

  /**
   * True if the value attribute is allowed on this tag
   * @param   {string}  tag - test tag
   * @returns {boolean} true if the value attribute is allowed
   * @example
   * hasValueAttribute('input') // true
   * hasValueAttribute('div') // false
   */
  function hasValueAttribute(tag) {
    return HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_RE.test(tag)
  }

  /**
   * True if it's a boolean attribute
   * @param   {string} attribute - test attribute
   * @returns {boolean} true if the attribute is a boolean type
   * @example
   * isBoolAttribute('selected') // true
   * isBoolAttribute('class') // false
   */
  function isBoolAttribute(attribute) {
    return BOOLEAN_ATTRIBUTES_RE.test(attribute)
  }

  exports.BOOLEAN_ATTRIBUTES_LIST = BOOLEAN_ATTRIBUTES_LIST;
  exports.BOOLEAN_ATTRIBUTES_RE = BOOLEAN_ATTRIBUTES_RE;
  exports.HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_LIST = HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_LIST;
  exports.HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_RE = HTML_ELEMENTS_HAVING_VALUE_ATTRIBUTE_RE;
  exports.HTML_TAGS_LIST = HTML_TAGS_LIST;
  exports.HTML_TAGS_RE = HTML_TAGS_RE;
  exports.SVG_TAGS_LIST = SVG_TAGS_LIST;
  exports.SVG_TAGS_RE = SVG_TAGS_RE;
  exports.VOID_HTML_TAGS_LIST = VOID_HTML_TAGS_LIST;
  exports.VOID_HTML_TAGS_RE = VOID_HTML_TAGS_RE;
  exports.VOID_SVG_TAGS_LIST = VOID_SVG_TAGS_LIST;
  exports.VOID_SVG_TAGS_RE = VOID_SVG_TAGS_RE;
  exports.hasValueAttribute = hasValueAttribute;
  exports.isBoolAttribute = isBoolAttribute;
  exports.isCustom = isCustom;
  exports.isHtml = isHtml;
  exports.isSvg = isSvg;
  exports.isVoid = isVoid;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
