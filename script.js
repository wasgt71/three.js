import * as THREE from "three";
import { ArcballControls } from "three/addons/controls/ArcballControls.js";

function main() {
  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 10;

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 2;
  const scene = new THREE.Scene();

  const radius = 1;
  const detail = 0;

  const geometry = new THREE.OctahedronGeometry(radius, detail);

  const textureLoader = new THREE.TextureLoader();

  const textures = [
    textureLoader.load("/react.png"),
    textureLoader.load("/node.png"),
    textureLoader.load("/tailwind.png"),
    textureLoader.load("/three.png"),
    textureLoader.load("/github.png"),
    textureLoader.load("/express.png"),
    textureLoader.load("/postgresql.png"),
    textureLoader.load("/typescript.png"),
  ];

  const materials = textures.map((texture) => {
    return new THREE.MeshStandardMaterial({
      map: texture,
      side: THREE.DoubleSide,
      metalness: 0.1,
      roughness: 0.5,
    });
  });

  function setOctahedron(g) {
    let pos = g.attributes.position;
    let faces = pos.count / 3;
    let groupStart = 0;
    for (let i = 0; i < faces; i++) {
      g.addGroup(groupStart, 3, i);
      groupStart += 3;
    }
    let uvs = [];

    uvs.push(0.5, 1, 0.06698729810778059, 0.25, 0.9330127018922194, 0.25);
    uvs.push(0.06698729810778059, 0.75, 0.5, 0, 0.9330127018922194, 0.75);
    uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
    uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
    uvs.push(0.5, 1, 0.06698729810778059, 0.25, 0.9330127018922194, 0.25);
    uvs.push(0.06698729810778059, 0.75, 0.5, 0, 0.9330127018922194, 0.75);
    uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
    uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));

    console.log(uvs);
  }



  setOctahedron(geometry);

  const octa = new THREE.Mesh(
    geometry,
    materials.length > 1
      ? materials
      : new THREE.MeshBasicMaterial({ color: 0xffffff })
  );

  const octaWireFrame = new THREE.MeshBasicMaterial({
    color: 0xc0c0c0,
    wireframe: true,
  });

  const newInstance = new THREE.Mesh(geometry, octaWireFrame);

  scene.add(octa, newInstance);

  const color = 0xffffff;
  const intensity = 4;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
 

  document.addEventListener("mousedown", onPointerMove);


  function onPointerMove(event) {
    const coords = new THREE.Vector2(
      (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
      -((event.clientY / renderer.domElement.clientHeight) * 2 - 1),
    );

    raycaster.setFromCamera(coords, camera);
    const typeScript = {materialIndex: 7};
    const intersections = raycaster.intersectObjects(scene.children, true);
    if (intersections.length > 0) {
      const face = intersections[0].face;
      console.log(face);
      console.log(typeScript)
     if(face.materialIndex === 7){
      console.log("TypeScript");
     }if(face.materialIndex === 0){
      console.log("React");
     }if(face.materialIndex === 6){
      console.log("PostGreSQL");
     }if(face.materialIndex === 1){
      console.log("Node.js");
     }if(face.materialIndex === 5) {
      console.log("Express.js");
     }if(face.materialIndex === 3){
      console.log("Three.js");
     }
  }

}


  function render() {
    octa.rotation.x += -0.02;
   octa.rotation.y += 0.01;

    newInstance.rotation.x += -0.02;
    newInstance.rotation.y += 0.01;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
