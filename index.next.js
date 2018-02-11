/**
 * SVG void elements that cannot be auto-closed and shouldn't contain child nodes.
 * @type {Array}
 */
export const VOID_SVG_TAGS_LIST = [
  'circle',
  'ellipse',
  'line',
  'path',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'use'
]

/**
 * List of all the available svg tags
 * @type {Array}
 * @see {@link https://github.com/wooorm/svg-tag-names}
 */
export const SVG_TAGS_LIST = [
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
].concat(VOID_SVG_TAGS_LIST).sort()

/**
 * HTML void elements that cannot be auto-closed and shouldn't contain child nodes.
 * @type {Array}
 * @see   {@link http://www.w3.org/TR/html-markup/syntax.html#syntax-elements}
 * @see   {@link http://www.w3.org/TR/html5/syntax.html#void-elements}
 */
export const VOID_HTML_TAGS_LIST = [
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
]

/**
 * List of all the html tags
 * @type {Array}
 * @see {@link https://github.com/sindresorhus/html-tags}
 */
export const HTML_TAGS_LIST = [
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
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'colgroup',
  'data',
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
  'option',
  'output',
  'p',
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
  'select',
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
  'textarea',
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
].concat(VOID_HTML_TAGS_LIST).sort()

/**
 * Join a list of items with the pipe symbol (usefull for regex list concatenation)
 * @private
 * @param   {Array} list - list of strings
 * @returns {String} the list received joined with pipes
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
 * @type {RegExp}
 */
export const HTML_TAGS_RE = listsToRegex(HTML_TAGS_LIST)

/**
 * Regex matching all the svg tags ignoring the cases
 * @type {RegExp}
 */
export const SVG_TAGS_RE = listsToRegex(SVG_TAGS_LIST)

/**
 * Regex matching all the void html tags ignoring the cases
 * @type {RegExp}
 */
export const VOID_HTML_TAGS_RE =  listsToRegex(VOID_HTML_TAGS_LIST)

/**
 * Regex matching all the void svg tags ignoring the cases
 * @type {RegExp}
 */
export const VOID_SVG_TAGS_RE =  listsToRegex(VOID_SVG_TAGS_LIST)

/**
 * True if it's a self closing tag
 * @param   {String}  tag - test tag
 * @returns {Boolean}
 * @example
 * isVoid('meta') // true
 * isVoid('circle') // true
 * isVoid('IMG') // true
 * isVoid('div') // false
 * isVoid('mask') // false
 */
export function isVoid(tag) {
  return [
    VOID_HTML_TAGS_RE,
    VOID_SVG_TAGS_RE
  ].some(r => r.test(tag))
}

/**
 * True if it's a HTML known tag
 * @param   {String}  tag - test tag
 * @returns {Boolean}
 * @example
 * isHtml('img') // true
 * isHtml('IMG') // true
 * isHtml('Img') // true
 * isHtml('path') // false
 */
export function isHtml(tag) {
  return HTML_TAGS_RE.test(tag)
}

/**
 * True if it's a SVG known tag
 * @param   {String}  tag - test tag
 * @returns {Boolean}
 * @example
 * isSvg('g') // true
 * isSvg('radialGradient') // true
 * isSvg('radialgradient') // true
 * isSvg('div') // false
 */
export function isSvg(tag) {
  return SVG_TAGS_RE.test(tag)
}

/**
 * True if it's not SVG nor a HTML known tag
 * @param   {String}  tag - test tag
 * @returns {Boolean}
 * @example
 * isCustom('my-component') // true
 * isCustom('div') // false
 */
export function isCustom(tag) {
  return [
    HTML_TAGS_RE,
    SVG_TAGS_RE
  ].every(l => !l.test(tag))
}