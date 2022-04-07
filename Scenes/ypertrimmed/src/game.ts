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

const floorlightdisc = new Entity('floorlightdisc')
engine.addEntity(floorlightdisc)
floorlightdisc.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(27.5, 0, 43.881115),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2, 2)
})
floorlightdisc.addComponentOrReplace(transform3)
const gltfShape = new GLTFShape("0845fe62-9876-4e6a-a9c2-e001667c455b/Light_04/Light_04.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
floorlightdisc.addComponentOrReplace(gltfShape)

const clickarea = new Entity('clickarea')
engine.addEntity(clickarea)
clickarea.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(27.5, 0, 44),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 0.51, 2)
})
clickarea.addComponentOrReplace(transform4)

const wallplainglass = new Entity('wallplainglass')
engine.addEntity(wallplainglass)
wallplainglass.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(25.5, 0.163552642, 31.0456028),
  rotation: new Quaternion(8.44940352e-15, 1, -1.19209282e-7, -2.23517418e-8),
  scale: new Vector3(1, 1, 1)
})
wallplainglass.addComponentOrReplace(transform5)
const gltfShape2 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallplainglass.addComponentOrReplace(gltfShape2)

const wallplainglass2 = new Entity('wallplainglass2')
engine.addEntity(wallplainglass2)
wallplainglass2.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(29.5, 0.159891248, 31.35128),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallplainglass2.addComponentOrReplace(transform6)
const gltfShape3 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
wallplainglass2.addComponentOrReplace(gltfShape3)

const triggerarea = new Entity('triggerarea')
engine.addEntity(triggerarea)
triggerarea.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(27.5, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 4.5, 7)
})
triggerarea.addComponentOrReplace(transform7)

const floorglass = new Entity('floorglass')
engine.addEntity(floorglass)
floorglass.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(29.5, 23.2133427, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorglass.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("f4a4956e-f60a-4108-82c7-41b5ebda6549/GlassFloor.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
floorglass.addComponentOrReplace(gltfShape4)

const clickarea2 = new Entity('clickarea2')
engine.addEntity(clickarea2)
clickarea2.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(27.5, 23, 44),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 0.51, 2)
})
clickarea2.addComponentOrReplace(transform9)

const bermudagrass = new Entity('bermudagrass')
engine.addEntity(bermudagrass)
bermudagrass.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass.addComponentOrReplace(transform10)
const gltfShape5 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
bermudagrass.addComponentOrReplace(gltfShape5)

const bermudagrass2 = new Entity('bermudagrass2')
engine.addEntity(bermudagrass2)
bermudagrass2.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass2.addComponentOrReplace(transform11)
const gltfShape6 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
bermudagrass2.addComponentOrReplace(gltfShape6)

const bermudagrass23 = new Entity('bermudagrass23')
engine.addEntity(bermudagrass23)
bermudagrass23.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass23.addComponentOrReplace(transform12)
const gltfShape7 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
bermudagrass23.addComponentOrReplace(gltfShape7)

const bermudagrass234 = new Entity('bermudagrass234')
engine.addEntity(bermudagrass234)
bermudagrass234.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass234.addComponentOrReplace(transform13)
const gltfShape8 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
bermudagrass234.addComponentOrReplace(gltfShape8)

const bermudagrass2345 = new Entity('bermudagrass2345')
engine.addEntity(bermudagrass2345)
bermudagrass2345.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass2345.addComponentOrReplace(transform14)
const gltfShape9 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
bermudagrass2345.addComponentOrReplace(gltfShape9)

const bermudagrass23456 = new Entity('bermudagrass23456')
engine.addEntity(bermudagrass23456)
bermudagrass23456.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass23456.addComponentOrReplace(transform15)
const gltfShape10 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
bermudagrass23456.addComponentOrReplace(gltfShape10)

const bermudagrass234567 = new Entity('bermudagrass234567')
engine.addEntity(bermudagrass234567)
bermudagrass234567.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass234567.addComponentOrReplace(transform16)
const gltfShape11 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
bermudagrass234567.addComponentOrReplace(gltfShape11)

const bermudagrass2345678 = new Entity('bermudagrass2345678')
engine.addEntity(bermudagrass2345678)
bermudagrass2345678.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass2345678.addComponentOrReplace(transform17)
const gltfShape12 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
bermudagrass2345678.addComponentOrReplace(gltfShape12)

const bermudagrass23456789 = new Entity('bermudagrass23456789')
engine.addEntity(bermudagrass23456789)
bermudagrass23456789.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass23456789.addComponentOrReplace(transform18)
const gltfShape13 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
bermudagrass23456789.addComponentOrReplace(gltfShape13)

const bermudagrass2345678910 = new Entity('bermudagrass2345678910')
engine.addEntity(bermudagrass2345678910)
bermudagrass2345678910.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass2345678910.addComponentOrReplace(transform19)
const gltfShape14 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
bermudagrass2345678910.addComponentOrReplace(gltfShape14)

const bermudagrass234567891011 = new Entity('bermudagrass234567891011')
engine.addEntity(bermudagrass234567891011)
bermudagrass234567891011.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass234567891011.addComponentOrReplace(transform20)
const gltfShape15 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
bermudagrass234567891011.addComponentOrReplace(gltfShape15)

const bermudagrass23456789101112 = new Entity('bermudagrass23456789101112')
engine.addEntity(bermudagrass23456789101112)
bermudagrass23456789101112.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass23456789101112.addComponentOrReplace(transform21)
const gltfShape16 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
bermudagrass23456789101112.addComponentOrReplace(gltfShape16)

const bermudagrass2345678910111213 = new Entity('bermudagrass2345678910111213')
engine.addEntity(bermudagrass2345678910111213)
bermudagrass2345678910111213.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass2345678910111213.addComponentOrReplace(transform22)
const gltfShape17 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
bermudagrass2345678910111213.addComponentOrReplace(gltfShape17)

const bermudagrass234567891011121314 = new Entity('bermudagrass234567891011121314')
engine.addEntity(bermudagrass234567891011121314)
bermudagrass234567891011121314.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass234567891011121314.addComponentOrReplace(transform23)
const gltfShape18 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
bermudagrass234567891011121314.addComponentOrReplace(gltfShape18)

const bermudagrass23456789101112131415 = new Entity('bermudagrass23456789101112131415')
engine.addEntity(bermudagrass23456789101112131415)
bermudagrass23456789101112131415.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudagrass23456789101112131415.addComponentOrReplace(transform24)
const gltfShape19 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
bermudagrass23456789101112131415.addComponentOrReplace(gltfShape19)

const floorlightdisc2 = new Entity('floorlightdisc2')
engine.addEntity(floorlightdisc2)
floorlightdisc2.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(16.5, 29.0717258, 47.651886),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9061408, 2, 1.825748)
})
floorlightdisc2.addComponentOrReplace(transform25)
const gltfShape20 = new GLTFShape("0845fe62-9876-4e6a-a9c2-e001667c455b/Light_04/Light_04.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
floorlightdisc2.addComponentOrReplace(gltfShape20)

const clickarea23 = new Entity('clickarea23')
engine.addEntity(clickarea23)
clickarea23.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(16.5, 29.32919, 47.7123756),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 0.51, 2)
})
clickarea23.addComponentOrReplace(transform26)

const roofglassedges = new Entity('roofglassedges')
engine.addEntity(roofglassedges)
roofglassedges.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(22.0004463, 33.6928673, 51.6385727),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(2.81675744, 1, 2.75905228)
})
roofglassedges.addComponentOrReplace(transform27)
const gltfShape21 = new GLTFShape("804c94f9-20d8-4fd3-aca0-d096cad08ff7/GlassRoof_2Edges.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
roofglassedges.addComponentOrReplace(gltfShape21)

const roofglassedges2 = new Entity('roofglassedges2')
engine.addEntity(roofglassedges2)
roofglassedges2.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(22.0004463, 43.3469734, 51.6385727),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(2.816758, 1, 2.75905275)
})
roofglassedges2.addComponentOrReplace(transform28)
const gltfShape22 = new GLTFShape("804c94f9-20d8-4fd3-aca0-d096cad08ff7/GlassRoof_2Edges.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
roofglassedges2.addComponentOrReplace(gltfShape22)

const roofglassedges23 = new Entity('roofglassedges23')
engine.addEntity(roofglassedges23)
roofglassedges23.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(22.0004463, 52.6678276, 51.6385727),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(2.81675935, 1, 2.75905418)
})
roofglassedges23.addComponentOrReplace(transform29)
const gltfShape23 = new GLTFShape("804c94f9-20d8-4fd3-aca0-d096cad08ff7/GlassRoof_2Edges.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
roofglassedges23.addComponentOrReplace(gltfShape23)

const floorglass2 = new Entity('floorglass2')
engine.addEntity(floorglass2)
floorglass2.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(18.4363327, 71.49091, 49.6385841),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorglass2.addComponentOrReplace(transform30)
const gltfShape24 = new GLTFShape("f4a4956e-f60a-4108-82c7-41b5ebda6549/GlassFloor.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
floorglass2.addComponentOrReplace(gltfShape24)

const videostream = new Entity('videostream')
engine.addEntity(videostream)
videostream.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(35.43102, 25.987442, 41),
  rotation: new Quaternion(0.137949675, -0.6935199, 0.137949765, 0.69351995),
  scale: new Vector3(5.500008, 5.50000048, 1.00000131)
})
videostream.addComponentOrReplace(transform31)

const coffeetable = new Entity('coffeetable')
engine.addEntity(coffeetable)
coffeetable.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(16.5, 37.98885, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
coffeetable.addComponentOrReplace(transform32)
const gltfShape25 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
coffeetable.addComponentOrReplace(gltfShape25)

const blockfloorlight = new Entity('blockfloorlight')
engine.addEntity(blockfloorlight)
blockfloorlight.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(16.5, 37.9587173, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.5, 2)
})
blockfloorlight.addComponentOrReplace(transform33)

const tallpalmtree = new Entity('tallpalmtree')
engine.addEntity(tallpalmtree)
tallpalmtree.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(15.5, 71.5, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallpalmtree.addComponentOrReplace(transform34)
const gltfShape26 = new GLTFShape("a29c8a0e-1f2c-4d85-a099-36301da3fe36/PalmTree_02/PalmTree_02.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
tallpalmtree.addComponentOrReplace(gltfShape26)

const tallpalmtree2 = new Entity('tallpalmtree2')
engine.addEntity(tallpalmtree2)
tallpalmtree2.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(15.5, 71.5, 38.5),
  rotation: new Quaternion(-1.10595133e-15, 0.555570245, -6.622913e-8, 0.8314696),
  scale: new Vector3(0.9999999, 1, 0.9999999)
})
tallpalmtree2.addComponentOrReplace(transform35)
const gltfShape27 = new GLTFShape("a29c8a0e-1f2c-4d85-a099-36301da3fe36/PalmTree_02/PalmTree_02.glb")
gltfShape27.withCollisions = true
gltfShape27.isPointerBlocker = true
gltfShape27.visible = true
tallpalmtree2.addComponentOrReplace(gltfShape27)

const bentpalmtree = new Entity('bentpalmtree')
engine.addEntity(bentpalmtree)
bentpalmtree.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(16.5, 71, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bentpalmtree.addComponentOrReplace(transform36)
const gltfShape28 = new GLTFShape("e0db669f-e803-4528-bb16-e1e3001956d9/PalmTree_01/PalmTree_01.glb")
gltfShape28.withCollisions = true
gltfShape28.isPointerBlocker = true
gltfShape28.visible = true
bentpalmtree.addComponentOrReplace(gltfShape28)

const tallpalmtree23 = new Entity('tallpalmtree23')
engine.addEntity(tallpalmtree23)
tallpalmtree23.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(39.5, 71.5, 46.75),
  rotation: new Quaternion(-1.10595133e-15, 0.555570245, -6.622913e-8, 0.8314696),
  scale: new Vector3(0.999999642, 1, 0.999999642)
})
tallpalmtree23.addComponentOrReplace(transform37)
const gltfShape29 = new GLTFShape("a29c8a0e-1f2c-4d85-a099-36301da3fe36/PalmTree_02/PalmTree_02.glb")
gltfShape29.withCollisions = true
gltfShape29.isPointerBlocker = true
gltfShape29.visible = true
tallpalmtree23.addComponentOrReplace(gltfShape29)

const tallpalmtree234 = new Entity('tallpalmtree234')
engine.addEntity(tallpalmtree234)
tallpalmtree234.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(39.5, 71.5, 38.25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallpalmtree234.addComponentOrReplace(transform38)
const gltfShape30 = new GLTFShape("a29c8a0e-1f2c-4d85-a099-36301da3fe36/PalmTree_02/PalmTree_02.glb")
gltfShape30.withCollisions = true
gltfShape30.isPointerBlocker = true
gltfShape30.visible = true
tallpalmtree234.addComponentOrReplace(gltfShape30)

const bush = new Entity('bush')
engine.addEntity(bush)
bush.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(16.5, 71.5, 31.5),
  rotation: new Quaternion(-5.68768479e-15, -0.382683456, 4.56194229e-8, -0.9238795),
  scale: new Vector3(1.00000215, 1.5, 1.00000215)
})
bush.addComponentOrReplace(transform39)
const gltfShape31 = new GLTFShape("b34ad4ca-db96-44fe-8fd6-86b4aa9f2218/HWN20_Bush.glb")
gltfShape31.withCollisions = true
gltfShape31.isPointerBlocker = true
gltfShape31.visible = true
bush.addComponentOrReplace(gltfShape31)

const bentpalmtree2 = new Entity('bentpalmtree2')
engine.addEntity(bentpalmtree2)
bentpalmtree2.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(38.5, 71, 35.5),
  rotation: new Quaternion(-1.25180712e-14, 0.9807853, -1.169187e-7, 0.195090339),
  scale: new Vector3(1.000001, 1, 1.000001)
})
bentpalmtree2.addComponentOrReplace(transform40)
const gltfShape32 = new GLTFShape("e0db669f-e803-4528-bb16-e1e3001956d9/PalmTree_01/PalmTree_01.glb")
gltfShape32.withCollisions = true
gltfShape32.isPointerBlocker = true
gltfShape32.visible = true
bentpalmtree2.addComponentOrReplace(gltfShape32)

const bush2 = new Entity('bush2')
engine.addEntity(bush2)
bush2.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(38.5, 71.5, 30.5),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000215, 1.5, 1.00000215)
})
bush2.addComponentOrReplace(transform41)
const gltfShape33 = new GLTFShape("b34ad4ca-db96-44fe-8fd6-86b4aa9f2218/HWN20_Bush.glb")
gltfShape33.withCollisions = true
gltfShape33.isPointerBlocker = true
gltfShape33.visible = true
bush2.addComponentOrReplace(gltfShape33)

const bentpalmtree23 = new Entity('bentpalmtree23')
engine.addEntity(bentpalmtree23)
bentpalmtree23.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(16.5, 71, 42),
  rotation: new Quaternion(-2.220446e-16, 0.382683456, -4.561942e-8, 0.923879564),
  scale: new Vector3(1, 1, 1)
})
bentpalmtree23.addComponentOrReplace(transform42)
const gltfShape34 = new GLTFShape("e0db669f-e803-4528-bb16-e1e3001956d9/PalmTree_01/PalmTree_01.glb")
gltfShape34.withCollisions = true
gltfShape34.isPointerBlocker = true
gltfShape34.visible = true
bentpalmtree23.addComponentOrReplace(gltfShape34)

const speakers = new Entity('speakers')
engine.addEntity(speakers)
speakers.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(20.5, 71.5, 31),
  rotation: new Quaternion(-5.410955e-15, -0.2902847, 3.460464e-8, -0.9569404),
  scale: new Vector3(2.00000048, 2, 1.00000024)
})
speakers.addComponentOrReplace(transform43)

const speakers2 = new Entity('speakers2')
engine.addEntity(speakers2)
speakers2.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(36, 71.5, 30.5),
  rotation: new Quaternion(-1.13879641e-15, 0.195090339, -2.32565665e-8, -0.9807853),
  scale: new Vector3(3.70710731, 4, 1.14644682)
})
speakers2.addComponentOrReplace(transform44)

const radiocyberpunk = new Entity('radiocyberpunk')
engine.addEntity(radiocyberpunk)
radiocyberpunk.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(28.8366051, 73.2304, 32.2677),
  rotation: new Quaternion(-3.55271368e-15, 1.49011612e-8, 8.581147e-15, -1),
  scale: new Vector3(1.50000179, 2.56702852, 1.00000107)
})
radiocyberpunk.addComponentOrReplace(transform45)

const wallledgrid = new Entity('wallledgrid')
engine.addEntity(wallledgrid)
wallledgrid.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(33, 71.29339, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.78475475, 0.5, 22.6581135)
})
wallledgrid.addComponentOrReplace(transform46)
const gltfShape35 = new GLTFShape("bdd5671b-9c8f-43c7-8385-f0dd70257863/LEDGridWall.glb")
gltfShape35.withCollisions = true
gltfShape35.isPointerBlocker = true
gltfShape35.visible = true
wallledgrid.addComponentOrReplace(gltfShape35)

