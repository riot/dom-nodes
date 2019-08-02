const assert = require('assert')
const {
  VOID_SVG_TAGS_LIST,
  VOID_HTML_TAGS_LIST,
  HTML_TAGS_LIST,
  SVG_TAGS_LIST,
  isVoid,
  isHtml,
  isSvg,
  isCustom,
  isBoolAttribute,
  hasValueAttribute
} = require('./')

describe('dom-nodes', function() {
  describe('Lists', () => {
    it('All the list are properly exported', () => {
      assert(Array.isArray(VOID_SVG_TAGS_LIST), 'void svg tags are arrays')
      assert(Array.isArray(VOID_HTML_TAGS_LIST), 'void html tags are arrays')
      assert(Array.isArray(HTML_TAGS_LIST), 'html tags are arrays')
      assert(Array.isArray(SVG_TAGS_LIST), 'svg tags are arrays')
    })
  })

  describe('Helpers', () => {
    it('isVoid()', () => {
      assert(isVoid('img'))
      assert(isVoid('circle'))
      assert(isVoid('IMG'))
      assert(isVoid('Img'))
      assert(!isVoid('g'))
      assert(!isVoid('div'))
    })

    it('isHtml()', () => {
      assert(isHtml('img'))
      assert(isHtml('div'))
      assert(isHtml('DIV'))
      assert(isHtml('Div'))
      assert(!isHtml('circle'))
      assert(!isHtml('bar'))
    })

    it('isSvg()', () => {
      assert(isSvg('g'))
      assert(isSvg('circle'))
      assert(isSvg('Circle'))
      assert(isSvg('radialGradient'))
      assert(isSvg('radialgradient'))
      assert(!isSvg('div'))
      assert(!isSvg('img'))
    })

    it('isCustom()', () => {
      assert(isCustom('user'))
      assert(isCustom('my-component'))
      assert(isCustom('my-Component'))
      assert(!isCustom('div'))
      assert(!isCustom('Div'))
      assert(!isCustom('circle'))
    })

    it('isBoolAttribute()', () => {
      assert(isBoolAttribute('selected'))
      assert(isBoolAttribute('autofocus'))
      assert(isBoolAttribute('loop'))
      assert(!isBoolAttribute('class'))
      assert(!isBoolAttribute('id'))
      assert(!isBoolAttribute('src'))
    })

    it('hasValueAttribute()', () => {
      assert(hasValueAttribute('input'))
      assert(hasValueAttribute('textarea'))
      assert(hasValueAttribute('select'))
      assert(!hasValueAttribute('div'))
      assert(!hasValueAttribute('ul'))
    })
  })
})