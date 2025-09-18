
// swiper customisation script
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// dynamic popup data for slider
const popupContentData = {
  "s-1": {
    head: "Content 1",
    para: "Lorem ipsum  Ducimus dicta est fugit earum neque  cupiditate ad commodi? Sint illo at iusto architecto dolorem et animi natus, quisquam quas doloribus saepe rerum totam consectetur obcaecati,   quisquam quas doloribus saepe rerum totam consectetur obcaecati, Lorem ipsum  Ducimus dicta est fugit earum neque  cupiditate ad commodi?",
    list: "<li>Hello</li> <li>Hello world</li> <li>Hello everyone</li> <li>Let's start</li>",
  },

  "s-2": {
    head: "Content 2",
    para: "Lorem ipsum  Ducimus dicta est fugit earum neque  cupiditate ad commodi? Sint illo at iusto architecto dolorem et animi natus, quisquam quas doloribus saepe rerum totam consectetur obcaecati,   quisquam quas doloribus saepe rerum totam consectetur obcaecati, Lorem ipsum  Ducimus dicta est fugit earum neque  cupiditate ad commodi?",
    list: "<li>Hello</li> <li>Hello world</li> <li>Hello everyone</li> <li>Let's start</li>",
  },

  "s-3": {
    head: "Content 3",
    para: "Lorem ipsum  Ducimus dicta est fugit earum neque  cupiditate ad commodi? Sint illo at iusto architecto dolorem et animi natus, quisquam quas doloribus saepe rerum totam consectetur obcaecati,   quisquam quas doloribus saepe rerum totam consectetur obcaecati, Lorem ipsum  Ducimus dicta est fugit earum neque  cupiditate ad commodi?",
    list: "<li>Hello</li> <li>Hello world</li> <li>Hello everyone</li> <li>Let's start</li>",
  },
  "s-4": {
    head: "Content 4",
    para: "Lorem ipsum  Ducimus dicta est fugit earum neque  cupiditate ad commodi? Sint illo at iusto architecto dolorem et animi natus, quisquam quas doloribus saepe rerum totam consectetur obcaecati,   quisquam quas doloribus saepe rerum totam consectetur obcaecati, Lorem ipsum  Ducimus dicta est fugit earum neque  cupiditate ad commodi?",
    list: "<li>Hello</li> <li>Hello world</li> <li>Hello everyone</li> <li>Let's start</li>",
  },
  "s-5": {
    head: "Content 5",
    para: "Lorem ipsum  Ducimus dicta est fugit earum neque  cupiditate ad commodi? Sint illo at iusto architecto dolorem et animi natus, quisquam quas doloribus saepe rerum totam consectetur obcaecati,   quisquam quas doloribus saepe rerum totam consectetur obcaecati, Lorem ipsum  Ducimus dicta est fugit earum neque  cupiditate ad commodi?",
    list: "<li>Hello</li> <li>Hello world</li> <li>Hello everyone</li> <li>Let's start</li>",
  },
};

// pop  functions
const Cover = document.getElementById("popupCover");
Cover.addEventListener("click", (e) => {
  if (e.target === Cover) {
    closePopup();
  }
});
//open popup funtion
function openPopup(slideId) {
  console.log("button clicked", slideId);

  const data = popupContentData[slideId];
  if (!data) {
    return;
  }

  const popHead = document.getElementById("popupHead");
  const popPara = document.getElementById("popupPara");
  const popList = document.getElementById("popupList");
  const Cover = document.getElementById("popupCover");
  popHead.innerHTML = data.head;
  popPara.innerHTML = data.para;
  popList.innerHTML = data.list;

  Cover.classList.add("show");
  //
}

//close popup funtion
function closePopup() {
  Cover.classList.remove("show");
}

// stop play swiper script

const stopSwiperBtn = document.getElementById("pauseSwiper");
let isPlaying = true;

stopSwiperBtn.addEventListener("click", () => {
  if (isPlaying) {
    swiper.autoplay.stop();
    stopSwiperBtn.classList.add("off");
    isPlaying = false;
  } else {
    swiper.autoplay.start();
    stopSwiperBtn.classList.remove("off");
    isPlaying = true;
  }
});

// show more content script

function revealSection(button) {
  const showMoreContent = button.nextElementSibling;
  const arroDown = button.querySelector(".down-arrow");

  showMoreContent.classList.toggle("show");
  arroDown.classList.toggle("rotate");
}

//progress bar

window.addEventListener("scroll", function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var scrolledLength =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / scrolledLength) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
});
