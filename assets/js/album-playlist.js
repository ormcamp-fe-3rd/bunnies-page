const playBtn = document.querySelector('#playAlbum')
const cdWrap = document.querySelectorAll('.cd-wrap>img')
const cdArr = Array.from(cdWrap)
const pausedImg = 'assets/images/albums/paused-circle.png'
const playImg = 'assets/images/albums/play-circle.png'
const audio = new Audio()
const albumList = [
  {
    name: 'New Jeans',
    release: 'Aug 1, 2022',
    url: 'https://youtu.be/js1CtxSY38I?list=OLAK5uy_lnEFuNDiwH42yjMhiZYX8VKWzdqgQNzvA',
    coverFolder: 'newjeans',
    playlist: [
      {
        name: 'Attention',
        time: '02:59'
      },
      {
        name: 'Hype Boy',
        time: '02:58'
      },
      {
        name: 'Cookie',
        time: '03:55'
      },
      {
        name: 'Hurt',
        time: '02:57'
      }
    ]
  },
  {
    name: 'OMG',
    release: 'Jan 2, 2023',
    url: 'https://youtu.be/_ZAgIHmHLdc?list=OLAK5uy_kHlI8J0DPIuNkOvzQ8VR6l4-S3fyW8gig',
    coverFolder: 'omg&ditto',
    playlist: [
      {
        name: 'OMG',
        time: '3:37'
      },
      {
        name: 'Ditto',
        time: '3:06'
      }
    ]
  },
  {
    name: 'Get Up',
    release: 'Jul 21, 2023',
    url: 'https://youtu.be/Krr2u8BUtLw?list=OLAK5uy_mBRM8NMgE_F9JTRA7zKpmETOh0H1VnPe4',
    coverFolder: 'getup',
    playlist: [
      {
        name: 'New Jeans',
        time: '1:51'
      },
      {
        name: 'Super Shy',
        time: '2:35'
      },
      {
        name: 'ETA',
        time: '2:31'
      },
      {
        name: 'Cool With You',
        time: '2:28'
      },
      {
        name: 'Get Up',
        time: '0:36'
      },
      {
        name: 'ASAP',
        time: '2:15'
      }
    ]
  },
  {
    name: 'How Sweet',
    release: 'May 24, 2024',
    url: 'https://youtu.be/Q3K0TOvTOno?list=OLAK5uy_nmHc4tHBWW2PJyfn9nudHzJrxGCrNpNNU',
    coverFolder: 'howSweet',
    playlist: [
      {
        name: 'How Sweet',
        time: '3:39'
      },
      {
        name: 'Bubble Gum',
        time: '3:20'
      },
      {
        name: 'How Sweet(Instrumental)',
        time: '3:39'
      },
      {
        name: 'Bubble Gum(Instrumental)',
        time: '3:20'
      }
    ]
  },
  {
    name: 'Supernatural',
    release: 'Jun 21, 2024',
    url: 'https://youtu.be/ZncbtRo7RXs?list=OLAK5uy_nTIiMkdnb8rtgbm6XsgliXButKi-lDFpQ',
    coverFolder: 'supernatural',
    playlist: [
      {
        name: 'Supernatural',
        time: '3:11'
      },
      {
        name: 'Right Now',
        time: '2:41'
      },
      {
        name: 'Supernatural(Instrumental)',
        time: '3:11'
      },
      {
        name: 'Right Now(Instrumental)',
        time: '2:41'
      }
    ]
  }
]

//현재 앨범과 앨범 인덱스 변수 선언
let nowAlbum = ''
let nowAlbumIndex = ''

/**
 * member페이지 로드시마다 호출되는 함수
 */
window.addEventListener('load', () => {
  setAlbumByParam()
})

/**
 * 파라미터에 앨범 번호가 있다면(메인에서 전달) 해당하는 앨범을 보여주는 함수
 */
function setAlbumByParam() {
  const urlParams = new URL(location.href).searchParams
  const index = urlParams.get('index') || 0
  cdArr[index].classList.remove('hidden')
  setAlbumInfo(index) // 초기 앨범 정보 세팅
  render3DCover(index) // 3D 커버 리렌더링
}

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
  nowAlbumSelect() //현재 화면에 나오고있는 앨범을 배열에서 선택
  if (nowAlbum.classList.contains('running')) {
    //재생중일때, 정지
    playBtn.querySelector('img').src = playImg
    stopMusic()
  } else {
    //재생아닐때, 재생
    playBtn.querySelector('img').src = pausedImg
    playMusic()
  }
  nowAlbum.classList.toggle('running')
}

/**
 * 이전/다음 앨범으로 넘어가는 함수
 *
 * @param {string} direction 이전/다음 영상 여부. 값이 없을 경우 첫 번째 영상
 */
