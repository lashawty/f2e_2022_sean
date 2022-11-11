//GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin)

//RULES
//畫面進入完成後，點擊選項出現 => 等不及了 => 隱藏上方元素 => 出現活動說明
//點擊 等不及了 => 出現week1,week2,week3(swiper) =>
//點擊 week => 隱藏
// 往下滑動 出現scrollTL2 (寶藏箱移動)打字機效果
//進入無特效區塊
//區區修煉？下面金塊流動效果


//宣告

const srollTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: 'top 80%', 
    end: 'top 20%', 
    scrub: true,
    pin: true,
  },
})

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
  markers: true,
  // start: 'top 0',

  //向下滾動超過end點時觸發callback
  onLeave: function () {
    gsap.to(".challenger", {
      text: "挑戰者", //text屬性將自動為DOM元素嵌入我們所輸入的文字
      duration: 1,
      scrollTrigger: {
				trigger: ".question",
        toggleActions: "play pause resume reset", //見備註
      },
    });
    gsap.to(".do-what", {
      text: "要做什麼呢", //text屬性將自動為DOM元素嵌入我們所輸入的文字
      duration: 2,
      delay: 1,
      scrollTrigger: {
				trigger: ".question",
        toggleActions: "play pause resume reset", //見備註
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
        yoyo: true, // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
        repeatDelay: 0.6, // 下一次repeat的delay時間
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

//點擊視差滾動

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
  // .to('.chi', {yPercent: -150, duration:1},"<")
  .to('.dialog-2', {xPercent: 200, duration:1},"<")
  .to('.option-block-2', {left: '0', duration:1, xPercent: 0,},"<")
})

$('.box-img').on('click', function() {
  const timeline6 = gsap.timeline()
    timeline6.to('.box-img', {x:0, y: 0, duration:.5})
    .to('.box-img', {x:-220, y: 305, duration:1})
    .to('.box-img', {x:-445, y: 110, duration:1})
    .to('.box-img', {x:-630, y: 350, duration:1})
    .to('.box-img', {x:-770, y: 385, duration:1})
    .to('.box-img', {scale: 1.1, duration:1, repeat: -1, repeatDelay: .3,})
})