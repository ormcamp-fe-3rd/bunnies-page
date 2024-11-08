const playList = [
  {
    id: 'ArmDp-zijuc',
    album: "NewJeans 2nd EP 'Get Up'",
    track: 'Super Shy'
  },
  {
    id: 'Km71Rr9K-Bw',
    album: 'OMG',
    track: 'Ditto'
  },
  {
    id: 'js1CtxSY38I',
    album: "NewJeans 1st EP 'New Jeans'",
    track: 'Attention'
  }
]
/**
 * 유튜브 영상 세팅 함수
 *
 * @param {string} direction 이전/다음 영상 여부. 값이 없을 경우 첫 번째 영상
 */
function setVideo(direction) {
  let currNum = parseInt(document.getElementById('paging').innerText)
  if (!direction) currNum = 1
  if (direction == 'next') currNum++
  if (direction == 'prev') currNum--
  const video = playList[currNum - 1]
  const url = `https://www.youtube.com/embed/${video.id}?autoplay=1&loop=1&playlist=${video.id}`
  console.log(url)

  // video 정보 세팅
  const youtube = document.getElementById('youtube')
  const album = document.getElementById('album')
  const track = document.getElementById('track')
  youtube.src = url
  youtube.title = video.album
  album.innerText = video.album
  track.innerText = video.track

  // 페이징 세팅
  setVideoPaging(currNum)
}

/**
 * 유튜브 영상 리스트 페이징 번호 세팅 함수
 *
 * @param {number} num 현재 페이지 번호
 */
function setVideoPaging(num = 1) {
  const paging = document.getElementById('paging')
  const total = document.getElementById('total')
  const prev = document.getElementById('prev')
  const next = document.getElementById('next')

  paging.innerText = num
  total.innerText = playList.length
  // 버튼 비활성화 처리
  if (num == 1) {
    prev.disabled
    prev.style.opacity = 0.2
    prev.style.cursor = 'default'
  } else {
    prev.disabled = false
    prev.style = null
  }
  if (num == playList.length) {
    next.disabled
    next.style.opacity = 0.2
    next.style.cursor = 'default'
  } else {
    next.disabled = false
    next.style = null
  }
}

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