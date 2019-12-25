// 判断是否为IE浏览器
var userAgent = navigator.userAgent;
var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
if (isIE) {
  var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
  reIE.test(userAgent);
  var fIEVersion = parseFloat(RegExp["$1"]);
  // 如果IE版本低于8
  if (fIEVersion < 10) {
    var alertBox = document.createElement('div')
    alertBox.style.cssText = 'position: fixed;top: -40px;transition: top 1s;background-color: red;width: 100%;z-index: 9;text-align: center;line-height: 40px;color: white;font-size: 16px;'
    alertBox.innerHTML = '您的浏览器版本过低可能影响您正常浏览页面，建议您升级浏览器版本!'
    document.body.insertBefore(alertBox, document.body.lastChild)
    setTimeout(function () {
      alertBox.style.top = '0px'
    }, 0)
    setTimeout(function () {
      alertBox.style.top = '-40px'
    }, 6000)
    // alert('您的浏览器版本过低可能影响您正常浏览页面，建议您升级浏览器版本!')
  }
}