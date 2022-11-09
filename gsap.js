//GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin)
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".view", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    start: 'top 640px', // 決定動畫開始點的位置
    end: 'top 540px', // 決定動畫結束點的位置
    scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  },
})

tl.to('.dialog-1', {
  // top: '50px', // 距外層容器top 0px
  left: '0', // 距外層容器left 50%
  // xPercent: '0', // translate(-50%, 0)
  duration: 10, // 動畫持續時間之比例
  // position: 'absolute', // position: 'absolute'，絕對位置才能使用left, right...等
}).to('.dialog-2', {
  right: '0',
  // yPercent: '-100', // translate(0, -100%)
  duration: 10,
  // position: 'absolute',
})