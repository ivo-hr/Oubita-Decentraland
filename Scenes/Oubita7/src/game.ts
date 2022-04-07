import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item"
import Script2 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script3 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script4 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script5 from "../b79a150e-5914-4fdf-a6b4-c7ff0c6833dd/src/item"
import Script6 from "../da30258e-3cc1-48a4-bc55-508e923ae977/src/item"
import Script7 from "../8d62d5a3-411c-43f8-a438-574ccf3d0fbe/src/item"
import Script8 from "../4c9fa249-97ec-4f32-8fb8-b96f69ba8892/src/item"
import Script9 from "../2263960d-51ff-483a-bd2a-a9d286558620/src/item"
import Script10 from "../e25d12ec-e349-4c76-9826-1094458e3982/src/item"
import Script11 from "../85cf3207-2792-4349-9938-21fd82ea2168/src/item"
import Script12 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script13 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script14 from "../a87c0a7e-f8f7-4bc8-b02d-60e053ccf939/src/item"
import Script15 from "../3cf05054-0a57-4b00-ba77-a3f21876494d/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const toolbox = new Entity('toolbox')
engine.addEntity(toolbox)
toolbox.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(0.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toolbox.addComponentOrReplace(transform2)

const floorLightDisc = new Entity('floorLightDisc')
engine.addEntity(floorLightDisc)
floorLightDisc.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(27.5, 0, 43.8811149597168),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2, 2)
})
floorLightDisc.addComponentOrReplace(transform3)
const gltfShape = new GLTFShape("0845fe62-9876-4e6a-a9c2-e001667c455b/Light_04/Light_04.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
floorLightDisc.addComponentOrReplace(gltfShape)

const clickArea = new Entity('clickArea')
engine.addEntity(clickArea)
clickArea.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(27.5, 0, 44),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 0.5099999904632568, 2)
})
clickArea.addComponentOrReplace(transform4)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(25.5, 0.1635526418685913, 31.045602798461914),
  rotation: new Quaternion(8.449403523581086e-15, 1, -1.1920928244535389e-7, -2.2351741790771484e-8),
  scale: new Vector3(1, 1, 1)
})
wallPlainGlass.addComponentOrReplace(transform5)
const gltfShape2 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape2)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
wallPlainGlass2.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(29.5, 0.1598912477493286, 31.351280212402344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallPlainGlass2.addComponentOrReplace(transform6)

const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(27.5, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 4.5, 7)
})
triggerArea.addComponentOrReplace(transform7)

const floorGlass = new Entity('floorGlass')
engine.addEntity(floorGlass)
floorGlass.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(29.5, 23.213342666625977, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass.addComponentOrReplace(transform8)
const gltfShape3 = new GLTFShape("f4a4956e-f60a-4108-82c7-41b5ebda6549/GlassFloor.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
floorGlass.addComponentOrReplace(gltfShape3)

const clickArea2 = new Entity('clickArea2')
engine.addEntity(clickArea2)
clickArea2.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(27.5, 23, 44),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 0.5099999904632568, 2)
})
clickArea2.addComponentOrReplace(transform9)

const bermudaGrass = new Entity('bermudaGrass')
engine.addEntity(bermudaGrass)
bermudaGrass.setParent(_scene)
const gltfShape4 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
bermudaGrass.addComponentOrReplace(gltfShape4)
const transform10 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass.addComponentOrReplace(transform10)

const bermudaGrass2 = new Entity('bermudaGrass2')
engine.addEntity(bermudaGrass2)
bermudaGrass2.setParent(_scene)
bermudaGrass2.addComponentOrReplace(gltfShape4)
const transform11 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass2.addComponentOrReplace(transform11)

const bermudaGrass3 = new Entity('bermudaGrass3')
engine.addEntity(bermudaGrass3)
bermudaGrass3.setParent(_scene)
bermudaGrass3.addComponentOrReplace(gltfShape4)
const transform12 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass3.addComponentOrReplace(transform12)

const bermudaGrass4 = new Entity('bermudaGrass4')
engine.addEntity(bermudaGrass4)
bermudaGrass4.setParent(_scene)
bermudaGrass4.addComponentOrReplace(gltfShape4)
const transform13 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass4.addComponentOrReplace(transform13)

const bermudaGrass5 = new Entity('bermudaGrass5')
engine.addEntity(bermudaGrass5)
bermudaGrass5.setParent(_scene)
bermudaGrass5.addComponentOrReplace(gltfShape4)
const transform14 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass5.addComponentOrReplace(transform14)

const bermudaGrass6 = new Entity('bermudaGrass6')
engine.addEntity(bermudaGrass6)
bermudaGrass6.setParent(_scene)
bermudaGrass6.addComponentOrReplace(gltfShape4)
const transform15 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass6.addComponentOrReplace(transform15)

const bermudaGrass7 = new Entity('bermudaGrass7')
engine.addEntity(bermudaGrass7)
bermudaGrass7.setParent(_scene)
bermudaGrass7.addComponentOrReplace(gltfShape4)
const transform16 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass7.addComponentOrReplace(transform16)

const bermudaGrass8 = new Entity('bermudaGrass8')
engine.addEntity(bermudaGrass8)
bermudaGrass8.setParent(_scene)
bermudaGrass8.addComponentOrReplace(gltfShape4)
const transform17 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass8.addComponentOrReplace(transform17)

const bermudaGrass9 = new Entity('bermudaGrass9')
engine.addEntity(bermudaGrass9)
bermudaGrass9.setParent(_scene)
bermudaGrass9.addComponentOrReplace(gltfShape4)
const transform18 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass9.addComponentOrReplace(transform18)

const bermudaGrass10 = new Entity('bermudaGrass10')
engine.addEntity(bermudaGrass10)
bermudaGrass10.setParent(_scene)
bermudaGrass10.addComponentOrReplace(gltfShape4)
const transform19 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass10.addComponentOrReplace(transform19)

const bermudaGrass11 = new Entity('bermudaGrass11')
engine.addEntity(bermudaGrass11)
bermudaGrass11.setParent(_scene)
bermudaGrass11.addComponentOrReplace(gltfShape4)
const transform20 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass11.addComponentOrReplace(transform20)

const bermudaGrass12 = new Entity('bermudaGrass12')
engine.addEntity(bermudaGrass12)
bermudaGrass12.setParent(_scene)
bermudaGrass12.addComponentOrReplace(gltfShape4)
const transform21 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass12.addComponentOrReplace(transform21)

const bermudaGrass13 = new Entity('bermudaGrass13')
engine.addEntity(bermudaGrass13)
bermudaGrass13.setParent(_scene)
bermudaGrass13.addComponentOrReplace(gltfShape4)
const transform22 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass13.addComponentOrReplace(transform22)

const bermudaGrass14 = new Entity('bermudaGrass14')
engine.addEntity(bermudaGrass14)
bermudaGrass14.setParent(_scene)
bermudaGrass14.addComponentOrReplace(gltfShape4)
const transform23 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass14.addComponentOrReplace(transform23)

const bermudaGrass15 = new Entity('bermudaGrass15')
engine.addEntity(bermudaGrass15)
bermudaGrass15.setParent(_scene)
bermudaGrass15.addComponentOrReplace(gltfShape4)
const transform24 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass15.addComponentOrReplace(transform24)

const floorLightDisc2 = new Entity('floorLightDisc2')
engine.addEntity(floorLightDisc2)
floorLightDisc2.setParent(_scene)
floorLightDisc2.addComponentOrReplace(gltfShape)
const transform25 = new Transform({
  position: new Vector3(16.5, 29.071725845336914, 47.651885986328125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9061408042907715, 2, 1.8257479667663574)
})
floorLightDisc2.addComponentOrReplace(transform25)

const clickArea3 = new Entity('clickArea3')
engine.addEntity(clickArea3)
clickArea3.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(16.5, 29.32918930053711, 47.71237564086914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 0.5099999904632568, 2)
})
clickArea3.addComponentOrReplace(transform26)

const roofGlassEdges = new Entity('roofGlassEdges')
engine.addEntity(roofGlassEdges)
roofGlassEdges.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(22.000446319580078, 33.692867279052734, 51.638572692871094),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.8167569637298584, 1, 2.75905179977417)
})
roofGlassEdges.addComponentOrReplace(transform27)
const gltfShape5 = new GLTFShape("804c94f9-20d8-4fd3-aca0-d096cad08ff7/GlassRoof_2Edges.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
roofGlassEdges.addComponentOrReplace(gltfShape5)

const roofGlassEdges2 = new Entity('roofGlassEdges2')
engine.addEntity(roofGlassEdges2)
roofGlassEdges2.setParent(_scene)
roofGlassEdges2.addComponentOrReplace(gltfShape5)
const transform28 = new Transform({
  position: new Vector3(22.000446319580078, 43.34697341918945, 51.638572692871094),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.8167574405670166, 1, 2.759052276611328)
})
roofGlassEdges2.addComponentOrReplace(transform28)

const roofGlassEdges3 = new Entity('roofGlassEdges3')
engine.addEntity(roofGlassEdges3)
roofGlassEdges3.setParent(_scene)
roofGlassEdges3.addComponentOrReplace(gltfShape5)
const transform29 = new Transform({
  position: new Vector3(22.000446319580078, 52.66782760620117, 51.638572692871094),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.816758871078491, 1, 2.7590537071228027)
})
roofGlassEdges3.addComponentOrReplace(transform29)

const floorGlass2 = new Entity('floorGlass2')
engine.addEntity(floorGlass2)
floorGlass2.setParent(_scene)
floorGlass2.addComponentOrReplace(gltfShape3)
const transform30 = new Transform({
  position: new Vector3(18.436330795288086, 71.49091339111328, 49.63858413696289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass2.addComponentOrReplace(transform30)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(35.4310188293457, 25.987442016601562, 41),
  rotation: new Quaternion(0.13794967532157898, -0.6935198903083801, 0.13794976472854614, 0.6935199499130249),
  scale: new Vector3(5.5000081062316895, 5.500000476837158, 1.000001311302185)
})
videoStream.addComponentOrReplace(transform31)

const coffeeTable = new Entity('coffeeTable')
engine.addEntity(coffeeTable)
coffeeTable.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(16.5, 37.98884963989258, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
coffeeTable.addComponentOrReplace(transform32)
const gltfShape6 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
coffeeTable.addComponentOrReplace(gltfShape6)

const blockFloorLight = new Entity('blockFloorLight')
engine.addEntity(blockFloorLight)
blockFloorLight.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(16.5, 37.958717346191406, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.5, 2)
})
blockFloorLight.addComponentOrReplace(transform33)

