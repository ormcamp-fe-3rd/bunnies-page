const pages = document.querySelectorAll('.team-photo-page')
const pagingBtns = document.querySelectorAll('.member-pagination ul li')

/**
 * member페이지 로드시마다 호출되는 함수
 */
window.addEventListener('load', () => {
  setPagingEvent()
  setPagingByParam()
  runDrag()
})

/**
 * 페이징 버튼에 클릭 이벤트를 추가하는 함수
 */
function setPagingEvent() {
  pagingBtns.forEach((btn, index) => {
    btn.addEventListener('click', function () {
      togglePage(index)
      togglePaging(index)
    })
  })
}

/**
 * 전달받은 순번에 해당하는 페이지만 활성화 처리하는 함수
 *
 * @param {number} index 페이지 순서
 */
function togglePage(index) {
  pages.forEach(page => (page.style.display = 'none'))
  pages[index].style.display = 'block'
}

/**
 * 전달받은 순번에 해당하는 페이징만 활성화 처리하는 함수
 *
 * @param {number} index 페이징 순서
 */
function togglePaging(index) {
  const pagingImg = '/assets/images/member/photo-page-'
  pagingBtns.forEach(btn => (btn.querySelector('img').src = pagingImg + 'none.png'))
  pagingBtns[index].querySelector('img').src = pagingImg + (index + 1) + '.png'
}

/**
 * 세션에 저장된 이름이 있으면(메인에서 전달) 해당하는 이름의 페이지네이션으로 이동하는 함수
 */
function setPagingByParam() {
  let clickName = sessionStorage.getItem('name')
  switch (clickName) {
    case 'minji':
      pagingBtns[0].click()
      break
    case 'hanni':
      pagingBtns[1].click()
      break
    case 'danni':
      pagingBtns[2].click()
      break
    case 'haerin':
      pagingBtns[3].click()
      break
    case 'hyein':
      pagingBtns[4].click()
      break
    default:
      pagingBtns[0].click()
  }
  sessionStorage.clear()
}

/**
 * 드래그 앤 드롭 액션 함수
 *
 * @param {MouseEvent} e - 최종 실행되는 드래그 앤 드롭 함수
 */
function runDrag() {
  const photoWrap = document.getElementById('photo-wrap')

  document.querySelectorAll('.team-photo').forEach(contentDragged => {
    // 마우스 시작 좌표 선언, 이동 거리 값 0으로 설정
    let xStart,
      yStart,
      changedValueX = 0,
      changedValueY = 0

    // 카드의 초기 y 좌표를 가져와, 이동 가능한 최하단 y 좌표로 설정
    const initialYPosition = contentDragged.getBoundingClientRect().top + window.scrollY
    const initialXPosition = contentDragged.getBoundingClientRect().left
    const limitYPosition = photoWrap.offsetTop + photoWrap.clientHeight - contentDragged.clientHeight // 각 카드가 도달할 수 있는 최하단 y 좌표
    const limitXPosition = document.documentElement.clientWidth - contentDragged.clientWidth // 각 카드가 도달할 수 있는 최우측 x 좌표

    /**
     * 마우스 이동 거리 계산 함수
     * @param {MouseEvent} e - 마우스 이벤트 객체
     */
    const whenMouseMove = e => {
      changedValueX = e.pageX - xStart
      changedValueY = e.pageY - yStart

      // 카드 y축 범위 제한
      const elementTopPosition = initialYPosition + changedValueY
      if (elementTopPosition <= 0) {
        changedValueY = -initialYPosition
      }
      if (elementTopPosition > limitYPosition) {
        changedValueY = limitYPosition - initialYPosition
      }
      // 카드 x축 범위 제한
      const elementLeftPosition = initialXPosition + changedValueX
      if (elementLeftPosition <= 0) {
        changedValueX = -initialXPosition
      }
      if (elementLeftPosition > limitXPosition) {
        changedValueX = limitXPosition - initialXPosition
      }

      // 계산한 이동 거리를 translateX, Y 각각에 반영
      contentDragged.style.transform = `translate(${changedValueX}px, ${changedValueY}px)`
    }
    /**
     * 마우스 클릭을 멈추면 이벤트 리스너 제거
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
