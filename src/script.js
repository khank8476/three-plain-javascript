import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Object
//const geometry = new THREE.BoxGeometry(1, 1, 1)
//const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
//const mesh = new THREE.Mesh(geometry, material)
//scene.add(mesh)

//jesuisundev

const geometry = new THREE.CylinderGeometry(5, 5, 20, 32)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
const cylinder = new THREE.Mesh(geometry, material)

scene.add(cylinder)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
//const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
//camera.position.z = 3
//jesuisundev
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 20
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
//renderer.setSize(sizes.width, sizes.height)
// jesuisundev
renderer.setSize(window.innerWidth, window.innerHeight)
//renderer.render(scene, camera)

function animate() {
    cylinder.rotation.x += 0.01
    cylinder.rotation.y += 0.01
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}
animate()