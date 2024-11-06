//페이지네이션 호출
const pagination_btn_01 = document.querySelector('.member_Pagination01 img')
const pagination_btn_02 = document.querySelector('.member_Pagination02 img')
const pagination_btn_03 = document.querySelector('.member_Pagination03 img')
const pagination_btn_04 = document.querySelector('.member_Pagination04 img')
const pagination_btn_05 = document.querySelector('.member_Pagination05 img')

//페이지네이션 민지 버튼 클릭 시
pagination_btn_01.addEventListener('click', function () {
  pagination_btn_01.src = 'assets/images/member/photo-page-1.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'
})

//페이지네이션 민지 버튼 클릭 시
pagination_btn_02.addEventListener('click', function () {
  pagination_btn_01.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-2.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'
})
pagination_btn_03.addEventListener('click', function () {
  pagination_btn_01.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-3.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'
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
