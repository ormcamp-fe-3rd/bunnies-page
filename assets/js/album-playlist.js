const playBtn = document.querySelector('#playAlbum');
const cdWrap = document.querySelectorAll('.cd-wrap>img');
const cdArr = Array.from(cdWrap);

//현재 선택된 앨범 선언
let nowAlbum = "";
function nowAlbumSelect(){
  for(let i = 0; i < cdArr.length; i++){
    if(!(cdArr[i].classList.contains("hidden"))){
      nowAlbum = cdArr[i];
    }
  }
}

/**
 * cd 재생 애니메이션(회전)
 *
 * cd 이미지의 dom class로 조절
 * animation-play-state: running / paused
 */
function playAlbum() {
  //현재 보여지는 앨범 선택
  nowAlbumSelect();

  //노래 재생
  if (nowAlbum.classList.contains('running') && !nowAlbum.classList.contains('paused')) {
    //재생중일때, 정지
    nowAlbum.classList.add('paused')
  } else if (nowAlbum.classList.contains('paused')) {
    //일시정지일때, 일시정지 삭제
    nowAlbum.classList.remove('paused')
  } else if (!nowAlbum.classList.contains('running')) {
    nowAlbum.classList.add('running')
  }
}
