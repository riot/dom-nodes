const assert = require('assert')
const { voidSvg, voidHtml, html, svg, isVoid, isHtml, isSvg, isCustom} = require('./')

describe('riot-dom-nodes', function() {
  describe('Lists', () => {
    it('All the list are properly exported', () => {
      assert(Array.isArray(voidSvg), 'void svg tags are arrays')
      assert(Array.isArray(voidHtml), 'void html tags are arrays')
      assert(Array.isArray(html), 'html tags are arrays')
      assert(Array.isArray(svg), 'svg tags are arrays')
    })
  })

  describe('Helpers', () => {
    it('isVoid()', () => {
      assert(isVoid('img'))
      assert(isVoid('circle'))
      assert(!isVoid('g'))
      assert(!isVoid('div'))
    })

    it('isHtml()', () => {
      assert(isHtml('img'))
      assert(isHtml('div'))
      assert(!isHtml('circle'))
      assert(!isHtml('bar'))
    })

    it('isSvg()', () => {
      assert(isSvg('g'))
      assert(isSvg('circle'))
      assert(!isSvg('div'))
      assert(!isSvg('img'))
    })

    it('isCustom()', () => {
      assert(isCustom('user'))
      assert(isCustom('my-component'))
      assert(!isCustom('div'))
      assert(!isCustom('circle'))
    })
  })
})