import * as THREE from "three";

function main() {
  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 2;
  const scene = new THREE.Scene();

  const radius = 1;
  const detail = 1;

  const geometry = new THREE.OctahedronGeometry(radius, detail);

 
  const textureLoader = new THREE.TextureLoader();
  const textures = [
    textureLoader.load("/react.png"),
    textureLoader.load("/node.png"),
    textureLoader.load("/tailwind.png"),
    textureLoader.load("/three.png"),
    textureLoader.load("/github.png"),
    textureLoader.load("/npm.png"),
    textureLoader.load("/postgresql.svg"),
    textureLoader.load("/typescript.png"),
    textureLoader.load("/git.svg"),
    textureLoader.load("/html.svg"),
    textureLoader.load("/prettier.svg"),
    textureLoader.load("/vite.svg"),
    textureLoader.load("/vscode.svg"),
    textureLoader.load("/webpack.svg"),
    textureLoader.load("/express.svg"),
    textureLoader.load("/eslint.svg"),
    textureLoader.load("/emmet.svg"),
    textureLoader.load("/css.svg"),
    textureLoader.load("/jest.svg"),
    textureLoader.load("/js.svg"),
    textureLoader.load("/react.png"),
    textureLoader.load("/postgresql.svg"),
    textureLoader.load("/node.png"),
    textureLoader.load("/tailwind.png"),
    textureLoader.load("/express.svg"),
    textureLoader.load("/three.png"),
    textureLoader.load("/npm.png"),
    textureLoader.load("/prettier.svg"),
    textureLoader.load("/git.svg"),
    textureLoader.load("/html.svg"),
    textureLoader.load("/vite.svg"),
    textureLoader.load("/vscode.svg"),
    textureLoader.load("/node.png"),
    textureLoader.load("/tailwind.png"),
   //express, git, jasacript es6, html 5, jest, vite,
   //eslint, prettier, Axios, React Router, tsParticles, css, prisma,
   //Emmet, VsCode, Live Server, React-slick, jsx, ejs, 
  ];

 
  const materials = textures.map((texture) => {
    return new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
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
    uvs.push(0.9330127018922194, 0.25, 0.5, 1, 0.06698729810778059, 0.25);
    uvs.push(0.5, 1, 0.06698729810778059, 0.25, 0.9330127018922194, 0.25);
    uvs.push(0.06698729810778059, 0.75, 0.5, 0, 0.9330127018922194, 0.75);
    uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
    uvs.push(0.9330127018922194, 0.25, 0.5, 1, 0.06698729810778059, 0.25);
    uvs.push(0.5, 1, 0.06698729810778059, 0.25, 0.9330127018922194, 0.25);
    uvs.push(0.06698729810778059, 0.75, 0.5, 0, 0.9330127018922194, 0.75);
    uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
    uvs.push(0.9330127018922194, 0.25, 0.5, 1, 0.06698729810778059, 0.25);
    uvs.push(0.5, 1, 0.06698729810778059, 0.25, 0.9330127018922194, 0.25);
    uvs.push(0.06698729810778059, 0.75, 0.5, 0, 0.9330127018922194, 0.75);
    uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
    uvs.push(0.9330127018922194, 0.25, 0.5, 1, 0.06698729810778059, 0.25);
    uvs.push(0.5, 1, 0.06698729810778059, 0.25, 0.9330127018922194, 0.25);
    uvs.push(0.06698729810778059, 0.75, 0.5, 0, 0.9330127018922194, 0.75);
    uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
    uvs.push(0.9330127018922194, 0.25, 0.5, 1, 0.06698729810778059, 0.25);
    uvs.push(0.5, 1, 0.06698729810778059, 0.25, 0.9330127018922194, 0.25);
    uvs.push(0.06698729810778059, 0.75, 0.5, 0, 0.9330127018922194, 0.75);
    uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
    uvs.push(0.9330127018922194, 0.25, 0.5, 1, 0.06698729810778059, 0.25);
    uvs.push(0.5, 1, 0.06698729810778059, 0.25, 0.9330127018922194, 0.25);
    uvs.push(0.06698729810778059, 0.75, 0.5, 0, 0.9330127018922194, 0.75);
    uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
    uvs.push(0.9330127018922194, 0.25, 0.5, 1, 0.06698729810778059, 0.25);
    uvs.push(0.5, 1, 0.06698729810778059, 0.25, 0.9330127018922194, 0.25);
    uvs.push(0.06698729810778059, 0.75, 0.5, 0, 0.9330127018922194, 0.75);
    uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
    uvs.push(0.9330127018922194, 0.25, 0.5, 1, 0.06698729810778059, 0.25);
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  }

  setOctahedron(geometry);

 
  const octa = new THREE.Mesh(
    geometry,
    materials.length > 1
      ? materials
      : new THREE.MeshBasicMaterial({ color: 0xffffff })
  );

 
  const octaWireFrame = new THREE.MeshBasicMaterial({
    color: 0xC0C0C0,
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
