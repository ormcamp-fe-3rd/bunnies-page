const playBtn = document.querySelector('#playAlbum')
const cdWrap = document.querySelectorAll('.cd-wrap>img')
const cdArr = Array.from(cdWrap)
const pausedImg = 'assets/images/albums/paused-circle.png'
const playImg = 'assets/images/albums/play-circle.png'

//현재 앨범과 앨범 인덱스 변수 선언
let nowAlbum = ''
let nowAlbumIndex = ''

//hidden 여부에따라 현재 보여지는 앨범을 선택
function nowAlbumSelect() {
  for (let i = 0; i < cdArr.length; i++) {
    if (!cdArr[i].classList.contains('hidden')) {
      nowAlbum = cdArr[i]
      nowAlbumIndex = i
    }
  }
}

//cd 재생 애니메이션(회전)
function playAlbum() {
  nowAlbumSelect()

  if (nowAlbum.classList.contains('running')) {
    //재생중일때, 정지
    nowAlbum.classList.add('paused')
    playBtn.querySelector('img').src = playImg
  } else if (!nowAlbum.classList.contains('running')) {
    //재생아닐때, 재생
    nowAlbum.classList.add('running')
    playBtn.querySelector('img').src = pausedImg
  }
}

//nextBtn, preBtn 클릭 -> hidden 클래스 변경, nowAlbum 선택
function toNextAlbum() {
  nowAlbumSelect() //현재 앨범 확인, 재생중이라면 정지
  if (nowAlbum.classList.contains('running') || nowAlbum.classList.contains('paused')) {
    nowAlbum.classList.remove('running')
    nowAlbum.classList.remove('paused')
  }
  nowAlbum.style.transform = 'rotateY(160deg)'
  setTimeout(() => {//cd 회전하는 시간동안 딜레이 후 수행
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
    nowAlbum.style.transform = 'rotateY(0)'//원상복귀
    nowAlbumSelect() //바뀐 앨범 선택
    showPlaylist() //영수증 변경
  }, 300)
}
function toPreAlbum() {
  nowAlbumSelect() //현재 앨범 확인, 재생중이라면 정지
  if (nowAlbum.classList.contains('running') || nowAlbum.classList.contains('paused')) {
    nowAlbum.classList.remove('running')
    nowAlbum.classList.remove('paused')
  }
  nowAlbum.style.transform = 'rotateY(160deg)'
  setTimeout(() => {//cd 회전하는 시간동안 딜레이 후 수행
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
    nowAlbum.style.transform = 'rotateY(0)'//원상복귀
    nowAlbumSelect() //바뀐 앨범 선택
    showPlaylist() //영수증 변경
  }, 300)
}

//영수증 플레이리스트 변경
const playlistWrap = document.querySelectorAll('.playlist-album-wrap>div')
const playlistArr = Array.from(playlistWrap)
//앨범별로 cd이미지의 배열인덱스와 플레이리스트 배열인덱스가 동일한 점을 활용
function showPlaylist(){
  for(let i = 0; i < playlistArr.length; i++){
    if(i == nowAlbumIndex){
      playlistArr[i].classList.remove("hidden")
    }else{
      playlistArr[i].classList.add("hidden")
    }
  }
}