const tallPalmTree = new Entity('tallPalmTree')
engine.addEntity(tallPalmTree)
tallPalmTree.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(15.5, 71.5, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree.addComponentOrReplace(transform34)
const gltfShape7 = new GLTFShape("a29c8a0e-1f2c-4d85-a099-36301da3fe36/PalmTree_02/PalmTree_02.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
tallPalmTree.addComponentOrReplace(gltfShape7)

const tallPalmTree2 = new Entity('tallPalmTree2')
engine.addEntity(tallPalmTree2)
tallPalmTree2.setParent(_scene)
tallPalmTree2.addComponentOrReplace(gltfShape7)
const transform35 = new Transform({
  position: new Vector3(15.5, 71.5, 38.5),
  rotation: new Quaternion(-1.1059513315930347e-15, 0.5555702447891235, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
tallPalmTree2.addComponentOrReplace(transform35)

const bentPalmTree = new Entity('bentPalmTree')
engine.addEntity(bentPalmTree)
bentPalmTree.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(16.500001907348633, 71, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bentPalmTree.addComponentOrReplace(transform36)
const gltfShape8 = new GLTFShape("e0db669f-e803-4528-bb16-e1e3001956d9/PalmTree_01/PalmTree_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
bentPalmTree.addComponentOrReplace(gltfShape8)

const tallPalmTree3 = new Entity('tallPalmTree3')
engine.addEntity(tallPalmTree3)
tallPalmTree3.setParent(_scene)
tallPalmTree3.addComponentOrReplace(gltfShape7)
const transform37 = new Transform({
  position: new Vector3(39.5, 71.5, 46.75),
  rotation: new Quaternion(-1.1059513315930347e-15, 0.5555702447891235, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999997615814209, 1, 0.9999997615814209)
})
tallPalmTree3.addComponentOrReplace(transform37)

const tallPalmTree4 = new Entity('tallPalmTree4')
engine.addEntity(tallPalmTree4)
tallPalmTree4.setParent(_scene)
tallPalmTree4.addComponentOrReplace(gltfShape7)
const transform38 = new Transform({
  position: new Vector3(39.5, 71.5, 38.25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree4.addComponentOrReplace(transform38)

const bush = new Entity('bush')
engine.addEntity(bush)
bush.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(16.5, 71.5, 31.5),
  rotation: new Quaternion(-5.687684786310435e-15, -0.3826834559440613, 4.561942290592924e-8, -0.9238795042037964),
  scale: new Vector3(1.000002145767212, 1.5, 1.000002145767212)
})
bush.addComponentOrReplace(transform39)
const gltfShape9 = new GLTFShape("b34ad4ca-db96-44fe-8fd6-86b4aa9f2218/HWN20_Bush.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
bush.addComponentOrReplace(gltfShape9)

const bentPalmTree2 = new Entity('bentPalmTree2')
engine.addEntity(bentPalmTree2)
bentPalmTree2.setParent(_scene)
bentPalmTree2.addComponentOrReplace(gltfShape8)
const transform40 = new Transform({
  position: new Vector3(38.5, 71, 35.5),
  rotation: new Quaternion(-1.2518071228575546e-14, 0.9807853102684021, -1.169186987226567e-7, 0.19509033858776093),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
bentPalmTree2.addComponentOrReplace(transform40)

const bush2 = new Entity('bush2')
engine.addEntity(bush2)
bush2.setParent(_scene)
bush2.addComponentOrReplace(gltfShape9)
const transform41 = new Transform({
  position: new Vector3(38.5, 71.5, 30.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.5, 1.0000019073486328)
})
bush2.addComponentOrReplace(transform41)

const bentPalmTree3 = new Entity('bentPalmTree3')
engine.addEntity(bentPalmTree3)
bentPalmTree3.setParent(_scene)
bentPalmTree3.addComponentOrReplace(gltfShape8)
const transform42 = new Transform({
  position: new Vector3(16.500001907348633, 71, 42),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
bentPalmTree3.addComponentOrReplace(transform42)

const speakers = new Entity('speakers')
engine.addEntity(speakers)
speakers.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(20.5, 71.5, 31),
  rotation: new Quaternion(-5.410954887277719e-15, -0.2902846932411194, 3.460463915416767e-8, -0.9569404125213623),
  scale: new Vector3(2.000000476837158, 2, 1.000000238418579)
})
speakers.addComponentOrReplace(transform43)

const speakers2 = new Entity('speakers2')
engine.addEntity(speakers2)
speakers2.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(36, 71.5, 30.5),
  rotation: new Quaternion(-1.1387964105513595e-15, 0.19509033858776093, -2.325656645041363e-8, -0.9807853102684021),
  scale: new Vector3(3.7071073055267334, 4, 1.1464468240737915)
})
speakers2.addComponentOrReplace(transform44)

const radioCyberpunk = new Entity('radioCyberpunk')
engine.addEntity(radioCyberpunk)
radioCyberpunk.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(28.836605072021484, 73.23040008544922, 32.2677001953125),
  rotation: new Quaternion(-3.552713678800501e-15, 1.4901161193847656e-8, 8.581146793032284e-15, -1),
  scale: new Vector3(1.5000017881393433, 2.567028522491455, 1.000001072883606)
})
radioCyberpunk.addComponentOrReplace(transform45)

const wallLEDGrid = new Entity('wallLEDGrid')
engine.addEntity(wallLEDGrid)
wallLEDGrid.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(33, 71.29338836669922, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.784754753112793, 0.5, 22.658113479614258)
})
wallLEDGrid.addComponentOrReplace(transform46)
const gltfShape10 = new GLTFShape("bdd5671b-9c8f-43c7-8385-f0dd70257863/LEDGridWall.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
wallLEDGrid.addComponentOrReplace(gltfShape10)

const speakers3 = new Entity('speakers3')
engine.addEntity(speakers3)
speakers3.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(21.5, 71.5, 28.5),
  rotation: new Quaternion(-3.605510936468756e-15, 0.19509029388427734, -2.3256580661268345e-8, 0.9807853698730469),
  scale: new Vector3(3.7071075439453125, 4, 1.1464470624923706)
})
speakers3.addComponentOrReplace(transform47)

const stairsFloating = new Entity('stairsFloating')
engine.addEntity(stairsFloating)
stairsFloating.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(34.85047149658203, 71.28866577148438, 30.5),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000039339065552, 0.5, 0.5000019669532776)
})
stairsFloating.addComponentOrReplace(transform48)
const gltfShape11 = new GLTFShape("896b942f-3c65-4d53-b8ff-8d874270fe6e/floatingStairs.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
stairsFloating.addComponentOrReplace(gltfShape11)

const roofBlack = new Entity('roofBlack')
engine.addEntity(roofBlack)
roofBlack.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(42.000003814697266, 66.5, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.790256023406982, 1, 9.876068115234375)
})
roofBlack.addComponentOrReplace(transform49)
const gltfShape12 = new GLTFShape("0d67ab09-6591-44dc-bc70-2fd1dbc49d06/BlackRoof.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
roofBlack.addComponentOrReplace(gltfShape12)

const spark = new Entity('spark')
engine.addEntity(spark)
spark.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(21.67552375793457, 78.02174377441406, 32.75471115112305),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark.addComponentOrReplace(transform50)

const spark2 = new Entity('spark2')
engine.addEntity(spark2)
spark2.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(32.69689178466797, 78.02174377441406, 32.75471115112305),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark2.addComponentOrReplace(transform51)

const barM = new Entity('barM')
engine.addEntity(barM)
barM.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(28.5, 73.76612091064453, 54.87474060058594),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
barM.addComponentOrReplace(transform52)
const gltfShape13 = new GLTFShape("2312b12f-d481-4229-be52-82aa3819a391/Furnit Bar 4 2M.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
barM.addComponentOrReplace(gltfShape13)

const barM2 = new Entity('barM2')
engine.addEntity(barM2)
barM2.setParent(_scene)
barM2.addComponentOrReplace(gltfShape13)
const transform53 = new Transform({
  position: new Vector3(26.75421905517578, 73.76612091064453, 54.87474060058594),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
barM2.addComponentOrReplace(transform53)

const barGreen = new Entity('barGreen')
engine.addEntity(barGreen)
barGreen.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(22.500003814697266, 71.5, 52.5),
  rotation: new Quaternion(-4.8369380230988985e-15, 1, -1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
barGreen.addComponentOrReplace(transform54)
const gltfShape14 = new GLTFShape("d918354b-4382-4b9d-acbb-cc13fadad45a/Bar_Green.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
barGreen.addComponentOrReplace(gltfShape14)

const barGreen2 = new Entity('barGreen2')
engine.addEntity(barGreen2)
barGreen2.setParent(_scene)
barGreen2.addComponentOrReplace(gltfShape14)
const transform55 = new Transform({
  position: new Vector3(28.609935760498047, 71.5, 52.5),
  rotation: new Quaternion(-4.8369380230988985e-15, 1, -1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
barGreen2.addComponentOrReplace(transform55)

const concreteRoundedTable = new Entity('concreteRoundedTable')
engine.addEntity(concreteRoundedTable)
concreteRoundedTable.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(34.500003814697266, 71.57027435302734, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable.addComponentOrReplace(transform56)
const gltfShape15 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
concreteRoundedTable.addComponentOrReplace(gltfShape15)

const concreteRoundedTable2 = new Entity('concreteRoundedTable2')
engine.addEntity(concreteRoundedTable2)
concreteRoundedTable2.setParent(_scene)
concreteRoundedTable2.addComponentOrReplace(gltfShape15)
const transform57 = new Transform({
  position: new Vector3(33, 71.57027435302734, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable2.addComponentOrReplace(transform57)

const concreteRoundedTable3 = new Entity('concreteRoundedTable3')
engine.addEntity(concreteRoundedTable3)
concreteRoundedTable3.setParent(_scene)
concreteRoundedTable3.addComponentOrReplace(gltfShape15)
const transform58 = new Transform({
  position: new Vector3(37, 71.57027435302734, 44.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable3.addComponentOrReplace(transform58)

const concreteRoundedTable4 = new Entity('concreteRoundedTable4')
engine.addEntity(concreteRoundedTable4)
concreteRoundedTable4.setParent(_scene)
concreteRoundedTable4.addComponentOrReplace(gltfShape15)
const transform59 = new Transform({
  position: new Vector3(35.5, 71.57027435302734, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable4.addComponentOrReplace(transform59)

const concreteRoundedTable5 = new Entity('concreteRoundedTable5')
engine.addEntity(concreteRoundedTable5)
concreteRoundedTable5.setParent(_scene)
concreteRoundedTable5.addComponentOrReplace(gltfShape15)
const transform60 = new Transform({
  position: new Vector3(32, 71.57027435302734, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable5.addComponentOrReplace(transform60)

const concreteRoundedTable6 = new Entity('concreteRoundedTable6')
engine.addEntity(concreteRoundedTable6)
concreteRoundedTable6.setParent(_scene)
concreteRoundedTable6.addComponentOrReplace(gltfShape15)
const transform61 = new Transform({
  position: new Vector3(38.5, 71.57027435302734, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable6.addComponentOrReplace(transform61)

const concreteRoundedTable7 = new Entity('concreteRoundedTable7')
engine.addEntity(concreteRoundedTable7)
concreteRoundedTable7.setParent(_scene)
concreteRoundedTable7.addComponentOrReplace(gltfShape15)
const transform62 = new Transform({
  position: new Vector3(36, 71.57027435302734, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable7.addComponentOrReplace(transform62)

const funkyFloorLight = new Entity('funkyFloorLight')
engine.addEntity(funkyFloorLight)
funkyFloorLight.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(17.80194854736328, 71.34190368652344, 42.82564163208008),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight.addComponentOrReplace(transform63)

const funkyFloorLight2 = new Entity('funkyFloorLight2')
engine.addEntity(funkyFloorLight2)
funkyFloorLight2.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(17, 71.34190368652344, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight2.addComponentOrReplace(transform64)

const funkyFloorLight3 = new Entity('funkyFloorLight3')
engine.addEntity(funkyFloorLight3)
funkyFloorLight3.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(38.5, 71.34190368652344, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight3.addComponentOrReplace(transform65)

const funkyFloorLight4 = new Entity('funkyFloorLight4')
engine.addEntity(funkyFloorLight4)
funkyFloorLight4.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(38, 71.34190368652344, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight4.addComponentOrReplace(transform66)

const funkyFloorLight5 = new Entity('funkyFloorLight5')
engine.addEntity(funkyFloorLight5)
funkyFloorLight5.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(18, 71.34190368652344, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight5.addComponentOrReplace(transform67)

const funkyFloorLight6 = new Entity('funkyFloorLight6')
engine.addEntity(funkyFloorLight6)
funkyFloorLight6.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(34, 71.34190368652344, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight6.addComponentOrReplace(transform68)

const tableLampLight = new Entity('tableLampLight')
engine.addEntity(tableLampLight)
tableLampLight.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(32.13079071044922, 72.67411804199219, 40.50913619995117),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight.addComponentOrReplace(transform69)

const tableLampLight2 = new Entity('tableLampLight2')
engine.addEntity(tableLampLight2)
tableLampLight2.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(33.14960861206055, 72.67411804199219, 43.3328857421875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight2.addComponentOrReplace(transform70)

const tableLampLight3 = new Entity('tableLampLight3')
engine.addEntity(tableLampLight3)
tableLampLight3.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(34.60026168823242, 72.67411804199219, 46.872772216796875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight3.addComponentOrReplace(transform71)

const tableLampLight4 = new Entity('tableLampLight4')
engine.addEntity(tableLampLight4)
tableLampLight4.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(37.10054016113281, 72.67411804199219, 44.43312454223633),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight4.addComponentOrReplace(transform72)

const tableLampLight5 = new Entity('tableLampLight5')
engine.addEntity(tableLampLight5)
tableLampLight5.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(35.604217529296875, 72.67411804199219, 41.37492370605469),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight5.addComponentOrReplace(transform73)

const tableLampLight6 = new Entity('tableLampLight6')
engine.addEntity(tableLampLight6)
tableLampLight6.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(38.5920524597168, 72.67411804199219, 41.39891052246094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight6.addComponentOrReplace(transform74)

const tableLampLight7 = new Entity('tableLampLight7')
engine.addEntity(tableLampLight7)
tableLampLight7.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(36.142356872558594, 72.67411804199219, 37.90637969970703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight7.addComponentOrReplace(transform75)

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(22, 2.3747870922088623, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 1, 3)
})
rainLight.addComponentOrReplace(transform76)

const rainLight2 = new Entity('rainLight2')
engine.addEntity(rainLight2)
rainLight2.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(33, 2.3747870922088623, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 1, 3)
})
rainLight2.addComponentOrReplace(transform77)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(27.5, 0.5, 50.945980072021484),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.5, 4.5, 1)
})
imageFromURL.addComponentOrReplace(transform78)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(38.5, 49, 41.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000078678131104, 3.5, 1.000002145767212)
})
nftPictureFrame.addComponentOrReplace(transform79)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(38.5, 49, 38.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000088214874268, 3.5, 1.000002384185791)
})
nftPictureFrame2.addComponentOrReplace(transform80)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(38.5, 51.5, 38.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000107288360596, 3.5, 1.0000028610229492)
})
nftPictureFrame3.addComponentOrReplace(transform81)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(38.5, 51.5, 41.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500011682510376, 3.5, 1.0000030994415283)
})
nftPictureFrame4.addComponentOrReplace(transform82)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(38.5, 54, 41.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000126361846924, 3.5, 1.0000033378601074)
})
nftPictureFrame5.addComponentOrReplace(transform83)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(38.5, 54, 38.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500013589859009, 3.5, 1.0000035762786865)
})
nftPictureFrame6.addComponentOrReplace(transform84)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(38.5, 49, 27.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500009775161743, 3.5, 1.0000026226043701)
})
nftPictureFrame9.addComponentOrReplace(transform85)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(38.5, 49, 30.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000088214874268, 3.5, 1.000002384185791)
})
nftPictureFrame10.addComponentOrReplace(transform86)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(38.5, 51.5, 29.104110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.750038146972656, 8.75, 1.0000040531158447)
})
nftPictureFrame11.addComponentOrReplace(transform87)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(39, 54, 30.604110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.5000174045562744, 3.5, 1.000004529953003)
})
nftPictureFrame13.addComponentOrReplace(transform88)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(39, 51.5, 30.604110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.500014543533325, 3.5, 1.0000038146972656)
})
nftPictureFrame14.addComponentOrReplace(transform89)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(39, 49, 30.604110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.5000126361846924, 3.5, 1.0000033378601074)
})
nftPictureFrame15.addComponentOrReplace(transform90)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(39, 49, 27.604110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.500011682510376, 3.5, 1.0000030994415283)
})
nftPictureFrame16.addComponentOrReplace(transform91)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(39, 51.5, 27.604110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.5000154972076416, 3.5, 1.0000040531158447)
})
nftPictureFrame17.addComponentOrReplace(transform92)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(39, 54, 27.604110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.500016450881958, 3.5, 1.0000042915344238)
})
nftPictureFrame18.addComponentOrReplace(transform93)

const nftPictureFrame19 = new Entity('nftPictureFrame19')
engine.addEntity(nftPictureFrame19)
nftPictureFrame19.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(39, 54, 41.10411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.500018358230591, 3.5, 1.000004768371582)
})
nftPictureFrame19.addComponentOrReplace(transform94)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(39, 49, 39.60411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(8.750038146972656, 8.75, 1.0000040531158447)
})
nftPictureFrame22.addComponentOrReplace(transform95)

const nftPictureFrame24 = new Entity('nftPictureFrame24')
engine.addEntity(nftPictureFrame24)
nftPictureFrame24.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(39, 54, 38.10411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.5000174045562744, 3.5, 1.000004529953003)
})
nftPictureFrame24.addComponentOrReplace(transform96)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(39, 54, 55.60411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.500023126602173, 3.5, 1.0000059604644775)
})
nftPictureFrame7.addComponentOrReplace(transform97)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(39, 54, 52.60411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.5000221729278564, 3.5, 1.0000057220458984)
})
nftPictureFrame8.addComponentOrReplace(transform98)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(39, 49, 54.10411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(8.75004768371582, 8.75, 1.0000052452087402)
})
nftPictureFrame12.addComponentOrReplace(transform99)

const nftPictureFrame20 = new Entity('nftPictureFrame20')
engine.addEntity(nftPictureFrame20)
nftPictureFrame20.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(38.5, 49, 52.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500013589859009, 3.5, 1.0000035762786865)
})
nftPictureFrame20.addComponentOrReplace(transform100)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(38.5, 49, 55.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000126361846924, 3.5, 1.0000033378601074)
})
nftPictureFrame21.addComponentOrReplace(transform101)

