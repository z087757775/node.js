// 導入 fs 文件系統模塊
const fs = require('fs')

// 使用 fs.writeFile()方法，寫入文件的內容
// 參數1:表示文件存放路徑
// 參數2:表示要寫的內容
// 參數3:表示要寫的內容

fs.writeFile('C:\\Users\\user\\Desktop\\code\\files\\1.txt',function(err){
    // 如果文件寫入成功，則err的值等於null
    // 如果文件寫入失敗，則err的值等於一個 錯誤對象
    console.log(err);
})