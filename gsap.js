//GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin)

//宣告
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".view", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    start: 'top 600px', // 決定動畫開始點的位置
    end: 'top 0', // 決定動畫結束點的位置
    scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  },
})

//物件動畫設定
tl1.to('.ghost', {
  right: '0',
  duration: 10,
}).to('.chi', {
  left: '0',
  duration: 10,
}).to('.dialog-1', {
  left: '0',
  duration: 10,
}).to('.dialog-2', {
  right: '0',
  duration: 10,
}).to('.option-block-1', {
  bottom: '0',
  duration: 10,
}).to('.dialog-1', {
  left: '-1000px',
  duration: 10, 
}).to('.ghost', {
  right: '-2000px',
  duration: 10,
}).to('.contest-text', {
  left: '300px',
  duration: 10,
}).to('.option-block-1', {
  bottom: '-500px',
  duration: 10,
}).to('.option-block-2', {
  bottom: '0',
  duration: 10,
})