const nftPictureFrame23 = new Entity('nftPictureFrame23')
engine.addEntity(nftPictureFrame23)
nftPictureFrame23.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(38.5, 51.5, 54.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.750045776367188, 8.75, 1.0000050067901611)
})
nftPictureFrame23.addComponentOrReplace(transform102)

const wallPlainBlack = new Entity('wallPlainBlack')
engine.addEntity(wallPlainBlack)
wallPlainBlack.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(43.97306442260742, 47.5, 21.357261657714844),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(19.623207092285156, 2.3131377696990967, 0.13999967277050018)
})
wallPlainBlack.addComponentOrReplace(transform103)
const gltfShape16 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
wallPlainBlack.addComponentOrReplace(gltfShape16)

const wallPlainBlack2 = new Entity('wallPlainBlack2')
engine.addEntity(wallPlainBlack2)
wallPlainBlack2.setParent(_scene)
wallPlainBlack2.addComponentOrReplace(gltfShape16)
const transform104 = new Transform({
  position: new Vector3(11.09113883972168, 47.5, 21.357261657714844),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(19.623218536376953, 2.3131377696990967, 0.13999976217746735)
})
wallPlainBlack2.addComponentOrReplace(transform104)

const wallPlainBlack3 = new Entity('wallPlainBlack3')
engine.addEntity(wallPlainBlack3)
wallPlainBlack3.setParent(_scene)
wallPlainBlack3.addComponentOrReplace(gltfShape16)
const transform105 = new Transform({
  position: new Vector3(43.97306442260742, 47.5, 21.386117935180664),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallPlainBlack3.addComponentOrReplace(transform105)

const wallPlainBlack4 = new Entity('wallPlainBlack4')
engine.addEntity(wallPlainBlack4)
wallPlainBlack4.setParent(_scene)
wallPlainBlack4.addComponentOrReplace(gltfShape16)
const transform106 = new Transform({
  position: new Vector3(43.97306442260742, 47.5, 60.536468505859375),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallPlainBlack4.addComponentOrReplace(transform106)

const wallPlainBlack5 = new Entity('wallPlainBlack5')
engine.addEntity(wallPlainBlack5)
wallPlainBlack5.setParent(_scene)
wallPlainBlack5.addComponentOrReplace(gltfShape16)
const transform107 = new Transform({
  position: new Vector3(21.574344635009766, 47.5, 60.536468505859375),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallPlainBlack5.addComponentOrReplace(transform107)

const wallPlainBlack6 = new Entity('wallPlainBlack6')
engine.addEntity(wallPlainBlack6)
wallPlainBlack6.setParent(_scene)
wallPlainBlack6.addComponentOrReplace(gltfShape16)
const transform108 = new Transform({
  position: new Vector3(21.574344635009766, 47.5, 21.386117935180664),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallPlainBlack6.addComponentOrReplace(transform108)

const nftPictureFrame25 = new Entity('nftPictureFrame25')
engine.addEntity(nftPictureFrame25)
nftPictureFrame25.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(11.095813751220703, 49, 31.104110717773438),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.500013589859009, 3.5, 1.0000035762786865)
})
nftPictureFrame25.addComponentOrReplace(transform109)

const nftPictureFrame26 = new Entity('nftPictureFrame26')
engine.addEntity(nftPictureFrame26)
nftPictureFrame26.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(11.095813751220703, 49, 34.10411071777344),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.500014543533325, 3.5, 1.0000038146972656)
})
nftPictureFrame26.addComponentOrReplace(transform110)

const nftPictureFrame27 = new Entity('nftPictureFrame27')
engine.addEntity(nftPictureFrame27)
nftPictureFrame27.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(11.095813751220703, 51.5, 34.10411071777344),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.500016450881958, 3.5, 1.0000042915344238)
})
nftPictureFrame27.addComponentOrReplace(transform111)

const nftPictureFrame28 = new Entity('nftPictureFrame28')
engine.addEntity(nftPictureFrame28)
nftPictureFrame28.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(11.095813751220703, 51.5, 31.104110717773438),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.5000174045562744, 3.5, 1.000004529953003)
})
nftPictureFrame28.addComponentOrReplace(transform112)

const nftPictureFrame29 = new Entity('nftPictureFrame29')
engine.addEntity(nftPictureFrame29)
nftPictureFrame29.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(11.095813751220703, 54, 31.104110717773438),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.500018358230591, 3.5, 1.000004768371582)
})
nftPictureFrame29.addComponentOrReplace(transform113)

const nftPictureFrame30 = new Entity('nftPictureFrame30')
engine.addEntity(nftPictureFrame30)
nftPictureFrame30.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(11.095813751220703, 54, 34.10411071777344),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.5000193119049072, 3.5, 1.0000050067901611)
})
nftPictureFrame30.addComponentOrReplace(transform114)

const nftPictureFrame31 = new Entity('nftPictureFrame31')
engine.addEntity(nftPictureFrame31)
nftPictureFrame31.setParent(_scene)
const transform115 = new Transform({
  position: new Vector3(11.095813751220703, 49.5, 26.604110717773438),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(7.000036716461182, 7, 1.000004768371582)
})
nftPictureFrame31.addComponentOrReplace(transform115)

const nftPictureFrame35 = new Entity('nftPictureFrame35')
engine.addEntity(nftPictureFrame35)
nftPictureFrame35.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(11.095813751220703, 54, 25.104110717773438),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.5000193119049072, 3.5, 1.0000050067901611)
})
nftPictureFrame35.addComponentOrReplace(transform116)

const nftPictureFrame36 = new Entity('nftPictureFrame36')
engine.addEntity(nftPictureFrame36)
nftPictureFrame36.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(11.095813751220703, 54, 28.104110717773438),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.5000202655792236, 3.5, 1.0000052452087402)
})
nftPictureFrame36.addComponentOrReplace(transform117)

const nftPictureFrame32 = new Entity('nftPictureFrame32')
engine.addEntity(nftPictureFrame32)
nftPictureFrame32.setParent(_scene)
const transform118 = new Transform({
  position: new Vector3(17.845813751220703, 50.5, 21.397174835205078),
  rotation: new Quaternion(3.6875261721360745e-17, 5.960464477539063e-8, -8.881784197001252e-16, 1),
  scale: new Vector3(7.000040054321289, 7, 1.0000048875808716)
})
nftPictureFrame32.addComponentOrReplace(transform118)

const nftPictureFrame33 = new Entity('nftPictureFrame33')
engine.addEntity(nftPictureFrame33)
nftPictureFrame33.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(13.345813751220703, 52.5, 21.397174835205078),
  rotation: new Quaternion(3.6875261721360745e-17, 5.960464477539063e-8, -8.881784197001252e-16, 1),
  scale: new Vector3(3.500018835067749, 3.5, 1.000004768371582)
})
nftPictureFrame33.addComponentOrReplace(transform119)

const nftPictureFrame34 = new Entity('nftPictureFrame34')
engine.addEntity(nftPictureFrame34)
nftPictureFrame34.setParent(_scene)
const transform120 = new Transform({
  position: new Vector3(13.345813751220703, 50, 21.397174835205078),
  rotation: new Quaternion(3.6875261721360745e-17, 5.960464477539063e-8, -8.881784197001252e-16, 1),
  scale: new Vector3(3.500014305114746, 3.5, 1.0000038146972656)
})
nftPictureFrame34.addComponentOrReplace(transform120)

const doorframeBlack = new Entity('doorframeBlack')
engine.addEntity(doorframeBlack)
doorframeBlack.setParent(_scene)
const transform121 = new Transform({
  position: new Vector3(21.87889862060547, 47.542572021484375, 39.500003814697266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.432254314422607, 2.2960193157196045, 1)
})
doorframeBlack.addComponentOrReplace(transform121)
const gltfShape17 = new GLTFShape("fb7c3a1e-aaf1-4bb1-baa1-0e0f57ed9b3f/BlackDoorframe.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
doorframeBlack.addComponentOrReplace(gltfShape17)

const galleryLight = new Entity('galleryLight')
engine.addEntity(galleryLight)
galleryLight.setParent(_scene)
const transform122 = new Transform({
  position: new Vector3(18.5, 54, 21.34850311279297),
  rotation: new Quaternion(0, 0, -8.940696716308594e-8, 1),
  scale: new Vector3(4.5, 1.5, 1.5)
})
galleryLight.addComponentOrReplace(transform122)

const galleryLight2 = new Entity('galleryLight2')
engine.addEntity(galleryLight2)
galleryLight2.setParent(_scene)
const transform123 = new Transform({
  position: new Vector3(11.05478572845459, 53, 25.985076904296875),
  rotation: new Quaternion(-6.322027701344268e-8, 0.7071068286895752, -1.4751397259260557e-7, 0.7071068286895752),
  scale: new Vector3(4.500007629394531, 1.5, 1.5000038146972656)
})
galleryLight2.addComponentOrReplace(transform123)

const ringWhiteLight = new Entity('ringWhiteLight')
engine.addEntity(ringWhiteLight)
ringWhiteLight.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(16.500001907348633, 56.39739227294922, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 2, 2)
})
ringWhiteLight.addComponentOrReplace(transform124)
const gltfShape18 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
ringWhiteLight.addComponentOrReplace(gltfShape18)

const spotlight = new Entity('spotlight')
engine.addEntity(spotlight)
spotlight.setParent(_scene)
const transform125 = new Transform({
  position: new Vector3(32.5, 79, 32.88615417480469),
  rotation: new Quaternion(-0.9385530352592468, -0.2681880593299866, 0.11108724027872086, -0.1866898238658905),
  scale: new Vector3(0.9999998807907104, 0.38615572452545166, 1.0000020265579224)
})
spotlight.addComponentOrReplace(transform125)
const gltfShape19 = new GLTFShape("3ddda096-a798-432e-ba66-61354bccbcc9/Spotlight.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
spotlight.addComponentOrReplace(gltfShape19)

const spotlight2 = new Entity('spotlight2')
engine.addEntity(spotlight2)
spotlight2.setParent(_scene)
spotlight2.addComponentOrReplace(gltfShape19)
const transform126 = new Transform({
  position: new Vector3(21.759010314941406, 79, 32.88615417480469),
  rotation: new Quaternion(0.9569404125213623, 1.5426704018899192e-15, -1.1407617961367578e-7, 0.2902846932411194),
  scale: new Vector3(1, 0.3861556649208069, 1.0000025033950806)
})
spotlight2.addComponentOrReplace(transform126)

const spotlight3 = new Entity('spotlight3')
engine.addEntity(spotlight3)
spotlight3.setParent(_scene)
spotlight3.addComponentOrReplace(gltfShape19)
const transform127 = new Transform({
  position: new Vector3(23.759010314941406, 79, 32.88615417480469),
  rotation: new Quaternion(0.9194307923316956, 0.03750952333211899, -0.09055615216493607, 0.3808406591415405),
  scale: new Vector3(0.9999999403953552, 0.38615596294403076, 1.0000028610229492)
})
spotlight3.addComponentOrReplace(transform127)

const spotlight4 = new Entity('spotlight4')
engine.addEntity(spotlight4)
spotlight4.setParent(_scene)
spotlight4.addComponentOrReplace(gltfShape19)
const transform128 = new Transform({
  position: new Vector3(30.5, 79, 32.88615417480469),
  rotation: new Quaternion(0.9385530352592468, -0.05663171783089638, 0.18668970465660095, 0.2847069501876831),
  scale: new Vector3(0.9999999403953552, 0.38615596294403076, 1.000003695487976)
})
spotlight4.addComponentOrReplace(transform128)

const nftPictureFrame37 = new Entity('nftPictureFrame37')
engine.addEntity(nftPictureFrame37)
nftPictureFrame37.setParent(_scene)
const transform129 = new Transform({
  position: new Vector3(43.94169235229492, 49, 52.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500014543533325, 3.5, 1.0000038146972656)
})
nftPictureFrame37.addComponentOrReplace(transform129)

const nftPictureFrame38 = new Entity('nftPictureFrame38')
engine.addEntity(nftPictureFrame38)
nftPictureFrame38.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(43.94169235229492, 49, 55.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500013589859009, 3.5, 1.0000035762786865)
})
nftPictureFrame38.addComponentOrReplace(transform130)

const nftPictureFrame39 = new Entity('nftPictureFrame39')
engine.addEntity(nftPictureFrame39)
nftPictureFrame39.setParent(_scene)
const transform131 = new Transform({
  position: new Vector3(43.94169235229492, 51.5, 54.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.75004768371582, 8.75, 1.0000052452087402)
})
nftPictureFrame39.addComponentOrReplace(transform131)

const nftPictureFrame40 = new Entity('nftPictureFrame40')
engine.addEntity(nftPictureFrame40)
nftPictureFrame40.setParent(_scene)
const transform132 = new Transform({
  position: new Vector3(43.89124298095703, 54, 46.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000174045562744, 3.5, 1.000004529953003)
})
nftPictureFrame40.addComponentOrReplace(transform132)

const nftPictureFrame41 = new Entity('nftPictureFrame41')
engine.addEntity(nftPictureFrame41)
nftPictureFrame41.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(43.89124298095703, 54, 49.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500016450881958, 3.5, 1.0000042915344238)
})
nftPictureFrame41.addComponentOrReplace(transform133)

const nftPictureFrame42 = new Entity('nftPictureFrame42')
engine.addEntity(nftPictureFrame42)
nftPictureFrame42.setParent(_scene)
const transform134 = new Transform({
  position: new Vector3(43.89124298095703, 51.5, 49.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000154972076416, 3.5, 1.0000040531158447)
})
nftPictureFrame42.addComponentOrReplace(transform134)

const nftPictureFrame43 = new Entity('nftPictureFrame43')
engine.addEntity(nftPictureFrame43)
nftPictureFrame43.setParent(_scene)
const transform135 = new Transform({
  position: new Vector3(43.89124298095703, 51.5, 46.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500014543533325, 3.5, 1.0000038146972656)
})
nftPictureFrame43.addComponentOrReplace(transform135)

const nftPictureFrame44 = new Entity('nftPictureFrame44')
engine.addEntity(nftPictureFrame44)
nftPictureFrame44.setParent(_scene)
const transform136 = new Transform({
  position: new Vector3(43.89124298095703, 49, 49.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500011682510376, 3.5, 1.0000030994415283)
})
nftPictureFrame44.addComponentOrReplace(transform136)

