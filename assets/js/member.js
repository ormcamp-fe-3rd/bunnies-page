//멤버별 페이지 호출
const minji_images = document.querySelector('.team-photo-minji-page')
const hanni_images = document.querySelector('.team-photo-hanni-page')
const dani_images = document.querySelector('.team-photo-dani-page')
const haerin_images = document.querySelector('.team-photo-haerin-page')
const hyein_images = document.querySelector('.team-photo-hyein-page')

//페이지네이션 호출
const pagination_btn_01 = document.querySelector('.member-pagination01 img')
const pagination_btn_02 = document.querySelector('.member-pagination02 img')
const pagination_btn_03 = document.querySelector('.member-pagination03 img')
const pagination_btn_04 = document.querySelector('.member-pagination04 img')
const pagination_btn_05 = document.querySelector('.member-pagination05 img')

//페이지네이션 민지 버튼 클릭 시
pagination_btn_01.addEventListener('click', function () {
  pagination_btn_01.src = 'assets/images/member/photo-page-1.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'

  minji_images.style.display = 'block'
  hanni_images.style.display = 'none'
  dani_images.style.display = 'none'
  haerin_images.style.display = 'none'
  hyein_images.style.display = 'none'
})

//페이지네이션 하니 버튼 클릭 시
pagination_btn_02.addEventListener('click', function () {
  pagination_btn_01.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-2.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'

  minji_images.style.display = 'none'
  hanni_images.style.display = 'block'
  dani_images.style.display = 'none'
  haerin_images.style.display = 'none'
  hyein_images.style.display = 'none'
})

pagination_btn_03.addEventListener('click', function () {
  pagination_btn_01.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-3.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'
  minji_images.style.display = 'none'
  hanni_images.style.display = 'none'
  dani_images.style.display = 'block'
  haerin_images.style.display = 'none'
  hyein_images.style.display = 'none'
})
//페이지네이션 해린 버튼 클릭 시
pagination_btn_04.addEventListener('click', function () {
  pagination_btn_01.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-3.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'
  minji_images.style.display = 'none'
  hanni_images.style.display = 'none'
  dani_images.style.display = 'none'
  haerin_images.style.display = 'block'
  hyein_images.style.display = 'none'
})
//페이지네이션 혜인 버튼 클릭 시
pagination_btn_05.addEventListener('click', function () {
  pagination_btn_01.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-3.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'
  minji_images.style.display = 'none'
  hanni_images.style.display = 'none'
  dani_images.style.display = 'none'
  haerin_images.style.display = 'none'
  hyein_images.style.display = 'block'
})
pagination_btn_04.addEventListener('click', function () {
  pagination_btn_01.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-4.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'
})
pagination_btn_05.addEventListener('click', function () {
  pagination_btn_01.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-5.png'
})