const speakers23 = new Entity('speakers23')
engine.addEntity(speakers23)
speakers23.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(21.5, 71.5, 28.5),
  rotation: new Quaternion(-3.605511e-15, 0.1950903, -2.325658e-8, 0.98078537),
  scale: new Vector3(3.70710754, 4, 1.14644718)
})
speakers23.addComponentOrReplace(transform47)

const stairsfloating = new Entity('stairsfloating')
engine.addEntity(stairsfloating)
stairsfloating.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(34.85047, 71.2886658, 30.5),
  rotation: new Quaternion(4.44089263e-16, -0.7071068, 8.42936956e-8, -0.7071068),
  scale: new Vector3(1.00000417, 0.5, 0.5000021)
})
stairsfloating.addComponentOrReplace(transform48)
const gltfShape36 = new GLTFShape("896b942f-3c65-4d53-b8ff-8d874270fe6e/floatingStairs.glb")
gltfShape36.withCollisions = true
gltfShape36.isPointerBlocker = true
gltfShape36.visible = true
stairsfloating.addComponentOrReplace(gltfShape36)

const roofblack = new Entity('roofblack')
engine.addEntity(roofblack)
roofblack.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(42.0000038, 66.5, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.790256, 1, 9.876068)
})
roofblack.addComponentOrReplace(transform49)
const gltfShape37 = new GLTFShape("0d67ab09-6591-44dc-bc70-2fd1dbc49d06/BlackRoof.glb")
gltfShape37.withCollisions = true
gltfShape37.isPointerBlocker = true
gltfShape37.visible = true
roofblack.addComponentOrReplace(gltfShape37)

const spark = new Entity('spark')
engine.addEntity(spark)
spark.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(21.6755219, 78.02174, 32.75471),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark.addComponentOrReplace(transform50)

const spark2 = new Entity('spark2')
engine.addEntity(spark2)
spark2.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(32.69689, 78.02174, 32.75471),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark2.addComponentOrReplace(transform51)

const barm = new Entity('barm')
engine.addEntity(barm)
barm.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(28.5, 73.76612, 54.87474),
  rotation: new Quaternion(-5.83727758e-15, 1, -1.19209282e-7, 0),
  scale: new Vector3(1, 1, 1)
})
barm.addComponentOrReplace(transform52)
const gltfShape38 = new GLTFShape("2312b12f-d481-4229-be52-82aa3819a391/Furnit Bar 4 2M.glb")
gltfShape38.withCollisions = true
gltfShape38.isPointerBlocker = true
gltfShape38.visible = true
barm.addComponentOrReplace(gltfShape38)

const barm2 = new Entity('barm2')
engine.addEntity(barm2)
barm2.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(26.75422, 73.76612, 54.87474),
  rotation: new Quaternion(-5.83727758e-15, 1, -1.19209282e-7, 0),
  scale: new Vector3(1, 1, 1)
})
barm2.addComponentOrReplace(transform53)
const gltfShape39 = new GLTFShape("2312b12f-d481-4229-be52-82aa3819a391/Furnit Bar 4 2M.glb")
gltfShape39.withCollisions = true
gltfShape39.isPointerBlocker = true
gltfShape39.visible = true
barm2.addComponentOrReplace(gltfShape39)

const bargreen = new Entity('bargreen')
engine.addEntity(bargreen)
bargreen.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(22.5000038, 71.5, 52.5),
  rotation: new Quaternion(-4.836938e-15, 1, -1.19209282e-7, -3.7252903e-8),
  scale: new Vector3(1, 1, 1)
})
bargreen.addComponentOrReplace(transform54)
const gltfShape40 = new GLTFShape("d918354b-4382-4b9d-acbb-cc13fadad45a/Bar_Green.glb")
gltfShape40.withCollisions = true
gltfShape40.isPointerBlocker = true
gltfShape40.visible = true
bargreen.addComponentOrReplace(gltfShape40)

const bargreen2 = new Entity('bargreen2')
engine.addEntity(bargreen2)
bargreen2.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(28.6099358, 71.5, 52.5),
  rotation: new Quaternion(-4.836938e-15, 1, -1.19209282e-7, -3.7252903e-8),
  scale: new Vector3(1, 1, 1)
})
bargreen2.addComponentOrReplace(transform55)
const gltfShape41 = new GLTFShape("d918354b-4382-4b9d-acbb-cc13fadad45a/Bar_Green.glb")
gltfShape41.withCollisions = true
gltfShape41.isPointerBlocker = true
gltfShape41.visible = true
bargreen2.addComponentOrReplace(gltfShape41)

const concreteroundedtable = new Entity('concreteroundedtable')
engine.addEntity(concreteroundedtable)
concreteroundedtable.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(34.5000038, 71.5702744, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable.addComponentOrReplace(transform56)
const gltfShape42 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape42.withCollisions = true
gltfShape42.isPointerBlocker = true
gltfShape42.visible = true
concreteroundedtable.addComponentOrReplace(gltfShape42)

const concreteroundedtable2 = new Entity('concreteroundedtable2')
engine.addEntity(concreteroundedtable2)
concreteroundedtable2.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(33, 71.5702744, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable2.addComponentOrReplace(transform57)
const gltfShape43 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape43.withCollisions = true
gltfShape43.isPointerBlocker = true
gltfShape43.visible = true
concreteroundedtable2.addComponentOrReplace(gltfShape43)

const concreteroundedtable23 = new Entity('concreteroundedtable23')
engine.addEntity(concreteroundedtable23)
concreteroundedtable23.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(37, 71.5702744, 44.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable23.addComponentOrReplace(transform58)
const gltfShape44 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape44.withCollisions = true
gltfShape44.isPointerBlocker = true
gltfShape44.visible = true
concreteroundedtable23.addComponentOrReplace(gltfShape44)

const concreteroundedtable234 = new Entity('concreteroundedtable234')
engine.addEntity(concreteroundedtable234)
concreteroundedtable234.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(35.5, 71.5702744, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable234.addComponentOrReplace(transform59)
const gltfShape45 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape45.withCollisions = true
gltfShape45.isPointerBlocker = true
gltfShape45.visible = true
concreteroundedtable234.addComponentOrReplace(gltfShape45)

const concreteroundedtable2345 = new Entity('concreteroundedtable2345')
engine.addEntity(concreteroundedtable2345)
concreteroundedtable2345.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(32, 71.5702744, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable2345.addComponentOrReplace(transform60)
const gltfShape46 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape46.withCollisions = true
gltfShape46.isPointerBlocker = true
gltfShape46.visible = true
concreteroundedtable2345.addComponentOrReplace(gltfShape46)

const concreteroundedtable23456 = new Entity('concreteroundedtable23456')
engine.addEntity(concreteroundedtable23456)
concreteroundedtable23456.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(38.5, 71.5702744, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable23456.addComponentOrReplace(transform61)
const gltfShape47 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape47.withCollisions = true
gltfShape47.isPointerBlocker = true
gltfShape47.visible = true
concreteroundedtable23456.addComponentOrReplace(gltfShape47)

const concreteroundedtable234567 = new Entity('concreteroundedtable234567')
engine.addEntity(concreteroundedtable234567)
concreteroundedtable234567.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(36, 71.5702744, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable234567.addComponentOrReplace(transform62)
const gltfShape48 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape48.withCollisions = true
gltfShape48.isPointerBlocker = true
gltfShape48.visible = true
concreteroundedtable234567.addComponentOrReplace(gltfShape48)

const funkyfloorlight = new Entity('funkyfloorlight')
engine.addEntity(funkyfloorlight)
funkyfloorlight.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(17.8019485, 71.3419, 42.82564),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyfloorlight.addComponentOrReplace(transform63)

const funkyfloorlight2 = new Entity('funkyfloorlight2')
engine.addEntity(funkyfloorlight2)
funkyfloorlight2.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(17, 71.3419, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyfloorlight2.addComponentOrReplace(transform64)

const funkyfloorlight23 = new Entity('funkyfloorlight23')
engine.addEntity(funkyfloorlight23)
funkyfloorlight23.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(38.5, 71.3419, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyfloorlight23.addComponentOrReplace(transform65)

const funkyfloorlight234 = new Entity('funkyfloorlight234')
engine.addEntity(funkyfloorlight234)
funkyfloorlight234.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(38, 71.3419, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyfloorlight234.addComponentOrReplace(transform66)

const funkyfloorlight2345 = new Entity('funkyfloorlight2345')
engine.addEntity(funkyfloorlight2345)
funkyfloorlight2345.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(18, 71.3419, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyfloorlight2345.addComponentOrReplace(transform67)

const funkyfloorlight23456 = new Entity('funkyfloorlight23456')
engine.addEntity(funkyfloorlight23456)
funkyfloorlight23456.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(34, 71.3419, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyfloorlight23456.addComponentOrReplace(transform68)

const tablelamplight = new Entity('tablelamplight')
engine.addEntity(tablelamplight)
tablelamplight.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(32.13079, 72.67412, 40.5091362),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight.addComponentOrReplace(transform69)

const tablelamplight2 = new Entity('tablelamplight2')
engine.addEntity(tablelamplight2)
tablelamplight2.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(33.14961, 72.67412, 43.3328857),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight2.addComponentOrReplace(transform70)

const tablelamplight23 = new Entity('tablelamplight23')
engine.addEntity(tablelamplight23)
tablelamplight23.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(34.60026, 72.67412, 46.8727722),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight23.addComponentOrReplace(transform71)

const tablelamplight234 = new Entity('tablelamplight234')
engine.addEntity(tablelamplight234)
tablelamplight234.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(37.10054, 72.67412, 44.4331245),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight234.addComponentOrReplace(transform72)

const tablelamplight2345 = new Entity('tablelamplight2345')
engine.addEntity(tablelamplight2345)
tablelamplight2345.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(35.6042175, 72.67412, 41.3749237),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight2345.addComponentOrReplace(transform73)

const tablelamplight23456 = new Entity('tablelamplight23456')
engine.addEntity(tablelamplight23456)
tablelamplight23456.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(38.5920525, 72.67412, 41.39891),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight23456.addComponentOrReplace(transform74)

const tablelamplight234567 = new Entity('tablelamplight234567')
engine.addEntity(tablelamplight234567)
tablelamplight234567.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(36.1423569, 72.67412, 37.90638),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight234567.addComponentOrReplace(transform75)

const rainlight = new Entity('rainlight')
engine.addEntity(rainlight)
rainlight.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(22, 2.374787, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 1, 3)
})
rainlight.addComponentOrReplace(transform76)

const rainlight2 = new Entity('rainlight2')
engine.addEntity(rainlight2)
rainlight2.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(33, 2.374787, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 1, 3)
})
rainlight2.addComponentOrReplace(transform77)

const imagefromurl = new Entity('imagefromurl')
engine.addEntity(imagefromurl)
imagefromurl.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(27.5, 0.5, 50.94598),
  rotation: new Quaternion(-5.83727758e-15, 1, -1.19209282e-7, 0),
  scale: new Vector3(4.5, 4.5, 1)
})
imagefromurl.addComponentOrReplace(transform78)

const nftpictureframe = new Entity('nftpictureframe')
engine.addEntity(nftpictureframe)
nftpictureframe.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(38.5, 49, 41.10411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50000882, 3.5, 1.00000238)
})
nftpictureframe.addComponentOrReplace(transform79)

const nftpictureframe2 = new Entity('nftpictureframe2')
engine.addEntity(nftpictureframe2)
nftpictureframe2.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(38.5, 49, 38.10411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50000978, 3.5, 1.00000262)
})
nftpictureframe2.addComponentOrReplace(transform80)

const nftpictureframe23 = new Entity('nftpictureframe23')
engine.addEntity(nftpictureframe23)
nftpictureframe23.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(38.5, 51.5, 38.10411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001168, 3.5, 1.0000031)
})
nftpictureframe23.addComponentOrReplace(transform81)

const nftpictureframe234 = new Entity('nftpictureframe234')
engine.addEntity(nftpictureframe234)
nftpictureframe234.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(38.5, 51.5, 41.10411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001264, 3.5, 1.00000334)
})
nftpictureframe234.addComponentOrReplace(transform82)

const nftpictureframe2345 = new Entity('nftpictureframe2345')
engine.addEntity(nftpictureframe2345)
nftpictureframe2345.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(38.5, 54, 41.10411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001359, 3.5, 1.00000358)
})
nftpictureframe2345.addComponentOrReplace(transform83)

const nftpictureframe23456 = new Entity('nftpictureframe23456')
engine.addEntity(nftpictureframe23456)
nftpictureframe23456.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(38.5, 54, 38.10411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001454, 3.5, 1.00000381)
})
nftpictureframe23456.addComponentOrReplace(transform84)

const nftpictureframe234567 = new Entity('nftpictureframe234567')
engine.addEntity(nftpictureframe234567)
nftpictureframe234567.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(38.5, 49, 27.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001168, 3.5, 1.0000031)
})
nftpictureframe234567.addComponentOrReplace(transform85)

const nftpictureframe2345678 = new Entity('nftpictureframe2345678')
engine.addEntity(nftpictureframe2345678)
nftpictureframe2345678.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(38.5, 49, 30.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001073, 3.5, 1.00000286)
})
nftpictureframe2345678.addComponentOrReplace(transform86)

const nftpictureframe23456789 = new Entity('nftpictureframe23456789')
engine.addEntity(nftpictureframe23456789)
nftpictureframe23456789.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(38.5, 51.5, 29.10411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(8.750042, 8.75, 1.00000453)
})
nftpictureframe23456789.addComponentOrReplace(transform87)

const nftpictureframe2345678910 = new Entity('nftpictureframe2345678910')
engine.addEntity(nftpictureframe2345678910)
nftpictureframe2345678910.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(39, 54, 30.60411),
  rotation: new Quaternion(8.189012e-15, 0.7071068, -8.429369e-8, 0.7071068),
  scale: new Vector3(3.50001836, 3.5, 1.00000477)
})
nftpictureframe2345678910.addComponentOrReplace(transform88)

const nftpictureframe234567891011 = new Entity('nftpictureframe234567891011')
engine.addEntity(nftpictureframe234567891011)
nftpictureframe234567891011.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(39, 51.5, 30.60411),
  rotation: new Quaternion(8.189012e-15, 0.7071068, -8.429369e-8, 0.7071068),
  scale: new Vector3(3.5000155, 3.5, 1.000004)
})
nftpictureframe234567891011.addComponentOrReplace(transform89)

const nftpictureframe23456789101112 = new Entity('nftpictureframe23456789101112')
engine.addEntity(nftpictureframe23456789101112)
nftpictureframe23456789101112.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(39, 49, 30.60411),
  rotation: new Quaternion(8.189012e-15, 0.7071068, -8.429369e-8, 0.7071068),
  scale: new Vector3(3.50001359, 3.5, 1.00000358)
})
nftpictureframe23456789101112.addComponentOrReplace(transform90)

const nftpictureframe2345678910111213 = new Entity('nftpictureframe2345678910111213')
engine.addEntity(nftpictureframe2345678910111213)
nftpictureframe2345678910111213.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(39, 49, 27.60411),
  rotation: new Quaternion(8.189012e-15, 0.7071068, -8.429369e-8, 0.7071068),
  scale: new Vector3(3.50001264, 3.5, 1.00000334)
})
nftpictureframe2345678910111213.addComponentOrReplace(transform91)

const nftpictureframe234567891011121314 = new Entity('nftpictureframe234567891011121314')
engine.addEntity(nftpictureframe234567891011121314)
nftpictureframe234567891011121314.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(39, 51.5, 27.60411),
  rotation: new Quaternion(8.189012e-15, 0.7071068, -8.429369e-8, 0.7071068),
  scale: new Vector3(3.50001645, 3.5, 1.00000429)
})
nftpictureframe234567891011121314.addComponentOrReplace(transform92)

const nftpictureframe23456789101112131415 = new Entity('nftpictureframe23456789101112131415')
engine.addEntity(nftpictureframe23456789101112131415)
nftpictureframe23456789101112131415.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(39, 54, 27.60411),
  rotation: new Quaternion(8.189012e-15, 0.7071068, -8.429369e-8, 0.7071068),
  scale: new Vector3(3.5000174, 3.5, 1.00000453)
})
nftpictureframe23456789101112131415.addComponentOrReplace(transform93)

const nftpictureframe2345678910111213141516 = new Entity('nftpictureframe2345678910111213141516')
engine.addEntity(nftpictureframe2345678910111213141516)
nftpictureframe2345678910111213141516.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(39, 54, 41.10411),
  rotation: new Quaternion(8.189012e-15, 0.7071068, -8.429369e-8, 0.7071068),
  scale: new Vector3(3.50001931, 3.5, 1.000005)
})
nftpictureframe2345678910111213141516.addComponentOrReplace(transform94)

const nftpictureframe234567891011121314151617 = new Entity('nftpictureframe234567891011121314151617')
engine.addEntity(nftpictureframe234567891011121314151617)
nftpictureframe234567891011121314151617.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(39, 49, 39.60411),
  rotation: new Quaternion(8.189012e-15, 0.7071068, -8.429369e-8, 0.7071068),
  scale: new Vector3(8.75004, 8.75, 1.00000429)
})
nftpictureframe234567891011121314151617.addComponentOrReplace(transform95)

