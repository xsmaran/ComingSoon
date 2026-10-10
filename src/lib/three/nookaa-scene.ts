import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

type CanvasFactory = () => HTMLCanvasElement;
export type StoreView = "exterior" | "counter" | "seating";

export const storeViews: Record<StoreView, { position: [number, number, number]; target: [number, number, number] }> = {
  exterior: { position: [6.2, 5.4, 14.5], target: [0, 2.05, 0.6] },
  counter: { position: [-0.2, 2.55, 3.5], target: [0.25, 1.55, -1.9] },
  seating: { position: [-1.55, 2.4, 2.4], target: [3.75, 1.65, -0.5] },
};

/** A small, self-contained architectural model built from the three supplied renders. */
export function createNookaaScene(makeCanvas: CanvasFactory = () => document.createElement("canvas")) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#f5f1e9");
  const store = new THREE.Group();
  scene.add(store);
  const textures: THREE.Texture[] = [];
  const mat = (color: string, roughness = 0.6, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
  const bronze = mat("#462918", 0.32, 0.32);
  const darkFrame = mat("#211c16", 0.36, 0.4);
  const white = mat("#e0ddd6", 0.75);
  const steel = mat("#544f46", 0.44, 0.45);
  const chrome = mat("#b5b9bb", 0.19, 0.88);
  const chairFabric = mat("#b1b3b4", 0.96);
  const seatBase = mat("#733820", 0.82);
  const warmStrip = new THREE.MeshStandardMaterial({ color: "#ffe0a0", emissive: "#ffca6e", emissiveIntensity: 2.1 });
  const ivory = mat("#f1e9dc", 0.44);

  function box(parent: THREE.Object3D, size: [number, number, number], position: [number, number, number], material: THREE.Material, radius = 0) {
    const geometry = radius ? new RoundedBoxGeometry(...size, 3, radius) : new THREE.BoxGeometry(...size);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
  function cylinder(parent: THREE.Object3D, top: number, bottom: number, height: number, pos: [number, number, number], material: THREE.Material, segments = 32) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(top, bottom, height, segments), material);
    mesh.position.set(...pos);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
  function canvasTexture(width: number, height: number, draw: (ctx: CanvasRenderingContext2D) => void) {
    const canvas = makeCanvas();
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("The store texture canvas is unavailable.");
    draw(ctx);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    textures.push(texture);
    return texture;
  }
  const marbleTexture = canvasTexture(512, 512, (ctx) => {
    ctx.fillStyle = "#e6e2d9";
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 34; i++) {
      ctx.strokeStyle = i % 3 === 0 ? "rgba(121,111,100,.17)" : "rgba(168,158,144,.14)";
      ctx.lineWidth = i % 3 === 0 ? 1.2 : 3;
      ctx.beginPath();
      for (let x = -10; x < 530; x += 5) {
        const y = i * 18 + Math.sin(x * 0.011 + i) * 37 + Math.sin(x * 0.043 + i * 3) * 7 - x * 0.25;
        if (x === -10) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  });
  marbleTexture.wrapS = marbleTexture.wrapT = THREE.RepeatWrapping;
  marbleTexture.repeat.set(2.5, 2.5);
  const marble = new THREE.MeshStandardMaterial({ color: "#f1eee6", map: marbleTexture, roughness: 0.38 });
  const pavementTexture = canvasTexture(256, 256, (ctx) => {
    ctx.fillStyle = "#a9aaa5";
    ctx.fillRect(0, 0, 256, 256);
    for (let row = 0; row < 8; row++) for (let col = -1; col < 8; col++) {
      const offset = row % 2 ? 16 : 0;
      ctx.fillStyle = ["#c6c6bf", "#b7b9b2", "#d0cfc7", "#adafa9"][(row * 13 + col + 8) % 4];
      ctx.fillRect(col * 32 + offset + 1, row * 32 + 1, 30, 30);
    }
  });
  pavementTexture.wrapS = pavementTexture.wrapT = THREE.RepeatWrapping;
  pavementTexture.repeat.set(4, 1);
  const pavement = new THREE.MeshStandardMaterial({ map: pavementTexture, roughness: 0.94 });

  // Low floating plinth and marble shop floor.
  box(store, [10.2, 0.24, 8], [0, -0.19, 0.3], white, 0.06);
  box(store, [9.8, 0.1, 6.4], [0, -0.02, -0.2], marble);
  box(store, [10.2, 0.06, 1.6], [0, -0.03, 3.7], pavement);

  // Side and back walls: pale outer shell and warm brushed metal inner panels.
  const shell = new THREE.Group();
  store.add(shell);
  box(shell, [0.14, 5.45, 6.6], [-4.85, 2.68, -0.1], white);
  const rightWall = box(shell, [0.14, 5.45, 6.6], [4.85, 2.68, -0.1], white);
  box(shell, [9.8, 5.45, 0.16], [0, 2.68, -3.35], bronze);
  box(store, [0.05, 4.4, 6.1], [-4.75, 2.2, -0.25], steel);
  const innerRight = box(store, [0.05, 4.4, 6.1], [4.75, 2.2, -0.25], steel);
  box(store, [9.4, 4.4, 0.05], [0, 2.2, -3.24], steel);
  // Back panel vertical seams and the uninterrupted warm strip from the reference.
  for (let x = -4.65; x <= 4.7; x += 0.49) {
    box(store, [0.024, 2.65, 0.035], [x, 2.15, -3.18], ivory);
  }
  box(store, [9.35, 0.048, 0.09], [0, 3.53, -3.16], warmStrip);
  box(store, [0.055, 0.04, 6.05], [-4.68, 3.53, -0.15], warmStrip);
  box(store, [0.055, 0.04, 6.05], [4.68, 3.53, -0.15], warmStrip);
  // Brown banquette runs down the left; stainless cube stools sit in front.
  box(store, [0.84, 0.68, 5.3], [-4.18, 0.35, -0.1], seatBase, 0.06);
  box(store, [0.1, 1.08, 5.3], [-4.58, 0.76, -0.1], seatBase, 0.02);
  for (const z of [-1.4, 0.1, 1.6]) box(store, [0.7, 0.62, 0.7], [-2.95, 0.3, z], steel, 0.02);

  // Rounded central counter: dark metal fascia and pale marble top/base.
  box(store, [5.05, 1.34, 1.47], [0, 0.77, -1.75], steel, 0.26);
  box(store, [5.1, 0.2, 1.52], [0, 0.2, -1.75], ivory, 0.19);
  box(store, [5.35, 0.11, 1.67], [0, 1.46, -1.75], marble, 0.22);
  box(store, [5.04, 0.035, 0.045], [0, 0.33, -0.999], warmStrip);
  // Espresso machine, drip tray, cups and two grinders.
  box(store, [1.18, 0.58, 0.6], [-0.75, 1.8, -1.85], darkFrame, 0.06);
  box(store, [1.16, 0.09, 0.15], [-0.75, 2.075, -1.52], chrome, 0.02);
  box(store, [0.96, 0.055, 0.26], [-0.75, 1.53, -1.48], chrome, 0.02);
  for (const x of [-1.12, -0.78, -0.43]) {
    cylinder(store, 0.045, 0.045, 0.13, [x, 1.92, -1.49], chrome);
    cylinder(store, 0.075, 0.058, 0.12, [x, 1.62, -1.43], ivory);
  }
  for (const x of [0.38, 0.81]) {
    box(store, [0.25, 0.4, 0.3], [x, 1.7, -1.87], darkFrame, 0.04);
    cylinder(store, 0.115, 0.09, 0.24, [x, 2, -1.87], new THREE.MeshStandardMaterial({ color: "#84705a", transparent: true, opacity: 0.68, roughness: 0.2 }));
    cylinder(store, 0.12, 0.12, 0.04, [x, 2.14, -1.87], darkFrame);
  }
  // Sink and curved chrome tap.
  box(store, [0.48, 0.015, 0.35], [1.6, 1.524, -1.8], darkFrame, 0.06);
  const tapCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(1.8, 1.54, -1.9), new THREE.Vector3(1.8, 1.95, -1.9),
    new THREE.Vector3(1.65, 2.03, -1.9), new THREE.Vector3(1.55, 1.86, -1.9),
  ]);
  store.add(new THREE.Mesh(new THREE.TubeGeometry(tapCurve, 20, 0.022, 8, false), chrome));

  // Right-hand counter seating, as in the supplied interior view.
  box(store, [0.8, 0.14, 4.7], [4.2, 1.53, -0.35], bronze, 0.02);
  box(store, [0.14, 1.38, 4.7], [4.59, 0.76, -0.35], seatBase);
  for (const z of [-1.9, -0.25, 1.4]) {
    cylinder(store, 0.36, 0.4, 0.08, [3.58, 0.09, z], chrome);
    cylinder(store, 0.048, 0.05, 1.04, [3.58, 0.63, z], chrome);
    const footrest = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.019, 8, 32), chrome);
    footrest.rotation.x = Math.PI / 2;
    footrest.position.set(3.58, 0.4, z);
    store.add(footrest);
    cylinder(store, 0.45, 0.43, 0.15, [3.58, 1.17, z], chairFabric);
    const chairBack = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.45, 0.35, 24, 1, true, -Math.PI / 2, Math.PI), chairFabric);
    chairBack.position.set(3.58, 1.44, z);
    chairBack.rotation.y = Math.PI / 2;
    chairBack.castShadow = true;
    store.add(chairBack);
  }
  // Nine understated framed café prints, arranged 3 by 3 on the right wall.
  for (let row = 0; row < 3; row++) for (let col = 0; col < 3; col++) {
    const y = 2.18 + row * 0.66;
    const z = -2.3 + col * 1.05;
    box(store, [0.055, 0.56, 0.84], [4.68, y, z], darkFrame);
    box(store, [0.062, 0.49, 0.77], [4.64, y, z], ivory);
    box(store, [0.067, 0.23, 0.37], [4.59, y, z], bronze);
    const line = box(store, [0.073, 0.018, 0.22], [4.55, y + 0.045, z], ivory);
    line.rotation.x = (row - col) * 0.16;
  }

  // Warm luminous ceiling tiles intersected by a fine bronze grid.
  const ceiling = new THREE.Group();
  store.add(ceiling);
  const ceilingLight = new THREE.MeshStandardMaterial({ color: "#fff1d4", emissive: "#ffe4aa", emissiveIntensity: 0.44, side: THREE.DoubleSide });
  box(ceiling, [9.8, 0.13, 6.65], [0, 4.74, -0.1], bronze);
  box(ceiling, [9.42, 0.02, 6.27], [0, 4.661, -0.1], ceilingLight);
  for (let x = -4.65; x < 4.7; x += 0.77) box(ceiling, [0.037, 0.046, 6.3], [x, 4.626, -0.1], bronze);
  for (let z = -3.16; z < 3.2; z += 0.79) box(ceiling, [9.4, 0.046, 0.037], [0, 4.626, z], bronze);
  for (const x of [-2.4, 2.4]) box(ceiling, [0.23, 0.28, 6.4], [x, 4.55, -0.1], bronze);

  // White panelled facade with a generously proportioned brown entrance portal.
  const facade = new THREE.Group();
  store.add(facade);
  box(facade, [1.82, 5.45, 0.15], [-3.99, 2.68, 3.22], white);
  box(facade, [1.82, 5.45, 0.15], [3.99, 2.68, 3.22], white);
  box(facade, [6.25, 0.33, 0.16], [0, 5.22, 3.22], white);
  const seam = mat("#babbb6", 0.8);
  for (let y = 0.28; y < 4.3; y += 0.25) {
    box(facade, [1.8, 0.014, 0.008], [-3.99, y, 3.306], seam);
    box(facade, [1.8, 0.014, 0.008], [3.99, y, 3.306], seam);
  }
  for (const x of [-4.4, -3.63, 3.63, 4.4]) box(facade, [0.026, 1.02, 0.03], [x, 4.82, 3.315], seam);
  box(facade, [6.15, 0.94, 0.52], [0, 4.57, 3.33], bronze);
  for (const x of [-2.86, 2.86]) box(facade, [0.42, 4.1, 0.53], [x, 2.045, 3.33], bronze);
  box(facade, [6.15, 0.14, 0.53], [0, 0.07, 3.33], bronze);
  // Sign is a local canvas texture with transparent pixels, raised off the portal.
  const signTexture = canvasTexture(1024, 256, (ctx) => {
    ctx.clearRect(0, 0, 1024, 256);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "600 142px Georgia, serif";
    ctx.fillStyle = "#e6b675";
    ctx.shadowColor = "#8f5527";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 5;
    ctx.fillText("NOOKAA", 512, 139);
  });
  const signMaterial = new THREE.MeshStandardMaterial({ map: signTexture, transparent: true, emissive: "#b17b32", emissiveMap: signTexture, emissiveIntensity: 0.6, metalness: 0.45, roughness: 0.28, depthWrite: false });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.8, 0.95), signMaterial);
  sign.position.set(0, 4.57, 3.61);
  facade.add(sign);
  const glassMaterial = new THREE.MeshPhysicalMaterial({ color: "#b3beb6", transparent: true, opacity: 0.13, metalness: 0.18, roughness: 0.07, side: THREE.DoubleSide, depthWrite: false });
  const doorPanels: THREE.Group[] = [];
  for (let i = 0; i < 3; i++) {
    const panel = new THREE.Group();
    panel.position.set((i - 1) * 1.77, 0, 3.46);
    box(panel, [1.7, 3.78, 0.024], [0, 2.06, 0], glassMaterial);
    for (const x of [-0.87, 0.87]) box(panel, [0.035, 3.91, 0.06], [x, 2.04, 0.01], darkFrame);
    for (const y of [0.1, 3.99]) box(panel, [1.77, 0.045, 0.06], [0, y, 0.01], darkFrame);
    if (i > 0) box(panel, [0.03, 0.63, 0.045], [-0.7, 1.92, 0.06], chrome, 0.01);
    facade.add(panel);
    doorPanels.push(panel);
  }

  // Bamboo tree by the entrance: deterministic lightweight leaf geometry.
  const green = mat("#58653a", 0.86);
  const lightGreen = mat("#71854a", 0.86);
  const twig = mat("#66503a", 0.95);
  box(store, [1, 0.68, 1], [-2.02, 0.4, 2.35], steel, 0.025);
  box(store, [1.02, 0.065, 1.02], [-2.02, 0.75, 2.35], ivory);
  box(store, [0.86, 0.025, 0.86], [-2.02, 0.79, 2.35], mat("#403d26"));
  let seed = 421;
  const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, 0);
  leafShape.quadraticCurveTo(-0.13, 0.18, 0, 0.46);
  leafShape.quadraticCurveTo(0.11, 0.18, 0, 0);
  const leafGeometry = new THREE.ShapeGeometry(leafShape);
  const leafMaterial = green.clone();
  leafMaterial.side = THREE.DoubleSide;
  const lightLeafMaterial = lightGreen.clone();
  lightLeafMaterial.side = THREE.DoubleSide;
  for (let i = 0; i < 5; i++) {
    const x = -2.25 + i * 0.11;
    const z = 2.25 + (i % 2) * 0.18;
    const height = 2.55 + random() * 0.9;
    cylinder(store, 0.014, 0.025, height, [x, 0.79 + height / 2, z], twig, 8);
    for (let j = 0; j < 13; j++) {
      const leaf = new THREE.Mesh(leafGeometry, j % 3 ? leafMaterial : lightLeafMaterial);
      leaf.position.set(x + (random() - 0.5) * 1.2, 1.65 + random() * 2.35, z + (random() - 0.5) * 0.82);
      leaf.rotation.set(random() * 0.6, random() * Math.PI * 2, (random() - 0.5) * 2.5);
      store.add(leaf);
    }
  }

  // Local lighting; no network-dependent models, HDRIs, fonts or texture downloads.
  scene.add(new THREE.HemisphereLight("#fff1da", "#a79885", 2.4));
  const keyLight = new THREE.DirectionalLight("#ffe8c5", 3.4);
  keyLight.position.set(-5, 10, 8);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  keyLight.shadow.camera.left = keyLight.shadow.camera.bottom = -9;
  keyLight.shadow.camera.right = keyLight.shadow.camera.top = 9;
  keyLight.shadow.normalBias = 0.035;
  scene.add(keyLight);
  const softLight = new THREE.PointLight("#ffce8a", 65, 11, 2);
  softLight.position.set(0, 3.6, -0.8);
  scene.add(softLight);
  const backLight = new THREE.PointLight("#ffdca4", 38, 7, 2);
  backLight.position.set(0, 3.2, -2.8);
  scene.add(backLight);
  for (const x of [-4.17, 4.17]) {
    const light = new THREE.SpotLight("#ffe1ac", 30, 5, 0.42, 0.6, 2);
    light.position.set(x, 0.14, 3.5);
    light.target.position.set(x, 2.9, 3.3);
    scene.add(light, light.target);
    cylinder(store, 0.07, 0.07, 0.07, [x, 0.045, 3.52], darkFrame, 12);
  }
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), mat("#f5f1e9", 1));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.32;
  ground.receiveShadow = true;
  scene.add(ground);

  function setView(view: StoreView) {
    const outside = view === "exterior";
    ceiling.visible = true;
    facade.visible = outside;
    rightWall.visible = outside;
    innerRight.visible = true;
  }
  function dispose() {
    const materials = new Set<THREE.Material>();
    const geometries = new Set<THREE.BufferGeometry>();
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        geometries.add(object.geometry);
        for (const material of Array.isArray(object.material) ? object.material : [object.material]) materials.add(material);
      }
    });
    geometries.forEach((geometry) => geometry.dispose());
    materials.forEach((material) => material.dispose());
    textures.forEach((texture) => texture.dispose());
    scene.clear();
  }
  return { scene, store, setView, dispose, doorPanels };
}
