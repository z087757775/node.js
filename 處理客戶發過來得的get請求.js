const http = require('http')
const fs = require('fs')
// 自創端口 (0~1023號是留給知名端口的範圍 1024號以上可以自創)
const port = 3000;
const ip = '192.168.0.103'

// sendResponse讀取了url讀者的請求 來反饋回應給客戶 有三個參數1.文件名 2.返回給用戶的狀態碼 3.從後端發送訊息給前端的方法(response.end)
const sendResponse = (filename, statusCode, response) => {
    fs.readFile(__dirname+`/html/${filename}`, (error, data) => {
        if(error) {
            response.statusCode = 500
            // 回應客戶端標投欄位，回應方式為純文本方式
            response.setHeader('Content-Type', 'text/plain')
            response.end('Sorry internal error')
        }else{
            response.statusCode = statusCode
            // 回應客戶端標投欄位，回應方式為純文本方式，回應回自己寫的html
            response.setHeader('Content-Type', 'text/html')
            response.end(data)
        }
    })
}

// createServer 建立一個網路的伺服器(伺服器請求(request)或回應(response))
const server = http.createServer((request, response ) => {
    // 變量伺服器的請求或取得其中一個的方法
    const method = request.method
    // 伺服器的url地址(包括用戶輸入的參數)
    let url = request.url
    // request.method()伺服器判斷是否是請求(GET) 
    if(method === 'GET') {
        // 使用JS的url來讀取用戶的網址 有兩個參數1.當前訪問的頁面 2.自己的的url(http+ip+端口)
        const requestUrl = new URL(url, `http://${ip}:${port}`);
        console.log(request);
        console.log(requestUrl);
        // 這代表伺服器的url地址(沒有包括用戶輸入的參數)
        url = requestUrl.pathname
        // 定義一個獲取用戶輸入的參數裡的值         lang是參數獲取lang他的值
        const lang = requestUrl.searchParams.get('lang')
        // 定義一個保存語言字符串
        let selector;
        // 來判斷參數值
        if(lang === null || lang ==='en') {
            selector = ''
        }else if(lang === 'zh'){
            selector = '-zh'
        }else {
            selector = ''
        }
        // /協槓是跟目錄的意思(index.html)
        if(url === "/index.html") {
            // 調用上方函數
            sendResponse(`index${selector}.html`,200,response);
        }else if(url === '/about.html'){
            sendResponse(`about${selector}.html`,200,response);
        }else{
            sendResponse(`404${selector}.html`,404,response);
        }

    }else{

    }
})

// 前端聽取後端發給前端訊息方的方法 listen(1.端口 2.IP地址 3.回調函數)有三個參數
server.listen(port,ip, () => {
    // 終端機輸入node .\自創後端數據.js 會給一串網址 複製在瀏覽器就會出現後端發來的訊息
    console.log(`Server is running at http://${ip}:${port}`);
})