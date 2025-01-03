import * as THREE from "three";

function main() {
  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const fov = 75;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 2;
  const scene = new THREE.Scene();

  const radius = 1;
  const detail = 1;

  const geometry = new THREE.OctahedronGeometry(radius, detail);
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading: true,
  });

  const octa = new THREE.Mesh(geometry, material);
  

  renderer.render(scene, camera);

  const octaWireFrame = new THREE.MeshBasicMaterial({
    color: 0x000000,
    wireframe: true,
  });

 const newInstance = new THREE.Mesh(geometry, octaWireFrame);

 scene.add(octa, newInstance);

  const color = 0xffffff;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);

  light.position.set(-1, 2, 4);
  scene.add(light);

  function render() {
    octa.rotation.x += 0.01;
    octa.rotation.y += 0.01;
    newInstance.rotation.x += 0.01;
    newInstance.rotation.y += 0.01;


    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
