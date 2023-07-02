// 導入 fs 模塊 ，操作文件
const fs = require('fs')

// 調用fs.readFile() 方法讀取文件
// 參數1: 讀取文件的存入路徑
// 參數2:讀取文件時候採用的編碼格式 ，一般默認為 utf8
// 參數3:回掉函數，拿到讀取失敗和成功的結果 err dataStr
fs.readFile('./files/1.txt','utf-8',function(err, dataStr){
    if(err) {
        return console.log('讀取文件失敗' + err.message);
    }
    console.log('讀取文件成功' + dataStr);
})