const nftpictureframe23456789101112131415161718 = new Entity('nftpictureframe23456789101112131415161718')
engine.addEntity(nftpictureframe23456789101112131415161718)
nftpictureframe23456789101112131415161718.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(39, 54, 38.10411),
  rotation: new Quaternion(8.189012e-15, 0.7071068, -8.429369e-8, 0.7071068),
  scale: new Vector3(3.50001836, 3.5, 1.00000477)
})
nftpictureframe23456789101112131415161718.addComponentOrReplace(transform96)

const nftpictureframe2345678910111213141516171819 = new Entity('nftpictureframe2345678910111213141516171819')
engine.addEntity(nftpictureframe2345678910111213141516171819)
nftpictureframe2345678910111213141516171819.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(39, 54, 55.60411),
  rotation: new Quaternion(8.189012e-15, 0.7071068, -8.429369e-8, 0.7071068),
  scale: new Vector3(3.500024, 3.5, 1.0000062)
})
nftpictureframe2345678910111213141516171819.addComponentOrReplace(transform97)

const nftpictureframe234567891011121314151617181920 = new Entity('nftpictureframe234567891011121314151617181920')
engine.addEntity(nftpictureframe234567891011121314151617181920)
nftpictureframe234567891011121314151617181920.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(39, 54, 52.60411),
  rotation: new Quaternion(8.189012e-15, 0.7071068, -8.429369e-8, 0.7071068),
  scale: new Vector3(3.50002313, 3.5, 1.000006)
})
nftpictureframe234567891011121314151617181920.addComponentOrReplace(transform98)

const nftpictureframe23456789101112131415161718192021 = new Entity('nftpictureframe23456789101112131415161718192021')
engine.addEntity(nftpictureframe23456789101112131415161718192021)
nftpictureframe23456789101112131415161718192021.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(39, 49, 54.10411),
  rotation: new Quaternion(8.189012e-15, 0.7071068, -8.429369e-8, 0.7071068),
  scale: new Vector3(8.75005, 8.75, 1.00000548)
})
nftpictureframe23456789101112131415161718192021.addComponentOrReplace(transform99)

const nftpictureframe2345678910111213141516171819202122 = new Entity('nftpictureframe2345678910111213141516171819202122')
engine.addEntity(nftpictureframe2345678910111213141516171819202122)
nftpictureframe2345678910111213141516171819202122.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(38.5, 49, 52.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001454, 3.5, 1.00000381)
})
nftpictureframe2345678910111213141516171819202122.addComponentOrReplace(transform100)

const nftpictureframe234567891011121314151617181920212223 = new Entity('nftpictureframe234567891011121314151617181920212223')
engine.addEntity(nftpictureframe234567891011121314151617181920212223)
nftpictureframe234567891011121314151617181920212223.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(38.5, 49, 55.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001359, 3.5, 1.00000358)
})
nftpictureframe234567891011121314151617181920212223.addComponentOrReplace(transform101)

const nftpictureframe23456789101112131415161718192021222324 = new Entity('nftpictureframe23456789101112131415161718192021222324')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324)
nftpictureframe23456789101112131415161718192021222324.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(38.5, 51.5, 54.10411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(8.750048, 8.75, 1.00000525)
})
nftpictureframe23456789101112131415161718192021222324.addComponentOrReplace(transform102)

const wallplainblack = new Entity('wallplainblack')
engine.addEntity(wallplainblack)
wallplainblack.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(43.9730644, 47.5, 21.3572617),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(19.62321, 2.31313777, 0.1399997)
})
wallplainblack.addComponentOrReplace(transform103)
const gltfShape49 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape49.withCollisions = true
gltfShape49.isPointerBlocker = true
gltfShape49.visible = true
wallplainblack.addComponentOrReplace(gltfShape49)

const wallplainblack2 = new Entity('wallplainblack2')
engine.addEntity(wallplainblack2)
wallplainblack2.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(11.0911388, 47.5, 21.3572617),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(19.6232224, 2.31313777, 0.139999792)
})
wallplainblack2.addComponentOrReplace(transform104)
const gltfShape50 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape50.withCollisions = true
gltfShape50.isPointerBlocker = true
gltfShape50.visible = true
wallplainblack2.addComponentOrReplace(gltfShape50)

const wallplainblack23 = new Entity('wallplainblack23')
engine.addEntity(wallplainblack23)
wallplainblack23.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(43.9730644, 47.5, 21.3861179),
  rotation: new Quaternion(-1.72181109e-15, -3.7252903e-8, 1.77635684e-15, 1),
  scale: new Vector3(5.26489973, 2.31313777, 0.139999717)
})
wallplainblack23.addComponentOrReplace(transform105)
const gltfShape51 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape51.withCollisions = true
gltfShape51.isPointerBlocker = true
gltfShape51.visible = true
wallplainblack23.addComponentOrReplace(gltfShape51)

const wallplainblack234 = new Entity('wallplainblack234')
engine.addEntity(wallplainblack234)
wallplainblack234.setParent(_scene)
const transform106 = new Transform({
  position: new Vector3(43.9730644, 47.5, 60.53647),
  rotation: new Quaternion(-1.72181109e-15, -3.7252903e-8, 1.77635684e-15, 1),
  scale: new Vector3(5.26489973, 2.31313777, 0.139999717)
})
wallplainblack234.addComponentOrReplace(transform106)
const gltfShape52 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape52.withCollisions = true
gltfShape52.isPointerBlocker = true
gltfShape52.visible = true
wallplainblack234.addComponentOrReplace(gltfShape52)

const wallplainblack2345 = new Entity('wallplainblack2345')
engine.addEntity(wallplainblack2345)
wallplainblack2345.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(21.5743446, 47.5, 60.53647),
  rotation: new Quaternion(-1.72181109e-15, -3.7252903e-8, 1.77635684e-15, 1),
  scale: new Vector3(5.26489973, 2.31313777, 0.139999717)
})
wallplainblack2345.addComponentOrReplace(transform107)
const gltfShape53 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape53.withCollisions = true
gltfShape53.isPointerBlocker = true
gltfShape53.visible = true
wallplainblack2345.addComponentOrReplace(gltfShape53)

const wallplainblack23456 = new Entity('wallplainblack23456')
engine.addEntity(wallplainblack23456)
wallplainblack23456.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(21.5743446, 47.5, 21.3861179),
  rotation: new Quaternion(-1.72181109e-15, -3.7252903e-8, 1.77635684e-15, 1),
  scale: new Vector3(5.26489973, 2.31313777, 0.139999717)
})
wallplainblack23456.addComponentOrReplace(transform108)
const gltfShape54 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape54.withCollisions = true
gltfShape54.isPointerBlocker = true
gltfShape54.visible = true
wallplainblack23456.addComponentOrReplace(gltfShape54)

const nftpictureframe2345678910111213141516171819202122232425 = new Entity('nftpictureframe2345678910111213141516171819202122232425')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425)
nftpictureframe2345678910111213141516171819202122232425.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(11.0958138, 49, 31.10411),
  rotation: new Quaternion(-8.492664e-15, -0.7071069, 8.429369e-8, -0.707106769),
  scale: new Vector3(3.50001454, 3.5, 1.00000381)
})
nftpictureframe2345678910111213141516171819202122232425.addComponentOrReplace(transform109)

const nftpictureframe234567891011121314151617181920212223242526 = new Entity('nftpictureframe234567891011121314151617181920212223242526')
engine.addEntity(nftpictureframe234567891011121314151617181920212223242526)
nftpictureframe234567891011121314151617181920212223242526.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(11.0958138, 49, 34.10411),
  rotation: new Quaternion(-8.492664e-15, -0.7071069, 8.429369e-8, -0.707106769),
  scale: new Vector3(3.5000155, 3.5, 1.000004)
})
nftpictureframe234567891011121314151617181920212223242526.addComponentOrReplace(transform110)

const nftpictureframe23456789101112131415161718192021222324252627 = new Entity('nftpictureframe23456789101112131415161718192021222324252627')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324252627)
nftpictureframe23456789101112131415161718192021222324252627.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(11.0958138, 51.5, 34.10411),
  rotation: new Quaternion(-8.492664e-15, -0.7071069, 8.429369e-8, -0.707106769),
  scale: new Vector3(3.5000174, 3.5, 1.00000453)
})
nftpictureframe23456789101112131415161718192021222324252627.addComponentOrReplace(transform111)

const nftpictureframe2345678910111213141516171819202122232425262728 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728)
nftpictureframe2345678910111213141516171819202122232425262728.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(11.0958138, 51.5, 31.10411),
  rotation: new Quaternion(-8.492664e-15, -0.7071069, 8.429369e-8, -0.707106769),
  scale: new Vector3(3.50001836, 3.5, 1.00000477)
})
nftpictureframe2345678910111213141516171819202122232425262728.addComponentOrReplace(transform112)

const nftpictureframe234567891011121314151617181920212223242526272829 = new Entity('nftpictureframe234567891011121314151617181920212223242526272829')
engine.addEntity(nftpictureframe234567891011121314151617181920212223242526272829)
nftpictureframe234567891011121314151617181920212223242526272829.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(11.0958138, 54, 31.10411),
  rotation: new Quaternion(-8.492664e-15, -0.7071069, 8.429369e-8, -0.707106769),
  scale: new Vector3(3.50001931, 3.5, 1.000005)
})
nftpictureframe234567891011121314151617181920212223242526272829.addComponentOrReplace(transform113)

const nftpictureframe23456789101112131415161718192021222324252627282930 = new Entity('nftpictureframe23456789101112131415161718192021222324252627282930')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324252627282930)
nftpictureframe23456789101112131415161718192021222324252627282930.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(11.0958138, 54, 34.10411),
  rotation: new Quaternion(-8.492664e-15, -0.7071069, 8.429369e-8, -0.707106769),
  scale: new Vector3(3.50002027, 3.5, 1.00000525)
})
nftpictureframe23456789101112131415161718192021222324252627282930.addComponentOrReplace(transform114)

const nftpictureframe2345678910111213141516171819202122232425262728293031 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728293031')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728293031)
nftpictureframe2345678910111213141516171819202122232425262728293031.setParent(_scene)
const transform115 = new Transform({
  position: new Vector3(11.0958138, 49.5, 26.60411),
  rotation: new Quaternion(-8.492664e-15, -0.7071069, 8.429369e-8, -0.707106769),
  scale: new Vector3(7.00003862, 7, 1.000005)
})
nftpictureframe2345678910111213141516171819202122232425262728293031.addComponentOrReplace(transform115)

const nftpictureframe234567891011121314151617181920212223242526272829303132 = new Entity('nftpictureframe234567891011121314151617181920212223242526272829303132')
engine.addEntity(nftpictureframe234567891011121314151617181920212223242526272829303132)
nftpictureframe234567891011121314151617181920212223242526272829303132.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(11.0958138, 54, 25.10411),
  rotation: new Quaternion(-8.492664e-15, -0.7071069, 8.429369e-8, -0.707106769),
  scale: new Vector3(3.50002027, 3.5, 1.00000525)
})
nftpictureframe234567891011121314151617181920212223242526272829303132.addComponentOrReplace(transform116)

const nftpictureframe23456789101112131415161718192021222324252627282930313233 = new Entity('nftpictureframe23456789101112131415161718192021222324252627282930313233')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324252627282930313233)
nftpictureframe23456789101112131415161718192021222324252627282930313233.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(11.0958138, 54, 28.10411),
  rotation: new Quaternion(-8.492664e-15, -0.7071069, 8.429369e-8, -0.707106769),
  scale: new Vector3(3.50002122, 3.5, 1.00000548)
})
nftpictureframe23456789101112131415161718192021222324252627282930313233.addComponentOrReplace(transform117)

const nftpictureframe2345678910111213141516171819202122232425262728293031323334 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728293031323334')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728293031323334)
nftpictureframe2345678910111213141516171819202122232425262728293031323334.setParent(_scene)
const transform118 = new Transform({
  position: new Vector3(17.8458138, 50.5, 21.3971748),
  rotation: new Quaternion(3.68752617e-17, 5.96046448e-8, -8.881784e-16, 1),
  scale: new Vector3(7.00004, 7, 1.00000489)
})
nftpictureframe2345678910111213141516171819202122232425262728293031323334.addComponentOrReplace(transform118)

const nftpictureframe234567891011121314151617181920212223242526272829303132333435 = new Entity('nftpictureframe234567891011121314151617181920212223242526272829303132333435')
engine.addEntity(nftpictureframe234567891011121314151617181920212223242526272829303132333435)
nftpictureframe234567891011121314151617181920212223242526272829303132333435.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(13.3458138, 52.5, 21.3971748),
  rotation: new Quaternion(3.68752617e-17, 5.96046448e-8, -8.881784e-16, 1),
  scale: new Vector3(3.50001884, 3.5, 1.00000477)
})
nftpictureframe234567891011121314151617181920212223242526272829303132333435.addComponentOrReplace(transform119)

const nftpictureframe23456789101112131415161718192021222324252627282930313233343536 = new Entity('nftpictureframe23456789101112131415161718192021222324252627282930313233343536')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324252627282930313233343536)
nftpictureframe23456789101112131415161718192021222324252627282930313233343536.setParent(_scene)
const transform120 = new Transform({
  position: new Vector3(13.3458138, 50, 21.3971748),
  rotation: new Quaternion(3.68752617e-17, 5.96046448e-8, -8.881784e-16, 1),
  scale: new Vector3(3.50001431, 3.5, 1.00000381)
})
nftpictureframe23456789101112131415161718192021222324252627282930313233343536.addComponentOrReplace(transform120)

const doorframeblack = new Entity('doorframeblack')
engine.addEntity(doorframeblack)
doorframeblack.setParent(_scene)
const transform121 = new Transform({
  position: new Vector3(21.8788986, 47.542572, 39.5000038),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.43225431, 2.29601932, 1)
})
doorframeblack.addComponentOrReplace(transform121)
const gltfShape55 = new GLTFShape("fb7c3a1e-aaf1-4bb1-baa1-0e0f57ed9b3f/BlackDoorframe.glb")
gltfShape55.withCollisions = true
gltfShape55.isPointerBlocker = true
gltfShape55.visible = true
doorframeblack.addComponentOrReplace(gltfShape55)

const gallerylight = new Entity('gallerylight')
engine.addEntity(gallerylight)
gallerylight.setParent(_scene)
const transform122 = new Transform({
  position: new Vector3(18.5, 54, 21.3485031),
  rotation: new Quaternion(0, 0, -8.940697e-8, 1),
  scale: new Vector3(4.5, 1.5, 1.5)
})
gallerylight.addComponentOrReplace(transform122)

const gallerylight2 = new Entity('gallerylight2')
engine.addEntity(gallerylight2)
gallerylight2.setParent(_scene)
const transform123 = new Transform({
  position: new Vector3(11.0547867, 53, 25.9850769),
  rotation: new Quaternion(-6.322028e-8, 0.7071068, -1.47513973e-7, 0.7071068),
  scale: new Vector3(4.50000858, 1.5, 1.50000429)
})
gallerylight2.addComponentOrReplace(transform123)

const ringwhitelight = new Entity('ringwhitelight')
engine.addEntity(ringwhitelight)
ringwhitelight.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(16.5, 56.3973923, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 2, 2)
})
ringwhitelight.addComponentOrReplace(transform124)
const gltfShape56 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape56.withCollisions = true
gltfShape56.isPointerBlocker = true
gltfShape56.visible = true
ringwhitelight.addComponentOrReplace(gltfShape56)

const spotlight = new Entity('spotlight')
engine.addEntity(spotlight)
spotlight.setParent(_scene)
const transform125 = new Transform({
  position: new Vector3(32.5, 79, 32.8861542),
  rotation: new Quaternion(-0.938553035, -0.268188059, 0.11108724, -0.186689824),
  scale: new Vector3(0.9999999, 0.386155844, 1.00000226)
})
spotlight.addComponentOrReplace(transform125)
const gltfShape57 = new GLTFShape("3ddda096-a798-432e-ba66-61354bccbcc9/Spotlight.glb")
gltfShape57.withCollisions = true
gltfShape57.isPointerBlocker = true
gltfShape57.visible = true
spotlight.addComponentOrReplace(gltfShape57)

const spotlight2 = new Entity('spotlight2')
engine.addEntity(spotlight2)
spotlight2.setParent(_scene)
const transform126 = new Transform({
  position: new Vector3(21.75901, 79, 32.8861542),
  rotation: new Quaternion(0.9569404, 1.5426704e-15, -1.1407618e-7, 0.2902847),
  scale: new Vector3(1, 0.386155874, 1.0000031)
})
spotlight2.addComponentOrReplace(transform126)
const gltfShape58 = new GLTFShape("3ddda096-a798-432e-ba66-61354bccbcc9/Spotlight.glb")
gltfShape58.withCollisions = true
gltfShape58.isPointerBlocker = true
gltfShape58.visible = true
spotlight2.addComponentOrReplace(gltfShape58)

const spotlight23 = new Entity('spotlight23')
engine.addEntity(spotlight23)
spotlight23.setParent(_scene)
const transform127 = new Transform({
  position: new Vector3(23.75901, 79, 32.8861542),
  rotation: new Quaternion(0.9194308, 0.0375095233, -0.09055615, 0.380840659),
  scale: new Vector3(0.99999994, 0.386155963, 1.00000286)
})
spotlight23.addComponentOrReplace(transform127)
const gltfShape59 = new GLTFShape("3ddda096-a798-432e-ba66-61354bccbcc9/Spotlight.glb")
gltfShape59.withCollisions = true
gltfShape59.isPointerBlocker = true
gltfShape59.visible = true
spotlight23.addComponentOrReplace(gltfShape59)

