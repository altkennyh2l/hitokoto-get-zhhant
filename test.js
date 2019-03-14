// This file should be remove before pulling.
let hitokoto = require('./index.js').hitokoto;
hitokoto().then(function (text){
    console.log(text);
})