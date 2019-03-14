# hitokoto-get-zhhant

[中文Readme文檔](./readme_chinese.md) | [English Readme](./readme.md)

## What is this?
This is a nodejs module for getting hitokoto response in Tranditional Chinese (zh-hant) and via the official API ([https://v1.hitokoto.cn](https://v1.hitokoto.cn)).

## How does it work?
A simple async function handle API request and passes through [OpenCC](https://github.com/BYVoid/OpenCC) (performed in node).

## Before you start

This is SLOW. 

There are a bunch of hitokoto API clone on github and some of them provide offline database to make the whole process faster. However, this module uses the official API and then translate it via OpenCC, which is up to few times slower in compare to those with offline database. There are also offline database clone translated into Tranditional Chinese that don't need OpenCC or even nodejs. But as the hitokoto database is always updating and expanding, requesting from the official API can ensure you get all the new and fresh content. So please balance the pros and cons before starting or putting it in your project. 

## Install and Usage

### Installing to your project
```
npm install hitokoto-get-zhhant --save
```

### Using in your project
```
let hitokoto = require('hitokoto-get-zhhant').hitokoto;

hitokoto().then(...function here...)
```
For default, parameter for hitokoto() is undefined. You can add category code to specify a category of hitokoto you want to request. Details are further below.

You can use this to see if everything is working fine. If yes, the requested hitokoto will be returned in console in Transitional Chinese.
```
let hitokoto = require('hitokoto-get-zhhant').hitokoto;

hitokoto().then(function(text){
    console.log(text);
})
```

### Requesting hitokoto for a specific category
```
hitokoto("cat");
```
Use category code as stated on hitokoto API doc. (Available options are [a,b,c,d,e,f,g])
When undefined, it will request hitokoto from all category.
Please be aware that [hitokoto API](https://hitokoto.cn/api) (see section 4) only accept specifying ONE category, so putting more then one cat will result in 404: Not found under specific category (as such category does not exist).

From v1.2.0, the script will tell if 'cat' is vaild (in which, if it is a,b,c,d,e,f,g), which will not call the API for request to shorten time and eliminate expected 404 from invaild 'cat' parameter.

### Things to be fixed

- Performance enhancement (there may still be room for improvement but maybe further optimization will wait until v2 API release)

### License
I don't know much about licenses so I went with the same as OpenCC. That's it. 