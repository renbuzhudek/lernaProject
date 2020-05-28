'use strict';

module.exports = moduleA;


const moduleB = require('module-b');

try {
    const moduleC = require('module-c');
  console.log(  moduleC())
} catch (error) {
    console.log(error);
    
}
var moduleA = function() {
    console.log(moduleB());
}

moduleA()


// 优秀