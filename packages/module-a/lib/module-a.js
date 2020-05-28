'use strict';

module.exports = moduleA;


const moduleB = require('module-b');
const moduleC = require('module-c');
var moduleA = function() {
    console.log(moduleB());
}

moduleA()
moduleC()

// 优秀