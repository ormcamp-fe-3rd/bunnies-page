const messageBtn = document.querySelector('#message')
const messageWrap = document.getElementById('message-wrap-list')
const messageList = new Array(12)

/**
 * 메세지 입력 받아서 텍스트 저장
 * @param {e} 메세지창에 입력되는 키보드 값 
 */
function messageInit(e) {
  if (e.code == 'Enter') {
    if (messageBtn.value == '') {
      alert('메세지를 입력해주세요')
    }
    const newMessage = messageBtn.value
    messageBtn.value = ''

    makeMessageDome(newMessage)
  }
}

/**
 * 새로운 element에 입력된 텍스트를 담아 html에 추가
 * @param {str} 메세지창에서 입력받은 텍스트 
 */
function makeMessageDome(str) {
  let newLi = document.createElement('li')
  let newText = document.createTextNode(str)
  newLi.appendChild(newText)

  messageDeco(newLi)
  messageWrap.appendChild(newLi)
}

/**
 * 클래스명에 적용할 tailwindcss 랜덤값 설정
 * @returns 정수형 랜덤값(최소, 최대)
 */
function getTop() {
  return getRandomInt(0, 85)
}
function getLeft() {
  return getRandomInt(0, 100)
}
function getRight() {
  return getRandomInt(0, 50)
}
// function getOpacity(index){
//   return 30 + (5 * index)
// }

/**
 * 클래스명에 적용할 tailwindcss 배경색 설정
 * @returns 컬러 배열에서 랜덤인덱스를 통해 설정된 색상
 */
function getColor() {
  let maxIndex = colorPalette.length - 1
  return colorPalette[getRandomInt(0, maxIndex)]
}

//메세지 배경색 종류
const colorPalette = [
  '#173f5f',
  '#20639b',
  '#3caea3',
  '#f6d55c',
  '#ed553b',
  '#ef6c00',
  '#ffa726',
  '#cfd8dc',
  '#26a69a',
  '#2e7d32',
  '#ede7f6',
  '#b39ddb',
  '#7e57c2',
  '#512da8',
  '#35f3ff',
  '#00838f',
  '#26a69a',
  '#e1f5fe',
  '#42a5f5',
  '#1565c0'
]

/**
 * 랜덤 정수형을 반환
 * @param {min} 최소값 
 * @param {max} 최대값 
 * @returns 랜덤 정수값 반환(최댓값, 최솟값 포함)
 */
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}
