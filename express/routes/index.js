var express = require('express');
var router = express.Router();

var template = require('../lib/template.js')

// 결국 뒤에 함수가 미들웨어였다.
router.get('/', (request, response) => {
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `<h2>${title}</h2>${description}
    <img src="/images/star.jpg" style="width:300px; display:block; margin-top:10px;">
    `,
    `<a href="/topic/create">create</a>`
  );
  response.send(html);

  /* 글 목록 표현
  fs.readdir('./data', function (error, filelist) { 
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(filelist);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}`,
      `<a href="/create">create</a>`
    );
    response.send(html);
  });
  */
})

router.get('/login', (request, response) =>{
  var title = 'Login';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `
    <form action="login_process" method="post">
      <p><input type="text" name="email" placeholder="email"></p>
      <p><input type="password" name="password" placeholder="password"></p>
      <p><input type="submit"></p>
    </form>`,
    `<a href="/topic/create">create</a>`
  );
  response.send(html);
})

module.exports = router;