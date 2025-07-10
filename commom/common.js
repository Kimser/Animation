const advertisement = document.getElementById("advertisement");
const navigation = document.getElementById("navigation");
window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  // 广告位隐藏效果和导航菜单吸顶 - 滚轮一滚动就触发
  if (scrollTop > 0) {
    advertisement.classList.add("hidden");
    navigation.classList.add("ad-hidden");
  } else {
    advertisement.classList.remove("hidden");
    navigation.classList.remove("ad-hidden");
  }

  // lastScrollTop = scrollTop;
});