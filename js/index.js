let searchText = document.getElementById('searchText')
let searctButton = document.getElementById('searchButton')
let searchUrl = "https://zhuiyingmao5.com/vodsearch/-------------.html?wd="
// let searchUrl = "https://soupian.xyz/s?key="
// https://zhuiyingmao5.com/vodsearch/-------------.html?wd=

searctButton.onclick = search

// 搜索
function search() {
  if (searchText.value === "") {
    alert('请输入内容！')
} else {
    window.open(searchUrl + searchText.value)
}
}

/*监听键盘点击事件*/
searchText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      search()
  }
})
