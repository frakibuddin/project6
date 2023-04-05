const colorImg1 = document.querySelector(".hero-color-img1");
const colorImg2 = document.querySelector(".hero-color-img2");
const colorImg3 = document.querySelector(".hero-color-img3");
const colorImg4 = document.querySelector(".hero-color-img4");

const clickMe_btn = document.querySelector(".clickMe-btn");

const clickMe_back1 = document.querySelector(".clickMe-back1");
const clickMe_back2 = document.querySelector(".clickMe-back2");
const clickMe_back3 = document.querySelector(".clickMe-back3");
const clickMe_back4 = document.querySelector(".clickMe-back4");

const hero_left_btn = document.querySelector(".hero-left-btn");

const whiteImg1 = document.querySelector(".hero-white-img1");
const whiteImg2 = document.querySelector(".hero-white-img2");
const whiteImg3 = document.querySelector(".hero-white-img3");
const whiteImg4 = document.querySelector(".hero-white-img4");

colorImg1.onclick = function () {
  colorImg1.style.pointerEvents = "none";
  colorImg1.classList.toggle("active");
  whiteImg1.classList.toggle("active");
  clickMe_btn.classList.toggle("deactive");
  hero_left_btn.classList.toggle("deactive");
  clickMe_back1.classList.toggle("active");

  //deative hero white image
  whiteImg2.classList.toggle("deactive");
  whiteImg3.classList.toggle("deactive");
  whiteImg4.classList.toggle("deactive");

  //deative hero color image
  colorImg2.classList.toggle("deactive");
  colorImg3.classList.toggle("deactive");
  colorImg4.classList.toggle("deactive");
};

colorImg2.onclick = function () {
  colorImg2.classList.toggle("active");
  whiteImg2.classList.toggle("active");
  clickMe_btn.classList.toggle("deactive");
  hero_left_btn.classList.toggle("deactive");
  clickMe_back2.classList.toggle("active");

  //deative hero white image
  whiteImg1.classList.toggle("deactive");
  whiteImg3.classList.toggle("deactive");
  whiteImg4.classList.toggle("deactive");

  //deative hero color image
  colorImg1.classList.toggle("deactive");
  colorImg3.classList.toggle("deactive");
  colorImg4.classList.toggle("deactive");
};
colorImg3.onclick = function () {
  colorImg3.classList.toggle("active");
  whiteImg3.classList.toggle("active");
  clickMe_btn.classList.toggle("deactive");
  hero_left_btn.classList.toggle("deactive");
  clickMe_back3.classList.toggle("active");

  //deative hero white image
  whiteImg1.classList.toggle("deactive");
  whiteImg2.classList.toggle("deactive");
  whiteImg4.classList.toggle("deactive");

  //deative hero color image
  colorImg1.classList.toggle("deactive");
  colorImg2.classList.toggle("deactive");
  colorImg4.classList.toggle("deactive");
};
colorImg4.onclick = function () {
  colorImg4.classList.toggle("active");
  whiteImg4.classList.toggle("active");
  clickMe_btn.classList.toggle("deactive");
  hero_left_btn.classList.toggle("deactive");
  clickMe_back4.classList.toggle("active");

  //deative hero white image
  whiteImg1.classList.toggle("deactive");
  whiteImg2.classList.toggle("deactive");
  whiteImg3.classList.toggle("deactive");

  //deative hero color image
  colorImg1.classList.toggle("deactive");
  colorImg2.classList.toggle("deactive");
  colorImg3.classList.toggle("deactive");
};

//imahe mouser over
function imgMouseOver(tag, img) {
  tag.src = img;
}

function imgMouseLeave(tag, oldImg) {
  tag.src = oldImg;
}

const playBtn = document.querySelector(".play-btn");
const video = document.querySelector(".video video");
playBtn.onclick = function () {
  video.play();
  playBtn.remove();
};

//TAb function
const tab_btn1 = document.querySelector(".tab-btn1");
const tab_btn2 = document.querySelector(".tab-btn2");
const tab_btn3 = document.querySelector(".tab-btn3");
const tab_btn4 = document.querySelector(".tab-btn4");

