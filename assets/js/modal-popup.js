const albumList = [
  {
    name: 'New Jeans',
    release: 'Aug 1, 2022',
    cdImg: '1stEP.jpg',
    color: {
      bgColor: '#e5e5e5',
      fontColor: '#172554'
    },
    musicServices: {
      melon: 'https://www.melon.com/album/detail.htm?albumId=11011565',
      flo: 'https://www.music-flo.com/detail/album/408826847/albumtrack',
      genie: 'https://www.genie.co.kr/detail/albumInfo?axnm=82842800'
    },
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
    cdImg: 'OMG.jpg',
    color: {
      bgColor: '#fee2e2',
      fontColor: '#172554'
    },
    musicServices: {
      melon: 'https://www.melon.com/album/detail.htm?albumId=11127145',
      flo: 'https://www.music-flo.com/detail/album/410940180/albumtrack',
      genie: 'https://www.genie.co.kr/detail/albumInfo?axnm=83325577'
    },
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
    cdImg: 'GetUp.webp',
    color: {
      bgColor: '#cffafe',
      fontColor: '#0d9488'
    },
    musicServices: {
      melon: 'https://www.melon.com/album/detail.htm?albumId=11281456',
      flo: 'https://www.music-flo.com/detail/album/415330480/albumtrack',
      genie: 'https://www.genie.co.kr/detail/albumInfo?axnm=84019740'
    },
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
    cdImg: 'HowSweet.webp',
    color: {
      bgColor: '#92400e',
      fontColor: '#fdba74'
    },
    musicServices: {
      melon: 'https://www.melon.com/album/detail.htm?albumId=11475749',
      flo: 'https://www.music-flo.com/detail/album/425287164/albumtrack',
      genie: 'https://www.genie.co.kr/detail/albumInfo?axnm=85075275'
    },
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
        name: 'How Sweet (Instrumental)',
        time: '3:39'
      },
      {
        name: 'Bubble Gum (Instrumental)',
        time: '3:20'
      }
    ]
  },
  {
    name: 'Supernatural',
    release: 'Jun 21, 2024',
    cdImg: 'Supernatural.webp',
    color: {
      bgColor: '#1c1917',
      fontColor: '#fdba74'
    },
    musicServices: {
      melon: 'https://www.melon.com/album/detail.htm?albumId=11514014',
      flo: 'https://www.music-flo.com/detail/album/426178480/albumtrack',
      genie: 'https://www.genie.co.kr/detail/albumInfo?axnm=85323248'
    },
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
        name: 'Supernatural (Instrumental)',
        time: '3:11'
      },
      {
        name: 'Right Now (Instrumental)',
        time: '2:41'
      }
    ]
  }
]
const modal = document.getElementById('modal')
const modalBg = document.getElementById('modal-background')
const cdImgFolder = '/assets/images/album/album_img/'

/**
 * 앨범 아이콘 목록 세팅 함수
 */
function setAlbumIconList() {
  let ihtml = ''
  albumList.forEach((album, index) => {
    ihtml += `
    <button
      type='button'
      class='w-32 rounded-md p-2 transition duration-200 hover:bg-white hover:bg-opacity-30'
      onclick='openModal(${index})'>
      <img class='mx-auto my-2 aspect-square w-4/5 shadow-md shadow-zinc-700'
        src='${cdImgFolder + album.cdImg}'
        alt='${album.name}' />
      <p class='w-full text-center text-lg font-bold text-white shadow-black [text-shadow:_1px_1px_0_var(--tw-shadow-color)]'>
        ${album.name}
      </p>
    </button>
    `
  })
  document.getElementById('album-icon-warp').innerHTML = ihtml
}
setAlbumIconList()

/**
 * 모달 열기 함수
 *
 * @param {number} index 앨범 배열의 순서
 */
function openModal(index) {
  setModalAlbumInfo(albumList[index])
  modal.classList.remove('hidden')
  modalBg.classList.remove('hidden')
}

/**
 * 모달 닫기 함수
 */
function closeModal() {
  modal.classList.add('hidden')
  modalBg.classList.add('hidden')
}

/**
 * 모달창의 앨범 정보 세팅 함수
 *
 * @param {object} album 앨범에 대한 정보가 있는 객체
 */
function setModalAlbumInfo(album) {
  let ihtml = ''
  album.playlist.forEach(music => {
    ihtml += `
      <span>${music.name}</span>
      <span>${music.time}</span>
    `
  })
  document.getElementById('album-name').innerText = album.name
  document.getElementById('album-name-bar').innerText = album.name
  document.getElementById('album-img').src = cdImgFolder + album.cdImg
  document.getElementById('release').innerText = album.release
  document.getElementById('playlist-wrap').innerHTML = ihtml
  document.getElementById('melon').href = album.musicServices.melon
  document.getElementById('flo').href = album.musicServices.flo
  document.getElementById('genie').href = album.musicServices.genie
  modal.style.backgroundColor = album.color.bgColor
  modal.style.color = album.color.fontColor
}
