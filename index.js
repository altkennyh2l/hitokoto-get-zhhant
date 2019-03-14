var OpenCC = require('opencc');
var opencc = new OpenCC('s2t.json');
const fetch = require('node-fetch');

async function hitokoto(cat){
    if (cat === undefined){
        let response = await fetch('https://v1.hitokoto.cn/?encode=text');
        let htkt = await response.text(); 
        let hitokoto = opencc.convertSync(htkt);
        return hitokoto;
    } else {
        if (['a','b','c','d','e','f','g'].includes(cat)){
        let callurl = 'https://v1.hitokoto.cn/?encode=text&c=' + cat;
        let response = await fetch(callurl);
        let htkt = await response.text(); 
        let hitokoto = opencc.convertSync(htkt);
        return hitokoto;
        } else {
            console.log("The provided 'cat' is invalid. Please refer to hitokoto API doc.");
        }
    }
}

exports.hitokoto = hitokoto;