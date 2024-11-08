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
  //드래그앤드롭 함수를 재실행시켜 y좌표 이동 제한을 설정함
  runDrag('.team-photo')
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
  //드래그앤드롭 함수를 재실행시켜 y좌표 이동 제한을 설정함
  runDrag('.team-photo')
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
  //드래그앤드롭 함수를 재실행시켜 y좌표 이동 제한을 설정함
  runDrag('.team-photo')
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
  //드래그앤드롭 함수를 재실행시켜 y좌표 이동 제한을 설정함
  runDrag('.team-photo')
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
  //드래그앤드롭 함수를 재실행시켜 y좌표 이동 제한을 설정함
  runDrag('.team-photo')
})

/**
드래그 앤 드롭 액션 함수
@param {string} cards 드래그되는 카드들 샐렉터 설정
@param {MouseEvent} e - 최종 실행되는 드래그 앤 드롭 함수
*/
function runDrag(cards) {
  document.querySelectorAll(cards).forEach(contentDragged => {
    // 마우스 시작 좌표 선언, 이동 거리 값 0으로 설정
    let xStart,
      yStart,
      changedValueX = 0,
      changedValueY = 0

    // 카드의 초기 y 좌표를 가져와, 이동 가능한 최하단 y 좌표로 설정
    const initialYPosition = contentDragged.getBoundingClientRect().top + window.scrollY
    const limitYPosition = 420 // 각 카드가 도달할 수 있는 최하단 y 좌표

    /**
    마우스 이동 거리 계산 함수
    @param {MouseEvent} e - 마우스 이벤트 객체
    */
    const whenMouseMove = e => {
      changedValueX = e.pageX - xStart
      changedValueY = e.pageY - yStart

      // 카드가 y 축에서 더 이상 내려가지 않도록 제한
      const elementTopPosition = initialYPosition + changedValueY
      if (elementTopPosition > limitYPosition) {
        changedValueY = limitYPosition - initialYPosition
      }

      // 계산한 이동 거리를 translateX, Y 각각에 반영
      contentDragged.style.transform = `translate(${changedValueX}px, ${changedValueY}px)`
    }
    /**
    마우스 클릭을 멈추면 이벤트 리스너 제거
    */
    const whenMouseUp = () => {
      document.removeEventListener('mouseup', whenMouseUp)
      document.removeEventListener('mousemove', whenMouseMove)
    }

    // 마우스 클릭이 시작되면 마우스 현 위치 파악 및 이동 거리 저장
    contentDragged.addEventListener('mousedown', e => {
      xStart = e.pageX - changedValueX
      yStart = e.pageY - changedValueY
      e.preventDefault() // 브라우저의 마우스 기본 동작 제한
      document.addEventListener('mousemove', whenMouseMove)
      document.addEventListener('mouseup', whenMouseUp)
    })
  })
}
runDrag('.team-photo')

/**
 * home에서 멤버카드 선택시 member페이지로 이동
 * @param {name} 선택된 멤버의 이름 
 */
function toMemberPage(name){
  switch(name){
    case "home-minji":
      location.href = "/member.html"
      sessionStorage.setItem('name', 'minji')
      break
    case "home-danni": 
      location.href = '/member.html'
      sessionStorage.setItem('name', 'danni')
      break
    case "home-hanni":
      location.href = '/member.html'
      sessionStorage.setItem("name", "hanni")
      break
    case "home-hyein":
      location.href = '/member.html'
      sessionStorage.setItem('name', 'hyein')
      break
    case "home-haerin":
      location.href = '/member.html'
      sessionStorage.setItem('name', 'haerin')
      break
  }
}

/**
 * member페이지 로드시마다
 * 세션에 저장된 이름이 있으면, 해당하는 이름의 페이지네이션 클릭
 */
window.addEventListener("load",()=>{
  let clickName = sessionStorage.getItem("name")
  switch(clickName){
    case "minji":
      pagination_btn_01.click()
      break
    case "hanni":
      pagination_btn_02.click()
      break
    case "danni":
      pagination_btn_03.click()
      break
    case "haerin":
      pagination_btn_04.click()
      break
    case "hyein":
      pagination_btn_05.click()
      break
    default:
      pagination_btn_01.click()
  }
  sessionStorage.clear()
})