const spotlight234 = new Entity('spotlight234')
engine.addEntity(spotlight234)
spotlight234.setParent(_scene)
const transform128 = new Transform({
  position: new Vector3(30.5, 79, 32.8861542),
  rotation: new Quaternion(0.938553035, -0.0566317178, 0.1866897, 0.28470695),
  scale: new Vector3(0.99999994, 0.386156, 1.00000381)
})
spotlight234.addComponentOrReplace(transform128)
const gltfShape60 = new GLTFShape("3ddda096-a798-432e-ba66-61354bccbcc9/Spotlight.glb")
gltfShape60.withCollisions = true
gltfShape60.isPointerBlocker = true
gltfShape60.visible = true
spotlight234.addComponentOrReplace(gltfShape60)

const nftpictureframe2345678910111213141516171819202122232425262728293031323334353637 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728293031323334353637')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637)
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637.setParent(_scene)
const transform129 = new Transform({
  position: new Vector3(43.9416924, 49, 52.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.5000155, 3.5, 1.000004)
})
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637.addComponentOrReplace(transform129)

const nftpictureframe234567891011121314151617181920212223242526272829303132333435363738 = new Entity('nftpictureframe234567891011121314151617181920212223242526272829303132333435363738')
engine.addEntity(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738)
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(43.9416924, 49, 55.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001454, 3.5, 1.00000381)
})
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738.addComponentOrReplace(transform130)

const nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839 = new Entity('nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839)
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839.setParent(_scene)
const transform131 = new Transform({
  position: new Vector3(43.9416924, 51.5, 54.10411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(8.75005, 8.75, 1.00000548)
})
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839.addComponentOrReplace(transform131)

const nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940)
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940.setParent(_scene)
const transform132 = new Transform({
  position: new Vector3(43.891243, 54, 46.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001836, 3.5, 1.00000477)
})
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940.addComponentOrReplace(transform132)

const nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041 = new Entity('nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041')
engine.addEntity(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041)
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(43.891243, 54, 49.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.5000174, 3.5, 1.00000453)
})
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041.addComponentOrReplace(transform133)

const nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142 = new Entity('nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142)
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142.setParent(_scene)
const transform134 = new Transform({
  position: new Vector3(43.891243, 51.5, 49.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001645, 3.5, 1.00000429)
})
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142.addComponentOrReplace(transform134)

const nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243)
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243.setParent(_scene)
const transform135 = new Transform({
  position: new Vector3(43.891243, 51.5, 46.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.5000155, 3.5, 1.000004)
})
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243.addComponentOrReplace(transform135)

const nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344 = new Entity('nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344')
engine.addEntity(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344)
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344.setParent(_scene)
const transform136 = new Transform({
  position: new Vector3(43.891243, 49, 49.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001264, 3.5, 1.00000334)
})
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344.addComponentOrReplace(transform136)

const nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445 = new Entity('nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445)
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445.setParent(_scene)
const transform137 = new Transform({
  position: new Vector3(43.891243, 49, 46.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001359, 3.5, 1.00000358)
})
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445.addComponentOrReplace(transform137)

const nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546)
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546.setParent(_scene)
const transform138 = new Transform({
  position: new Vector3(43.9416924, 53.2526779, 42.10411),
  rotation: new Quaternion(0.707106769, -5.795192e-8, -0.7071069, -2.6341775e-8),
  scale: new Vector3(8.750059, 8.750017, 1.00000668)
})
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546.addComponentOrReplace(transform138)

const nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647 = new Entity('nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647')
engine.addEntity(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647)
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(43.9416924, 55.7526779, 43.60411),
  rotation: new Quaternion(0.707106769, -5.795192e-8, -0.7071069, -2.6341775e-8),
  scale: new Vector3(3.50002027, 3.50000858, 1.00000525)
})
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647.addComponentOrReplace(transform139)

const nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748 = new Entity('nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748)
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748.setParent(_scene)
const transform140 = new Transform({
  position: new Vector3(43.9416924, 55.7526779, 40.60411),
  rotation: new Quaternion(0.707106769, -5.795192e-8, -0.7071069, -2.6341775e-8),
  scale: new Vector3(3.50001931, 3.50000858, 1.000005)
})
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748.addComponentOrReplace(transform140)

const nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849)
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849.setParent(_scene)
const transform141 = new Transform({
  position: new Vector3(43.9416924, 53.2526779, 33.10411),
  rotation: new Quaternion(0.707106769, -5.795192e-8, -0.7071069, -2.6341775e-8),
  scale: new Vector3(8.750065, 8.750029, 1.00000739)
})
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849.addComponentOrReplace(transform141)

const nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950 = new Entity('nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950')
engine.addEntity(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950)
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950.setParent(_scene)
const transform142 = new Transform({
  position: new Vector3(43.9416924, 55.7526779, 34.60411),
  rotation: new Quaternion(0.707106769, -5.795192e-8, -0.7071069, -2.6341775e-8),
  scale: new Vector3(3.50002313, 3.50001431, 1.000006)
})
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950.addComponentOrReplace(transform142)

const nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051 = new Entity('nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051)
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051.setParent(_scene)
const transform143 = new Transform({
  position: new Vector3(43.9416924, 55.7526779, 31.60411),
  rotation: new Quaternion(0.707106769, -5.795192e-8, -0.7071069, -2.6341775e-8),
  scale: new Vector3(3.50002217, 3.50001431, 1.00000572)
})
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051.addComponentOrReplace(transform143)

const nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152)
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152.setParent(_scene)
const transform144 = new Transform({
  position: new Vector3(43.891243, 54, 37.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50002122, 3.5, 1.00000548)
})
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152.addComponentOrReplace(transform144)

const nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253 = new Entity('nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253')
engine.addEntity(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253)
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253.setParent(_scene)
const transform145 = new Transform({
  position: new Vector3(43.891243, 51.5, 37.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001836, 3.5, 1.00000477)
})
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253.addComponentOrReplace(transform145)

const nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354 = new Entity('nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354)
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354.setParent(_scene)
const transform146 = new Transform({
  position: new Vector3(43.891243, 49, 37.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001645, 3.5, 1.00000429)
})
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354.addComponentOrReplace(transform146)

const nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455)
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455.setParent(_scene)
const transform147 = new Transform({
  position: new Vector3(43.891243, 54, 25.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50002122, 3.5, 1.00000548)
})
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455.addComponentOrReplace(transform147)

const nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556 = new Entity('nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556')
engine.addEntity(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556)
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556.setParent(_scene)
const transform148 = new Transform({
  position: new Vector3(43.891243, 51.5, 25.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001836, 3.5, 1.00000477)
})
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556.addComponentOrReplace(transform148)

const nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657 = new Entity('nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657)
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657.setParent(_scene)
const transform149 = new Transform({
  position: new Vector3(43.891243, 49, 25.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001645, 3.5, 1.00000429)
})
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657.addComponentOrReplace(transform149)

const nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758)
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758.setParent(_scene)
const transform150 = new Transform({
  position: new Vector3(43.891243, 49, 28.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.5000155, 3.5, 1.000004)
})
nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758.addComponentOrReplace(transform150)

const nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859 = new Entity('nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859')
engine.addEntity(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859)
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859.setParent(_scene)
const transform151 = new Transform({
  position: new Vector3(43.891243, 51.5, 28.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50001931, 3.5, 1.000005)
})
nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859.addComponentOrReplace(transform151)

const nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960 = new Entity('nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960)
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960.setParent(_scene)
const transform152 = new Transform({
  position: new Vector3(43.891243, 54, 28.60411),
  rotation: new Quaternion(-2.40852717e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(3.50002027, 3.5, 1.00000525)
})
nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960.addComponentOrReplace(transform152)

const wallcorrugatedmetal = new Entity('wallcorrugatedmetal')
engine.addEntity(wallcorrugatedmetal)
wallcorrugatedmetal.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(35.5, 56.8484344, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal.addComponentOrReplace(transform153)
const gltfShape61 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape61.withCollisions = true
gltfShape61.isPointerBlocker = true
gltfShape61.visible = true
wallcorrugatedmetal.addComponentOrReplace(gltfShape61)

const wallcorrugatedmetal2 = new Entity('wallcorrugatedmetal2')
engine.addEntity(wallcorrugatedmetal2)
wallcorrugatedmetal2.setParent(_scene)
const transform154 = new Transform({
  position: new Vector3(37.5, 56.8484344, 60.1951866),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal2.addComponentOrReplace(transform154)
const gltfShape62 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape62.withCollisions = true
gltfShape62.isPointerBlocker = true
gltfShape62.visible = true
wallcorrugatedmetal2.addComponentOrReplace(gltfShape62)

const wallcorrugatedmetal23 = new Entity('wallcorrugatedmetal23')
engine.addEntity(wallcorrugatedmetal23)
wallcorrugatedmetal23.setParent(_scene)
const transform155 = new Transform({
  position: new Vector3(39.5, 56.8484344, 60.379715),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal23.addComponentOrReplace(transform155)
const gltfShape63 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape63.withCollisions = true
gltfShape63.isPointerBlocker = true
gltfShape63.visible = true
wallcorrugatedmetal23.addComponentOrReplace(gltfShape63)

const wallcorrugatedmetal234 = new Entity('wallcorrugatedmetal234')
engine.addEntity(wallcorrugatedmetal234)
wallcorrugatedmetal234.setParent(_scene)
const transform156 = new Transform({
  position: new Vector3(41.5, 56.8484344, 60.5836868),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal234.addComponentOrReplace(transform156)
const gltfShape64 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape64.withCollisions = true
gltfShape64.isPointerBlocker = true
gltfShape64.visible = true
wallcorrugatedmetal234.addComponentOrReplace(gltfShape64)

const wallcorrugatedmetal2345 = new Entity('wallcorrugatedmetal2345')
engine.addEntity(wallcorrugatedmetal2345)
wallcorrugatedmetal2345.setParent(_scene)
const transform157 = new Transform({
  position: new Vector3(43.5, 56.8484344, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.65222764, 1)
})
wallcorrugatedmetal2345.addComponentOrReplace(transform157)
const gltfShape65 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape65.withCollisions = true
gltfShape65.isPointerBlocker = true
gltfShape65.visible = true
wallcorrugatedmetal2345.addComponentOrReplace(gltfShape65)

const wallcorrugatedmetal23456 = new Entity('wallcorrugatedmetal23456')
engine.addEntity(wallcorrugatedmetal23456)
wallcorrugatedmetal23456.setParent(_scene)
const transform158 = new Transform({
  position: new Vector3(13.5, 56.8484344, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.86922288, 1)
})
wallcorrugatedmetal23456.addComponentOrReplace(transform158)
const gltfShape66 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape66.withCollisions = true
gltfShape66.isPointerBlocker = true
gltfShape66.visible = true
wallcorrugatedmetal23456.addComponentOrReplace(gltfShape66)

const wallcorrugatedmetal234567 = new Entity('wallcorrugatedmetal234567')
engine.addEntity(wallcorrugatedmetal234567)
wallcorrugatedmetal234567.setParent(_scene)
const transform159 = new Transform({
  position: new Vector3(15.5, 56.8484344, 60.53369),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal234567.addComponentOrReplace(transform159)
const gltfShape67 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape67.withCollisions = true
gltfShape67.isPointerBlocker = true
gltfShape67.visible = true
wallcorrugatedmetal234567.addComponentOrReplace(gltfShape67)

const wallcorrugatedmetal2345678 = new Entity('wallcorrugatedmetal2345678')
engine.addEntity(wallcorrugatedmetal2345678)
wallcorrugatedmetal2345678.setParent(_scene)
const transform160 = new Transform({
  position: new Vector3(17.5, 56.8484344, 60.6379433),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal2345678.addComponentOrReplace(transform160)
const gltfShape68 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape68.withCollisions = true
gltfShape68.isPointerBlocker = true
gltfShape68.visible = true
wallcorrugatedmetal2345678.addComponentOrReplace(gltfShape68)

const wallcorrugatedmetal23456789 = new Entity('wallcorrugatedmetal23456789')
engine.addEntity(wallcorrugatedmetal23456789)
wallcorrugatedmetal23456789.setParent(_scene)
const transform161 = new Transform({
  position: new Vector3(19.5, 56.8484344, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal23456789.addComponentOrReplace(transform161)
const gltfShape69 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape69.withCollisions = true
gltfShape69.isPointerBlocker = true
gltfShape69.visible = true
wallcorrugatedmetal23456789.addComponentOrReplace(gltfShape69)

const wallcorrugatedmetal2345678910 = new Entity('wallcorrugatedmetal2345678910')
engine.addEntity(wallcorrugatedmetal2345678910)
wallcorrugatedmetal2345678910.setParent(_scene)
const transform162 = new Transform({
  position: new Vector3(21.5, 56.8484344, 60.6379433),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal2345678910.addComponentOrReplace(transform162)
const gltfShape70 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape70.withCollisions = true
gltfShape70.isPointerBlocker = true
gltfShape70.visible = true
wallcorrugatedmetal2345678910.addComponentOrReplace(gltfShape70)

const wallcorrugatedmetal234567891011 = new Entity('wallcorrugatedmetal234567891011')
engine.addEntity(wallcorrugatedmetal234567891011)
wallcorrugatedmetal234567891011.setParent(_scene)
const transform163 = new Transform({
  position: new Vector3(13.5, 56.8484344, 22.1804619),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.86922288, 1)
})
wallcorrugatedmetal234567891011.addComponentOrReplace(transform163)
const gltfShape71 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape71.withCollisions = true
gltfShape71.isPointerBlocker = true
gltfShape71.visible = true
wallcorrugatedmetal234567891011.addComponentOrReplace(gltfShape71)

const wallcorrugatedmetal23456789101112 = new Entity('wallcorrugatedmetal23456789101112')
engine.addEntity(wallcorrugatedmetal23456789101112)
wallcorrugatedmetal23456789101112.setParent(_scene)
const transform164 = new Transform({
  position: new Vector3(15.5, 56.8484344, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal23456789101112.addComponentOrReplace(transform164)
const gltfShape72 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape72.withCollisions = true
gltfShape72.isPointerBlocker = true
gltfShape72.visible = true
wallcorrugatedmetal23456789101112.addComponentOrReplace(gltfShape72)

const wallcorrugatedmetal2345678910111213 = new Entity('wallcorrugatedmetal2345678910111213')
engine.addEntity(wallcorrugatedmetal2345678910111213)
wallcorrugatedmetal2345678910111213.setParent(_scene)
const transform165 = new Transform({
  position: new Vector3(17.5, 56.8484344, 21.828968),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal2345678910111213.addComponentOrReplace(transform165)
const gltfShape73 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape73.withCollisions = true
gltfShape73.isPointerBlocker = true
gltfShape73.visible = true
wallcorrugatedmetal2345678910111213.addComponentOrReplace(gltfShape73)

const wallcorrugatedmetal234567891011121314 = new Entity('wallcorrugatedmetal234567891011121314')
engine.addEntity(wallcorrugatedmetal234567891011121314)
wallcorrugatedmetal234567891011121314.setParent(_scene)
const transform166 = new Transform({
  position: new Vector3(19.5, 56.8484344, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal234567891011121314.addComponentOrReplace(transform166)
const gltfShape74 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape74.withCollisions = true
gltfShape74.isPointerBlocker = true
gltfShape74.visible = true
wallcorrugatedmetal234567891011121314.addComponentOrReplace(gltfShape74)

const wallcorrugatedmetal23456789101112131415 = new Entity('wallcorrugatedmetal23456789101112131415')
engine.addEntity(wallcorrugatedmetal23456789101112131415)
wallcorrugatedmetal23456789101112131415.setParent(_scene)
const transform167 = new Transform({
  position: new Vector3(21.5, 56.8484344, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal23456789101112131415.addComponentOrReplace(transform167)
const gltfShape75 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape75.withCollisions = true
gltfShape75.isPointerBlocker = true
gltfShape75.visible = true
wallcorrugatedmetal23456789101112131415.addComponentOrReplace(gltfShape75)

const wallcorrugatedmetal2345678910111213141516 = new Entity('wallcorrugatedmetal2345678910111213141516')
engine.addEntity(wallcorrugatedmetal2345678910111213141516)
wallcorrugatedmetal2345678910111213141516.setParent(_scene)
const transform168 = new Transform({
  position: new Vector3(41.5, 56.8484344, 22),
  rotation: new Quaternion(-2.140075e-15, 1, -1.19209282e-7, -4.47034836e-8),
  scale: new Vector3(1, 2.86922288, 1)
})
wallcorrugatedmetal2345678910111213141516.addComponentOrReplace(transform168)
const gltfShape76 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape76.withCollisions = true
gltfShape76.isPointerBlocker = true
gltfShape76.visible = true
wallcorrugatedmetal2345678910111213141516.addComponentOrReplace(gltfShape76)

const wallcorrugatedmetal234567891011121314151617 = new Entity('wallcorrugatedmetal234567891011121314151617')
engine.addEntity(wallcorrugatedmetal234567891011121314151617)
wallcorrugatedmetal234567891011121314151617.setParent(_scene)
const transform169 = new Transform({
  position: new Vector3(39.5, 56.8484344, 21.766655),
  rotation: new Quaternion(-2.140075e-15, 1, -1.19209282e-7, -4.47034836e-8),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal234567891011121314151617.addComponentOrReplace(transform169)
const gltfShape77 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape77.withCollisions = true
gltfShape77.isPointerBlocker = true
gltfShape77.visible = true
wallcorrugatedmetal234567891011121314151617.addComponentOrReplace(gltfShape77)

const wallcorrugatedmetal23456789101112131415161718 = new Entity('wallcorrugatedmetal23456789101112131415161718')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718)
wallcorrugatedmetal23456789101112131415161718.setParent(_scene)
const transform170 = new Transform({
  position: new Vector3(37.5, 56.8484344, 22.0494061),
  rotation: new Quaternion(-2.140075e-15, 1, -1.19209282e-7, -4.47034836e-8),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal23456789101112131415161718.addComponentOrReplace(transform170)
const gltfShape78 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape78.withCollisions = true
gltfShape78.isPointerBlocker = true
gltfShape78.visible = true
wallcorrugatedmetal23456789101112131415161718.addComponentOrReplace(gltfShape78)

const wallcorrugatedmetal2345678910111213141516171819 = new Entity('wallcorrugatedmetal2345678910111213141516171819')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819)
wallcorrugatedmetal2345678910111213141516171819.setParent(_scene)
const transform171 = new Transform({
  position: new Vector3(35.5, 56.8484344, 22),
  rotation: new Quaternion(-2.140075e-15, 1, -1.19209282e-7, -4.47034836e-8),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal2345678910111213141516171819.addComponentOrReplace(transform171)
const gltfShape79 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape79.withCollisions = true
gltfShape79.isPointerBlocker = true
gltfShape79.visible = true
wallcorrugatedmetal2345678910111213141516171819.addComponentOrReplace(gltfShape79)

const wallcorrugatedmetal234567891011121314151617181920 = new Entity('wallcorrugatedmetal234567891011121314151617181920')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920)
wallcorrugatedmetal234567891011121314151617181920.setParent(_scene)
const transform172 = new Transform({
  position: new Vector3(33.5, 56.8484344, 22),
  rotation: new Quaternion(-2.140075e-15, 1, -1.19209282e-7, -4.47034836e-8),
  scale: new Vector3(1, 3.441601, 1)
})
wallcorrugatedmetal234567891011121314151617181920.addComponentOrReplace(transform172)
const gltfShape80 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape80.withCollisions = true
gltfShape80.isPointerBlocker = true
gltfShape80.visible = true
wallcorrugatedmetal234567891011121314151617181920.addComponentOrReplace(gltfShape80)

const wallcorrugatedmetal23456789101112131415161718192021 = new Entity('wallcorrugatedmetal23456789101112131415161718192021')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021)
wallcorrugatedmetal23456789101112131415161718192021.setParent(_scene)
const transform173 = new Transform({
  position: new Vector3(11.2684326, 56.8484344, 60.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000167, 2.59947181, 1.00000167)
})
wallcorrugatedmetal23456789101112131415161718192021.addComponentOrReplace(transform173)
const gltfShape81 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape81.withCollisions = true
gltfShape81.isPointerBlocker = true
gltfShape81.visible = true
wallcorrugatedmetal23456789101112131415161718192021.addComponentOrReplace(gltfShape81)

const wallcorrugatedmetal2345678910111213141516171819202122 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122)
wallcorrugatedmetal2345678910111213141516171819202122.setParent(_scene)
const transform174 = new Transform({
  position: new Vector3(11.1954346, 56.8484344, 58.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000143, 2.59947181, 1.00000143)
})
wallcorrugatedmetal2345678910111213141516171819202122.addComponentOrReplace(transform174)
const gltfShape82 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape82.withCollisions = true
gltfShape82.isPointerBlocker = true
gltfShape82.visible = true
wallcorrugatedmetal2345678910111213141516171819202122.addComponentOrReplace(gltfShape82)

const wallcorrugatedmetal234567891011121314151617181920212223 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223)
wallcorrugatedmetal234567891011121314151617181920212223.setParent(_scene)
const transform175 = new Transform({
  position: new Vector3(11.1954346, 56.8484344, 56.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000167, 2.59947181, 1.00000167)
})
wallcorrugatedmetal234567891011121314151617181920212223.addComponentOrReplace(transform175)
const gltfShape83 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape83.withCollisions = true
gltfShape83.isPointerBlocker = true
gltfShape83.visible = true
wallcorrugatedmetal234567891011121314151617181920212223.addComponentOrReplace(gltfShape83)

const wallcorrugatedmetal23456789101112131415161718192021222324 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324)
wallcorrugatedmetal23456789101112131415161718192021222324.setParent(_scene)
const transform176 = new Transform({
  position: new Vector3(11.2328415, 56.8484344, 54.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000215, 2.59947181, 1.00000215)
})
wallcorrugatedmetal23456789101112131415161718192021222324.addComponentOrReplace(transform176)
const gltfShape84 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape84.withCollisions = true
gltfShape84.isPointerBlocker = true
gltfShape84.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324.addComponentOrReplace(gltfShape84)

const wallcorrugatedmetal2345678910111213141516171819202122232425 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122232425')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122232425)
wallcorrugatedmetal2345678910111213141516171819202122232425.setParent(_scene)
const transform177 = new Transform({
  position: new Vector3(11.0839138, 56.8484344, 52.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000262, 2.49031544, 1.00000262)
})
wallcorrugatedmetal2345678910111213141516171819202122232425.addComponentOrReplace(transform177)
const gltfShape85 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape85.withCollisions = true
gltfShape85.isPointerBlocker = true
gltfShape85.visible = true
wallcorrugatedmetal2345678910111213141516171819202122232425.addComponentOrReplace(gltfShape85)

const wallcorrugatedmetal234567891011121314151617181920212223242526 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223242526')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223242526)
wallcorrugatedmetal234567891011121314151617181920212223242526.setParent(_scene)
const transform178 = new Transform({
  position: new Vector3(11.1954346, 56.8484344, 50.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000238, 2.59947181, 1.00000238)
})
wallcorrugatedmetal234567891011121314151617181920212223242526.addComponentOrReplace(transform178)
const gltfShape86 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape86.withCollisions = true
gltfShape86.isPointerBlocker = true
gltfShape86.visible = true
wallcorrugatedmetal234567891011121314151617181920212223242526.addComponentOrReplace(gltfShape86)

const wallcorrugatedmetal23456789101112131415161718192021222324252627 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324252627')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324252627)
wallcorrugatedmetal23456789101112131415161718192021222324252627.setParent(_scene)
const transform179 = new Transform({
  position: new Vector3(11.1954346, 56.8484344, 48.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000262, 2.59947181, 1.00000262)
})
wallcorrugatedmetal23456789101112131415161718192021222324252627.addComponentOrReplace(transform179)
const gltfShape87 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape87.withCollisions = true
gltfShape87.isPointerBlocker = true
gltfShape87.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324252627.addComponentOrReplace(gltfShape87)

const wallcorrugatedmetal2345678910111213141516171819202122232425262728 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122232425262728')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122232425262728)
wallcorrugatedmetal2345678910111213141516171819202122232425262728.setParent(_scene)
const transform180 = new Transform({
  position: new Vector3(11.0038071, 56.8484344, 46.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000334, 2.34618163, 1.00000334)
})
wallcorrugatedmetal2345678910111213141516171819202122232425262728.addComponentOrReplace(transform180)
const gltfShape88 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape88.withCollisions = true
gltfShape88.isPointerBlocker = true
gltfShape88.visible = true
wallcorrugatedmetal2345678910111213141516171819202122232425262728.addComponentOrReplace(gltfShape88)

const wallcorrugatedmetal234567891011121314151617181920212223242526272829 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223242526272829')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223242526272829)
wallcorrugatedmetal234567891011121314151617181920212223242526272829.setParent(_scene)
const transform181 = new Transform({
  position: new Vector3(11.0038071, 56.8484344, 44.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000358, 2.34618163, 1.00000358)
})
wallcorrugatedmetal234567891011121314151617181920212223242526272829.addComponentOrReplace(transform181)
const gltfShape89 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape89.withCollisions = true
gltfShape89.isPointerBlocker = true
gltfShape89.visible = true
wallcorrugatedmetal234567891011121314151617181920212223242526272829.addComponentOrReplace(gltfShape89)

const wallcorrugatedmetal23456789101112131415161718192021222324252627282930 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324252627282930')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324252627282930)
wallcorrugatedmetal23456789101112131415161718192021222324252627282930.setParent(_scene)
const transform182 = new Transform({
  position: new Vector3(11.1954346, 56.8484344, 42.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000334, 2.59947181, 1.00000334)
})
wallcorrugatedmetal23456789101112131415161718192021222324252627282930.addComponentOrReplace(transform182)
const gltfShape90 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape90.withCollisions = true
gltfShape90.isPointerBlocker = true
gltfShape90.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324252627282930.addComponentOrReplace(gltfShape90)

const wallcorrugatedmetal2345678910111213141516171819202122232425262728293031 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122232425262728293031')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122232425262728293031)
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031.setParent(_scene)
const transform183 = new Transform({
  position: new Vector3(11.3262615, 56.8484344, 40.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000381, 2.59947181, 1.00000381)
})
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031.addComponentOrReplace(transform183)
const gltfShape91 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape91.withCollisions = true
gltfShape91.isPointerBlocker = true
gltfShape91.visible = true
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031.addComponentOrReplace(gltfShape91)

const wallcorrugatedmetal234567891011121314151617181920212223242526272829303132 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223242526272829303132')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223242526272829303132)
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132.setParent(_scene)
const transform184 = new Transform({
  position: new Vector3(11.1954346, 56.8484344, 38.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000381, 2.59947181, 1.00000381)
})
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132.addComponentOrReplace(transform184)
const gltfShape92 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape92.withCollisions = true
gltfShape92.isPointerBlocker = true
gltfShape92.visible = true
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132.addComponentOrReplace(gltfShape92)

const wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233)
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233.setParent(_scene)
const transform185 = new Transform({
  position: new Vector3(11.3262615, 56.8484344, 36.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000453, 2.59947181, 1.00000453)
})
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233.addComponentOrReplace(transform185)
const gltfShape93 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape93.withCollisions = true
gltfShape93.isPointerBlocker = true
gltfShape93.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233.addComponentOrReplace(gltfShape93)

const wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334)
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334.setParent(_scene)
const transform186 = new Transform({
  position: new Vector3(11.1954346, 56.8484344, 34.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000453, 2.59947181, 1.00000453)
})
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334.addComponentOrReplace(transform186)
const gltfShape94 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape94.withCollisions = true
gltfShape94.isPointerBlocker = true
gltfShape94.visible = true
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334.addComponentOrReplace(gltfShape94)

const wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435)
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435.setParent(_scene)
const transform187 = new Transform({
  position: new Vector3(11.1954346, 56.8484344, 32.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000477, 2.59947181, 1.00000477)
})
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435.addComponentOrReplace(transform187)
const gltfShape95 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape95.withCollisions = true
gltfShape95.isPointerBlocker = true
gltfShape95.visible = true
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435.addComponentOrReplace(gltfShape95)

const wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536)
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536.setParent(_scene)
const transform188 = new Transform({
  position: new Vector3(11.1954346, 56.8484344, 30.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.000005, 2.59947181, 1.000005)
})
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536.addComponentOrReplace(transform188)
const gltfShape96 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape96.withCollisions = true
gltfShape96.isPointerBlocker = true
gltfShape96.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536.addComponentOrReplace(gltfShape96)

const wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637)
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637.setParent(_scene)
const transform189 = new Transform({
  position: new Vector3(11.3356037, 56.8484344, 28.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000548, 2.59947181, 1.00000548)
})
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637.addComponentOrReplace(transform189)
const gltfShape97 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape97.withCollisions = true
gltfShape97.isPointerBlocker = true
gltfShape97.visible = true
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637.addComponentOrReplace(gltfShape97)

const wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738)
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738.setParent(_scene)
const transform190 = new Transform({
  position: new Vector3(11.3356037, 56.8484344, 26.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000572, 2.59947181, 1.00000572)
})
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738.addComponentOrReplace(transform190)
const gltfShape98 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape98.withCollisions = true
gltfShape98.isPointerBlocker = true
gltfShape98.visible = true
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738.addComponentOrReplace(gltfShape98)

const wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839)
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839.setParent(_scene)
const transform191 = new Transform({
  position: new Vector3(11.1954346, 56.8484344, 24.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000572, 2.59947181, 1.00000572)
})
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839.addComponentOrReplace(transform191)
const gltfShape99 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape99.withCollisions = true
gltfShape99.isPointerBlocker = true
gltfShape99.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839.addComponentOrReplace(gltfShape99)

const wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940)
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940.setParent(_scene)
const transform192 = new Transform({
  position: new Vector3(11.1954346, 56.8484344, 22.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(0.5000032, 2.59947181, 1.00000644)
})
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940.addComponentOrReplace(transform192)
const gltfShape100 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape100.withCollisions = true
gltfShape100.isPointerBlocker = true
gltfShape100.visible = true
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940.addComponentOrReplace(gltfShape100)

const wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041)
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041.setParent(_scene)
const transform193 = new Transform({
  position: new Vector3(43.50428, 56.8484344, 60.5420876),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000286, 2.59947181, 1.00000286)
})
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041.addComponentOrReplace(transform193)
const gltfShape101 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape101.withCollisions = true
gltfShape101.isPointerBlocker = true
gltfShape101.visible = true
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041.addComponentOrReplace(gltfShape101)

const wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142)
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142.setParent(_scene)
const transform194 = new Transform({
  position: new Vector3(43.5989151, 56.8484344, 56.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.0000031, 2.59947181, 1.0000031)
})
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142.addComponentOrReplace(transform194)
const gltfShape102 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape102.withCollisions = true
gltfShape102.isPointerBlocker = true
gltfShape102.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142.addComponentOrReplace(gltfShape102)

const wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243)
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243.setParent(_scene)
const transform195 = new Transform({
  position: new Vector3(43.7232056, 56.8484344, 54.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000381, 2.33395576, 1.00000381)
})
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243.addComponentOrReplace(transform195)
const gltfShape103 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape103.withCollisions = true
gltfShape103.isPointerBlocker = true
gltfShape103.visible = true
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243.addComponentOrReplace(gltfShape103)

const wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344)
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344.setParent(_scene)
const transform196 = new Transform({
  position: new Vector3(43.5989151, 56.8484344, 58.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000286, 2.59947181, 1.00000286)
})
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344.addComponentOrReplace(transform196)
const gltfShape104 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape104.withCollisions = true
gltfShape104.isPointerBlocker = true
gltfShape104.visible = true
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344.addComponentOrReplace(gltfShape104)

const wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445)
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445.setParent(_scene)
const transform197 = new Transform({
  position: new Vector3(43.6907158, 56.8484344, 48.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000453, 2.33395576, 1.00000453)
})
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445.addComponentOrReplace(transform197)
const gltfShape105 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape105.withCollisions = true
gltfShape105.isPointerBlocker = true
gltfShape105.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445.addComponentOrReplace(gltfShape105)

const wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546)
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546.setParent(_scene)
const transform198 = new Transform({
  position: new Vector3(43.5989151, 56.8484344, 50.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000381, 2.59947181, 1.00000381)
})
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546.addComponentOrReplace(transform198)
const gltfShape106 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape106.withCollisions = true
gltfShape106.isPointerBlocker = true
gltfShape106.visible = true
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546.addComponentOrReplace(gltfShape106)

const wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647)
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647.setParent(_scene)
const transform199 = new Transform({
  position: new Vector3(43.55058, 56.8484344, 52.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000381, 2.59947181, 1.00000381)
})
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647.addComponentOrReplace(transform199)
const gltfShape107 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape107.withCollisions = true
gltfShape107.isPointerBlocker = true
gltfShape107.visible = true
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647.addComponentOrReplace(gltfShape107)

const wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748)
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748.setParent(_scene)
const transform200 = new Transform({
  position: new Vector3(43.5291023, 56.8484344, 44.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000477, 2.59947181, 1.00000477)
})
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748.addComponentOrReplace(transform200)
const gltfShape108 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape108.withCollisions = true
gltfShape108.isPointerBlocker = true
gltfShape108.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748.addComponentOrReplace(gltfShape108)

const wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849)
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849.setParent(_scene)
const transform201 = new Transform({
  position: new Vector3(43.5989151, 56.8484344, 46.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000429, 2.59947181, 1.00000429)
})
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849.addComponentOrReplace(transform201)
const gltfShape109 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape109.withCollisions = true
gltfShape109.isPointerBlocker = true
gltfShape109.visible = true
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849.addComponentOrReplace(gltfShape109)

const wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950)
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950.setParent(_scene)
const transform202 = new Transform({
  position: new Vector3(43.5989151, 56.8484344, 42.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000477, 2.59947181, 1.00000477)
})
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950.addComponentOrReplace(transform202)
const gltfShape110 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape110.withCollisions = true
gltfShape110.isPointerBlocker = true
gltfShape110.visible = true
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950.addComponentOrReplace(gltfShape110)

const wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051)
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051.setParent(_scene)
const transform203 = new Transform({
  position: new Vector3(43.5989151, 56.8484344, 40.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.000005, 2.59947181, 1.000005)
})
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051.addComponentOrReplace(transform203)
const gltfShape111 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape111.withCollisions = true
gltfShape111.isPointerBlocker = true
gltfShape111.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051.addComponentOrReplace(gltfShape111)

const wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152)
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152.setParent(_scene)
const transform204 = new Transform({
  position: new Vector3(43.4112167, 56.8484344, 38.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000548, 2.59947181, 1.00000548)
})
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152.addComponentOrReplace(transform204)
const gltfShape112 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape112.withCollisions = true
gltfShape112.isPointerBlocker = true
gltfShape112.visible = true
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152.addComponentOrReplace(gltfShape112)

const wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253)
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253.setParent(_scene)
const transform205 = new Transform({
  position: new Vector3(43.4112167, 56.8484344, 36.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.000006, 2.59947181, 1.000006)
})
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253.addComponentOrReplace(transform205)
const gltfShape113 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape113.withCollisions = true
gltfShape113.isPointerBlocker = true
gltfShape113.visible = true
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253.addComponentOrReplace(gltfShape113)

const wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354)
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354.setParent(_scene)
const transform206 = new Transform({
  position: new Vector3(43.6322975, 56.8484344, 34.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000644, 2.51752734, 1.00000644)
})
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354.addComponentOrReplace(transform206)
const gltfShape114 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape114.withCollisions = true
gltfShape114.isPointerBlocker = true
gltfShape114.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354.addComponentOrReplace(gltfShape114)

const wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455)
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455.setParent(_scene)
const transform207 = new Transform({
  position: new Vector3(43.5989151, 56.8484344, 32.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.0000062, 2.59947181, 1.0000062)
})
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455.addComponentOrReplace(transform207)
const gltfShape115 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape115.withCollisions = true
gltfShape115.isPointerBlocker = true
gltfShape115.visible = true
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455.addComponentOrReplace(gltfShape115)

const wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556)
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556.setParent(_scene)
const transform208 = new Transform({
  position: new Vector3(43.5989151, 56.8484344, 30.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000644, 2.59947181, 1.00000644)
})
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556.addComponentOrReplace(transform208)
const gltfShape116 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape116.withCollisions = true
gltfShape116.isPointerBlocker = true
gltfShape116.visible = true
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556.addComponentOrReplace(gltfShape116)

const wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657)
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657.setParent(_scene)
const transform209 = new Transform({
  position: new Vector3(43.70798, 56.8484344, 28.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000715, 2.34151244, 1.00000715)
})
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657.addComponentOrReplace(transform209)
const gltfShape117 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape117.withCollisions = true
gltfShape117.isPointerBlocker = true
gltfShape117.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657.addComponentOrReplace(gltfShape117)

const wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758 = new Entity('wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758')
engine.addEntity(wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758)
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758.setParent(_scene)
const transform210 = new Transform({
  position: new Vector3(43.6562157, 56.8484344, 26.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000787, 2.33761477, 1.00000787)
})
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758.addComponentOrReplace(transform210)
const gltfShape118 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape118.withCollisions = true
gltfShape118.isPointerBlocker = true
gltfShape118.visible = true
wallcorrugatedmetal2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758.addComponentOrReplace(gltfShape118)

const wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859 = new Entity('wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859')
engine.addEntity(wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859)
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859.setParent(_scene)
const transform211 = new Transform({
  position: new Vector3(43.5989151, 56.8484344, 24.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(1.00000715, 2.59947181, 1.00000715)
})
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859.addComponentOrReplace(transform211)
const gltfShape119 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape119.withCollisions = true
gltfShape119.isPointerBlocker = true
gltfShape119.visible = true
wallcorrugatedmetal234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859.addComponentOrReplace(gltfShape119)

const wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960 = new Entity('wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960')
engine.addEntity(wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960)
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960.setParent(_scene)
const transform212 = new Transform({
  position: new Vector3(43.4703827, 56.8484344, 22.5),
  rotation: new Quaternion(-1.53941536e-15, -0.7071068, 8.42936956e-8, 0.7071068),
  scale: new Vector3(0.500004053, 2.59947181, 1.00000811)
})
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960.addComponentOrReplace(transform212)
const gltfShape120 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape120.withCollisions = true
gltfShape120.isPointerBlocker = true
gltfShape120.visible = true
wallcorrugatedmetal23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960.addComponentOrReplace(gltfShape120)

const garlandcurveyellow = new Entity('garlandcurveyellow')
engine.addEntity(garlandcurveyellow)
garlandcurveyellow.setParent(_scene)
const transform213 = new Transform({
  position: new Vector3(36.16665, 77, 39.59119),
  rotation: new Quaternion(-0.02348313, 0.5309857, 0.0409384854, -0.8460655),
  scale: new Vector3(1.05418444, 1.00046659, 1.01275539)
})
garlandcurveyellow.addComponentOrReplace(transform213)
const gltfShape121 = new GLTFShape("680af140-41c7-40d9-8ce8-7648196c3caf/Garland_Curve_Yellow.glb")
gltfShape121.withCollisions = true
gltfShape121.isPointerBlocker = true
gltfShape121.visible = true
garlandcurveyellow.addComponentOrReplace(gltfShape121)

const garlandcurvebluepurple = new Entity('garlandcurvebluepurple')
engine.addEntity(garlandcurvebluepurple)
garlandcurvebluepurple.setParent(_scene)
const transform214 = new Transform({
  position: new Vector3(35.7083244, 77.23571, 35.6034126),
  rotation: new Quaternion(-0.0591094829, -0.34174186, -0.05910943, 0.9360688),
  scale: new Vector3(0.55652535, 1.00447237, 0.999999344)
})
garlandcurvebluepurple.addComponentOrReplace(transform214)
const gltfShape122 = new GLTFShape("73186899-cf6e-4a4c-a30b-a4c21fc3e86c/Garland_Curve_Blue_Purple.glb")
gltfShape122.withCollisions = true
gltfShape122.isPointerBlocker = true
gltfShape122.visible = true
garlandcurvebluepurple.addComponentOrReplace(gltfShape122)

const garlandcurveyellow2 = new Entity('garlandcurveyellow2')
engine.addEntity(garlandcurveyellow2)
garlandcurveyellow2.setParent(_scene)
const transform215 = new Transform({
  position: new Vector3(18.4379272, 75.98535, 37.89862),
  rotation: new Quaternion(0.129094616, -0.87055254, -0.06542643, 0.470310956),
  scale: new Vector3(0.8879632, 0.986828744, 0.952634454)
})
garlandcurveyellow2.addComponentOrReplace(transform215)
const gltfShape123 = new GLTFShape("680af140-41c7-40d9-8ce8-7648196c3caf/Garland_Curve_Yellow.glb")
gltfShape123.withCollisions = true
gltfShape123.isPointerBlocker = true
gltfShape123.visible = true
garlandcurveyellow2.addComponentOrReplace(gltfShape123)

const floorblack = new Entity('floorblack')
engine.addEntity(floorblack)
floorblack.setParent(_scene)
const transform216 = new Transform({
  position: new Vector3(43.7023239, 66, 59.7632065),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.65034437, 1, 9.454118)
})
floorblack.addComponentOrReplace(transform216)
const gltfShape124 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape124.withCollisions = true
gltfShape124.isPointerBlocker = true
gltfShape124.visible = true
floorblack.addComponentOrReplace(gltfShape124)

const floorblack2 = new Entity('floorblack2')
engine.addEntity(floorblack2)
floorblack2.setParent(_scene)
const transform217 = new Transform({
  position: new Vector3(22, 66, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.65034437, 1, 2.67505646)
})
floorblack2.addComponentOrReplace(transform217)
const gltfShape125 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape125.withCollisions = true
gltfShape125.isPointerBlocker = true
gltfShape125.visible = true
floorblack2.addComponentOrReplace(gltfShape125)

const wallcornerblack = new Entity('wallcornerblack')
engine.addEntity(wallcornerblack)
wallcornerblack.setParent(_scene)
const transform218 = new Transform({
  position: new Vector3(18.885376, 65.5, 50.1160927),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.97758079, 1.49108028, 2.21814442)
})
wallcornerblack.addComponentOrReplace(transform218)
const gltfShape126 = new GLTFShape("b147f30c-9dee-4138-8ac3-3f9d1fadee5f/BlackCorner.glb")
gltfShape126.withCollisions = true
gltfShape126.isPointerBlocker = true
gltfShape126.visible = true
wallcornerblack.addComponentOrReplace(gltfShape126)

const wallcornerblack2 = new Entity('wallcornerblack2')
engine.addEntity(wallcornerblack2)
wallcornerblack2.setParent(_scene)
const transform219 = new Transform({
  position: new Vector3(14.3853779, 65.5, 45.1160927),
  rotation: new Quaternion(-5.83727758e-15, 1, -1.19209282e-7, 0),
  scale: new Vector3(1.97758079, 1.49108028, 2.21814442)
})
wallcornerblack2.addComponentOrReplace(transform219)
const gltfShape127 = new GLTFShape("b147f30c-9dee-4138-8ac3-3f9d1fadee5f/BlackCorner.glb")
gltfShape127.withCollisions = true
gltfShape127.isPointerBlocker = true
gltfShape127.visible = true
wallcornerblack2.addComponentOrReplace(gltfShape127)

const floorblack23 = new Entity('floorblack23')
engine.addEntity(floorblack23)
floorblack23.setParent(_scene)
const transform220 = new Transform({
  position: new Vector3(22, 66, 45.2743835),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.65034437, 1, 5.951299)
})
floorblack23.addComponentOrReplace(transform220)
const gltfShape128 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape128.withCollisions = true
gltfShape128.isPointerBlocker = true
gltfShape128.visible = true
floorblack23.addComponentOrReplace(gltfShape128)

