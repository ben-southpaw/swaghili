import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const url = 'kanye-face-1.jpg'
const cubeTexture = new THREE.TextureLoader().load(url); /*Variable for surface of cube, which fetches random image from public folder*/
let scale = 1;
let scaleVel = 0;

class Background {
    constructor() {

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor('pink');

        this.scene = new THREE.Scene(); /*Three requires a scene and a camera, which provides the perspective for the graphic/view*/
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100);
        this.camera.position.z = 3;

        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);

        const geometry= new THREE.BoxBufferGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ map: cubeTexture });
        this.kanyeBoxFace = new THREE.Mesh(geometry, material); /*This combines the elements into a single call*/

        this.scene.add(this.kanyeBoxFace);

        document.body.appendChild(this.renderer.domElement);
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.left = '0';

        this.addEvents();
        this.onResize();
        this.update();
    }

    addEvents() {
        window.addEventListener('resize', this.onResize.bind(this));
    }
    /*Update is called rapidly to realise the animation of the cube*/
    update() {
        this.kanyeBoxFace.rotation.y += 0.01;

        this.renderer.render(this.scene, this.camera);

        scaleVel = (1 - scale) * 0.05 + scaleVel * 0.85;
        scale += scaleVel;

        this.kanyeBoxFace.scale.setScalar(scale);

        requestAnimationFrame(() => {
            this.update();
        });
    }

    onResize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.renderer.setSize(w, h);
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
    }

    static setNewTexture(imgUrl) {
        console.log('new img', imgUrl)
        const img = new Image();   // Create new img element

        img.addEventListener('load', function() {
            cubeTexture.image = img;
            cubeTexture.needsUpdate = true;
        }, false);

        img.src = imgUrl; // Set source path
        scaleVel += 0.2;
    }
}

export default Background;/**
 * Created by southpaw on 13/12/19.
 */
