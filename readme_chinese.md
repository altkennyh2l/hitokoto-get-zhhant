# hitokoto-get-zhhant (Chinese Readme)

[中文Readme文檔](./readme_chinese.md) | [English Readme](./readme.md)

## 這是什麼？

這是一個向一言官方API([https://v1.hitokoto.cn](https://v1.hitokoto.cn))請求內容並翻譯為繁體中文的nodejs模組。

## 運作模式

以async向一言官方API請求內容並透過[OpenCC](https://github.com/BYVoid/OpenCC)(nodejs模式) 翻譯為繁體中文。

## 在你開始之前

這是一個很慢的方法。

外面有不同的一言API調用模組，當中更有些備有離線資料庫（亦有繁中離線資料庫的例子）。然而，本模組直接向一言官方API請求內容，再進行翻譯，反應速度亦因而有所增長，甚至比離線模組慢數倍。但透過沿用官方API，本模組可以獲取不斷更新的一言內容。在你開始使用之前，請注意本模組的處理速度或不如其他方式。

## 安裝與使用

### 導入
```
npm install hitokoto-get-zhhant --save
```

```
let hitokoto = require('hitokoto-get-zhhant').hitokoto;

hitokoto().then(...function here...)
```

預設不指定一言分類。你可以透過修改cat參數以指定所需一言分類。

你可以利用以下代碼測試導入情況。若導入成功，所請求的一言會於console中以正體中文顯示。
```
let hitokoto = require('hitokoto-get-zhhant').hitokoto;

hitokoto().then(function(text){
    console.log(text);
})
```

### 指定一言分類
```
hitokoto("cat");
```

參照[官方API指引](https://hitokoto.cn/api)，你只可以指定一個分類，代號為 [a,b,c,d,e,f,g]。

由1.2.0，模組會測試參數是否有效，並當遇上無效參數時中止請求，以避免浪費時間回收404回饋。

## 會改善的地方
- 加快模組反應時間 或於v2 API公開後才處理

## 條款
我不清楚公開條款的細節，故沿用OpenCC的Apache 2.0條款。