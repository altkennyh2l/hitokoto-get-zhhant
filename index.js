var OpenCC = require('opencc');
var opencc = new OpenCC('s2t.json');
const fetch = require('node-fetch');

async function hitokoto(){
    let response = await fetch('https://v1.hitokoto.cn/?encode=text'); // Change for conditional API call
    let htkt = await response.text(); 
    let hitokoto = opencc.convertSync(htkt);
    return hitokoto;
}

exports.hitokoto = hitokoto;