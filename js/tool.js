document.querySelectorAll('.sidebar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // 阻止链接的默认行为
    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      // 获取导航栏的高度
      const headerHeight = document.querySelector('header').offsetHeight;

      // 计算目标元素的位置，减去导航栏的高度
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 60;

      // 滚动到目标元素
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // 平滑滚动
      });
    }
  });
});