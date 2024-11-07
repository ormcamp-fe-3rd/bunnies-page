
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

//페이지 네이션 기능
//페이지네이션 민지 버튼 클릭 시
pagination_btn_01.addEventListener('click', function () {
  //클릭 버튼만 활성화 이미지로 변경
  //그외 버튼들은 비활성화 이미지로 변경
  pagination_btn_01.src = 'assets/images/member/photo-page-1.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'
  //민지 페이지 표시
  minji_images.style.display = 'block'
  //그외 페이지들은 화면에서 none처리
  hanni_images.style.display = 'none'
  dani_images.style.display = 'none'
  haerin_images.style.display = 'none'
  hyein_images.style.display = 'none'
})

//페이지네이션 하니 버튼 클릭 시
pagination_btn_02.addEventListener('click', function () {
  //클릭 버튼만 활성화 이미지로 변경
  //그외 버튼들은 비활성화 이미지로 변경
  pagination_btn_01.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-2.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'
  //하니 페이지 표시 그 외 페이지는 none 처리
  minji_images.style.display = 'none'
  hanni_images.style.display = 'block'
  dani_images.style.display = 'none'
  haerin_images.style.display = 'none'
  hyein_images.style.display = 'none'
})

pagination_btn_03.addEventListener('click', function () {
  //클릭 버튼만 활성화 이미지로 변경
  //그외 버튼들은 비활성화 이미지로 변경
  pagination_btn_01.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-3.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'
  //다니 페이지 표시 그 외 페이지는 none 처리
  minji_images.style.display = 'none'
  hanni_images.style.display = 'none'
  dani_images.style.display = 'block'
  haerin_images.style.display = 'none'
  hyein_images.style.display = 'none'
})
//페이지네이션 해린 버튼 클릭 시
pagination_btn_04.addEventListener('click', function () {
  //클릭 버튼만 활성화 이미지로 변경
  //그외 버튼들은 비활성화 이미지로 변경
  pagination_btn_01.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-4.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-none.png'
  //해린 페이지 표시 그 외 페이지는 none 처리
  minji_images.style.display = 'none'
  hanni_images.style.display = 'none'
  dani_images.style.display = 'none'
  haerin_images.style.display = 'block'
  hyein_images.style.display = 'none'
})

//페이지네이션 혜인 버튼 클릭 시
pagination_btn_05.addEventListener('click', function () {
  //클릭 버튼만 활성화 이미지로 변경
  //그외 버튼들은 비활성화 이미지로 변경
  pagination_btn_01.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_02.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_03.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_04.src = 'assets/images/member/photo-page-none.png'
  pagination_btn_05.src = 'assets/images/member/photo-page-5.png'
  //혜인 페이지 표시 그 외 페이지는 none 처리
  minji_images.style.display = 'none'
  hanni_images.style.display = 'none'
  dani_images.style.display = 'none'
  haerin_images.style.display = 'none'
  hyein_images.style.display = 'block'
})

//포토카드 드래그앤드롭
function runDrag(cards) {
  document.querySelectorAll(cards).forEach(contentDragged => {
    // 마우스 시작 좌표 선언, 이동거리 값 0으로 셋팅
    let xStart,
      yStart,
      changedValueX = 0,
      changedValueY = 0
    //마우스 이동거리 계산 (현재 좌표 - 드래그 시작 좌표)
    const whenMouseMove = e => {
      changedValueX = e.pageX - xStart
      changedValueY = e.pageY - yStart
      // 제한 범위 설정 (각 카드의 첫 위치로부터 300 이상 못 내려가게)
      if (changedValueY > 300) changedValueY = 300
      // 계산한 이동거리를 translateX,Y 각각에 반영
      contentDragged.style.transform = 'translate(' + changedValueX + 'px, ' + changedValueY + 'px)'
    }
    //마우스 클릭을 멈추면, 마우스 위치 파악을 멈춤 (버그 방지 및 성능 개선)
    const whenMouseUp = () => {
      document.removeEventListener('mouseup', whenMouseUp)
      document.removeEventListener('mousemove', whenMouseMove)
    }
    //마우스 클릭이 시작되면 마우스 현위 위치 파악 및 이동 거리 저장
    contentDragged.addEventListener('mousedown', e => {
      xStart = e.pageX - changedValueX
      yStart = e.pageY - changedValueY
      //브라우저의 마우스 기본 동작 제한
      e.preventDefault()
      document.addEventListener('mousemove', whenMouseMove)
      document.addEventListener('mouseup', whenMouseUp)
    })
  })
}
runDrag('.team-photo')
