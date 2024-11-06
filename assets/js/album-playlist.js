const playBtn = document.querySelector('#playBtn')
const cd = document.querySelector('#cd_1')

/**
 * cd 재생 애니메이션(회전)
 * 
 * cd 이미지의 dom class로 조절
 * animation-play-state: running / paused
 */
function playMusic() {
  if (cd.classList.contains('running') && !cd.classList.contains('paused')) {
    //재생중일때, 정지
    cd.classList.add('paused')
  } else if (cd.classList.contains('paused')) {
    //일시정지일때, 일시정지 삭제
    cd.classList.remove('paused')
  } else if (!cd.classList.contains('running')) {
    cd.classList.add('running')
  }
}
