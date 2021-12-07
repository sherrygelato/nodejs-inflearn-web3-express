module.exports = function authStatusUI(request, response) {
  var authStatusUI = '<a href="/login">login</a>';
  
  // 로그인 상태 체크
  var isOwner = authIsOwner(request, response)
  if (isOwner) {
    authStatusUI = '<a href="/logout_process">logout</a>';
  }
  return authStatusUI
}