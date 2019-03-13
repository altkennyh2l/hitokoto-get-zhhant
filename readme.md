# hitokoto-get-zhhant

## What is this?
This is a nodejs module for getting hitokoto response in Tranditional Chinese (zh-hant) and via the official API ([https://v1.hitokoto.cn](https://v1.hitokoto.cn)).

## How does it work?
A simple async function handle API request and passes through [OpenCC](https://github.com/BYVoid/OpenCC) (performed in node).

## Install and Usage

### Installing to your project
`npm install hitokoto-get-zhhant --save`

### Using in your project
```
var hitokoto = require('./index.js').hitokoto;
hitokoto();
```

### Minor usage note
There are still options and variable that can be changed but I didn't make it in the current version. (Will update if I have time) For the time being, if you need to request the API with condition, you can make change directly in the module js file.

For conditional API call, change the URL as shown below.
`let response = await fetch('https://v1.hitokoto.cn/?encode=text');`
(index.js line 6)

### License
I don't know much about licenses so I went with the same as OpenCC. That's it. 