const nftPictureFrame45 = new Entity('nftPictureFrame45')
engine.addEntity(nftPictureFrame45)
nftPictureFrame45.setParent(_scene)
const transform137 = new Transform({
  position: new Vector3(43.89124298095703, 49, 46.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000126361846924, 3.5, 1.0000033378601074)
})
nftPictureFrame45.addComponentOrReplace(transform137)

const nftPictureFrame46 = new Entity('nftPictureFrame46')
engine.addEntity(nftPictureFrame46)
nftPictureFrame46.setParent(_scene)
const transform138 = new Transform({
  position: new Vector3(43.94169235229492, 53.25267791748047, 42.10411071777344),
  rotation: new Quaternion(0.7071067690849304, -5.795191881929895e-8, -0.70710688829422, -2.6341774983507094e-8),
  scale: new Vector3(8.750057220458984, 8.75001335144043, 1.0000064373016357)
})
nftPictureFrame46.addComponentOrReplace(transform138)

const nftPictureFrame47 = new Entity('nftPictureFrame47')
engine.addEntity(nftPictureFrame47)
nftPictureFrame47.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(43.94169235229492, 55.75267791748047, 43.60411071777344),
  rotation: new Quaternion(0.7071067690849304, -5.795191881929895e-8, -0.70710688829422, -2.6341774983507094e-8),
  scale: new Vector3(3.5000193119049072, 3.500006675720215, 1.0000050067901611)
})
nftPictureFrame47.addComponentOrReplace(transform139)

const nftPictureFrame48 = new Entity('nftPictureFrame48')
engine.addEntity(nftPictureFrame48)
nftPictureFrame48.setParent(_scene)
const transform140 = new Transform({
  position: new Vector3(43.94169235229492, 55.75267791748047, 40.60411071777344),
  rotation: new Quaternion(0.7071067690849304, -5.795191881929895e-8, -0.70710688829422, -2.6341774983507094e-8),
  scale: new Vector3(3.500018358230591, 3.500006675720215, 1.000004768371582)
})
nftPictureFrame48.addComponentOrReplace(transform140)

const nftPictureFrame49 = new Entity('nftPictureFrame49')
engine.addEntity(nftPictureFrame49)
nftPictureFrame49.setParent(_scene)
const transform141 = new Transform({
  position: new Vector3(43.94169235229492, 53.25267791748047, 33.10411071777344),
  rotation: new Quaternion(0.7071067690849304, -5.795191881929895e-8, -0.70710688829422, -2.6341774983507094e-8),
  scale: new Vector3(8.750062942504883, 8.750024795532227, 1.000007152557373)
})
nftPictureFrame49.addComponentOrReplace(transform141)

const nftPictureFrame50 = new Entity('nftPictureFrame50')
engine.addEntity(nftPictureFrame50)
nftPictureFrame50.setParent(_scene)
const transform142 = new Transform({
  position: new Vector3(43.94169235229492, 55.75267791748047, 34.60411071777344),
  rotation: new Quaternion(0.7071067690849304, -5.795191881929895e-8, -0.70710688829422, -2.6341774983507094e-8),
  scale: new Vector3(3.5000221729278564, 3.5000123977661133, 1.0000057220458984)
})
nftPictureFrame50.addComponentOrReplace(transform142)

const nftPictureFrame51 = new Entity('nftPictureFrame51')
engine.addEntity(nftPictureFrame51)
nftPictureFrame51.setParent(_scene)
const transform143 = new Transform({
  position: new Vector3(43.94169235229492, 55.75267791748047, 31.604110717773438),
  rotation: new Quaternion(0.7071067690849304, -5.795191881929895e-8, -0.70710688829422, -2.6341774983507094e-8),
  scale: new Vector3(3.50002121925354, 3.5000123977661133, 1.0000054836273193)
})
nftPictureFrame51.addComponentOrReplace(transform143)

const nftPictureFrame52 = new Entity('nftPictureFrame52')
engine.addEntity(nftPictureFrame52)
nftPictureFrame52.setParent(_scene)
const transform144 = new Transform({
  position: new Vector3(43.89124298095703, 54, 37.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000202655792236, 3.5, 1.0000052452087402)
})
nftPictureFrame52.addComponentOrReplace(transform144)

const nftPictureFrame53 = new Entity('nftPictureFrame53')
engine.addEntity(nftPictureFrame53)
nftPictureFrame53.setParent(_scene)
const transform145 = new Transform({
  position: new Vector3(43.89124298095703, 51.5, 37.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000174045562744, 3.5, 1.000004529953003)
})
nftPictureFrame53.addComponentOrReplace(transform145)

const nftPictureFrame54 = new Entity('nftPictureFrame54')
engine.addEntity(nftPictureFrame54)
nftPictureFrame54.setParent(_scene)
const transform146 = new Transform({
  position: new Vector3(43.89124298095703, 49, 37.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000154972076416, 3.5, 1.0000040531158447)
})
nftPictureFrame54.addComponentOrReplace(transform146)

const nftPictureFrame55 = new Entity('nftPictureFrame55')
engine.addEntity(nftPictureFrame55)
nftPictureFrame55.setParent(_scene)
const transform147 = new Transform({
  position: new Vector3(43.89124298095703, 54, 25.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000202655792236, 3.5, 1.0000052452087402)
})
nftPictureFrame55.addComponentOrReplace(transform147)

const nftPictureFrame56 = new Entity('nftPictureFrame56')
engine.addEntity(nftPictureFrame56)
nftPictureFrame56.setParent(_scene)
const transform148 = new Transform({
  position: new Vector3(43.89124298095703, 51.5, 25.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000174045562744, 3.5, 1.000004529953003)
})
nftPictureFrame56.addComponentOrReplace(transform148)

const nftPictureFrame57 = new Entity('nftPictureFrame57')
engine.addEntity(nftPictureFrame57)
nftPictureFrame57.setParent(_scene)
const transform149 = new Transform({
  position: new Vector3(43.89124298095703, 49, 25.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000154972076416, 3.5, 1.0000040531158447)
})
nftPictureFrame57.addComponentOrReplace(transform149)

const nftPictureFrame58 = new Entity('nftPictureFrame58')
engine.addEntity(nftPictureFrame58)
nftPictureFrame58.setParent(_scene)
const transform150 = new Transform({
  position: new Vector3(43.89124298095703, 49, 28.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500014543533325, 3.5, 1.0000038146972656)
})
nftPictureFrame58.addComponentOrReplace(transform150)

const nftPictureFrame59 = new Entity('nftPictureFrame59')
engine.addEntity(nftPictureFrame59)
nftPictureFrame59.setParent(_scene)
const transform151 = new Transform({
  position: new Vector3(43.89124298095703, 51.5, 28.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500018358230591, 3.5, 1.000004768371582)
})
nftPictureFrame59.addComponentOrReplace(transform151)

const nftPictureFrame60 = new Entity('nftPictureFrame60')
engine.addEntity(nftPictureFrame60)
nftPictureFrame60.setParent(_scene)
const transform152 = new Transform({
  position: new Vector3(43.89124298095703, 54, 28.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000193119049072, 3.5, 1.0000050067901611)
})
nftPictureFrame60.addComponentOrReplace(transform152)