function changeAlbum(direction) {
  nowAlbumSelect() //현재 화면에 나오고있는 앨범을 배열에서 선택
  const cdWrap = document.querySelector('.cd-wrap')

  //재생/정지 초기화
  nowAlbum.classList.remove('running')
  playBtn.querySelector('img').src = playImg

  //다음 cd로 넘어가는 Y축 회전 애니메이션 시작
  cdWrap.style.transform = 'rotateY(90deg) scale(1.2)'

  //애니메이션 동작 시간동안 hidden 적용 딜레이
  setTimeout(() => {
    nowAlbum.classList.add('hidden')
    if (direction == 'next') {
      // 다음 앨범 실행일 경우
      nowAlbumIndex++
      if (nowAlbumIndex == cdArr.length) nowAlbumIndex = 0 // 마지막 앨범이면 첫 앨범 번호 세팅
      cdArr[nowAlbumIndex].classList.remove('hidden')
    } else {
      // 이전 앨범 실행일 경우
      if (nowAlbumIndex == 0) nowAlbumIndex = cdArr.length // 첫번째 앨범이면 마지막 앨범
      cdArr[nowAlbumIndex - 1].classList.remove('hidden')
    }
    cdWrap.style.transform = '' //원상복귀
    nowAlbumSelect() //바뀐 앨범 선택
    setAlbumInfo(nowAlbumIndex) //영수증 변경
    render3DCover(nowAlbumIndex) // 3D 커버 리렌더링
  }, 300)
}

/**
 * 앨범 정보를 DOM 에 그려주는 함수
 * (현재 시간, 앨범명, 발매일자, 유튜브 링크, 유튜브 QR 이미지)
 *
 * @param {number} alNum 앨범 번호
 */
function setAlbumInfo(alNum = 0) {
  const album = albumList[alNum]
  const degLimit = 20
  const randomDeg = Math.floor(Math.random() * degLimit * 2) - degLimit
  document.getElementById('album-info').style.transform = 'rotate(' + randomDeg + 'deg)'
  document.getElementById('now').innerText = getTime()
  document.getElementById('album-name').innerText = album.name
  document.getElementById('release').innerText = album.release
  document.getElementById('youtube').href = album.url
  document.getElementById('qr').src = 'https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=' + album.url
  setPlaylist(album.playlist)
  setAudio(album.playlist[0].name) // 앨범의 첫 번째 곡으로 오디오 세팅
}

/**
 * 앨범별 곡 리스트 정보를 DOM 에 그려주는 함수
 * (곡 제목, 재생 시간, 곡의 총 개수, 곡의 총 재생 시간)
 *
 * @param {Array} playlist 곡 리스트
 */
function setPlaylist(playlist) {
  let ihtml = ''
  let totalTime = 0
  for (let i = 0; i < playlist.length; i++) {
    let time = playlist[i].time.split(':')
    totalTime += parseInt(time[0]) * 60 + parseInt(time[1])
    ihtml += `
    <li>
      <button type='button' class='album_selct_btn flex w-full ${i == 0 && 'play'}' onclick="playMusic(this)">
        <p class='mr-10'>${addZero(i + 1)}</p>
        <p class='name'>${playlist[i].name}</p>
        <p class='ml-auto'>${playlist[i].time}</p>
      </button>
    </li>
    `
  }
  document.getElementById('album_selct').innerHTML = ihtml
  document.getElementById('totalCnt').innerText = playlist.length
  document.getElementById('totalTime').innerText = formatTime(totalTime)
}

/**
 * 오디오를 세팅하는 함수
 *
 * @param {string} audioName 곡 제목
 */
function setAudio(audioName) {
  audio.src = '/assets/audio/' + audioName.replaceAll(' ', '-') + '.mp3'
}

/**
 * 곡을 재생하는 함수
 *
 * @param {object} target 곡 정보를 표기하는 DOM
 */
function playMusic(target) {
  // 클릭한 대상이 있을 경우
  if (target) {
    // 오디오 재 세팅
    setAudio(target.querySelector('.name')?.innerText)
    // 리스트 하이라이트 처리
    document.querySelector('.album_selct_btn.play').classList.remove('play')
    target.classList.add('play')
    // CD 이미지 재생 효과
    nowAlbumSelect()
    playBtn.querySelector('img').src = pausedImg
    nowAlbum.classList.add('running')
  }
  // 오디오 재생
  audio.play()
}

/**
 * 곡을 일시정지 하는 함수
 */
function stopMusic() {
  audio.pause()
}

/**
 * 현재 시간을 양식에 맞춰 반환하는 함수
 *
 * @returns {string} 00:00 AM 형태의 시간
 */
function getTime() {
  const date = new Date()
  let hours = date.getHours()
  const mins = date.getMinutes()
  let meridiem = 'AM'
  if (hours >= 12) {
    meridiem = 'PM'
    hours = hours - 12
  }
  return addZero(hours) + ':' + addZero(mins) + ' ' + meridiem
}

/**
 * 시:분:초 양식에 맞춰 반환하는 함수
 *
 * @param {number} secs 초
 * @returns {string} 시:분:초
 */
function formatTime(secs = 0) {
  let hours = Math.floor(secs / 3600)
  let mins = Math.floor((secs - hours * 3600) / 60)
  secs = secs - hours * 3600 - mins * 60
  return addZero(hours) + ':' + addZero(mins) + ':' + addZero(secs)
}

/**
 * 숫자가 10 미만일 때 0을 붙여 두 자리로 만드는 함수
 *
 * @param {number} num 변환할 숫자
 * @returns {string} 00 형태의 두 자리 숫자
 */
function addZero(num) {
  return num.toString().padStart(2, 0)
}
