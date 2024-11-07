// 기본 설정
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ antialias: true })

// 조명 추가
const ambientLight = new THREE.AmbientLight(0x404040, 1) // 주변광
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1) // 방향광
directionalLight.position.set(10, 10, 10).normalize() // 위치 설정
scene.add(directionalLight)

//랜더링
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 지오메트리 텍스처 적용
const textureLoader = new THREE.TextureLoader() // 이게 있어야 이미지 파일을 불러올 수 있는 객체가 생성됨

const newjeans_texture_front = textureLoader.load('./assets/images/album/3dTexture/newjeans/front.png')
const newjeans_texture_back = textureLoader.load('./assets/images/album/3dTexture/newjeans/back.png')
const newjeans_texture_top = textureLoader.load('./assets/images/album/3dTexture/newjeans/top.png')
const newjeans_texture_bottom = textureLoader.load('./assets/images/album/3dTexture/newjeans/bottom.png')
const newjeans_texture_left = textureLoader.load('./assets/images/album/3dTexture/newjeans/left.png')
const newjeans_texture_right = textureLoader.load('./assets/images/album/3dTexture/newjeans/right.png')

// 큐브 지오메트리와 머티리얼 생성
const geometry = new THREE.BoxGeometry(23.4, 30.9, 2.5) //앨범 사이즈
//const material = new THREE.MeshStandardMaterial({ map: newjeans_texture_front })
const materials = [
  new THREE.MeshStandardMaterial({ map: newjeans_texture_front }), // 앞면
  new THREE.MeshStandardMaterial({ map: newjeans_texture_back }), // 뒷면
  new THREE.MeshStandardMaterial({ map: newjeans_texture_top }), // 윗면
  new THREE.MeshStandardMaterial({ map: newjeans_texture_bottom }), // 아랫면
  new THREE.MeshStandardMaterial({ map: newjeans_texture_left }), // 왼쪽면
  new THREE.MeshStandardMaterial({ map: newjeans_texture_right }) // 오른쪽면
]
const cube = new THREE.Mesh(geometry, materials)
scene.add(cube)

// 카메라 위치 설정
camera.position.z = 30

// 마우스 관련 변수
const mouse = new THREE.Vector2()
let isMouseDown = false // 마우스 버튼이 눌린 상태 추적
let SELECTED = cube // 기본적으로 큐브를 선택

// 마우스 이동 이벤트
function onDocumentMouseMove(event) {
  event.preventDefault()

  if (isMouseDown && SELECTED) {
    // 마우스 좌표를 3D 공간의 -1 ~ 1 범위로 변환
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    // 마우스를 따라 큐브 회전 (회전 속도 조절)
    SELECTED.rotation.x = mouse.y * Math.PI // 마우스 Y값으로 X축 회전
    SELECTED.rotation.y = mouse.x * Math.PI // 마우스 X값으로 Y축 회전
  }
}

// 마우스 클릭 이벤트
function onDocumentMouseDown(event) {
  event.preventDefault()

  // 마우스 좌표를 3D 공간으로 변환
  const raycaster = new THREE.Raycaster()
  const mouseVector = new THREE.Vector2()
  mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1
  mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1

  // 카메라와 마우스 좌표를 통해 레이캐스팅
  raycaster.setFromCamera(mouseVector, camera)
  const intersects = raycaster.intersectObject(cube)

  // 오브젝트가 클릭되었으면 SELECTED에 큐브를 저장
  if (intersects.length > 0) {
    SELECTED = cube
    isMouseDown = true // 마우스 버튼 눌림 상태
  } else {
    // 배경을 클릭하면 SELECTED를 큐브로 설정하고, 회전 시작
    SELECTED = cube
    isMouseDown = true
  }
}

// 마우스 버튼 떼기 이벤트
function onDocumentMouseUp(event) {
  event.preventDefault()
  isMouseDown = false // 마우스 버튼 떼면 회전 멈춤
  SELECTED = null // 선택된 오브젝트도 해제
}

// 애니메이션 루프
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

// 이벤트 리스너 추가
window.addEventListener('mousemove', onDocumentMouseMove, false)
window.addEventListener('mousedown', onDocumentMouseDown, false)
window.addEventListener('mouseup', onDocumentMouseUp, false)

// 렌더링
animate()

// 반응형 처리
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