const wallCorrugatedMetal = new Entity('wallCorrugatedMetal')
engine.addEntity(wallCorrugatedMetal)
wallCorrugatedMetal.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(35.5, 56.84843444824219, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal.addComponentOrReplace(transform153)
const gltfShape20 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
wallCorrugatedMetal.addComponentOrReplace(gltfShape20)

const wallCorrugatedMetal2 = new Entity('wallCorrugatedMetal2')
engine.addEntity(wallCorrugatedMetal2)
wallCorrugatedMetal2.setParent(_scene)
wallCorrugatedMetal2.addComponentOrReplace(gltfShape20)
const transform154 = new Transform({
  position: new Vector3(37.5, 56.84843444824219, 60.195186614990234),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal2.addComponentOrReplace(transform154)

const wallCorrugatedMetal3 = new Entity('wallCorrugatedMetal3')
engine.addEntity(wallCorrugatedMetal3)
wallCorrugatedMetal3.setParent(_scene)
wallCorrugatedMetal3.addComponentOrReplace(gltfShape20)
const transform155 = new Transform({
  position: new Vector3(39.5, 56.84843444824219, 60.37971496582031),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal3.addComponentOrReplace(transform155)

const wallCorrugatedMetal4 = new Entity('wallCorrugatedMetal4')
engine.addEntity(wallCorrugatedMetal4)
wallCorrugatedMetal4.setParent(_scene)
wallCorrugatedMetal4.addComponentOrReplace(gltfShape20)
const transform156 = new Transform({
  position: new Vector3(41.5, 56.84843444824219, 60.58368682861328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal4.addComponentOrReplace(transform156)

const wallCorrugatedMetal5 = new Entity('wallCorrugatedMetal5')
engine.addEntity(wallCorrugatedMetal5)
wallCorrugatedMetal5.setParent(_scene)
wallCorrugatedMetal5.addComponentOrReplace(gltfShape20)
const transform157 = new Transform({
  position: new Vector3(43.5, 56.84843444824219, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.6522276401519775, 1)
})
wallCorrugatedMetal5.addComponentOrReplace(transform157)

const wallCorrugatedMetal6 = new Entity('wallCorrugatedMetal6')
engine.addEntity(wallCorrugatedMetal6)
wallCorrugatedMetal6.setParent(_scene)
wallCorrugatedMetal6.addComponentOrReplace(gltfShape20)
const transform158 = new Transform({
  position: new Vector3(13.5, 56.84843444824219, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.86922287940979, 1)
})
wallCorrugatedMetal6.addComponentOrReplace(transform158)

const wallCorrugatedMetal7 = new Entity('wallCorrugatedMetal7')
engine.addEntity(wallCorrugatedMetal7)
wallCorrugatedMetal7.setParent(_scene)
wallCorrugatedMetal7.addComponentOrReplace(gltfShape20)
const transform159 = new Transform({
  position: new Vector3(15.5, 56.84843444824219, 60.53369140625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal7.addComponentOrReplace(transform159)

const wallCorrugatedMetal8 = new Entity('wallCorrugatedMetal8')
engine.addEntity(wallCorrugatedMetal8)
wallCorrugatedMetal8.setParent(_scene)
wallCorrugatedMetal8.addComponentOrReplace(gltfShape20)
const transform160 = new Transform({
  position: new Vector3(17.5, 56.84843444824219, 60.637943267822266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal8.addComponentOrReplace(transform160)

const wallCorrugatedMetal9 = new Entity('wallCorrugatedMetal9')
engine.addEntity(wallCorrugatedMetal9)
wallCorrugatedMetal9.setParent(_scene)
wallCorrugatedMetal9.addComponentOrReplace(gltfShape20)
const transform161 = new Transform({
  position: new Vector3(19.5, 56.84843444824219, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal9.addComponentOrReplace(transform161)

const wallCorrugatedMetal10 = new Entity('wallCorrugatedMetal10')
engine.addEntity(wallCorrugatedMetal10)
wallCorrugatedMetal10.setParent(_scene)
wallCorrugatedMetal10.addComponentOrReplace(gltfShape20)
const transform162 = new Transform({
  position: new Vector3(21.5, 56.84843444824219, 60.637943267822266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal10.addComponentOrReplace(transform162)

const wallCorrugatedMetal11 = new Entity('wallCorrugatedMetal11')
engine.addEntity(wallCorrugatedMetal11)
wallCorrugatedMetal11.setParent(_scene)
wallCorrugatedMetal11.addComponentOrReplace(gltfShape20)
const transform163 = new Transform({
  position: new Vector3(13.5, 56.84843444824219, 22.180461883544922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.86922287940979, 1)
})
wallCorrugatedMetal11.addComponentOrReplace(transform163)

const wallCorrugatedMetal12 = new Entity('wallCorrugatedMetal12')
engine.addEntity(wallCorrugatedMetal12)
wallCorrugatedMetal12.setParent(_scene)
wallCorrugatedMetal12.addComponentOrReplace(gltfShape20)
const transform164 = new Transform({
  position: new Vector3(15.5, 56.84843444824219, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal12.addComponentOrReplace(transform164)

const wallCorrugatedMetal13 = new Entity('wallCorrugatedMetal13')
engine.addEntity(wallCorrugatedMetal13)
wallCorrugatedMetal13.setParent(_scene)
wallCorrugatedMetal13.addComponentOrReplace(gltfShape20)
const transform165 = new Transform({
  position: new Vector3(17.5, 56.84843444824219, 21.828968048095703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal13.addComponentOrReplace(transform165)

const wallCorrugatedMetal14 = new Entity('wallCorrugatedMetal14')
engine.addEntity(wallCorrugatedMetal14)
wallCorrugatedMetal14.setParent(_scene)
wallCorrugatedMetal14.addComponentOrReplace(gltfShape20)
const transform166 = new Transform({
  position: new Vector3(19.5, 56.84843444824219, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal14.addComponentOrReplace(transform166)

const wallCorrugatedMetal15 = new Entity('wallCorrugatedMetal15')
engine.addEntity(wallCorrugatedMetal15)
wallCorrugatedMetal15.setParent(_scene)
wallCorrugatedMetal15.addComponentOrReplace(gltfShape20)
const transform167 = new Transform({
  position: new Vector3(21.5, 56.84843444824219, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal15.addComponentOrReplace(transform167)

const wallCorrugatedMetal16 = new Entity('wallCorrugatedMetal16')
engine.addEntity(wallCorrugatedMetal16)
wallCorrugatedMetal16.setParent(_scene)
wallCorrugatedMetal16.addComponentOrReplace(gltfShape20)
const transform168 = new Transform({
  position: new Vector3(41.5, 56.84843444824219, 22),
  rotation: new Quaternion(-2.140074904533615e-15, 1, -1.1920928244535389e-7, -4.470348358154297e-8),
  scale: new Vector3(1, 2.86922287940979, 1)
})
wallCorrugatedMetal16.addComponentOrReplace(transform168)

const wallCorrugatedMetal17 = new Entity('wallCorrugatedMetal17')
engine.addEntity(wallCorrugatedMetal17)
wallCorrugatedMetal17.setParent(_scene)
wallCorrugatedMetal17.addComponentOrReplace(gltfShape20)
const transform169 = new Transform({
  position: new Vector3(39.5, 56.84843444824219, 21.76665496826172),
  rotation: new Quaternion(-2.140074904533615e-15, 1, -1.1920928244535389e-7, -4.470348358154297e-8),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal17.addComponentOrReplace(transform169)

const wallCorrugatedMetal18 = new Entity('wallCorrugatedMetal18')
engine.addEntity(wallCorrugatedMetal18)
wallCorrugatedMetal18.setParent(_scene)
wallCorrugatedMetal18.addComponentOrReplace(gltfShape20)
const transform170 = new Transform({
  position: new Vector3(37.5, 56.84843444824219, 22.049406051635742),
  rotation: new Quaternion(-2.140074904533615e-15, 1, -1.1920928244535389e-7, -4.470348358154297e-8),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal18.addComponentOrReplace(transform170)

const wallCorrugatedMetal19 = new Entity('wallCorrugatedMetal19')
engine.addEntity(wallCorrugatedMetal19)
wallCorrugatedMetal19.setParent(_scene)
wallCorrugatedMetal19.addComponentOrReplace(gltfShape20)
const transform171 = new Transform({
  position: new Vector3(35.5, 56.84843444824219, 22),
  rotation: new Quaternion(-2.140074904533615e-15, 1, -1.1920928244535389e-7, -4.470348358154297e-8),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal19.addComponentOrReplace(transform171)

const wallCorrugatedMetal20 = new Entity('wallCorrugatedMetal20')
engine.addEntity(wallCorrugatedMetal20)
wallCorrugatedMetal20.setParent(_scene)
wallCorrugatedMetal20.addComponentOrReplace(gltfShape20)
const transform172 = new Transform({
  position: new Vector3(33.5, 56.84843444824219, 22),
  rotation: new Quaternion(-2.140074904533615e-15, 1, -1.1920928244535389e-7, -4.470348358154297e-8),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal20.addComponentOrReplace(transform172)

const wallCorrugatedMetal21 = new Entity('wallCorrugatedMetal21')
engine.addEntity(wallCorrugatedMetal21)
wallCorrugatedMetal21.setParent(_scene)
wallCorrugatedMetal21.addComponentOrReplace(gltfShape20)
const transform173 = new Transform({
  position: new Vector3(11.268433570861816, 56.84843444824219, 60.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 2.5994718074798584, 1.0000014305114746)
})
wallCorrugatedMetal21.addComponentOrReplace(transform173)

const wallCorrugatedMetal22 = new Entity('wallCorrugatedMetal22')
engine.addEntity(wallCorrugatedMetal22)
wallCorrugatedMetal22.setParent(_scene)
wallCorrugatedMetal22.addComponentOrReplace(gltfShape20)
const transform174 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 58.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 2.5994718074798584, 1.0000011920928955)
})
wallCorrugatedMetal22.addComponentOrReplace(transform174)

const wallCorrugatedMetal23 = new Entity('wallCorrugatedMetal23')
engine.addEntity(wallCorrugatedMetal23)
wallCorrugatedMetal23.setParent(_scene)
wallCorrugatedMetal23.addComponentOrReplace(gltfShape20)
const transform175 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 56.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 2.5994718074798584, 1.0000014305114746)
})
wallCorrugatedMetal23.addComponentOrReplace(transform175)

const wallCorrugatedMetal24 = new Entity('wallCorrugatedMetal24')
engine.addEntity(wallCorrugatedMetal24)
wallCorrugatedMetal24.setParent(_scene)
wallCorrugatedMetal24.addComponentOrReplace(gltfShape20)
const transform176 = new Transform({
  position: new Vector3(11.232842445373535, 56.84843444824219, 54.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 2.5994718074798584, 1.0000019073486328)
})
wallCorrugatedMetal24.addComponentOrReplace(transform176)

const wallCorrugatedMetal25 = new Entity('wallCorrugatedMetal25')
engine.addEntity(wallCorrugatedMetal25)
wallCorrugatedMetal25.setParent(_scene)
wallCorrugatedMetal25.addComponentOrReplace(gltfShape20)
const transform177 = new Transform({
  position: new Vector3(11.083913803100586, 56.84843444824219, 52.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 2.4903154373168945, 1.000002384185791)
})
wallCorrugatedMetal25.addComponentOrReplace(transform177)

const wallCorrugatedMetal26 = new Entity('wallCorrugatedMetal26')
engine.addEntity(wallCorrugatedMetal26)
wallCorrugatedMetal26.setParent(_scene)
wallCorrugatedMetal26.addComponentOrReplace(gltfShape20)
const transform178 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 50.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 2.5994718074798584, 1.000002145767212)
})
wallCorrugatedMetal26.addComponentOrReplace(transform178)

const wallCorrugatedMetal27 = new Entity('wallCorrugatedMetal27')
engine.addEntity(wallCorrugatedMetal27)
wallCorrugatedMetal27.setParent(_scene)
wallCorrugatedMetal27.addComponentOrReplace(gltfShape20)
const transform179 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 48.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 2.5994718074798584, 1.000002384185791)
})
wallCorrugatedMetal27.addComponentOrReplace(transform179)

const wallCorrugatedMetal28 = new Entity('wallCorrugatedMetal28')
engine.addEntity(wallCorrugatedMetal28)
wallCorrugatedMetal28.setParent(_scene)
wallCorrugatedMetal28.addComponentOrReplace(gltfShape20)
const transform180 = new Transform({
  position: new Vector3(11.003806114196777, 56.84843444824219, 46.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 2.346181631088257, 1.0000030994415283)
})
wallCorrugatedMetal28.addComponentOrReplace(transform180)

const wallCorrugatedMetal29 = new Entity('wallCorrugatedMetal29')
engine.addEntity(wallCorrugatedMetal29)
wallCorrugatedMetal29.setParent(_scene)
wallCorrugatedMetal29.addComponentOrReplace(gltfShape20)
const transform181 = new Transform({
  position: new Vector3(11.003806114196777, 56.84843444824219, 44.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 2.346181631088257, 1.0000033378601074)
})
wallCorrugatedMetal29.addComponentOrReplace(transform181)

const wallCorrugatedMetal30 = new Entity('wallCorrugatedMetal30')
engine.addEntity(wallCorrugatedMetal30)
wallCorrugatedMetal30.setParent(_scene)
wallCorrugatedMetal30.addComponentOrReplace(gltfShape20)
const transform182 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 42.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 2.5994718074798584, 1.0000030994415283)
})
wallCorrugatedMetal30.addComponentOrReplace(transform182)

const wallCorrugatedMetal31 = new Entity('wallCorrugatedMetal31')
engine.addEntity(wallCorrugatedMetal31)
wallCorrugatedMetal31.setParent(_scene)
wallCorrugatedMetal31.addComponentOrReplace(gltfShape20)
const transform183 = new Transform({
  position: new Vector3(11.326261520385742, 56.84843444824219, 40.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 2.5994718074798584, 1.0000035762786865)
})
wallCorrugatedMetal31.addComponentOrReplace(transform183)

const wallCorrugatedMetal32 = new Entity('wallCorrugatedMetal32')
engine.addEntity(wallCorrugatedMetal32)
wallCorrugatedMetal32.setParent(_scene)
wallCorrugatedMetal32.addComponentOrReplace(gltfShape20)
const transform184 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 38.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 2.5994718074798584, 1.0000035762786865)
})
wallCorrugatedMetal32.addComponentOrReplace(transform184)

const wallCorrugatedMetal33 = new Entity('wallCorrugatedMetal33')
engine.addEntity(wallCorrugatedMetal33)
wallCorrugatedMetal33.setParent(_scene)
wallCorrugatedMetal33.addComponentOrReplace(gltfShape20)
const transform185 = new Transform({
  position: new Vector3(11.326261520385742, 56.84843444824219, 36.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000042915344238, 2.5994718074798584, 1.0000042915344238)
})
wallCorrugatedMetal33.addComponentOrReplace(transform185)

const wallCorrugatedMetal34 = new Entity('wallCorrugatedMetal34')
engine.addEntity(wallCorrugatedMetal34)
wallCorrugatedMetal34.setParent(_scene)
wallCorrugatedMetal34.addComponentOrReplace(gltfShape20)
const transform186 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 34.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000042915344238, 2.5994718074798584, 1.0000042915344238)
})
wallCorrugatedMetal34.addComponentOrReplace(transform186)

const wallCorrugatedMetal35 = new Entity('wallCorrugatedMetal35')
engine.addEntity(wallCorrugatedMetal35)
wallCorrugatedMetal35.setParent(_scene)
wallCorrugatedMetal35.addComponentOrReplace(gltfShape20)
const transform187 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 32.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004529953003, 2.5994718074798584, 1.000004529953003)
})
wallCorrugatedMetal35.addComponentOrReplace(transform187)

const wallCorrugatedMetal36 = new Entity('wallCorrugatedMetal36')
engine.addEntity(wallCorrugatedMetal36)
wallCorrugatedMetal36.setParent(_scene)
wallCorrugatedMetal36.addComponentOrReplace(gltfShape20)
const transform188 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 30.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004768371582, 2.5994718074798584, 1.000004768371582)
})
wallCorrugatedMetal36.addComponentOrReplace(transform188)

const wallCorrugatedMetal37 = new Entity('wallCorrugatedMetal37')
engine.addEntity(wallCorrugatedMetal37)
wallCorrugatedMetal37.setParent(_scene)
wallCorrugatedMetal37.addComponentOrReplace(gltfShape20)
const transform189 = new Transform({
  position: new Vector3(11.335603713989258, 56.84843444824219, 28.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000052452087402, 2.5994718074798584, 1.0000052452087402)
})
wallCorrugatedMetal37.addComponentOrReplace(transform189)

const wallCorrugatedMetal38 = new Entity('wallCorrugatedMetal38')
engine.addEntity(wallCorrugatedMetal38)
wallCorrugatedMetal38.setParent(_scene)
wallCorrugatedMetal38.addComponentOrReplace(gltfShape20)
const transform190 = new Transform({
  position: new Vector3(11.335603713989258, 56.84843444824219, 26.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000054836273193, 2.5994718074798584, 1.0000054836273193)
})
wallCorrugatedMetal38.addComponentOrReplace(transform190)

const wallCorrugatedMetal39 = new Entity('wallCorrugatedMetal39')
engine.addEntity(wallCorrugatedMetal39)
wallCorrugatedMetal39.setParent(_scene)
wallCorrugatedMetal39.addComponentOrReplace(gltfShape20)
const transform191 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 24.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000054836273193, 2.5994718074798584, 1.0000054836273193)
})
wallCorrugatedMetal39.addComponentOrReplace(transform191)

const wallCorrugatedMetal40 = new Entity('wallCorrugatedMetal40')
engine.addEntity(wallCorrugatedMetal40)
wallCorrugatedMetal40.setParent(_scene)
wallCorrugatedMetal40.addComponentOrReplace(gltfShape20)
const transform192 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 22.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.5000030994415283, 2.5994718074798584, 1.0000061988830566)
})
wallCorrugatedMetal40.addComponentOrReplace(transform192)

const wallCorrugatedMetal41 = new Entity('wallCorrugatedMetal41')
engine.addEntity(wallCorrugatedMetal41)
wallCorrugatedMetal41.setParent(_scene)
wallCorrugatedMetal41.addComponentOrReplace(gltfShape20)
const transform193 = new Transform({
  position: new Vector3(43.50428009033203, 56.84843444824219, 60.54208755493164),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 2.5994718074798584, 1.0000026226043701)
})
wallCorrugatedMetal41.addComponentOrReplace(transform193)

const wallCorrugatedMetal42 = new Entity('wallCorrugatedMetal42')
engine.addEntity(wallCorrugatedMetal42)
wallCorrugatedMetal42.setParent(_scene)
wallCorrugatedMetal42.addComponentOrReplace(gltfShape20)
const transform194 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 56.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 2.5994718074798584, 1.0000028610229492)
})
wallCorrugatedMetal42.addComponentOrReplace(transform194)

const wallCorrugatedMetal43 = new Entity('wallCorrugatedMetal43')
engine.addEntity(wallCorrugatedMetal43)
wallCorrugatedMetal43.setParent(_scene)
wallCorrugatedMetal43.addComponentOrReplace(gltfShape20)
const transform195 = new Transform({
  position: new Vector3(43.72320556640625, 56.84843444824219, 54.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 2.333955764770508, 1.0000035762786865)
})
wallCorrugatedMetal43.addComponentOrReplace(transform195)

const wallCorrugatedMetal44 = new Entity('wallCorrugatedMetal44')
engine.addEntity(wallCorrugatedMetal44)
wallCorrugatedMetal44.setParent(_scene)
wallCorrugatedMetal44.addComponentOrReplace(gltfShape20)
const transform196 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 58.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 2.5994718074798584, 1.0000026226043701)
})
wallCorrugatedMetal44.addComponentOrReplace(transform196)

const wallCorrugatedMetal45 = new Entity('wallCorrugatedMetal45')
engine.addEntity(wallCorrugatedMetal45)
wallCorrugatedMetal45.setParent(_scene)
wallCorrugatedMetal45.addComponentOrReplace(gltfShape20)
const transform197 = new Transform({
  position: new Vector3(43.69071578979492, 56.84843444824219, 48.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000042915344238, 2.333955764770508, 1.0000042915344238)
})
wallCorrugatedMetal45.addComponentOrReplace(transform197)

const wallCorrugatedMetal46 = new Entity('wallCorrugatedMetal46')
engine.addEntity(wallCorrugatedMetal46)
wallCorrugatedMetal46.setParent(_scene)
wallCorrugatedMetal46.addComponentOrReplace(gltfShape20)
const transform198 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 50.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 2.5994718074798584, 1.0000035762786865)
})
wallCorrugatedMetal46.addComponentOrReplace(transform198)

const wallCorrugatedMetal47 = new Entity('wallCorrugatedMetal47')
engine.addEntity(wallCorrugatedMetal47)
wallCorrugatedMetal47.setParent(_scene)
wallCorrugatedMetal47.addComponentOrReplace(gltfShape20)
const transform199 = new Transform({
  position: new Vector3(43.55057907104492, 56.84843444824219, 52.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 2.5994718074798584, 1.0000035762786865)
})
wallCorrugatedMetal47.addComponentOrReplace(transform199)

const wallCorrugatedMetal48 = new Entity('wallCorrugatedMetal48')
engine.addEntity(wallCorrugatedMetal48)
wallCorrugatedMetal48.setParent(_scene)
wallCorrugatedMetal48.addComponentOrReplace(gltfShape20)
const transform200 = new Transform({
  position: new Vector3(43.52910232543945, 56.84843444824219, 44.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004529953003, 2.5994718074798584, 1.000004529953003)
})
wallCorrugatedMetal48.addComponentOrReplace(transform200)

const wallCorrugatedMetal49 = new Entity('wallCorrugatedMetal49')
engine.addEntity(wallCorrugatedMetal49)
wallCorrugatedMetal49.setParent(_scene)
wallCorrugatedMetal49.addComponentOrReplace(gltfShape20)
const transform201 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 46.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000040531158447, 2.5994718074798584, 1.0000040531158447)
})
wallCorrugatedMetal49.addComponentOrReplace(transform201)

