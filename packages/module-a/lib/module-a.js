'use strict';

module.exports = moduleA;


const moduleB = require('module-b');

var moduleA = function() {
    console.log(moduleB());
}

moduleA()