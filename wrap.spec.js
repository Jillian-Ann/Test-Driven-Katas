const {expect} = require('chai');
const wrap = require('./wrap')

describe ('wrap', () => {
    it ('returns an empty string if empty string is provided', () => {
      expect(wrap('', 4)).to.equal('');
    });
    it ('has lines with less or equal characters than the number inputted', () => {
      expect(wrap('hi there', 4)).to.equal('hi \nthere')
    });
    it ('returns correctly if characters of last line are less than the number', () => {
      expect(wrap('hello grace hopper', 6)).to.equal('hello \ngrace \nhopper')
    })
    it ('returns word on first line if string is longer than number without spaces', () => {
      expect(wrap('gracehopper', 5)).to.equal('gracehopper')
    })
})
