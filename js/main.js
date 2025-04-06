
(() => {
  
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  let elem = document.querySelectorAll('figure.highlight')
  elem.forEach(function(item){
    let langName = item.getAttribute('class').split(' ')[1]
    if (langName === 'plain' || langName === undefined) langName = 'Code'
    item.setAttribute('data-lang',langName);
  })

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });

  // 获取元素
const toggleButton = document.getElementById('toggleButton');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');

// 切换显示和隐藏
toggleButton.addEventListener('click', function() {
  overlay.style.display = overlay.style.display === 'none' || overlay.style.display === '' ? 'flex' : 'none';
  toggleButton.style.display = 'none';  // 隐藏返回顶部按钮
});

// 点击关闭按钮
closeButton.addEventListener('click', function() {
  overlay.style.display = 'none';
  toggleButton.style.display = 'flex';
  
});

// 获取按钮
let toTopBtn = document.getElementById("toTopBtn");

// 当用户向下滚动20px时，显示按钮
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "flex";
  } else {
    toTopBtn.style.display = "none";
  }
};

toTopBtn.addEventListener('click',function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
})





})();

