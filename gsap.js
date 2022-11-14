//GSAP 宣告
gsap.registerPlugin(ScrollTrigger, TextPlugin,)

//以下為第一個對戰畫面
const srollTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: 'top 80%', 
    end: 'top 20%', 
    scrub: true,
    pin: true,
  },
})

//移動距離
const viewHeight = $('.view')[0].offsetHeight

//動畫設定

//首次畫面進入
srollTL.to(".chi", { xPercent: "-80", yPercent: "0",  });
srollTL.to(".ghost", { xPercent: "30", yPercent: "-40" }, "<");
srollTL.to(".dialog-1", { xPercent: "110", yPercent: "0" }, "<");
srollTL.to(".dialog-2", { xPercent: "-160", yPercent: "0" }, "<");
srollTL.to(".option-block-1", { xPercent: "100", yPercent: "0" }, "<");

//選項切換
function clickOption() {
  const $option = $('.answer li')
  $option.on('click', function () {
    const timeline1 = gsap.timeline()
    timeline1.to('.ghost', {xPercent: 130, duration:1})
    .to('.dialog-1', {xPercent: -130, duration:1},"<")
    timeline1.to('.contest-text', {xPercent: 130, duration:1})
    if ($option.hasClass('cant-wait')) {
      setTimeout(() => {
        $option.hide()
        $('.cant-wait').addClass('show')
        $('.cant-wait').addClass('active')
      }, 800);
    } 
  })
}

//選項切換執行
clickOption()

//第一次畫面切換
const trigger = document.querySelector(".question")
ScrollTrigger.create({
  
  trigger: trigger,

  //向下滾動超過end點時觸發callback
  onLeave: function () {
    gsap.to(".challenger", {
      text: "挑戰者（CLICK）",
      duration: 1,
      scrollTrigger: {
				trigger: ".question",
        toggleActions: "play pause resume reset",
      },
    });
    gsap.to(".do-what", {
      text: "要做什麼呢",
      duration: 2,
      delay: 1,
      scrollTrigger: {
				trigger: ".question",
        toggleActions: "play pause resume reset",
      },
    });
    gsap.fromTo(
      ".q-mark",
      0,
      {
        visibility: "hidden",
        opacity: "0",
      },
      {
        scrollTrigger: {
          trigger: ".question",
          toggleActions: "play pause resume reset", //見備註
        },
        visibility: "visible",
        delay: 3,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.6,
        opacity: "1",
      }
    );
  }(),
});

//點擊 等不及了
$('.cant-wait').on('click', function() {

  const timeline2 = gsap.timeline()
    timeline2.to('.option-block-1', {yPercent: 100, duration:1})
    timeline2.to('.chi', {yPercent: 100, duration:1},"<")
    timeline2.to('.dialog-2', {y: 250, duration:1},"<")
    timeline2.to('.contest-text', {xPercent: -130, duration:1},)
    timeline2.to('.week-img', { xPercent:-160,y: 800, duration:1},)
})

//點擊圖片上滑，出現地圖

$('.week1').on('click', function() {
  const timeline3 = gsap.timeline()
    timeline3.to('.week1', {yPercent: -300, duration:1})
})

$('.week2').on('click', function() {
  const timeline4 = gsap.timeline()
    timeline4.to('.week2', {yPercent: -300, duration:1})
})

$('.week3').on('click', function() {
  
  gsap.to(".fail", {
    text: "每個挑戰主題提供一週開發時間，未在隔週一中午12:00前登陸作品者，<br \>當週即為挑戰失敗！(請點擊寶箱)", //text屬性將自動為DOM元素嵌入我們所輸入的文字
    duration: 10,
    repeat: -1,
  });

  const timeline5 = gsap.timeline()
  timeline5.to('.week3', {yPercent: -300, duration:1})
  .to('.dialog-2', {xPercent: 200, duration:1},"<")
  .to('.option-block-2', {left: '0', duration:1, xPercent: 0,},"<")
})

//以下為第二個畫面（區區修煉...）
$('.box-img').on('click', function() {
  const timeline6 = gsap.timeline()
    timeline6.to('.box-img', {scale: 1.1, duration:1, repeat: -1, repeatDelay: .3,})
    .to('.box-img', {x:0, y: 0, duration:.5})
    .to('.box-img', {x:-220, y: 305, duration:1})
    .to('.box-img', {x:-445, y: 110, duration:1})
    .to('.box-img', {x:-630, y: 350, duration:1})
    .to('.box-img', {x:-770, y: 385, duration:1})
    .to('.box-img', {scale: 1.1, duration:1, repeat: -1, repeatDelay: .3,})
    .to(window, {duration: 2, scrollTo: viewHeight * 2}, ">");
})
const trigger2 = document.querySelector(".view-2")
ScrollTrigger.create({

  trigger: trigger2,
  end: 'top 5%',
  //向下滾動超過end點時觸發callback
  onLeave: function () {
    gsap.to(".title-2", {
      text: "區區修煉已經無法滿足了嗎？還有比賽等著你！",
      duration: 5,
      scrollTrigger: {
				trigger: ".title-2",
        toggleActions: "play pause resume reset",
      },
    });
    gsap.to(".gold", {
      xPercent: "-50", 
      ease: "none",
      duration: 10,
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
				trigger: ".title-2",
        toggleActions: "play pause resume reset",
      },
    });
  }(),
});

Observer.create({
  target: '.view-2',
  type: "wheel,touch,scroll",

  onDown: () =>
  gsap.to(window,{duration: 2, scrollTo: viewHeight * 3}),
  
});

//footer
//下滑出現大神
//上滑出現贊助商
Observer.create({
  target: 'footer',
  type: "wheel,touch,scroll",
  
  onUp: () =>
  gsap.timeline().to('.photo-block', {opacity: 1, yPercent:0,duration:1})
  .to('.sponsor', {opacity: 0, yPercent: 100, duration:1, }, "<")
  .to('.left-wrap', {xPercent: -110, duration:1}, "<")
  .to('.right-wrap', {xPercent: 110, duration:1}, "<")
  .to('.share', {yPercent: 0, opacity: 1,duration:1}, "<"),
  

  onDown: () => 
  gsap.timeline().to('.sponsor', {opacity: 1, yPercent: -100,duration:1})
  .to('.photo-block', {opacity: 0, yPercent:-100, duration:1}, "<")
  .to('.left-wrap', {xPercent: 0, opacity: 1,duration:1}, "<")
  .to('.right-wrap', {xPercent: 0, opacity: 1,duration:1}, "<")
  .to('.share', {yPercent: 100, opacity: 0,duration:1}, "<"),
});
