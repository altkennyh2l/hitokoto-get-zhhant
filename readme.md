# hitokoto-get-zhhant

## What is this?
This is a nodejs module for getting hitokoto response in Tranditional Chinese (zh-hant) and via the official API ([https://v1.hitokoto.cn](https://v1.hitokoto.cn)).

## How does it work?
A simple async function handle API request and passes through [OpenCC](https://github.com/BYVoid/OpenCC) (performed in node).

## Install and Usage

### Installing to your project
```
npm install hitokoto-get-zhhant --save
```

### Using in your project
```
var hitokoto = require('hitokoto-get-zhhant').hitokoto;

hitokoto().then(...function here...)
```
For default, parameter for hitokoto() is undefined. You can add category code to specify a category of hitokoto you want to request. Details are further below.

You can use this to see if everything is working fine. If yes, the requested hitokoto will be returned in console in Transitional Chinese.
```
var hitokoto = require('hitokoto-get-zhhant').hitokoto;

hitokoto().then(function(text){
    console.log(text);
})
```

#### Requesting hitokoto for a specific category
```
hitokoto("cat");
```
Use category code as stated on hitokoto API doc. (Available options are [a,b,c,d,e,f,g])
When undefined, it will request hitokoto from all category.
Please be aware that [hitokoto API](https://hitokoto.cn/api) (see section 4) only accept specifying ONE category, so putting more then one cat will result in 404: Not found under specific category (as such category does not exist).

### Things to be fixed

- Add option to request hitokoto of a specific category. ([issue](https://github.com/altkennyh2l/hitokoto-get-zhhant/issues/1))(Done partially)
    - Extended [enhancement issue](https://github.com/altkennyh2l/hitokoto-get-zhhant/issues/2) :
    - Prevent specifying multiple category
    - console.log 404 return / other nonfatal error
- Performance enhancement (try making the thing faster, still don't know if it is possible)

### License
I don't know much about licenses so I went with the same as OpenCC. That's it. 