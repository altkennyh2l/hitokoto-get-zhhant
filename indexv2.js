var OpenCC = require('opencc');
var opencc = new OpenCC('s2t.json');
const fetch = require('node-fetch');

async function fetchhitokoto(cat){
    let response = await fetch('https://v1.hitokoto.cn/');
    let data = await response.json();
    let htktobj = JSON.parse(data);
    return data;
}

hitokoto()
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message))

exports.hitokoto = hitokoto;