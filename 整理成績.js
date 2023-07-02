// 導入 fs 模塊
const { log } = require('console');
const fs = require('fs')

// 調用 fs.readFile() 讀取文件的內容
fs.readFile('./files/成績.txt','utf8',function(err, dataStr){
    if(err) {
        return console.log('讀取失敗' + err.message);
    }
    // console.log('讀取成功' + dataStr);
    // 先把成績的數據 按照空格進行分割
    const arrOld = dataStr.split(' ')
    // 循環分割後的數組 對每一條數據 進行字符串的替換操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=',': '))
    })
    // 把數組中的每一項 進行合併 得到一個新的字符串
    const newStr = arrNew.join('\r\n')
    console.log(newStr);

    // 調用 fs.writeFile()方法 把處理完的成績 寫入到新文件中
    fs.writeFile('./files/成績-ok.txt',newStr,function(err){
        if(err) {
            return console.log('寫入文件失敗' + err.message);
        }
        console.log('成績寫入成功');
    })
})