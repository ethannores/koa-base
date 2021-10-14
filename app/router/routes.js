const {test} = require('../controller')
const {test:testValid} = require('../schema')

const routes = [
  {
    method:'get',
    path:'/a',
    valid:testValid.list,
    controller:test.list
  },
  {
    method:'get',
    path:'/b',
    controller:test.list1
  }
]

module.exports = routes