const floorblack234 = new Entity('floorblack234')
engine.addEntity(floorblack234)
floorblack234.setParent(_scene)
const transform221 = new Transform({
  position: new Vector3(22, 66, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.909288347, 1, 2.67505622)
})
floorblack234.addComponentOrReplace(transform221)
const gltfShape129 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape129.withCollisions = true
gltfShape129.isPointerBlocker = true
gltfShape129.visible = true
floorblack234.addComponentOrReplace(gltfShape129)

const floorblack2345 = new Entity('floorblack2345')
engine.addEntity(floorblack2345)
floorblack2345.setParent(_scene)
const transform222 = new Transform({
  position: new Vector3(14.909626, 66, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8568664, 1, 2.67505622)
})
floorblack2345.addComponentOrReplace(transform222)
const gltfShape130 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape130.withCollisions = true
gltfShape130.isPointerBlocker = true
gltfShape130.visible = true
floorblack2345.addComponentOrReplace(gltfShape130)

const ropelight = new Entity('ropelight')
engine.addEntity(ropelight)
ropelight.setParent(_scene)
const transform223 = new Transform({
  position: new Vector3(27.5126953, 75.5, 54.7458153),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.87645221, 1, 1)
})
ropelight.addComponentOrReplace(transform223)

const ropelight2 = new Entity('ropelight2')
engine.addEntity(ropelight2)
ropelight2.setParent(_scene)
const transform224 = new Transform({
  position: new Vector3(27.5126953, 75.5, 27.354229),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.87645221, 1, 1)
})
ropelight2.addComponentOrReplace(transform224)

const floorglass23 = new Entity('floorglass23')
engine.addEntity(floorglass23)
floorglass23.setParent(_scene)
const transform225 = new Transform({
  position: new Vector3(30.5, 70.93219, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.19419217, 25.5, 3.30097914)
})
floorglass23.addComponentOrReplace(transform225)
const gltfShape131 = new GLTFShape("f4a4956e-f60a-4108-82c7-41b5ebda6549/GlassFloor.glb")
gltfShape131.withCollisions = true
gltfShape131.isPointerBlocker = true
gltfShape131.visible = true
floorglass23.addComponentOrReplace(gltfShape131)

const garlandcurveyellow23 = new Entity('garlandcurveyellow23')
engine.addEntity(garlandcurveyellow23)
garlandcurveyellow23.setParent(_scene)
const transform226 = new Transform({
  position: new Vector3(25.5, 76, 54.5),
  rotation: new Quaternion(0.09754518, 0.009607362, 0.09754515, 0.9903926),
  scale: new Vector3(1, 0.999999762, 0.9999998)
})
garlandcurveyellow23.addComponentOrReplace(transform226)
const gltfShape132 = new GLTFShape("680af140-41c7-40d9-8ce8-7648196c3caf/Garland_Curve_Yellow.glb")
gltfShape132.withCollisions = true
gltfShape132.isPointerBlocker = true
gltfShape132.visible = true
garlandcurveyellow23.addComponentOrReplace(gltfShape132)

const garlandcurvebluepurple2 = new Entity('garlandcurvebluepurple2')
engine.addEntity(garlandcurvebluepurple2)
garlandcurvebluepurple2.setParent(_scene)
const transform227 = new Transform({
  position: new Vector3(27.5, 76, 54.5),
  rotation: new Quaternion(0.0980171561, 0, -1.16845529e-8, 0.9951847),
  scale: new Vector3(1, 0.9999999, 0.9999999)
})
garlandcurvebluepurple2.addComponentOrReplace(transform227)
const gltfShape133 = new GLTFShape("73186899-cf6e-4a4c-a30b-a4c21fc3e86c/Garland_Curve_Blue_Purple.glb")
gltfShape133.withCollisions = true
gltfShape133.isPointerBlocker = true
gltfShape133.visible = true
garlandcurvebluepurple2.addComponentOrReplace(gltfShape133)

const bush23 = new Entity('bush23')
engine.addEntity(bush23)
bush23.setParent(_scene)
const transform228 = new Transform({
  position: new Vector3(39.5, 71.5, 47),
  rotation: new Quaternion(6.46967069e-15, -0.8314698, 9.911892e-8, 0.5555701),
  scale: new Vector3(0.463511616, 0.8669173, 0.647397459)
})
bush23.addComponentOrReplace(transform228)
const gltfShape134 = new GLTFShape("b34ad4ca-db96-44fe-8fd6-86b4aa9f2218/HWN20_Bush.glb")
gltfShape134.withCollisions = true
gltfShape134.isPointerBlocker = true
gltfShape134.visible = true
bush23.addComponentOrReplace(gltfShape134)

const bush234 = new Entity('bush234')
engine.addEntity(bush234)
bush234.setParent(_scene)
const transform229 = new Transform({
  position: new Vector3(15.560976, 71.5, 53.3896027),
  rotation: new Quaternion(-1.47312868e-15, 0.881921351, -1.05133211e-7, 0.471396744),
  scale: new Vector3(0.5000024, 0.8090848, 1.50000751)
})
bush234.addComponentOrReplace(transform229)
const gltfShape135 = new GLTFShape("b34ad4ca-db96-44fe-8fd6-86b4aa9f2218/HWN20_Bush.glb")
gltfShape135.withCollisions = true
gltfShape135.isPointerBlocker = true
gltfShape135.visible = true
bush234.addComponentOrReplace(gltfShape135)

const wallplainblack234567 = new Entity('wallplainblack234567')
engine.addEntity(wallplainblack234567)
wallplainblack234567.setParent(_scene)
const transform230 = new Transform({
  position: new Vector3(39.00187, 47.5, 51.4663162),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(2.76471162, 2.31313777, 1.63961744)
})
wallplainblack234567.addComponentOrReplace(transform230)
const gltfShape136 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape136.withCollisions = true
gltfShape136.isPointerBlocker = true
gltfShape136.visible = true
wallplainblack234567.addComponentOrReplace(gltfShape136)

const wallplainblack2345678 = new Entity('wallplainblack2345678')
engine.addEntity(wallplainblack2345678)
wallplainblack2345678.setParent(_scene)
const transform231 = new Transform({
  position: new Vector3(39.00187, 47.5, 36.9663162),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(2.76471162, 2.31313777, 1.6396203)
})
wallplainblack2345678.addComponentOrReplace(transform231)
const gltfShape137 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape137.withCollisions = true
gltfShape137.isPointerBlocker = true
gltfShape137.visible = true
wallplainblack2345678.addComponentOrReplace(gltfShape137)

const wallplainblack23456789 = new Entity('wallplainblack23456789')
engine.addEntity(wallplainblack23456789)
wallplainblack23456789.setParent(_scene)
const transform232 = new Transform({
  position: new Vector3(39.00187, 47.5, 26.4663162),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(2.76471162, 2.31313777, 1.63962173)
})
wallplainblack23456789.addComponentOrReplace(transform232)
const gltfShape138 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape138.withCollisions = true
gltfShape138.isPointerBlocker = true
gltfShape138.visible = true
wallplainblack23456789.addComponentOrReplace(gltfShape138)

const wallplainblack2345678910 = new Entity('wallplainblack2345678910')
engine.addEntity(wallplainblack2345678910)
wallplainblack2345678910.setParent(_scene)
const transform233 = new Transform({
  position: new Vector3(33, 71.5, 32.5),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(0.175492972, 1.83601069, 1.17390049)
})
wallplainblack2345678910.addComponentOrReplace(transform233)
const gltfShape139 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape139.withCollisions = true
gltfShape139.isPointerBlocker = true
gltfShape139.visible = true
wallplainblack2345678910.addComponentOrReplace(gltfShape139)

