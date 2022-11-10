//GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin)

//宣告
const srollTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    start: 'top 50%', // 決定動畫開始點的位置
    end: 'top 0', // 決定動畫結束點的位置
    scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
    pin: true,
  },
})

//動畫設定

//首次畫面進入
srollTL.to(".chi", { xPercent: "-100", yPercent: "0",  });
srollTL.to(".ghost", { xPercent: "50", yPercent: "-100" }, "<");
srollTL.to(".dialog-1", { xPercent: "110", yPercent: "0" }, "<");
srollTL.to(".dialog-2", { xPercent: "-160", yPercent: "0" }, "<");
srollTL.to(".option-block-1", { xPercent: "115.9", yPercent: "0" }, "<");



//畫面進入完成後，點擊選項出現 => 等不及了 => 隱藏上方元素 => 出現活動說明
//點擊 等不及了 => 出現week1,week2,week3(swiper) =>
//點擊 week => 隱藏
// 往下滑動 出現scrollTL2 (寶藏箱移動)打字機效果
//進入無特效區塊
//區區修煉？下面金塊流動效果






//第一次畫面切換
const trigger = document.querySelector(".trigger")
ScrollTrigger.create({
  //以box2作為觸發時機
  trigger: trigger,
  markers: true,
  start: 'top 0',
  //向下滾動進入start點時觸發callback
  // onEnter: function () {
  //   animated(box2);
  // },

  //向下滾動超過end點時觸發callback
  onLeave: function () {
    const timeline = gsap.timeline()
    timeline.to('.ghost', {x: 100, duration:1, opacity:1})
    .to('.dialog-1', {opacity:1}, "<")
    console.log('123');
  }(), 

  //向上滾動超過end點時觸發（回滾時觸發）callback
  // onEnterBack: function () {
  //   animated(box2);
  // },

});




//物件動畫設定
// tl1.to('.ghost', {
//   top: '0',
//   right: '0',
//   duration: 1,
// })
// .to('.chi', {
//   bottom:'0',
//   left: '0',
//   duration: 1,
// }).to('.dialog-1', {
//   left: '0',
//   duration: 1,
// }).to('.option-block-1', {
//   bottom: '0',
//   duration: 1,
// }).to('.dialog-2', {
//   right: '0',
//   duration: 1,
// }).to('.dialog-1', {
//   left: '-980px',
//   duration: 1, 
// }).to('.ghost', {
//   right: '-2000px',
//   duration: 1,
// }).to('.contest-text', {
//   left: '300px',
//   duration: 1,
// }).to('.option-block-1', {
//   bottom: '-500px',
//   duration: 1,
// }).to('.option-block-2', {
//   bottom: '0',
//   duration: 1,
// }).to('.fight', {
//   top: '37%',
//   bottom: '0',
//   duration: 1,
// }).to('.option-block-2', {
//   bottom:'-500px',
//   duration: 1,
// }).to('.contest-text', {
//   left: '-1280px',
//   duration: 1,
// }).to('.contest-text', {
//   left: '-1280px',
//   duration: 1,
// })
// .to('.week-img', {
//   left: '50%',
//   right:'0',
//   top: '350px',
//   duration: 1,
// }).to('.week1', {
//   top: '-1000px',
//   duration: 1,
// }).to('.week2', {
//   top: '-1000px',
//   duration: 1,
// }).to('.week3', {
//   top: '-1000px',
//   duration: 1,
// })


