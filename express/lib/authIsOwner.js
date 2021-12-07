module.exports = function authIsOwner(request, response) {
  var isOwner = false;
  var cookies = {};
  if (request.headers.cookie) { // 쿠키값이 있는 경우에만 실행
    cookies = cookie.parse(request.headers.cookie)
  }
  console.log(cookies)
  if (cookies.email === 'test@example.com' && cookies.password === '1234321!') {
    isOwner = true;
  }
  console.log(`main function: ${isOwner}`)

  return isOwner;
}