var http = require('http')
http.createServer(function (request, response) {
    // 처음 Set-Cookie 했을 때 응답 헤더 => 주석처리 하니까 요청 헤더에 쿠키
    // response.writeHead(200, {
    //     'Set-Cookie': ['yummy_cookie=choco','tasty_cookie=strawberry']
    // })
    response.end('Cookie!!')
}).listen(3000)