const wallCorrugatedMetal50 = new Entity('wallCorrugatedMetal50')
engine.addEntity(wallCorrugatedMetal50)
wallCorrugatedMetal50.setParent(_scene)
wallCorrugatedMetal50.addComponentOrReplace(gltfShape20)
const transform202 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 42.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004529953003, 2.5994718074798584, 1.000004529953003)
})
wallCorrugatedMetal50.addComponentOrReplace(transform202)

const wallCorrugatedMetal51 = new Entity('wallCorrugatedMetal51')
engine.addEntity(wallCorrugatedMetal51)
wallCorrugatedMetal51.setParent(_scene)
wallCorrugatedMetal51.addComponentOrReplace(gltfShape20)
const transform203 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 40.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004768371582, 2.5994718074798584, 1.000004768371582)
})
wallCorrugatedMetal51.addComponentOrReplace(transform203)

const wallCorrugatedMetal52 = new Entity('wallCorrugatedMetal52')
engine.addEntity(wallCorrugatedMetal52)
wallCorrugatedMetal52.setParent(_scene)
wallCorrugatedMetal52.addComponentOrReplace(gltfShape20)
const transform204 = new Transform({
  position: new Vector3(43.411216735839844, 56.84843444824219, 38.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000052452087402, 2.5994718074798584, 1.0000052452087402)
})
wallCorrugatedMetal52.addComponentOrReplace(transform204)

const wallCorrugatedMetal53 = new Entity('wallCorrugatedMetal53')
engine.addEntity(wallCorrugatedMetal53)
wallCorrugatedMetal53.setParent(_scene)
wallCorrugatedMetal53.addComponentOrReplace(gltfShape20)
const transform205 = new Transform({
  position: new Vector3(43.411216735839844, 56.84843444824219, 36.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000057220458984, 2.5994718074798584, 1.0000057220458984)
})
wallCorrugatedMetal53.addComponentOrReplace(transform205)

const wallCorrugatedMetal54 = new Entity('wallCorrugatedMetal54')
engine.addEntity(wallCorrugatedMetal54)
wallCorrugatedMetal54.setParent(_scene)
wallCorrugatedMetal54.addComponentOrReplace(gltfShape20)
const transform206 = new Transform({
  position: new Vector3(43.63229751586914, 56.84843444824219, 34.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000061988830566, 2.5175273418426514, 1.0000061988830566)
})
wallCorrugatedMetal54.addComponentOrReplace(transform206)

const wallCorrugatedMetal55 = new Entity('wallCorrugatedMetal55')
engine.addEntity(wallCorrugatedMetal55)
wallCorrugatedMetal55.setParent(_scene)
wallCorrugatedMetal55.addComponentOrReplace(gltfShape20)
const transform207 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 32.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000059604644775, 2.5994718074798584, 1.0000059604644775)
})
wallCorrugatedMetal55.addComponentOrReplace(transform207)

const wallCorrugatedMetal56 = new Entity('wallCorrugatedMetal56')
engine.addEntity(wallCorrugatedMetal56)
wallCorrugatedMetal56.setParent(_scene)
wallCorrugatedMetal56.addComponentOrReplace(gltfShape20)
const transform208 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 30.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000061988830566, 2.5994718074798584, 1.0000061988830566)
})
wallCorrugatedMetal56.addComponentOrReplace(transform208)

const wallCorrugatedMetal57 = new Entity('wallCorrugatedMetal57')
engine.addEntity(wallCorrugatedMetal57)
wallCorrugatedMetal57.setParent(_scene)
wallCorrugatedMetal57.addComponentOrReplace(gltfShape20)
const transform209 = new Transform({
  position: new Vector3(43.70798110961914, 56.84843444824219, 28.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000006914138794, 2.341512441635132, 1.000006914138794)
})
wallCorrugatedMetal57.addComponentOrReplace(transform209)

const wallCorrugatedMetal58 = new Entity('wallCorrugatedMetal58')
engine.addEntity(wallCorrugatedMetal58)
wallCorrugatedMetal58.setParent(_scene)
wallCorrugatedMetal58.addComponentOrReplace(gltfShape20)
const transform210 = new Transform({
  position: new Vector3(43.65621566772461, 56.84843444824219, 26.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000076293945312, 2.3376147747039795, 1.0000076293945312)
})
wallCorrugatedMetal58.addComponentOrReplace(transform210)

const wallCorrugatedMetal59 = new Entity('wallCorrugatedMetal59')
engine.addEntity(wallCorrugatedMetal59)
wallCorrugatedMetal59.setParent(_scene)
wallCorrugatedMetal59.addComponentOrReplace(gltfShape20)
const transform211 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 24.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000006914138794, 2.5994718074798584, 1.000006914138794)
})
wallCorrugatedMetal59.addComponentOrReplace(transform211)

const wallCorrugatedMetal60 = new Entity('wallCorrugatedMetal60')
engine.addEntity(wallCorrugatedMetal60)
wallCorrugatedMetal60.setParent(_scene)
wallCorrugatedMetal60.addComponentOrReplace(gltfShape20)
const transform212 = new Transform({
  position: new Vector3(43.47038269042969, 56.84843444824219, 22.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.5000039339065552, 2.5994718074798584, 1.0000078678131104)
})
wallCorrugatedMetal60.addComponentOrReplace(transform212)

const garlandCurveYellow = new Entity('garlandCurveYellow')
engine.addEntity(garlandCurveYellow)
garlandCurveYellow.setParent(_scene)
const transform213 = new Transform({
  position: new Vector3(36.166648864746094, 77, 39.591190338134766),
  rotation: new Quaternion(-0.02348312921822071, 0.5309857130050659, 0.04093848541378975, -0.8460655212402344),
  scale: new Vector3(1.0541843175888062, 1.0004665851593018, 1.012755274772644)
})
garlandCurveYellow.addComponentOrReplace(transform213)
const gltfShape21 = new GLTFShape("680af140-41c7-40d9-8ce8-7648196c3caf/Garland_Curve_Yellow.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
garlandCurveYellow.addComponentOrReplace(gltfShape21)

const garlandCurveBluePurple = new Entity('garlandCurveBluePurple')
engine.addEntity(garlandCurveBluePurple)
garlandCurveBluePurple.setParent(_scene)
const transform214 = new Transform({
  position: new Vector3(35.70832443237305, 77.23571014404297, 35.60341262817383),
  rotation: new Quaternion(-0.059109482914209366, -0.3417418599128723, -0.05910943076014519, 0.9360687732696533),
  scale: new Vector3(0.5565253496170044, 1.0044724941253662, 0.9999992847442627)
})
garlandCurveBluePurple.addComponentOrReplace(transform214)
const gltfShape22 = new GLTFShape("73186899-cf6e-4a4c-a30b-a4c21fc3e86c/Garland_Curve_Blue_Purple.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
garlandCurveBluePurple.addComponentOrReplace(gltfShape22)

const garlandCurveYellow2 = new Entity('garlandCurveYellow2')
engine.addEntity(garlandCurveYellow2)
garlandCurveYellow2.setParent(_scene)
garlandCurveYellow2.addComponentOrReplace(gltfShape21)
const transform215 = new Transform({
  position: new Vector3(18.437925338745117, 75.9853515625, 37.89862060546875),
  rotation: new Quaternion(0.12909461557865143, -0.8705525398254395, -0.06542643159627914, 0.4703109562397003),
  scale: new Vector3(0.8879626989364624, 0.9868287444114685, 0.9526340961456299)
})
garlandCurveYellow2.addComponentOrReplace(transform215)

const floorBlack = new Entity('floorBlack')
engine.addEntity(floorBlack)
floorBlack.setParent(_scene)
const transform216 = new Transform({
  position: new Vector3(43.70232391357422, 66, 59.763206481933594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.6503443717956543, 1, 9.454117774963379)
})
floorBlack.addComponentOrReplace(transform216)
const gltfShape23 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
floorBlack.addComponentOrReplace(gltfShape23)

const floorBlack2 = new Entity('floorBlack2')
engine.addEntity(floorBlack2)
floorBlack2.setParent(_scene)
floorBlack2.addComponentOrReplace(gltfShape23)
const transform217 = new Transform({
  position: new Vector3(22, 66, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.6503443717956543, 1, 2.6750564575195312)
})
floorBlack2.addComponentOrReplace(transform217)

const wallcornerBlack = new Entity('wallcornerBlack')
engine.addEntity(wallcornerBlack)
wallcornerBlack.setParent(_scene)
const transform218 = new Transform({
  position: new Vector3(18.885377883911133, 65.5, 50.116092681884766),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9775807857513428, 1.4910802841186523, 2.218144416809082)
})
wallcornerBlack.addComponentOrReplace(transform218)
const gltfShape24 = new GLTFShape("b147f30c-9dee-4138-8ac3-3f9d1fadee5f/BlackCorner.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
wallcornerBlack.addComponentOrReplace(gltfShape24)

const wallcornerBlack2 = new Entity('wallcornerBlack2')
engine.addEntity(wallcornerBlack2)
wallcornerBlack2.setParent(_scene)
wallcornerBlack2.addComponentOrReplace(gltfShape24)
const transform219 = new Transform({
  position: new Vector3(14.385377883911133, 65.5, 45.116092681884766),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1.9775807857513428, 1.4910802841186523, 2.218144416809082)
})
wallcornerBlack2.addComponentOrReplace(transform219)

const floorBlack3 = new Entity('floorBlack3')
engine.addEntity(floorBlack3)
floorBlack3.setParent(_scene)
floorBlack3.addComponentOrReplace(gltfShape23)
const transform220 = new Transform({
  position: new Vector3(22, 66, 45.274383544921875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.6503443717956543, 1, 5.95129919052124)
})
floorBlack3.addComponentOrReplace(transform220)

const floorBlack4 = new Entity('floorBlack4')
engine.addEntity(floorBlack4)
floorBlack4.setParent(_scene)
floorBlack4.addComponentOrReplace(gltfShape23)
const transform221 = new Transform({
  position: new Vector3(22, 66, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9092883467674255, 1, 2.675056219100952)
})
floorBlack4.addComponentOrReplace(transform221)

const floorBlack5 = new Entity('floorBlack5')
engine.addEntity(floorBlack5)
floorBlack5.setParent(_scene)
floorBlack5.addComponentOrReplace(gltfShape23)
const transform222 = new Transform({
  position: new Vector3(14.909626007080078, 66, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8568664193153381, 1, 2.675056219100952)
})
floorBlack5.addComponentOrReplace(transform222)

const ropeLight = new Entity('ropeLight')
engine.addEntity(ropeLight)
ropeLight.setParent(_scene)
const transform223 = new Transform({
  position: new Vector3(27.512697219848633, 75.5, 54.74581527709961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8764522075653076, 1, 1)
})
ropeLight.addComponentOrReplace(transform223)

const ropeLight2 = new Entity('ropeLight2')
engine.addEntity(ropeLight2)
ropeLight2.setParent(_scene)
const transform224 = new Transform({
  position: new Vector3(27.512697219848633, 75.5, 27.354228973388672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8764522075653076, 1, 1)
})
ropeLight2.addComponentOrReplace(transform224)

const floorGlass3 = new Entity('floorGlass3')
engine.addEntity(floorGlass3)
floorGlass3.setParent(_scene)
floorGlass3.addComponentOrReplace(gltfShape3)
const transform225 = new Transform({
  position: new Vector3(30.5, 70.93218994140625, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1941921710968018, 25.5, 3.3009791374206543)
})
floorGlass3.addComponentOrReplace(transform225)

const garlandCurveYellow3 = new Entity('garlandCurveYellow3')
engine.addEntity(garlandCurveYellow3)
garlandCurveYellow3.setParent(_scene)
const transform226 = new Transform({
  position: new Vector3(25.500001907348633, 76, 54.5),
  rotation: new Quaternion(0.09754517674446106, 0.009607361629605293, 0.09754514694213867, 0.9903926253318787),
  scale: new Vector3(1, 0.9999998211860657, 0.9999998807907104)
})
garlandCurveYellow3.addComponentOrReplace(transform226)
garlandCurveYellow3.addComponentOrReplace(gltfShape21)

const garlandCurveBluePurple2 = new Entity('garlandCurveBluePurple2')
engine.addEntity(garlandCurveBluePurple2)
garlandCurveBluePurple2.setParent(_scene)
const transform227 = new Transform({
  position: new Vector3(27.500001907348633, 76, 54.5),
  rotation: new Quaternion(0.09801715612411499, 0, -1.1684552880808496e-8, 0.9951847195625305),
  scale: new Vector3(1, 0.9999999403953552, 0.9999999403953552)
})
garlandCurveBluePurple2.addComponentOrReplace(transform227)
garlandCurveBluePurple2.addComponentOrReplace(gltfShape22)

const obitaTrimmed2 = new Entity('obitaTrimmed2')
engine.addEntity(obitaTrimmed2)
obitaTrimmed2.setParent(_scene)
const transform228 = new Transform({
  position: new Vector3(27.5, 0, 41),
  rotation: new Quaternion(-2.101442367084057e-15, -1, 1.1920927533992653e-7, 8.940696716308594e-8),
  scale: new Vector3(1, 0.9465566873550415, 1)
})
obitaTrimmed2.addComponentOrReplace(transform228)
const gltfShape25 = new GLTFShape("82b977ac-5d7a-4302-ba3d-b4429fca9e09/obita_trimmed.glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
obitaTrimmed2.addComponentOrReplace(gltfShape25)

const bush3 = new Entity('bush3')
engine.addEntity(bush3)
bush3.setParent(_scene)
bush3.addComponentOrReplace(gltfShape9)
const transform229 = new Transform({
  position: new Vector3(39.5, 71.5, 47),
  rotation: new Quaternion(6.469670685413289e-15, -0.8314697742462158, 9.911892107083986e-8, 0.555570125579834),
  scale: new Vector3(0.4635114371776581, 0.8669173121452332, 0.6473972201347351)
})
bush3.addComponentOrReplace(transform229)

const bush4 = new Entity('bush4')
engine.addEntity(bush4)
bush4.setParent(_scene)
bush4.addComponentOrReplace(gltfShape9)
const transform230 = new Transform({
  position: new Vector3(15.560976028442383, 71.5, 53.38960266113281),
  rotation: new Quaternion(-1.473128679282986e-15, 0.8819213509559631, -1.0513321058169822e-7, 0.4713967442512512),
  scale: new Vector3(0.5000021457672119, 0.8090847730636597, 1.500006914138794)
})
bush4.addComponentOrReplace(transform230)

const wallPlainBlack9 = new Entity('wallPlainBlack9')
engine.addEntity(wallPlainBlack9)
wallPlainBlack9.setParent(_scene)
wallPlainBlack9.addComponentOrReplace(gltfShape16)
const transform231 = new Transform({
  position: new Vector3(39.001869201660156, 47.5, 51.46631622314453),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.7647111415863037, 2.3131377696990967, 1.6396169662475586)
})
wallPlainBlack9.addComponentOrReplace(transform231)

const wallPlainBlack7 = new Entity('wallPlainBlack7')
engine.addEntity(wallPlainBlack7)
wallPlainBlack7.setParent(_scene)
wallPlainBlack7.addComponentOrReplace(gltfShape16)
const transform232 = new Transform({
  position: new Vector3(39.001869201660156, 47.5, 36.96631622314453),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.7647111415863037, 2.3131377696990967, 1.6396198272705078)
})
wallPlainBlack7.addComponentOrReplace(transform232)

