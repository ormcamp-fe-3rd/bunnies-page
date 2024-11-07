const playBtn = document.querySelector('#playAlbum')
const cdWrap = document.querySelectorAll('.cd-wrap>img')
const cdArr = Array.from(cdWrap)
const pausedImg = 'assets/images/albums/paused-circle.png'
const playImg = 'assets/images/albums/play-circle.png'

//현재 앨범과 앨범 인덱스 변수 선언
let nowAlbum = ''
let nowAlbumIndex = ''

/**
 * hidden 여부에따라 현재 보여지는 앨범을 배열에서 선택
 */
function nowAlbumSelect() {
  for (let i = 0; i < cdArr.length; i++) {
    if (!cdArr[i].classList.contains('hidden')) {
      nowAlbum = cdArr[i]
      nowAlbumIndex = i
    }
  }
}

/**
 * cd 재생/정지 애니메이션(Z축 회전)
 */
function playAlbum() {
  const cdWrap = document.querySelector('.cd-wrap')
  // nowAlbumSelect()
  if (cdWrap.classList.contains('running')) {
    //재생중일때, 정지
    playBtn.querySelector('img').src = playImg
  } else {
    //재생아닐때, 재생
    playBtn.querySelector('img').src = pausedImg
  }
  cdWrap.classList.toggle('running')
}

/**
 * 이전/다음 앨범으로 넘어가는 함수
 *
 * @param {string} direction 이전/다음 영상 여부. 값이 없을 경우 첫 번째 영상
 */
function changeAlbum(direction) {
  nowAlbumSelect() //현재 화면에 나오고있는 앨범을 배열에서 선택
  const cdRotateWrap = document.querySelector('.cd-rotate-wrap')
  const cdWrap = document.querySelector('.cd-wrap')
  //재생/정지 초기화
  if (cdWrap.classList.contains('running')) {
    cdWrap.classList.remove('running')
  }
  //다음 cd로 넘어가는 Y축 회전 애니메이션 시작
  cdRotateWrap.style.transform = 'rotateY(90deg) scale(1.2)'
  // TODO: toNextAlbum, toPreAlbum 함수 합치는 작업 중 중단하고 커밋함
  //애니메이션 동작 시간동안 hidden 적용 딜레이
  setTimeout(() => {
    playBtn.querySelector('img').src = playImg
    nowAlbum.classList.add('hidden')
    if (direction == 'next') {
      // 다음 앨범 실행일 경우
      cdArr[nowAlbumIndex + 1].classList.remove('hidden')
    } else {
      // 이전 앨범 실행일 경우
      cdArr[nowAlbumIndex - 1].classList.remove('hidden')
    }
    cdRotateWrap.style.transform = '' //원상복귀
    nowAlbumSelect() //바뀐 앨범 선택
    showPlaylist() //영수증 변경
  }, 300)
}

/**
 * 다음 버튼 클릭시 다음 앨범으로 넘어가는 함수
 */
function toNextAlbum() {
  nowAlbumSelect() //현재 화면에 나오고있는 앨범을 배열에서 선택
  //재생/정지 초기화
  if (nowAlbum.classList.contains('running') || nowAlbum.classList.contains('paused')) {
    nowAlbum.classList.remove('running')
    nowAlbum.classList.remove('paused')
  }
  //다음 cd로 넘어가는 Y축 회전 애니메이션 시작
  nowAlbum.style.transform = 'rotateY(160deg)'
  //애니메이션 동작 시간동안 hidden 적용 딜레이
  setTimeout(() => {
    playBtn.querySelector('img').src = playImg
    //마지막 앨범이면 첫 앨범이 보이게 변경
    if (nowAlbumIndex == cdArr.length - 1) {
      cdArr[cdArr.length - 1].classList.add('hidden')
      cdArr[0].classList.remove('hidden')
    } else {
      //현재 인덱스+1 앨범이 보이게 변경
      for (let i = 0; i < cdArr.length; i++) {
        if (i == nowAlbumIndex) {
          cdArr[i].classList.add('hidden')
        }
        if (i == nowAlbumIndex + 1) {
          cdArr[i].classList.remove('hidden')
        }
      }
    }
    nowAlbum.style.transform = 'rotateY(0)' //원상복귀
    nowAlbumSelect() //바뀐 앨범 선택
    showPlaylist() //영수증 변경
  }, 300)
}

/**
 * 이전 버튼 클릭시 이전 앨범으로 넘어가는 함수
 */
function toPreAlbum() {
  nowAlbumSelect() //현재 화면에 나오고있는 앨범을 배열에서 선택
  //재생/정지 초기화
  if (nowAlbum.classList.contains('running') || nowAlbum.classList.contains('paused')) {
    nowAlbum.classList.remove('running')
    nowAlbum.classList.remove('paused')
  }
  //다음 cd로 넘어가는 Y축 회전 애니메이션 시작
  nowAlbum.style.transform = 'rotateY(160deg)'
  //애니메이션 동작 시간동안 hidden 적용 딜레이
  setTimeout(() => {
    playBtn.querySelector('img').src = playImg
    //첫번째 앨범이면 마지막 앨범이 보이게 변경
    if (nowAlbumIndex == 0) {
      cdArr[0].classList.add('hidden')
      cdArr[cdArr.length - 1].classList.remove('hidden')
    } else {
      //현재 인덱스-1 앨범이 보이게 변경
      for (let i = 0; i < cdArr.length; i++) {
        if (i == nowAlbumIndex) {
          cdArr[i].classList.add('hidden')
        }
        if (i == nowAlbumIndex - 1) {
          cdArr[i].classList.remove('hidden')
        }
      }
    }
    nowAlbum.style.transform = 'rotateY(0)' //원상복귀
    nowAlbumSelect() //바뀐 앨범 선택
    showPlaylist() //영수증 변경
  }, 300)
}

const playlistWrap = document.querySelectorAll('.playlist-album-wrap>div')
const playlistArr = Array.from(playlistWrap)

/**
 * 현재 cd 이미지에 따라 영수증 플레이리스트 변경
 * (앨범별로 cd이미지의 배열인덱스와 플레이리스트 배열인덱스가 동일)
 */
function showPlaylist() {
  for (let i = 0; i < playlistArr.length; i++) {
    if (i == nowAlbumIndex) {
      playlistArr[i].classList.remove('hidden')
    } else {
      playlistArr[i].classList.add('hidden')
    }
  }
}
