// 기본 설정
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 배경색을 설정하여 장면이 잘 보이도록
renderer.setClearColor(0xeeeeee, 1)

// 큐브 지오메트리와 머티리얼 생성
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// 카메라 위치 설정
camera.position.z = 5

// 애니메이션 루프
function animate() {
  requestAnimationFrame(animate)

  // 큐브 회전
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  // 렌더링
  renderer.render(scene, camera)
}

animate()

// 반응형 처리
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