const wallPlainBlack8 = new Entity('wallPlainBlack8')
engine.addEntity(wallPlainBlack8)
wallPlainBlack8.setParent(_scene)
wallPlainBlack8.addComponentOrReplace(gltfShape16)
const transform233 = new Transform({
  position: new Vector3(39.001869201660156, 47.5, 26.46631622314453),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.7647111415863037, 2.3131377696990967, 1.6396212577819824)
})
wallPlainBlack8.addComponentOrReplace(transform233)

const wallPlainBlack10 = new Entity('wallPlainBlack10')
engine.addEntity(wallPlainBlack10)
wallPlainBlack10.setParent(_scene)
wallPlainBlack10.addComponentOrReplace(gltfShape16)
const transform234 = new Transform({
  position: new Vector3(33, 71.5, 32.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.17549294233322144, 1.8360106945037842, 1.1739000082015991)
})
wallPlainBlack10.addComponentOrReplace(transform234)

const wallPlainBlack11 = new Entity('wallPlainBlack11')
engine.addEntity(wallPlainBlack11)
wallPlainBlack11.setParent(_scene)
wallPlainBlack11.addComponentOrReplace(gltfShape16)
const transform235 = new Transform({
  position: new Vector3(21.94222068786621, 71.5, 32.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.17549294233322144, 1.8360106945037842, 1.1739002466201782)
})
wallPlainBlack11.addComponentOrReplace(transform235)

const wallPlainBlack12 = new Entity('wallPlainBlack12')
engine.addEntity(wallPlainBlack12)
wallPlainBlack12.setParent(_scene)
wallPlainBlack12.addComponentOrReplace(gltfShape16)
const transform236 = new Transform({
  position: new Vector3(21.724912643432617, 78.77354431152344, 32.57872772216797),
  rotation: new Quaternion(0.5, 0.5, -0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.09137493371963501, 2.754016399383545, 0.7458174824714661)
})
wallPlainBlack12.addComponentOrReplace(transform236)

