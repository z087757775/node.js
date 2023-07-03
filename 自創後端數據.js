const http = require('http')

// createServer 建立一個網路的伺服器(伺服器請求(request)或回應(response))
const server = http.createServer((request, response ) => {
    // response.end('後端發來的訊息') 從後端發送訊息給前端的方法
    response.end('Hello From Node.js Server2')
})

// 自創端口 (0~1023號是留給知名端口的範圍 1024號以上可以自創)
const port = 3000;
const ip = '192.168.0.103'
// 前端聽取後端發給前端訊息方的方法 listen(1.端口 2.IP地址 3.回調函數)有三個參數
server.listen(port,ip, () => {
    // 終端機輸入node .\自創後端數據.js 會給一串網址 複製在瀏覽器就會出現後端發來的訊息
    console.log(`Server is running at http://${ip}:${port}`);
})