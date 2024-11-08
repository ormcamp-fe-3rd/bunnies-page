// 버튼 클릭 시 배경 유지
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function () {
    // 모든 버튼의 배경 초기화
    document.querySelectorAll('button').forEach(btn => {
      btn.querySelector('div').classList.remove('bg-opacity-80')
      btn.querySelector('div').classList.remove('group-hover:bg-opacity-30')
    })
    // 클릭된 버튼의 배경을 진하게 설정
    this.querySelector('div').classList.add('bg-opacity-80')
  })
})

// 모달 열기
document.querySelector('#first-album').addEventListener('click', function () {
  document.querySelector('#first-album-window').classList.remove('hidden')
  document.querySelector('#first-album-window').classList.add('block')
  document.querySelector('#modal-background').classList.remove('hidden')
  document.querySelector('#modal-background').classList.add('block')
})

document.querySelector('#second-album').addEventListener('click', function () {
  document.querySelector('#second-album-window').classList.remove('hidden')
  document.querySelector('#second-album-window').classList.add('block')
  document.querySelector('#modal-background').classList.remove('hidden')
  document.querySelector('#modal-background').classList.add('block')
})

document.querySelector('#third-album').addEventListener('click', function () {
  document.querySelector('#third-album-window').classList.remove('hidden')
  document.querySelector('#third-album-window').classList.add('block')
  document.querySelector('#modal-background').classList.remove('hidden')
  document.querySelector('#modal-background').classList.add('block')
})

document.querySelector('#forth-album').addEventListener('click', function () {
  document.querySelector('#forth-album-window').classList.remove('hidden')
  document.querySelector('#forth-album-window').classList.add('block')
  document.querySelector('#modal-background').classList.remove('hidden')
  document.querySelector('#modal-background').classList.add('block')
})

document.querySelector('#fifth-album').addEventListener('click', function () {
  document.querySelector('#fifth-album-window').classList.remove('hidden')
  document.querySelector('#fifth-album-window').classList.add('block')
  document.querySelector('#modal-background').classList.remove('hidden')
  document.querySelector('#modal-background').classList.add('block')
})

// 모달 닫기
function closeModal(modalId) {
  document.querySelector(modalId).classList.remove('block')
  document.querySelector(modalId).classList.add('hidden')
  document.querySelector('#modal-background').classList.remove('block')
  document.querySelector('#modal-background').classList.add('hidden')
}

// 닫기 버튼에 이벤트 리스너 추가
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', function () {
    closeModal(`#${button.dataset.modal}`)
  })
})

// 배경 클릭 시 모달 닫기
document.querySelector('#modal-background').addEventListener('click', function () {
  closeModal('#first-album-window')
  closeModal('#second-album-window')
  closeModal('#third-album-window')
  closeModal('#forth-album-window')
  closeModal('#fifth-album-window')
})