const sofaModern = new Entity('sofaModern')
engine.addEntity(sofaModern)
sofaModern.setParent(_scene)
const transform237 = new Transform({
  position: new Vector3(20, 37.960323333740234, 25.5),
  rotation: new Quaternion(0, -0.2902846932411194, 3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
sofaModern.addComponentOrReplace(transform237)
const gltfShape26 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
sofaModern.addComponentOrReplace(gltfShape26)

const sofaModern2 = new Entity('sofaModern2')
engine.addEntity(sofaModern2)
sofaModern2.setParent(_scene)
sofaModern2.addComponentOrReplace(gltfShape26)
const transform238 = new Transform({
  position: new Vector3(15.5, 37.960323333740234, 24),
  rotation: new Quaternion(1.7600844894505481e-15, -0.19509035348892212, 2.3256582437625184e-8, -0.9807853698730469),
  scale: new Vector3(1, 1, 1)
})
sofaModern2.addComponentOrReplace(transform238)

const sofaModern3 = new Entity('sofaModern3')
engine.addEntity(sofaModern3)
sofaModern3.setParent(_scene)
sofaModern3.addComponentOrReplace(gltfShape26)
const transform239 = new Transform({
  position: new Vector3(12.5, 37.960323333740234, 28),
  rotation: new Quaternion(-3.242866697354273e-15, 0.8314695954322815, -9.911889264913043e-8, 0.5555702447891235),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
sofaModern3.addComponentOrReplace(transform239)

const sofaModern4 = new Entity('sofaModern4')
engine.addEntity(sofaModern4)
sofaModern4.setParent(_scene)
sofaModern4.addComponentOrReplace(gltfShape26)
const transform240 = new Transform({
  position: new Vector3(43, 37.960323333740234, 23.5),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern4.addComponentOrReplace(transform240)

const sofaModern5 = new Entity('sofaModern5')
engine.addEntity(sofaModern5)
sofaModern5.setParent(_scene)
sofaModern5.addComponentOrReplace(gltfShape26)
const transform241 = new Transform({
  position: new Vector3(41, 37.960323333740234, 23.5),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern5.addComponentOrReplace(transform241)

const coffeeTable2 = new Entity('coffeeTable2')
engine.addEntity(coffeeTable2)
coffeeTable2.setParent(_scene)
coffeeTable2.addComponentOrReplace(gltfShape6)
const transform242 = new Transform({
  position: new Vector3(41.510135650634766, 37.98884963989258, 25.499998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.555438280105591, 1.5, 1.499999761581421)
})
coffeeTable2.addComponentOrReplace(transform242)

const sofaModern6 = new Entity('sofaModern6')
engine.addEntity(sofaModern6)
sofaModern6.setParent(_scene)
sofaModern6.addComponentOrReplace(gltfShape26)
const transform243 = new Transform({
  position: new Vector3(42, 37.960323333740234, 27.5),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern6.addComponentOrReplace(transform243)

const sofaModern7 = new Entity('sofaModern7')
engine.addEntity(sofaModern7)
sofaModern7.setParent(_scene)
sofaModern7.addComponentOrReplace(gltfShape26)
const transform244 = new Transform({
  position: new Vector3(40, 37.960323333740234, 27.5),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern7.addComponentOrReplace(transform244)

const sofaModern8 = new Entity('sofaModern8')
engine.addEntity(sofaModern8)
sofaModern8.setParent(_scene)
sofaModern8.addComponentOrReplace(gltfShape26)
const transform245 = new Transform({
  position: new Vector3(41, 37.960323333740234, 32),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern8.addComponentOrReplace(transform245)

const sofaModern9 = new Entity('sofaModern9')
engine.addEntity(sofaModern9)
sofaModern9.setParent(_scene)
sofaModern9.addComponentOrReplace(gltfShape26)
const transform246 = new Transform({
  position: new Vector3(43, 37.960323333740234, 32),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern9.addComponentOrReplace(transform246)

const coffeeTable3 = new Entity('coffeeTable3')
engine.addEntity(coffeeTable3)
coffeeTable3.setParent(_scene)
coffeeTable3.addComponentOrReplace(gltfShape6)
const transform247 = new Transform({
  position: new Vector3(41.510135650634766, 37.98884963989258, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.555438280105591, 1.5, 1.499999761581421)
})
coffeeTable3.addComponentOrReplace(transform247)

const sofaModern10 = new Entity('sofaModern10')
engine.addEntity(sofaModern10)
sofaModern10.setParent(_scene)
sofaModern10.addComponentOrReplace(gltfShape26)
const transform248 = new Transform({
  position: new Vector3(40, 37.960323333740234, 36),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern10.addComponentOrReplace(transform248)

const sofaModern11 = new Entity('sofaModern11')
engine.addEntity(sofaModern11)
sofaModern11.setParent(_scene)
sofaModern11.addComponentOrReplace(gltfShape26)
const transform249 = new Transform({
  position: new Vector3(42, 37.960323333740234, 36),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern11.addComponentOrReplace(transform249)

const sofaModern12 = new Entity('sofaModern12')
engine.addEntity(sofaModern12)
sofaModern12.setParent(_scene)
sofaModern12.addComponentOrReplace(gltfShape26)
const transform250 = new Transform({
  position: new Vector3(36.57392501831055, 37.960323333740234, 32),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern12.addComponentOrReplace(transform250)

const sofaModern13 = new Entity('sofaModern13')
engine.addEntity(sofaModern13)
sofaModern13.setParent(_scene)
sofaModern13.addComponentOrReplace(gltfShape26)
const transform251 = new Transform({
  position: new Vector3(34.57392501831055, 37.960323333740234, 32),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern13.addComponentOrReplace(transform251)

const coffeeTable4 = new Entity('coffeeTable4')
engine.addEntity(coffeeTable4)
coffeeTable4.setParent(_scene)
coffeeTable4.addComponentOrReplace(gltfShape6)
const transform252 = new Transform({
  position: new Vector3(35.08406066894531, 37.98884963989258, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.555438280105591, 1.5, 1.499999761581421)
})
coffeeTable4.addComponentOrReplace(transform252)

const sofaModern14 = new Entity('sofaModern14')
engine.addEntity(sofaModern14)
sofaModern14.setParent(_scene)
sofaModern14.addComponentOrReplace(gltfShape26)
const transform253 = new Transform({
  position: new Vector3(35.57392501831055, 37.960323333740234, 36),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern14.addComponentOrReplace(transform253)

const sofaModern15 = new Entity('sofaModern15')
engine.addEntity(sofaModern15)
sofaModern15.setParent(_scene)
sofaModern15.addComponentOrReplace(gltfShape26)
const transform254 = new Transform({
  position: new Vector3(33.57392501831055, 37.960323333740234, 36),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern15.addComponentOrReplace(transform254)

const sofaModern16 = new Entity('sofaModern16')
engine.addEntity(sofaModern16)
sofaModern16.setParent(_scene)
sofaModern16.addComponentOrReplace(gltfShape26)
const transform255 = new Transform({
  position: new Vector3(35.57392501831055, 37.960323333740234, 27.5),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern16.addComponentOrReplace(transform255)

const sofaModern17 = new Entity('sofaModern17')
engine.addEntity(sofaModern17)
sofaModern17.setParent(_scene)
sofaModern17.addComponentOrReplace(gltfShape26)
const transform256 = new Transform({
  position: new Vector3(33.57392501831055, 37.960323333740234, 27.5),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern17.addComponentOrReplace(transform256)

const coffeeTable5 = new Entity('coffeeTable5')
engine.addEntity(coffeeTable5)
coffeeTable5.setParent(_scene)
coffeeTable5.addComponentOrReplace(gltfShape6)
const transform257 = new Transform({
  position: new Vector3(35.08406066894531, 37.98884963989258, 25.499998092651367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.555438280105591, 1.5, 1.499999761581421)
})
coffeeTable5.addComponentOrReplace(transform257)

const sofaModern18 = new Entity('sofaModern18')
engine.addEntity(sofaModern18)
sofaModern18.setParent(_scene)
sofaModern18.addComponentOrReplace(gltfShape26)
const transform258 = new Transform({
  position: new Vector3(36.57392501831055, 37.960323333740234, 23.5),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern18.addComponentOrReplace(transform258)

const sofaModern19 = new Entity('sofaModern19')
engine.addEntity(sofaModern19)
sofaModern19.setParent(_scene)
sofaModern19.addComponentOrReplace(gltfShape26)
const transform259 = new Transform({
  position: new Vector3(34.57392501831055, 37.960323333740234, 23.5),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern19.addComponentOrReplace(transform259)

const roofGlassEdges4 = new Entity('roofGlassEdges4')
engine.addEntity(roofGlassEdges4)
roofGlassEdges4.setParent(_scene)
roofGlassEdges4.addComponentOrReplace(gltfShape5)
const transform260 = new Transform({
  position: new Vector3(33.02561950683594, 37.7992057800293, 48),
  rotation: new Quaternion(0.4999999403953552, -0.5000001192092896, -0.5, 0.5000000596046448),
  scale: new Vector3(2.414851665496826, 1.0000044107437134, 2.186880111694336)
})
roofGlassEdges4.addComponentOrReplace(transform260)

const rainLight4 = new Entity('rainLight4')
engine.addEntity(rainLight4)
rainLight4.setParent(_scene)
const transform261 = new Transform({
  position: new Vector3(37.5, 37.42906188964844, 55.77419662475586),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.705492973327637, 2.5, 8.22169303894043)
})
rainLight4.addComponentOrReplace(transform261)

const blockFloorLight2 = new Entity('blockFloorLight2')
engine.addEntity(blockFloorLight2)
blockFloorLight2.setParent(_scene)
const transform262 = new Transform({
  position: new Vector3(35.5, 45.458717346191406, 23.5),
  rotation: new Quaternion(-0.7071067094802856, 8.802274061275438e-15, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(2.25, 11.249974250793457, 1.9999983310699463)
})
blockFloorLight2.addComponentOrReplace(transform262)

const blockFloorLight3 = new Entity('blockFloorLight3')
engine.addEntity(blockFloorLight3)
blockFloorLight3.setParent(_scene)
const transform263 = new Transform({
  position: new Vector3(42, 45.458717346191406, 23.5),
  rotation: new Quaternion(-0.7071067094802856, 8.802274061275438e-15, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(2.25, 11.249970436096191, 1.9999980926513672)
})
blockFloorLight3.addComponentOrReplace(transform263)

const sofaModern20 = new Entity('sofaModern20')
engine.addEntity(sofaModern20)
sofaModern20.setParent(_scene)
sofaModern20.addComponentOrReplace(gltfShape26)
const transform264 = new Transform({
  position: new Vector3(34.57392501831055, 37.960323333740234, 55.69750213623047),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern20.addComponentOrReplace(transform264)

const sofaModern21 = new Entity('sofaModern21')
engine.addEntity(sofaModern21)
sofaModern21.setParent(_scene)
sofaModern21.addComponentOrReplace(gltfShape26)
const transform265 = new Transform({
  position: new Vector3(36.57392501831055, 37.960323333740234, 55.43532943725586),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern21.addComponentOrReplace(transform265)

const sofaModern22 = new Entity('sofaModern22')
engine.addEntity(sofaModern22)
sofaModern22.setParent(_scene)
sofaModern22.addComponentOrReplace(gltfShape26)
const transform266 = new Transform({
  position: new Vector3(33.586952209472656, 37.960323333740234, 58.64531326293945),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern22.addComponentOrReplace(transform266)

const sofaModern23 = new Entity('sofaModern23')
engine.addEntity(sofaModern23)
sofaModern23.setParent(_scene)
sofaModern23.addComponentOrReplace(gltfShape26)
const transform267 = new Transform({
  position: new Vector3(35.57392501831055, 37.960323333740234, 58.8112678527832),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern23.addComponentOrReplace(transform267)

const sofaModern24 = new Entity('sofaModern24')
engine.addEntity(sofaModern24)
sofaModern24.setParent(_scene)
sofaModern24.addComponentOrReplace(gltfShape26)
const transform268 = new Transform({
  position: new Vector3(38.57392501831055, 37.960323333740234, 55),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern24.addComponentOrReplace(transform268)

const sofaModern25 = new Entity('sofaModern25')
engine.addEntity(sofaModern25)
sofaModern25.setParent(_scene)
sofaModern25.addComponentOrReplace(gltfShape26)
const transform269 = new Transform({
  position: new Vector3(37.57392501831055, 37.960323333740234, 59),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern25.addComponentOrReplace(transform269)

const sofaModern26 = new Entity('sofaModern26')
engine.addEntity(sofaModern26)
sofaModern26.setParent(_scene)
sofaModern26.addComponentOrReplace(gltfShape26)
const transform270 = new Transform({
  position: new Vector3(39.57392501831055, 37.960323333740234, 58.80984878540039),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern26.addComponentOrReplace(transform270)

const sofaModern27 = new Entity('sofaModern27')
engine.addEntity(sofaModern27)
sofaModern27.setParent(_scene)
sofaModern27.addComponentOrReplace(gltfShape26)
const transform271 = new Transform({
  position: new Vector3(40.57392501831055, 37.960323333740234, 55.27287673950195),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofaModern27.addComponentOrReplace(transform271)

const concreteRoundedTable8 = new Entity('concreteRoundedTable8')
engine.addEntity(concreteRoundedTable8)
concreteRoundedTable8.setParent(_scene)
concreteRoundedTable8.addComponentOrReplace(gltfShape15)
const transform272 = new Transform({
  position: new Vector3(38, 37.91381072998047, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 1, 1.5)
})
concreteRoundedTable8.addComponentOrReplace(transform272)

const rainLight3 = new Entity('rainLight3')
engine.addEntity(rainLight3)
rainLight3.setParent(_scene)
const transform273 = new Transform({
  position: new Vector3(26.26521110534668, 71.9258041381836, 40.55585479736328),
  rotation: new Quaternion(0, 0, 1, 2.9802322387695312e-8),
  scale: new Vector3(5.528193473815918, 0.08105109632015228, 13.215360641479492)
})
rainLight3.addComponentOrReplace(transform273)

const wallPlainBlack13 = new Entity('wallPlainBlack13')
engine.addEntity(wallPlainBlack13)
wallPlainBlack13.setParent(_scene)
wallPlainBlack13.addComponentOrReplace(gltfShape16)
const transform274 = new Transform({
  position: new Vector3(29.591339111328125, 0.0192108154296875, 51.000030517578125),
  rotation: new Quaternion(-0.7053897976875305, -2.6405588826605708e-8, 1.1036681257792225e-7, 0.7088196873664856),
  scale: new Vector3(2.094278573989868, 4.847857475280762, 0.14003592729568481)
})
wallPlainBlack13.addComponentOrReplace(transform274)

const ropeLight3 = new Entity('ropeLight3')
engine.addEntity(ropeLight3)
ropeLight3.setParent(_scene)
const transform275 = new Transform({
  position: new Vector3(27.354448318481445, 78.61507415771484, 32.74238967895508),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9412798285484314, 1, 1)
})
ropeLight3.addComponentOrReplace(transform275)

const ringWhiteLight2 = new Entity('ringWhiteLight2')
engine.addEntity(ringWhiteLight2)
ringWhiteLight2.setParent(_scene)
ringWhiteLight2.addComponentOrReplace(gltfShape18)
const transform276 = new Transform({
  position: new Vector3(16.536378860473633, 47.49756622314453, 47.63676834106445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6856913566589355, 2, 1.7068079710006714)
})
ringWhiteLight2.addComponentOrReplace(transform276)

const ringWhiteLight3 = new Entity('ringWhiteLight3')
engine.addEntity(ringWhiteLight3)
ringWhiteLight3.setParent(_scene)
ringWhiteLight3.addComponentOrReplace(gltfShape18)
const transform277 = new Transform({
  position: new Vector3(16.536378860473633, 37.84937286376953, 47.63676834106445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6856913566589355, 2, 1.7068079710006714)
})
ringWhiteLight3.addComponentOrReplace(transform277)

const ringWhiteLight4 = new Entity('ringWhiteLight4')
engine.addEntity(ringWhiteLight4)
ringWhiteLight4.setParent(_scene)
ringWhiteLight4.addComponentOrReplace(gltfShape18)
const transform278 = new Transform({
  position: new Vector3(16.536378860473633, 56.77771759033203, 47.63676834106445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6856913566589355, 2, 1.7068079710006714)
})
ringWhiteLight4.addComponentOrReplace(transform278)

const ringWhiteLight5 = new Entity('ringWhiteLight5')
engine.addEntity(ringWhiteLight5)
ringWhiteLight5.setParent(_scene)
ringWhiteLight5.addComponentOrReplace(gltfShape18)
const transform279 = new Transform({
  position: new Vector3(16.536378860473633, 71.40275573730469, 47.63676834106445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6856913566589355, 2, 1.7068079710006714)
})
ringWhiteLight5.addComponentOrReplace(transform279)

const speakers4 = new Entity('speakers4')
engine.addEntity(speakers4)
speakers4.setParent(_scene)
const transform280 = new Transform({
  position: new Vector3(24, 71.5, 31),
  rotation: new Quaternion(-5.410954887277719e-15, -0.2902846932411194, 3.460463915416767e-8, -0.9569404125213623),
  scale: new Vector3(2.000000476837158, 2, 1.000000238418579)
})
speakers4.addComponentOrReplace(transform280)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
const script11 = new Script11()
const script12 = new Script12()
const script13 = new Script13()
const script14 = new Script14()
const script15 = new Script15()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script11.init(options)
script12.init(options)
script13.init(options)
script14.init(options)
script15.init(options)
script1.spawn(toolbox, {}, createChannel(channelId, toolbox, channelBus))
script2.spawn(clickArea, {"enabled":true,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc","x":0,"y":23,"z":0,"curve":"linear","speed":3,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":4,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc","x":0,"y":-23,"z":0,"curve":"linear","speed":3,"relative":true,"onComplete":[]}},{"entityName":"toolbox","actionId":"delay","values":{"timeout":1,"onTimeout":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorGlass","x":1,"y":1,"z":1,"curve":"linear","speed":15,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea","x":1,"y":1,"z":1,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea2","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}}]}}]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorGlass","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, clickArea, channelBus))
script3.spawn(triggerArea, {"enabled":true,"onEnter":[{"entityName":"toolbox","actionId":"scale","values":{"target":"wallPlainGlass","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"wallPlainGlass2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}],"onLeave":[{"entityName":"toolbox","actionId":"scale","values":{"target":"wallPlainGlass","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"wallPlainGlass2","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, triggerArea, channelBus))
script2.spawn(clickArea2, {"enabled":true,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorGlass","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":10,"onTimeout":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorGlass","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}}]}},{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc","x":0,"y":23,"z":0,"curve":"easeinoutsine","speed":3,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":4,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc","x":0,"y":-23,"z":0,"curve":"linear","speed":3,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea2","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}}]}}]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, clickArea2, channelBus))
script2.spawn(clickArea3, {"enabled":true,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc2","x":0,"y":8.75,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc2","x":0,"y":9.75,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc2","x":0,"y":9.25,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc2","x":0,"y":14.75,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorGlass2","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":5,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc2","x":0,"y":-42.5,"z":0,"curve":"linear","speed":4,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea3","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea3","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, clickArea3, channelBus))
script4.spawn(videoStream, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"customStation":"https://decentralive.tv/video/11687ca777b5acce9c522d591137c087.mp4","image":"https://i.postimg.cc/6pMZYFNk/OUBITA-LOGO.png","station":"https://theuniverse.club/live/genesisplaza/index.m3u8"}, createChannel(channelId, videoStream, channelBus))
script5.spawn(blockFloorLight, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight, channelBus))
script6.spawn(speakers, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers, channelBus))
script6.spawn(speakers2, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers2, channelBus))
script7.spawn(radioCyberpunk, {"startOn":false,"volume":1,"onClickText":" ","onClick":[],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3","onActivate":[],"onDeactivate":[],"customStation":"https://decentralive.tv/video/f0d556385ef785b43df50fa4ebc3e3d3.mp3"}, createChannel(channelId, radioCyberpunk, channelBus))
script6.spawn(speakers3, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers3, channelBus))
script8.spawn(spark, {"active":true}, createChannel(channelId, spark, channelBus))
script8.spawn(spark2, {"active":true}, createChannel(channelId, spark2, channelBus))
script9.spawn(funkyFloorLight, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight, channelBus))
script9.spawn(funkyFloorLight2, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight2, channelBus))
script9.spawn(funkyFloorLight3, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight3, channelBus))
script9.spawn(funkyFloorLight4, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight4, channelBus))
script9.spawn(funkyFloorLight5, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight5, channelBus))
script9.spawn(funkyFloorLight6, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight6, channelBus))
script10.spawn(tableLampLight, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight, channelBus))
script10.spawn(tableLampLight2, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight2, channelBus))
script10.spawn(tableLampLight3, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight3, channelBus))
script10.spawn(tableLampLight4, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight4, channelBus))
script10.spawn(tableLampLight5, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight5, channelBus))
script10.spawn(tableLampLight6, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight6, channelBus))
script10.spawn(tableLampLight7, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight7, channelBus))
script11.spawn(rainLight, {"startOn":true,"clickable":false}, createChannel(channelId, rainLight, channelBus))
script11.spawn(rainLight2, {"startOn":true,"clickable":false}, createChannel(channelId, rainLight2, channelBus))
script12.spawn(imageFromURL, {"image":"https://i.postimg.cc/6pMZYFNk/OUBITA-LOGO.png"}, createChannel(channelId, imageFromURL, channelBus))
script13.spawn(nftPictureFrame, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script13.spawn(nftPictureFrame2, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script13.spawn(nftPictureFrame3, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script13.spawn(nftPictureFrame4, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script13.spawn(nftPictureFrame5, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script13.spawn(nftPictureFrame6, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script13.spawn(nftPictureFrame9, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script13.spawn(nftPictureFrame10, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script13.spawn(nftPictureFrame11, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script13.spawn(nftPictureFrame13, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script13.spawn(nftPictureFrame14, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script13.spawn(nftPictureFrame15, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script13.spawn(nftPictureFrame16, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script13.spawn(nftPictureFrame17, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame17, channelBus))
script13.spawn(nftPictureFrame18, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script13.spawn(nftPictureFrame19, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame19, channelBus))
script13.spawn(nftPictureFrame22, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script13.spawn(nftPictureFrame24, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame24, channelBus))
script13.spawn(nftPictureFrame7, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script13.spawn(nftPictureFrame8, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script13.spawn(nftPictureFrame12, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script13.spawn(nftPictureFrame20, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame20, channelBus))
script13.spawn(nftPictureFrame21, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script13.spawn(nftPictureFrame23, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame23, channelBus))
script13.spawn(nftPictureFrame25, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame25, channelBus))
script13.spawn(nftPictureFrame26, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame26, channelBus))
script13.spawn(nftPictureFrame27, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame27, channelBus))
script13.spawn(nftPictureFrame28, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame28, channelBus))
script13.spawn(nftPictureFrame29, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame29, channelBus))
script13.spawn(nftPictureFrame30, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame30, channelBus))
script13.spawn(nftPictureFrame31, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame31, channelBus))
script13.spawn(nftPictureFrame35, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame35, channelBus))
script13.spawn(nftPictureFrame36, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame36, channelBus))
script13.spawn(nftPictureFrame32, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame32, channelBus))
script13.spawn(nftPictureFrame33, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame33, channelBus))
script13.spawn(nftPictureFrame34, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame34, channelBus))
script14.spawn(galleryLight, {"startOn":true,"clickable":true}, createChannel(channelId, galleryLight, channelBus))
script14.spawn(galleryLight2, {"startOn":true,"clickable":true}, createChannel(channelId, galleryLight2, channelBus))
script13.spawn(nftPictureFrame37, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame37, channelBus))
script13.spawn(nftPictureFrame38, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame38, channelBus))
script13.spawn(nftPictureFrame39, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame39, channelBus))
script13.spawn(nftPictureFrame40, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame40, channelBus))
script13.spawn(nftPictureFrame41, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame41, channelBus))
script13.spawn(nftPictureFrame42, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame42, channelBus))
script13.spawn(nftPictureFrame43, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame43, channelBus))
script13.spawn(nftPictureFrame44, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame44, channelBus))
script13.spawn(nftPictureFrame45, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame45, channelBus))
script13.spawn(nftPictureFrame46, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame46, channelBus))
script13.spawn(nftPictureFrame47, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame47, channelBus))
script13.spawn(nftPictureFrame48, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame48, channelBus))
script13.spawn(nftPictureFrame49, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame49, channelBus))
script13.spawn(nftPictureFrame50, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame50, channelBus))
script13.spawn(nftPictureFrame51, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame51, channelBus))
script13.spawn(nftPictureFrame52, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame52, channelBus))
script13.spawn(nftPictureFrame53, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame53, channelBus))
script13.spawn(nftPictureFrame54, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame54, channelBus))
script13.spawn(nftPictureFrame55, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame55, channelBus))
script13.spawn(nftPictureFrame56, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame56, channelBus))
script13.spawn(nftPictureFrame57, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame57, channelBus))
script13.spawn(nftPictureFrame58, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame58, channelBus))
script13.spawn(nftPictureFrame59, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame59, channelBus))
script13.spawn(nftPictureFrame60, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame60, channelBus))
script15.spawn(ropeLight, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight, channelBus))
script15.spawn(ropeLight2, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight2, channelBus))
script11.spawn(rainLight4, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight4, channelBus))
script5.spawn(blockFloorLight2, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight2, channelBus))
script5.spawn(blockFloorLight3, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight3, channelBus))
script11.spawn(rainLight3, {"startOn":true,"clickable":false}, createChannel(channelId, rainLight3, channelBus))
script15.spawn(ropeLight3, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight3, channelBus))
script6.spawn(speakers4, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers4, channelBus))