const my_tab1 = document.querySelector(".my-tab1");
const my_tab2 = document.querySelector(".my-tab2");
const my_tab3 = document.querySelector(".my-tab3");
const my_tab4 = document.querySelector(".my-tab4");

//1
tab_btn1.onclick = function () {
  tab_btn1.classList.add("active");
  my_tab1.classList.add("active");

  my_tab2.classList.remove("active");
  my_tab3.classList.remove("active");

  tab_btn2.classList.remove("active");
  tab_btn3.classList.remove("active");
  tab_btn4.classList.remove("active");
};

//21
tab_btn2.onclick = function () {
  tab_btn2.classList.add("active");
  my_tab2.classList.add("active");

  my_tab1.classList.remove("active");
  my_tab3.classList.remove("active");
  my_tab4.classList.remove("active");

  tab_btn1.classList.remove("active");
  tab_btn3.classList.remove("active");
  tab_btn4.classList.remove("active");
};

//3
tab_btn3.onclick = function () {
  tab_btn3.classList.add("active");
  my_tab3.classList.add("active");

  my_tab1.classList.remove("active");
  my_tab2.classList.remove("active");
  my_tab4.classList.remove("active");

  tab_btn2.classList.remove("active");
  tab_btn1.classList.remove("active");
  tab_btn4.classList.remove("active");
};

//4
tab_btn4.onclick = function () {
  tab_btn4.classList.add("active");
  my_tab4.classList.add("active");

  my_tab1.classList.remove("active");
  my_tab2.classList.remove("active");
  my_tab3.classList.remove("active");

  tab_btn1.classList.remove("active");
  tab_btn2.classList.remove("active");
  tab_btn3.classList.remove("active");
};

//accroduam
const accordion_title = document.querySelectorAll(".accordion-title");
const accordion_content = document.querySelectorAll(".accordion-content");
const accordion_icon = document.querySelectorAll(".accordion-icon");

for (let i = 0; i < accordion_title.length; i++) {
  accordion_title[i].onclick = function () {
    accordion_content[i].classList.toggle("active");
    accordion_icon[i].classList.toggle("active");
  };
}

//image loading
const myTab1 = document.querySelector(".my-tab1 .tab-imgs");
let modiul1 = "";

for (let i = 1; i < 25; i++) {
  modiul1 += ` <div class="m-2">
                            <img src="img/homepage/rfcbn-fe-m1-${i}-w.jpg" alt="">
                        </div>`;
}
myTab1.innerHTML = modiul1;

// modiul21
const myTab2 = document.querySelector(".my-tab2 .tab-imgs");
let modiul2 = "";
for (let i = 1; i < 25; i++) {
  modiul2 += ` <div class="m-2">
                            <img src="img/homepage/rfcbn-fe-m2-${i}-w.jpg" alt="">
                        </div>`;
}

myTab2.innerHTML = modiul2;

// modiul2
const myTab3 = document.querySelector(".my-tab3 .tab-imgs");
let modiul3 = "";
for (let i = 1; i < 25; i++) {
  modiul3 += ` <div class="m-2">
                            <img src="img/homepage/rfcbn-fe-m3-${i}-w.jpg" alt="">
                        </div>`;
}
myTab3.innerHTML = modiul3;

// modiul3
const myTab4 = document.querySelector(".my-tab4 .tab-imgs");
const bookImag = [
  "rfcbn-fe-m4-cover-front-w.png",
  "rfcbn-fe-m4-cover-back-w.png",
];
let modiul4 = "";
for (let i = 0; i < bookImag.length; i++) {
  modiul4 += ` <div class="col-md-6 col-sm-6 col-xm-6 mb-4">
                            <img src="img/${bookImag[i]}" alt="">
                        </div>`;
}
myTab4.innerHTML = modiul4;

//tap to top btn
const tap_top_btn = document.querySelector(".tap-toTop");

window.onscroll = function () {
  let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;

  if (pos > posHight - 6000) {
    tap_top_btn.classList.add("active");
  } else {
    tap_top_btn.classList.remove("active");
  }
};

tap_top_btn.onclick = function () {
  document.documentElement.scrollTop = 0;
};
