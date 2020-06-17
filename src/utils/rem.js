function initRem () {
  let cale = window.screen.availWidth > 1024
  ? 2
  : window.screen.availWidth / 375
  window.document.documentElement.style.fontSize = `${16 * cale}px`
  if(window.screen.availWidth > 1024) {
    window.document.documentElement.style.width = 1024+'px'
  }else {
    window.document.documentElement.style.width = window.screen.availWidth +'px'
  }
}
// 初始化
initRem()
// 窗口改变
window.addEventListener('resize', function () {
  initRem()
})