const wallplainblack234567891011 = new Entity('wallplainblack234567891011')
engine.addEntity(wallplainblack234567891011)
wallplainblack234567891011.setParent(_scene)
const transform234 = new Transform({
  position: new Vector3(21.9422226, 71.5, 32.5),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(0.175492972, 1.83601069, 1.17390049)
})
wallplainblack234567891011.addComponentOrReplace(transform234)
const gltfShape140 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape140.withCollisions = true
gltfShape140.isPointerBlocker = true
gltfShape140.visible = true
wallplainblack234567891011.addComponentOrReplace(gltfShape140)

const wallplainblack23456789101112 = new Entity('wallplainblack23456789101112')
engine.addEntity(wallplainblack23456789101112)
wallplainblack23456789101112.setParent(_scene)
const transform235 = new Transform({
  position: new Vector3(21.7249146, 78.7735443, 32.5787277),
  rotation: new Quaternion(0.5, 0.5, -0.50000006, 0.49999994),
  scale: new Vector3(0.09137493, 2.7540164, 0.7458175)
})
wallplainblack23456789101112.addComponentOrReplace(transform235)
const gltfShape141 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape141.withCollisions = true
gltfShape141.isPointerBlocker = true
gltfShape141.visible = true
wallplainblack23456789101112.addComponentOrReplace(gltfShape141)

const sofamodern = new Entity('sofamodern')
engine.addEntity(sofamodern)
sofamodern.setParent(_scene)
const transform236 = new Transform({
  position: new Vector3(20, 37.9603233, 25.5),
  rotation: new Quaternion(0, -0.2902847, 3.460463e-8, 0.956940353),
  scale: new Vector3(1, 1, 1)
})
sofamodern.addComponentOrReplace(transform236)
const gltfShape142 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape142.withCollisions = true
gltfShape142.isPointerBlocker = true
gltfShape142.visible = true
sofamodern.addComponentOrReplace(gltfShape142)

const sofamodern2 = new Entity('sofamodern2')
engine.addEntity(sofamodern2)
sofamodern2.setParent(_scene)
const transform237 = new Transform({
  position: new Vector3(15.5, 37.9603233, 24),
  rotation: new Quaternion(1.76008449e-15, -0.195090353, 2.32565824e-8, -0.98078537),
  scale: new Vector3(1, 1, 1)
})
sofamodern2.addComponentOrReplace(transform237)
const gltfShape143 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape143.withCollisions = true
gltfShape143.isPointerBlocker = true
gltfShape143.visible = true
sofamodern2.addComponentOrReplace(gltfShape143)

const sofamodern23 = new Entity('sofamodern23')
engine.addEntity(sofamodern23)
sofamodern23.setParent(_scene)
const transform238 = new Transform({
  position: new Vector3(12.5, 37.9603233, 28),
  rotation: new Quaternion(-3.2428667e-15, 0.8314696, -9.911889e-8, 0.555570245),
  scale: new Vector3(1.00000012, 1, 1.00000012)
})
sofamodern23.addComponentOrReplace(transform238)
const gltfShape144 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape144.withCollisions = true
gltfShape144.isPointerBlocker = true
gltfShape144.visible = true
sofamodern23.addComponentOrReplace(gltfShape144)

