let searchText = document.getElementById('searchText')
let searctButton = document.getElementById('searchButton')
let searchUrl = "https://soupian.xyz/s?key="

searctButton.onclick = function () {
  if (searchText.value === "") {
      alert('请输入内容！')
  } else {
      window.open(searchUrl + searchText.value)
  }
}
