/* global describe, test, expect */
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

describe('Test resposive homepage', function () {
  test('check title homepage', function () {
    nightmare
    .goto('http://koomsquare.com/index.php/?___store=english&___from_store=thai')
    .wait(3000)
    .evaluate(function () {
      return document.getElementsByTagName('h1')[0].innerText
    })
    .end()
    .then(function (result) {
      expect(result).toBe(`“ The Right Place for you !!! ”`)
    })
  })
})
