const playBtn = document.querySelector('#playAlbum');
const cdWrap = document.querySelectorAll('.cd-wrap>img');
const cdArr = Array.from(cdWrap);
const pausedImg = 'assets/images/albums/paused-circle.png';
const playImg = "assets/images/albums/play-circle.png";

//현재 앨범과 앨범인덱스 선언
let nowAlbum = "";
let nowAlbumIndex = "";

//hidden 여부에따라 현재 보여지는 앨범을 선택
function nowAlbumSelect(){
  for(let i = 0; i < cdArr.length; i++){
    if(!(cdArr[i].classList.contains("hidden"))){
      nowAlbum = cdArr[i];
      nowAlbumIndex = i;
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
  nowAlbumSelect();

  if (nowAlbum.classList.contains('running') && !nowAlbum.classList.contains('paused')) {
    //재생중일때, 정지
    nowAlbum.classList.add('paused')
    playBtn.querySelector('img').src = pausedImg;
  } else if (nowAlbum.classList.contains('paused')) {
    //일시정지일때, 일시정지 삭제
    nowAlbum.classList.remove('paused')
    playBtn.querySelector('img').src = playImg;
  } else if (!nowAlbum.classList.contains('running')) {
    //재생을 안했을때, 재생
    nowAlbum.classList.add('running')
    playBtn.querySelector('img').src = playImg;
  }
}

//nextBtn, preBtn 클릭 -> hidden 클래스 변경, nowAlbum 선택
function toNextAlbum(){
  nowAlbum.classList.remove("running");
  if(nowAlbumIndex == (cdArr.length-1)){
    cdArr[cdArr.length-1].classList.add("hidden");
    cdArr[0].classList.remove("hidden");
  }
  else{
    for(let i = 0; i< cdArr.length; i++){
      if(i == nowAlbumIndex){
        cdArr[i].classList.add("hidden");
      }
      if(i == (nowAlbumIndex+1)){
        cdArr[i].classList.remove("hidden");
      }
  }}
  nowAlbumSelect();
}
function toPreAlbum(){
  nowAlbum.classList.remove("running");
  if (nowAlbumIndex == 0) {
    cdArr[0].classList.add('hidden');
    cdArr[cdArr.length-1].classList.remove('hidden');
  } else {
    for (let i = 0; i < cdArr.length; i++) {
      if (i == nowAlbumIndex) {
        cdArr[i].classList.add('hidden');
      }
      if (i == (nowAlbumIndex-1)) {
        cdArr[i].classList.remove('hidden');
      }
    }
  }
  nowAlbumSelect();
}