const sofamodern234 = new Entity('sofamodern234')
engine.addEntity(sofamodern234)
sofamodern234.setParent(_scene)
const transform239 = new Transform({
  position: new Vector3(43, 37.9603233, 23.5),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234.addComponentOrReplace(transform239)
const gltfShape145 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape145.withCollisions = true
gltfShape145.isPointerBlocker = true
gltfShape145.visible = true
sofamodern234.addComponentOrReplace(gltfShape145)

const sofamodern2345 = new Entity('sofamodern2345')
engine.addEntity(sofamodern2345)
sofamodern2345.setParent(_scene)
const transform240 = new Transform({
  position: new Vector3(41, 37.9603233, 23.5),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345.addComponentOrReplace(transform240)
const gltfShape146 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape146.withCollisions = true
gltfShape146.isPointerBlocker = true
gltfShape146.visible = true
sofamodern2345.addComponentOrReplace(gltfShape146)

const coffeetable2 = new Entity('coffeetable2')
engine.addEntity(coffeetable2)
coffeetable2.setParent(_scene)
const transform241 = new Transform({
  position: new Vector3(41.5101357, 37.98885, 25.4999981),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.55543828, 1.5, 1.49999976)
})
coffeetable2.addComponentOrReplace(transform241)
const gltfShape147 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape147.withCollisions = true
gltfShape147.isPointerBlocker = true
gltfShape147.visible = true
coffeetable2.addComponentOrReplace(gltfShape147)

const sofamodern23456 = new Entity('sofamodern23456')
engine.addEntity(sofamodern23456)
sofamodern23456.setParent(_scene)
const transform242 = new Transform({
  position: new Vector3(42, 37.9603233, 27.5),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456.addComponentOrReplace(transform242)
const gltfShape148 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape148.withCollisions = true
gltfShape148.isPointerBlocker = true
gltfShape148.visible = true
sofamodern23456.addComponentOrReplace(gltfShape148)

const sofamodern234567 = new Entity('sofamodern234567')
engine.addEntity(sofamodern234567)
sofamodern234567.setParent(_scene)
const transform243 = new Transform({
  position: new Vector3(40, 37.9603233, 27.5),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234567.addComponentOrReplace(transform243)
const gltfShape149 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape149.withCollisions = true
gltfShape149.isPointerBlocker = true
gltfShape149.visible = true
sofamodern234567.addComponentOrReplace(gltfShape149)

const sofamodern2345678 = new Entity('sofamodern2345678')
engine.addEntity(sofamodern2345678)
sofamodern2345678.setParent(_scene)
const transform244 = new Transform({
  position: new Vector3(41, 37.9603233, 32),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345678.addComponentOrReplace(transform244)
const gltfShape150 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape150.withCollisions = true
gltfShape150.isPointerBlocker = true
gltfShape150.visible = true
sofamodern2345678.addComponentOrReplace(gltfShape150)

const sofamodern23456789 = new Entity('sofamodern23456789')
engine.addEntity(sofamodern23456789)
sofamodern23456789.setParent(_scene)
const transform245 = new Transform({
  position: new Vector3(43, 37.9603233, 32),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456789.addComponentOrReplace(transform245)
const gltfShape151 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape151.withCollisions = true
gltfShape151.isPointerBlocker = true
gltfShape151.visible = true
sofamodern23456789.addComponentOrReplace(gltfShape151)

const coffeetable23 = new Entity('coffeetable23')
engine.addEntity(coffeetable23)
coffeetable23.setParent(_scene)
const transform246 = new Transform({
  position: new Vector3(41.5101357, 37.98885, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.55543828, 1.5, 1.49999976)
})
coffeetable23.addComponentOrReplace(transform246)
const gltfShape152 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape152.withCollisions = true
gltfShape152.isPointerBlocker = true
gltfShape152.visible = true
coffeetable23.addComponentOrReplace(gltfShape152)

const sofamodern2345678910 = new Entity('sofamodern2345678910')
engine.addEntity(sofamodern2345678910)
sofamodern2345678910.setParent(_scene)
const transform247 = new Transform({
  position: new Vector3(40, 37.9603233, 36),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345678910.addComponentOrReplace(transform247)
const gltfShape153 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape153.withCollisions = true
gltfShape153.isPointerBlocker = true
gltfShape153.visible = true
sofamodern2345678910.addComponentOrReplace(gltfShape153)

const sofamodern234567891011 = new Entity('sofamodern234567891011')
engine.addEntity(sofamodern234567891011)
sofamodern234567891011.setParent(_scene)
const transform248 = new Transform({
  position: new Vector3(42, 37.9603233, 36),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234567891011.addComponentOrReplace(transform248)
const gltfShape154 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape154.withCollisions = true
gltfShape154.isPointerBlocker = true
gltfShape154.visible = true
sofamodern234567891011.addComponentOrReplace(gltfShape154)

const sofamodern23456789101112 = new Entity('sofamodern23456789101112')
engine.addEntity(sofamodern23456789101112)
sofamodern23456789101112.setParent(_scene)
const transform249 = new Transform({
  position: new Vector3(36.573925, 37.9603233, 32),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456789101112.addComponentOrReplace(transform249)
const gltfShape155 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape155.withCollisions = true
gltfShape155.isPointerBlocker = true
gltfShape155.visible = true
sofamodern23456789101112.addComponentOrReplace(gltfShape155)

const sofamodern2345678910111213 = new Entity('sofamodern2345678910111213')
engine.addEntity(sofamodern2345678910111213)
sofamodern2345678910111213.setParent(_scene)
const transform250 = new Transform({
  position: new Vector3(34.573925, 37.9603233, 32),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345678910111213.addComponentOrReplace(transform250)
const gltfShape156 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape156.withCollisions = true
gltfShape156.isPointerBlocker = true
gltfShape156.visible = true
sofamodern2345678910111213.addComponentOrReplace(gltfShape156)

const coffeetable234 = new Entity('coffeetable234')
engine.addEntity(coffeetable234)
coffeetable234.setParent(_scene)
const transform251 = new Transform({
  position: new Vector3(35.08406, 37.98885, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.55543828, 1.5, 1.49999976)
})
coffeetable234.addComponentOrReplace(transform251)
const gltfShape157 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape157.withCollisions = true
gltfShape157.isPointerBlocker = true
gltfShape157.visible = true
coffeetable234.addComponentOrReplace(gltfShape157)

const sofamodern234567891011121314 = new Entity('sofamodern234567891011121314')
engine.addEntity(sofamodern234567891011121314)
sofamodern234567891011121314.setParent(_scene)
const transform252 = new Transform({
  position: new Vector3(35.573925, 37.9603233, 36),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234567891011121314.addComponentOrReplace(transform252)
const gltfShape158 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape158.withCollisions = true
gltfShape158.isPointerBlocker = true
gltfShape158.visible = true
sofamodern234567891011121314.addComponentOrReplace(gltfShape158)

const sofamodern23456789101112131415 = new Entity('sofamodern23456789101112131415')
engine.addEntity(sofamodern23456789101112131415)
sofamodern23456789101112131415.setParent(_scene)
const transform253 = new Transform({
  position: new Vector3(33.573925, 37.9603233, 36),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456789101112131415.addComponentOrReplace(transform253)
const gltfShape159 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape159.withCollisions = true
gltfShape159.isPointerBlocker = true
gltfShape159.visible = true
sofamodern23456789101112131415.addComponentOrReplace(gltfShape159)

const sofamodern2345678910111213141516 = new Entity('sofamodern2345678910111213141516')
engine.addEntity(sofamodern2345678910111213141516)
sofamodern2345678910111213141516.setParent(_scene)
const transform254 = new Transform({
  position: new Vector3(35.573925, 37.9603233, 27.5),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345678910111213141516.addComponentOrReplace(transform254)
const gltfShape160 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape160.withCollisions = true
gltfShape160.isPointerBlocker = true
gltfShape160.visible = true
sofamodern2345678910111213141516.addComponentOrReplace(gltfShape160)

const sofamodern234567891011121314151617 = new Entity('sofamodern234567891011121314151617')
engine.addEntity(sofamodern234567891011121314151617)
sofamodern234567891011121314151617.setParent(_scene)
const transform255 = new Transform({
  position: new Vector3(33.573925, 37.9603233, 27.5),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234567891011121314151617.addComponentOrReplace(transform255)
const gltfShape161 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape161.withCollisions = true
gltfShape161.isPointerBlocker = true
gltfShape161.visible = true
sofamodern234567891011121314151617.addComponentOrReplace(gltfShape161)

const coffeetable2345 = new Entity('coffeetable2345')
engine.addEntity(coffeetable2345)
coffeetable2345.setParent(_scene)
const transform256 = new Transform({
  position: new Vector3(35.08406, 37.98885, 25.4999981),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.55543828, 1.5, 1.49999976)
})
coffeetable2345.addComponentOrReplace(transform256)
const gltfShape162 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape162.withCollisions = true
gltfShape162.isPointerBlocker = true
gltfShape162.visible = true
coffeetable2345.addComponentOrReplace(gltfShape162)

const sofamodern23456789101112131415161718 = new Entity('sofamodern23456789101112131415161718')
engine.addEntity(sofamodern23456789101112131415161718)
sofamodern23456789101112131415161718.setParent(_scene)
const transform257 = new Transform({
  position: new Vector3(36.573925, 37.9603233, 23.5),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456789101112131415161718.addComponentOrReplace(transform257)
const gltfShape163 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape163.withCollisions = true
gltfShape163.isPointerBlocker = true
gltfShape163.visible = true
sofamodern23456789101112131415161718.addComponentOrReplace(gltfShape163)

const sofamodern2345678910111213141516171819 = new Entity('sofamodern2345678910111213141516171819')
engine.addEntity(sofamodern2345678910111213141516171819)
sofamodern2345678910111213141516171819.setParent(_scene)
const transform258 = new Transform({
  position: new Vector3(34.573925, 37.9603233, 23.5),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345678910111213141516171819.addComponentOrReplace(transform258)
const gltfShape164 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape164.withCollisions = true
gltfShape164.isPointerBlocker = true
gltfShape164.visible = true
sofamodern2345678910111213141516171819.addComponentOrReplace(gltfShape164)

const roofglassedges234 = new Entity('roofglassedges234')
engine.addEntity(roofglassedges234)
roofglassedges234.setParent(_scene)
const transform259 = new Transform({
  position: new Vector3(33.02562, 37.7992058, 48),
  rotation: new Quaternion(0.49999994, -0.5000001, -0.5, 0.50000006),
  scale: new Vector3(2.41485214, 1.00000465, 2.18688059)
})
roofglassedges234.addComponentOrReplace(transform259)
const gltfShape165 = new GLTFShape("804c94f9-20d8-4fd3-aca0-d096cad08ff7/GlassRoof_2Edges.glb")
gltfShape165.withCollisions = true
gltfShape165.isPointerBlocker = true
gltfShape165.visible = true
roofglassedges234.addComponentOrReplace(gltfShape165)

const rainlight23 = new Entity('rainlight23')
engine.addEntity(rainlight23)
rainlight23.setParent(_scene)
const transform260 = new Transform({
  position: new Vector3(37.5, 37.42906, 55.7741966),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.705493, 2.5, 8.221693)
})
rainlight23.addComponentOrReplace(transform260)

const blockfloorlight2 = new Entity('blockfloorlight2')
engine.addEntity(blockfloorlight2)
blockfloorlight2.setParent(_scene)
const transform261 = new Transform({
  position: new Vector3(35.5, 45.4587173, 23.5),
  rotation: new Quaternion(-0.7071067, 8.802274e-15, 8.429368e-8, -0.7071068),
  scale: new Vector3(2.25, 11.2499723, 1.99999809)
})
blockfloorlight2.addComponentOrReplace(transform261)

const blockfloorlight23 = new Entity('blockfloorlight23')
engine.addEntity(blockfloorlight23)
blockfloorlight23.setParent(_scene)
const transform262 = new Transform({
  position: new Vector3(42, 45.4587173, 23.5),
  rotation: new Quaternion(-0.7071067, 8.802274e-15, 8.429368e-8, -0.7071068),
  scale: new Vector3(2.25, 11.2499685, 1.99999785)
})
blockfloorlight23.addComponentOrReplace(transform262)

const sofamodern234567891011121314151617181920 = new Entity('sofamodern234567891011121314151617181920')
engine.addEntity(sofamodern234567891011121314151617181920)
sofamodern234567891011121314151617181920.setParent(_scene)
const transform263 = new Transform({
  position: new Vector3(34.573925, 37.9603233, 55.6975021),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234567891011121314151617181920.addComponentOrReplace(transform263)
const gltfShape166 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape166.withCollisions = true
gltfShape166.isPointerBlocker = true
gltfShape166.visible = true
sofamodern234567891011121314151617181920.addComponentOrReplace(gltfShape166)

const sofamodern23456789101112131415161718192021 = new Entity('sofamodern23456789101112131415161718192021')
engine.addEntity(sofamodern23456789101112131415161718192021)
sofamodern23456789101112131415161718192021.setParent(_scene)
const transform264 = new Transform({
  position: new Vector3(36.573925, 37.9603233, 55.43533),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456789101112131415161718192021.addComponentOrReplace(transform264)
const gltfShape167 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape167.withCollisions = true
gltfShape167.isPointerBlocker = true
gltfShape167.visible = true
sofamodern23456789101112131415161718192021.addComponentOrReplace(gltfShape167)

const sofamodern2345678910111213141516171819202122 = new Entity('sofamodern2345678910111213141516171819202122')
engine.addEntity(sofamodern2345678910111213141516171819202122)
sofamodern2345678910111213141516171819202122.setParent(_scene)
const transform265 = new Transform({
  position: new Vector3(33.5869522, 37.9603233, 58.6453133),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345678910111213141516171819202122.addComponentOrReplace(transform265)
const gltfShape168 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape168.withCollisions = true
gltfShape168.isPointerBlocker = true
gltfShape168.visible = true
sofamodern2345678910111213141516171819202122.addComponentOrReplace(gltfShape168)

const sofamodern234567891011121314151617181920212223 = new Entity('sofamodern234567891011121314151617181920212223')
engine.addEntity(sofamodern234567891011121314151617181920212223)
sofamodern234567891011121314151617181920212223.setParent(_scene)
const transform266 = new Transform({
  position: new Vector3(35.573925, 37.9603233, 58.8112679),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234567891011121314151617181920212223.addComponentOrReplace(transform266)
const gltfShape169 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape169.withCollisions = true
gltfShape169.isPointerBlocker = true
gltfShape169.visible = true
sofamodern234567891011121314151617181920212223.addComponentOrReplace(gltfShape169)

const sofamodern23456789101112131415161718192021222324 = new Entity('sofamodern23456789101112131415161718192021222324')
engine.addEntity(sofamodern23456789101112131415161718192021222324)
sofamodern23456789101112131415161718192021222324.setParent(_scene)
const transform267 = new Transform({
  position: new Vector3(38.573925, 37.9603233, 55),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456789101112131415161718192021222324.addComponentOrReplace(transform267)
const gltfShape170 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape170.withCollisions = true
gltfShape170.isPointerBlocker = true
gltfShape170.visible = true
sofamodern23456789101112131415161718192021222324.addComponentOrReplace(gltfShape170)

const sofamodern2345678910111213141516171819202122232425 = new Entity('sofamodern2345678910111213141516171819202122232425')
engine.addEntity(sofamodern2345678910111213141516171819202122232425)
sofamodern2345678910111213141516171819202122232425.setParent(_scene)
const transform268 = new Transform({
  position: new Vector3(37.573925, 37.9603233, 59),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345678910111213141516171819202122232425.addComponentOrReplace(transform268)
const gltfShape171 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape171.withCollisions = true
gltfShape171.isPointerBlocker = true
gltfShape171.visible = true
sofamodern2345678910111213141516171819202122232425.addComponentOrReplace(gltfShape171)

const sofamodern234567891011121314151617181920212223242526 = new Entity('sofamodern234567891011121314151617181920212223242526')
engine.addEntity(sofamodern234567891011121314151617181920212223242526)
sofamodern234567891011121314151617181920212223242526.setParent(_scene)
const transform269 = new Transform({
  position: new Vector3(39.573925, 37.9603233, 58.80985),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234567891011121314151617181920212223242526.addComponentOrReplace(transform269)
const gltfShape172 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape172.withCollisions = true
gltfShape172.isPointerBlocker = true
gltfShape172.visible = true
sofamodern234567891011121314151617181920212223242526.addComponentOrReplace(gltfShape172)

const sofamodern23456789101112131415161718192021222324252627 = new Entity('sofamodern23456789101112131415161718192021222324252627')
engine.addEntity(sofamodern23456789101112131415161718192021222324252627)
sofamodern23456789101112131415161718192021222324252627.setParent(_scene)
const transform270 = new Transform({
  position: new Vector3(40.573925, 37.9603233, 55.2728767),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456789101112131415161718192021222324252627.addComponentOrReplace(transform270)
const gltfShape173 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape173.withCollisions = true
gltfShape173.isPointerBlocker = true
gltfShape173.visible = true
sofamodern23456789101112131415161718192021222324252627.addComponentOrReplace(gltfShape173)

const concreteroundedtable2345678 = new Entity('concreteroundedtable2345678')
engine.addEntity(concreteroundedtable2345678)
concreteroundedtable2345678.setParent(_scene)
const transform271 = new Transform({
  position: new Vector3(38, 37.91381, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 1, 1.5)
})
concreteroundedtable2345678.addComponentOrReplace(transform271)
const gltfShape174 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape174.withCollisions = true
gltfShape174.isPointerBlocker = true
gltfShape174.visible = true
concreteroundedtable2345678.addComponentOrReplace(gltfShape174)

const rainlight234 = new Entity('rainlight234')
engine.addEntity(rainlight234)
rainlight234.setParent(_scene)
const transform272 = new Transform({
  position: new Vector3(26.265213, 71.9258041, 40.5558548),
  rotation: new Quaternion(0, 0, 1, 2.98023224e-8),
  scale: new Vector3(5.52819347, 0.0810511, 13.2153606)
})
rainlight234.addComponentOrReplace(transform272)

const wallplainblack2345678910111213 = new Entity('wallplainblack2345678910111213')
engine.addEntity(wallplainblack2345678910111213)
wallplainblack2345678910111213.setParent(_scene)
const transform273 = new Transform({
  position: new Vector3(29.59134, 0.0192108154, 51.00003),
  rotation: new Quaternion(-0.7053898, -2.64055888e-8, 1.10366813e-7, 0.7088197),
  scale: new Vector3(2.09427857, 4.847859, 0.140035972)
})
wallplainblack2345678910111213.addComponentOrReplace(transform273)
const gltfShape175 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape175.withCollisions = true
gltfShape175.isPointerBlocker = true
gltfShape175.visible = true
wallplainblack2345678910111213.addComponentOrReplace(gltfShape175)

const ropelight23 = new Entity('ropelight23')
engine.addEntity(ropelight23)
ropelight23.setParent(_scene)
const transform274 = new Transform({
  position: new Vector3(27.3544464, 78.6150742, 32.74239),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9412798, 1, 1)
})
ropelight23.addComponentOrReplace(transform274)

const ringwhitelight2 = new Entity('ringwhitelight2')
engine.addEntity(ringwhitelight2)
ringwhitelight2.setParent(_scene)
const transform275 = new Transform({
  position: new Vector3(16.536377, 47.4975662, 47.63677),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.68569136, 2, 1.706808)
})
ringwhitelight2.addComponentOrReplace(transform275)
const gltfShape176 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape176.withCollisions = true
gltfShape176.isPointerBlocker = true
gltfShape176.visible = true
ringwhitelight2.addComponentOrReplace(gltfShape176)

const ringwhitelight23 = new Entity('ringwhitelight23')
engine.addEntity(ringwhitelight23)
ringwhitelight23.setParent(_scene)
const transform276 = new Transform({
  position: new Vector3(16.536377, 37.8493729, 47.63677),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.68569136, 2, 1.706808)
})
ringwhitelight23.addComponentOrReplace(transform276)
const gltfShape177 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape177.withCollisions = true
gltfShape177.isPointerBlocker = true
gltfShape177.visible = true
ringwhitelight23.addComponentOrReplace(gltfShape177)

const ringwhitelight234 = new Entity('ringwhitelight234')
engine.addEntity(ringwhitelight234)
ringwhitelight234.setParent(_scene)
const transform277 = new Transform({
  position: new Vector3(16.536377, 56.7777176, 47.63677),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.68569136, 2, 1.706808)
})
ringwhitelight234.addComponentOrReplace(transform277)
const gltfShape178 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape178.withCollisions = true
gltfShape178.isPointerBlocker = true
gltfShape178.visible = true
ringwhitelight234.addComponentOrReplace(gltfShape178)

const ringwhitelight2345 = new Entity('ringwhitelight2345')
engine.addEntity(ringwhitelight2345)
ringwhitelight2345.setParent(_scene)
const transform278 = new Transform({
  position: new Vector3(16.536377, 71.4027557, 47.63677),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.68569136, 2, 1.706808)
})
ringwhitelight2345.addComponentOrReplace(transform278)
const gltfShape179 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape179.withCollisions = true
gltfShape179.isPointerBlocker = true
gltfShape179.visible = true
ringwhitelight2345.addComponentOrReplace(gltfShape179)

const speakers234 = new Entity('speakers234')
engine.addEntity(speakers234)
speakers234.setParent(_scene)
const transform279 = new Transform({
  position: new Vector3(24, 71.5, 31),
  rotation: new Quaternion(-5.410955e-15, -0.2902847, 3.460464e-8, -0.9569404),
  scale: new Vector3(2.00000048, 2, 1.00000024)
})
speakers234.addComponentOrReplace(transform279)

const obitatrimmed2 = new Entity('obitatrimmed2')
engine.addEntity(obitatrimmed2)
obitatrimmed2.setParent(_scene)
const transform280 = new Transform({
  position: new Vector3(175.367508, 0, 213.255066),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.00000012, 1, 1.00000012)
})
obitatrimmed2.addComponentOrReplace(transform280)
const gltfShape180 = new GLTFShape("0fe365bc-bc2f-4379-99f2-47a5c180d3d9/obita_trimmed.glb")
gltfShape180.withCollisions = true
gltfShape180.isPointerBlocker = true
gltfShape180.visible = true
obitatrimmed2.addComponentOrReplace(gltfShape180)

const obitaSuperHyperTrimmed = new Entity('obitaSuperHyperTrimmed')
engine.addEntity(obitaSuperHyperTrimmed)
obitaSuperHyperTrimmed.setParent(_scene)
const transform281 = new Transform({
  position: new Vector3(27.5, 0, 41),
  rotation: new Quaternion(-1.5684796016718762e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1, 0.9483510255813599, 1)
})
obitaSuperHyperTrimmed.addComponentOrReplace(transform281)
const gltfShape181 = new GLTFShape("ac15db56-3549-4b05-a37c-50e61fc61026/obita_super_hyper_trimmed.glb")
gltfShape181.withCollisions = true
gltfShape181.isPointerBlocker = true
gltfShape181.visible = true
obitaSuperHyperTrimmed.addComponentOrReplace(gltfShape181)

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
script2.spawn(clickarea, {"enabled":true,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc","x":0,"y":23,"z":0,"curve":"linear","speed":3,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":4,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc","x":0,"y":-23,"z":0,"curve":"linear","speed":3,"relative":true,"onComplete":[]}},{"entityName":"toolbox","actionId":"delay","values":{"timeout":1,"onTimeout":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass","x":1,"y":1,"z":1,"curve":"linear","speed":15,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickarea","x":1,"y":1,"z":1,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}}]}}]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickarea","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, clickarea, channelBus))
script3.spawn(triggerarea, {"enabled":true,"onEnter":[{"entityName":"toolbox","actionId":"scale","values":{"target":"wallplainglass2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"wallplainglass","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}],"onLeave":[{"entityName":"toolbox","actionId":"scale","values":{"target":"wallplainglass2","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"wallplainglass","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, triggerarea, channelBus))
script2.spawn(clickarea2, {"enabled":true,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorGlass","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":10,"onTimeout":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorGlass","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}}]}},{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc","x":0,"y":23,"z":0,"curve":"easeinoutsine","speed":3,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":4,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc","x":0,"y":-23,"z":0,"curve":"linear","speed":3,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea2","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}}]}}]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, clickarea2, channelBus))
script2.spawn(clickarea23, {"enabled":true,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc2","x":0,"y":8.75,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc2","x":0,"y":9.75,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc2","x":0,"y":9.25,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc2","x":0,"y":14.75,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass2","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":5,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc2","x":0,"y":-42.5,"z":0,"curve":"linear","speed":4,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass2","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"x":1,"y":1,"z":1,"curve":"linear","speed":10,"onComplete":[],"target":"clickarea2"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickarea2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, clickarea23, channelBus))
script4.spawn(videostream, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"customStation":"https://decentralive.tv/video/11687ca777b5acce9c522d591137c087.mp4","image":"https://i.postimg.cc/6pMZYFNk/OUBITA-LOGO.png","station":"https://theuniverse.club/live/genesisplaza/index.m3u8"}, createChannel(channelId, videostream, channelBus))
script5.spawn(blockfloorlight, {"startOn":true,"clickable":true}, createChannel(channelId, blockfloorlight, channelBus))
script6.spawn(speakers, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers, channelBus))
script6.spawn(speakers2, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers2, channelBus))
script7.spawn(radiocyberpunk, {"startOn":false,"volume":1,"onClickText":" ","onClick":[],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3","onActivate":[],"onDeactivate":[],"customStation":"https://decentralive.tv/video/f0d556385ef785b43df50fa4ebc3e3d3.mp3"}, createChannel(channelId, radiocyberpunk, channelBus))
script6.spawn(speakers23, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers23, channelBus))
script8.spawn(spark, {"active":true}, createChannel(channelId, spark, channelBus))
script8.spawn(spark2, {"active":true}, createChannel(channelId, spark2, channelBus))
script9.spawn(funkyfloorlight, {"startOn":true,"clickable":true}, createChannel(channelId, funkyfloorlight, channelBus))
script9.spawn(funkyfloorlight2, {"startOn":true,"clickable":true}, createChannel(channelId, funkyfloorlight2, channelBus))
script9.spawn(funkyfloorlight23, {"startOn":true,"clickable":true}, createChannel(channelId, funkyfloorlight23, channelBus))
script9.spawn(funkyfloorlight234, {"startOn":true,"clickable":true}, createChannel(channelId, funkyfloorlight234, channelBus))
script9.spawn(funkyfloorlight2345, {"startOn":true,"clickable":true}, createChannel(channelId, funkyfloorlight2345, channelBus))
script9.spawn(funkyfloorlight23456, {"startOn":true,"clickable":true}, createChannel(channelId, funkyfloorlight23456, channelBus))
script10.spawn(tablelamplight, {"startOn":true,"clickable":true}, createChannel(channelId, tablelamplight, channelBus))
script10.spawn(tablelamplight2, {"startOn":true,"clickable":true}, createChannel(channelId, tablelamplight2, channelBus))
script10.spawn(tablelamplight23, {"startOn":true,"clickable":true}, createChannel(channelId, tablelamplight23, channelBus))
script10.spawn(tablelamplight234, {"startOn":true,"clickable":true}, createChannel(channelId, tablelamplight234, channelBus))
script10.spawn(tablelamplight2345, {"startOn":true,"clickable":true}, createChannel(channelId, tablelamplight2345, channelBus))
script10.spawn(tablelamplight23456, {"startOn":true,"clickable":true}, createChannel(channelId, tablelamplight23456, channelBus))
script10.spawn(tablelamplight234567, {"startOn":true,"clickable":true}, createChannel(channelId, tablelamplight234567, channelBus))
script11.spawn(rainlight, {"startOn":true,"clickable":false}, createChannel(channelId, rainlight, channelBus))
script11.spawn(rainlight2, {"startOn":true,"clickable":false}, createChannel(channelId, rainlight2, channelBus))
script12.spawn(imagefromurl, {"image":"https://i.postimg.cc/6pMZYFNk/OUBITA-LOGO.png"}, createChannel(channelId, imagefromurl, channelBus))
script13.spawn(nftpictureframe, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe, channelBus))
script13.spawn(nftpictureframe2, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2, channelBus))
script13.spawn(nftpictureframe23, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23, channelBus))
script13.spawn(nftpictureframe234, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234, channelBus))
script13.spawn(nftpictureframe2345, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345, channelBus))
script13.spawn(nftpictureframe23456, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456, channelBus))
script13.spawn(nftpictureframe234567, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567, channelBus))
script13.spawn(nftpictureframe2345678, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678, channelBus))
script13.spawn(nftpictureframe23456789, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789, channelBus))
script13.spawn(nftpictureframe2345678910, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910, channelBus))
script13.spawn(nftpictureframe234567891011, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011, channelBus))
script13.spawn(nftpictureframe23456789101112, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112, channelBus))
script13.spawn(nftpictureframe2345678910111213, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213, channelBus))
script13.spawn(nftpictureframe234567891011121314, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314, channelBus))
script13.spawn(nftpictureframe23456789101112131415, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415, channelBus))
script13.spawn(nftpictureframe2345678910111213141516, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516, channelBus))
script13.spawn(nftpictureframe234567891011121314151617, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223242526, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223242526, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324252627, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324252627, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223242526272829, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223242526272829, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324252627282930, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324252627282930, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728293031, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728293031, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223242526272829303132, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223242526272829303132, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324252627282930313233, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324252627282930313233, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728293031323334, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728293031323334, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223242526272829303132333435, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223242526272829303132333435, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324252627282930313233343536, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324252627282930313233343536, channelBus))
script14.spawn(gallerylight, {"startOn":true,"clickable":true}, createChannel(channelId, gallerylight, channelBus))
script14.spawn(gallerylight2, {"startOn":true,"clickable":true}, createChannel(channelId, gallerylight2, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728293031323334353637, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223242526272829303132333435363738, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758, channelBus))
script13.spawn(nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960, channelBus))
script15.spawn(ropelight, {"startOn":true,"clickable":true}, createChannel(channelId, ropelight, channelBus))
script15.spawn(ropelight2, {"startOn":true,"clickable":true}, createChannel(channelId, ropelight2, channelBus))
script11.spawn(rainlight23, {"startOn":true,"clickable":true}, createChannel(channelId, rainlight23, channelBus))
script5.spawn(blockfloorlight2, {"startOn":true,"clickable":true}, createChannel(channelId, blockfloorlight2, channelBus))
script5.spawn(blockfloorlight23, {"startOn":true,"clickable":true}, createChannel(channelId, blockfloorlight23, channelBus))
script11.spawn(rainlight234, {"startOn":true,"clickable":false}, createChannel(channelId, rainlight234, channelBus))
script15.spawn(ropelight23, {"startOn":true,"clickable":true}, createChannel(channelId, ropelight23, channelBus))
script6.spawn(speakers234, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers234, channelBus))