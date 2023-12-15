import * as THREE from 'three'
import{OrbitControls} from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

const geometry2 = new THREE.BoxGeometry(3,3,3);
const material2 = new THREE.MeshLambertMaterial({color: 0xff0000});
const cube2 = new THREE.Mesh(geometry2,material2);
scene.add(cube2);
cube2.position.x = -6

const geometry2 = new THREE.BoxGeometry(3,3,3);
const material2 = new THREE.MeshLambertMaterial({color: 0xff0000});
const cube2 = new THREE.Mesh(geometry2,material2);
scene.add(cube2);
cube2.position.x = -6

const light = new THREE.PointLight(0xffffff, 123);
scene.add(light);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);



camera.position.z = 8;

const sphereGeometry = new THREE.SphereGeometry(2,64,64);
const sphereMateriel = new THREE.MeshLambertMaterial({color:0xfff});


const sphere = new THREE.Mesh(sphereGeometry, sphereMateriel);
scene.add(sphere);


function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.10;
    cube.rotation.y += 0.10;

    cube2.rotation.x += 0.05;
    cube2.rotation.y += 0.05;
  
    renderer.render(scene,camera)
}


animate()


