// 버튼 클릭 시 배경 유지
document.querySelectorAll('button.albumicon').forEach(button => {
  button.addEventListener('click', function () {
    // 클릭된 버튼의 배경을 진하게 설정
    this.querySelector('div').classList.add('bg-white')
    this.querySelector('div').classList.add('bg-opacity-50')
  })
})

// 모달 열기
function openModal(modalId) {
  document.querySelector(modalId).classList.remove('hidden')
  document.querySelector(modalId).classList.add('block')
  document.querySelector('#modal-background').classList.remove('hidden')
  document.querySelector('#modal-background').classList.add('block')
}

// 앨범 버튼 클릭 이벤트 리스너 추가
document.querySelector('#first-album').addEventListener('click', function () {
  openModal('#first-album-window')
})

document.querySelector('#second-album').addEventListener('click', function () {
  openModal('#second-album-window')
})

document.querySelector('#third-album').addEventListener('click', function () {
  openModal('#third-album-window')
})

document.querySelector('#forth-album').addEventListener('click', function () {
  openModal('#forth-album-window')
})

document.querySelector('#fifth-album').addEventListener('click', function () {
  openModal('#fifth-album-window')
})

// 모달 닫기
function closeModal(modalId) {
  document.querySelector(modalId).classList.remove('block')
  document.querySelector(modalId).classList.add('hidden')
  document.querySelector('#modal-background').classList.remove('block')
  document.querySelector('#modal-background').classList.add('hidden')

  // 모든 버튼의 배경 초기화
  document.querySelectorAll('button.albumicon').forEach(btn => {
    btn.querySelector('div').classList.remove('bg-opacity-30')
    btn.querySelector('div').classList.remove('bg-white')
  })
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
