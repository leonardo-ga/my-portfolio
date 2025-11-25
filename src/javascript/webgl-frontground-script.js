/*
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import InteractiveEarth from './models/InteractiveEarth';

// Canvas
const canvas = document.querySelector('canvas.webgl-frontground')

// Sizes
const sizes = { width: window.innerWidth, height: window.innerHeight };

// Scene
const scene = new THREE.Scene();

// Loaders
const loaders = {};
loaders.gltfLoader = new GLTFLoader();
loaders.dracoLoader = new DRACOLoader();
loaders.dracoLoader.setDecoderPath('/draco/');
loaders.gltfLoader.setDRACOLoader(loaders.dracoLoader);
loaders.textureLoader = new THREE.TextureLoader();
loaders.cubeTextureLoader = new THREE.CubeTextureLoader();

// Paper plane
let paperPlaneModel;

loaders.gltfLoader.load(
    './models/paper-plane/scene.gltf',
    (file) => {
        console.log("succesfully loaded: " + file);
        let wholeModel = file.scene;

        wholeModel.traverse((child) => {
            if(child instanceof THREE.Mesh) {
                child.castShadow = true;
                paperPlaneModel = child;
            }
        })

        paperPlaneModel.position.set(5, -5, -10);
        paperPlaneModel.scale.set(0.001, 0.001, 0.001);
        paperPlaneModel.rotation.x = - Math.PI / 4;

        scene.add(paperPlaneModel);
    }
)

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 2;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Track scroll
let scrollY = 0;
window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
});

// Animate
function animate() {
    requestAnimationFrame(animate);

    if (!!paperPlaneModel) {
        paperPlaneModel.position.x = scrollY * 0.005;
        paperPlaneModel.position.y = -scrollY* 0.005
    }

    // Parallax effect based on scroll
    camera.position.y = -scrollY * 0.005;  // subtle vertical parallax

    renderer.render(scene, camera);
}

animate();

// Resize
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
});
*/