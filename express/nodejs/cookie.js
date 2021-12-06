var http = require('http')
var cookie = require('cookie')

// 처음 Set-Cookie 했을 때 응답 헤더 => 주석처리 하니까 요청 헤더에 쿠키
http.createServer(function (request, response) {

    console.log(request.headers.cookie)

    var cookies = {}

    if (request.headers.cookie !== undefined) {
        cookies = cookie.parse(request.headers.cookie)
    }

    console.log(cookies)
    console.log(`yummy_cookie: ${cookies.yummy_cookie}`)
    console.log(`tasty_cookie: ${cookies.tasty_cookie}`)
    
    response.writeHead(200, {
        'Set-Cookie': [
            'yummy_cookie=choco',
            'tasty_cookie=strawberry',
            `Permanent=cookiess; Max-Age=${60 * 60 * 24 * 30}`, // 30일
            'Secure=Secure; Secure', // https 훨씬 더 안전하다 '쿠키=값; 중요한값'
            'HttpOnly=HttpOnly; HttpOnly' // httpOnly 자바스크립트 안전
        ]
        // 오래 지속되는 쿠키 만들기 
        // Expires (절대적) 쿠키 만료
        // or Max- Age(현시점부터)쿠키 얼마동안 살 것인가 (초단위)
    })

    response.end('Cookie!!')

}).listen(3000)