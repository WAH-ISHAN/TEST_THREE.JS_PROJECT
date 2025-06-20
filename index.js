import * as THREE from 'https://unpkg.com/three@0.160.1/build/three.module.js';

//DAY01

const scene = new THREE.Scene(); //function to create a scene


//Red Cube
const geometry = new THREE.BoxGeometry(1,1,1)

const material = new THREE.MeshBasicMaterial({
    color: '#ff0000' // Red color
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3; // Set the camera position along the z-axis

scene.add(camera)


//Renderer
const canvas = document.querySelector('.webgl'); // Select the canvas element
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera); // Render the scene with the camera



//DAY02