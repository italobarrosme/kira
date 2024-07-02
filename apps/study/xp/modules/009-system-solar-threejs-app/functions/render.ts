/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import starsTexture from './../../../public/system-solar-threejs-app/stars.jpg'
import sunTexture from './../../../public/system-solar-threejs-app/sun.jpg'
import mercuryTexture from './../../../public/system-solar-threejs-app/mercury.jpg'
import venusTexture from './../../../public/system-solar-threejs-app/venus.jpg'
import earthTexture from './../../../public/system-solar-threejs-app/earth.jpg'
import marsTexture from './../../../public/system-solar-threejs-app/mars.jpg'
import jupiterTexture from './../../../public/system-solar-threejs-app/jupiter.jpg'
import saturnTexture from './../../../public/system-solar-threejs-app/saturn.jpg'
import saturnRingTexture from './../../../public/system-solar-threejs-app/saturn-ring.png'
import uranusTexture from './../../../public/system-solar-threejs-app/uranus.jpg'
import uranusRingTexture from './../../../public/system-solar-threejs-app/uranus-ring.png'
import neptuneTexture from './../../../public/system-solar-threejs-app/neptune.jpg'
import plutoTexture from './../../../public/system-solar-threejs-app/pluto.jpg'

export default function render() {
  const renderer = new THREE.WebGLRenderer({ antialias: true })

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping

  const sceneElement = document.getElementById('scene')

  if (sceneElement) {
    sceneElement.appendChild(renderer.domElement)
  }

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  const orbitControls = new OrbitControls(camera, renderer.domElement)

  camera.position.set(-90, 140, 140)
  orbitControls.update()

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
  scene.add(ambientLight)

  const cubeTextureLoader = new THREE.CubeTextureLoader()
  scene.background = cubeTextureLoader.load([
    starsTexture.src,
    starsTexture.src,
    starsTexture.src,
    starsTexture.src,
    starsTexture.src,
    starsTexture.src
  ])

  const textureLoader = new THREE.TextureLoader()

  const sunGeo = new THREE.SphereGeometry(16, 30, 30)
  const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(sunTexture.src)
  })
  const sun = new THREE.Mesh(sunGeo, sunMat)
  scene.add(sun)

  function createPlanet(size: any, texture: any, position: any, ring: any) {
    const geo = new THREE.SphereGeometry(size, 30, 30)
    const mat = new THREE.MeshStandardMaterial({
      map: textureLoader.load(texture)
    })
    const mesh = new THREE.Mesh(geo, mat)
    const object = new THREE.Object3D()

    object.add(mesh)

    if (ring) {
      const ringGeo = new THREE.RingGeometry(
        ring.innerRadius,
        ring.outerRadius,
        32
      )
      const ringMat = new THREE.MeshBasicMaterial({
        map: textureLoader.load(ring.texture.src),
        side: THREE.DoubleSide
      })
      const ringMesh = new THREE.Mesh(ringGeo, ringMat)
      object.add(ringMesh)
      ringMesh.position.x = position
      ringMesh.rotation.x = -0.5 * Math.PI
    }
    scene.add(object)
    mesh.position.x = position
    return { mesh, object }
  }

  const mercury = createPlanet(3.2, mercuryTexture.src, 30, null)
  const venus = createPlanet(5.7, venusTexture.src, 44, null)
  const earth = createPlanet(6, earthTexture.src, 62, null)
  const mars = createPlanet(4, marsTexture.src, 78, null)
  const jupiter = createPlanet(12, jupiterTexture.src, 100, null)
  const saturn = createPlanet(10, saturnTexture.src, 138, {
    innerRadius: 10,
    outerRadius: 20,
    texture: saturnRingTexture
  })
  const uranus = createPlanet(7, uranusTexture.src, 180, {
    innerRadius: 7,
    outerRadius: 20,
    texture: uranusRingTexture
  })
  const neptune = createPlanet(6, neptuneTexture.src, 210, null)
  const pluto = createPlanet(1, plutoTexture.src, 216, null)

  // light sun
  const sunLight = new THREE.PointLight(0xffe0aa, 8000, 1000)
  sunLight.position.set(0, 0, 0) // Ajuste a posição para um ponto acima da cena

  scene.add(sunLight)

  function animate() {
    // sefl rotation
    sun.rotateY(0.0004)
    mercury.mesh.rotateY(0.0004)
    venus.mesh.rotateY(0.0002)
    earth.mesh.rotateY(0.002)
    mars.mesh.rotateY(0.0018)
    jupiter.mesh.rotateY(0.004)
    saturn.mesh.rotateY(0.0038)
    uranus.mesh.rotateY(0.003)
    neptune.mesh.rotateY(0.0032)
    pluto.mesh.rotateY(0.0008)

    //Around-sun-rotation
    mercury.object.rotateY(0.004)
    venus.object.rotateY(0.0015)
    earth.object.rotateY(0.001)
    mars.object.rotateY(0.0008)
    jupiter.object.rotateY(0.0002)
    saturn.object.rotateY(0.00009)
    uranus.object.rotateY(0.00004)
    neptune.object.rotateY(0.00001)
    pluto.object.rotateY(0.000007)

    renderer.render(scene, camera)
  }

  renderer.setAnimationLoop(animate)

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })
}
