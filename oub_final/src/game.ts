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
import Script14 from "../3cf05054-0a57-4b00-ba77-a3f21876494d/src/item"
import Script15 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"

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
  scale: new Vector3(2, 1.784999966621399, 2)
})
clickarea.addComponentOrReplace(transform4)

const wallplainglass = new Entity('wallplainglass')
engine.addEntity(wallplainglass)
wallplainglass.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(25.376171112060547, 0.1635526418685913, 31.045602798461914),
  rotation: new Quaternion(8.449403523581086e-15, 1, -1.1920928244535389e-7, -2.2351741790771484e-8),
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
  position: new Vector3(29.376171112060547, 0.1598912477493286, 31.351280212402344),
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
  position: new Vector3(27.296533584594727, 0, 29.5),
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
  scale: new Vector3(2, 1.3966139554977417, 2)
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
  position: new Vector3(16.5, 29.32918930053711, 47.71237564086914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 1.2909836769104004, 2)
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
  position: new Vector3(18.62920379638672, 71.49091339111328, 49.63858413696289),
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
  position: new Vector3(35.36, 25.987442016601562, 40.99998474121094),
  rotation: new Quaternion(0.13794967532157898, -0.6935198903083801, 0.13794976472854614, 0.6935199499130249),
  scale: new Vector3(5.5000081062316895, 5.500000476837158, 1.000001311302185)
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
  position: new Vector3(18, 46.458717346191406, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(11.25, 0.5723720788955688, 25)
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
  position: new Vector3(29.836605072021484, 73.23040008544922, 32.2677001953125),
  rotation: new Quaternion(-3.552713678800501e-15, 1.4901161193847656e-8, 8.581146793032284e-15, -1),
  scale: new Vector3(2.25000262260437, 2.567028522491455, 2.250002384185791)
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

const roofblack = new Entity('roofblack')
engine.addEntity(roofblack)
roofblack.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(42.0000038, 66.5, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.790256, 1, 9.876068)
})
roofblack.addComponentOrReplace(transform48)
const gltfShape36 = new GLTFShape("0d67ab09-6591-44dc-bc70-2fd1dbc49d06/BlackRoof.glb")
gltfShape36.withCollisions = true
gltfShape36.isPointerBlocker = true
gltfShape36.visible = true
roofblack.addComponentOrReplace(gltfShape36)

const spark = new Entity('spark')
engine.addEntity(spark)
spark.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(21.6755219, 78.02174, 32.75471),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark.addComponentOrReplace(transform49)

const spark2 = new Entity('spark2')
engine.addEntity(spark2)
spark2.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(32.69689, 78.02174, 32.75471),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark2.addComponentOrReplace(transform50)

const barm2 = new Entity('barm2')
engine.addEntity(barm2)
barm2.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(24.25421905517578, 73.76612091064453, 54.87474060058594),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(2, 1.5, 1)
})
barm2.addComponentOrReplace(transform51)
const gltfShape37 = new GLTFShape("2312b12f-d481-4229-be52-82aa3819a391/Furnit Bar 4 2M.glb")
gltfShape37.withCollisions = true
gltfShape37.isPointerBlocker = true
gltfShape37.visible = true
barm2.addComponentOrReplace(gltfShape37)

const bargreen = new Entity('bargreen')
engine.addEntity(bargreen)
bargreen.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(22.500003814697266, 71.5, 51.5),
  rotation: new Quaternion(-4.8369380230988985e-15, 1, -1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
bargreen.addComponentOrReplace(transform52)
const gltfShape38 = new GLTFShape("d918354b-4382-4b9d-acbb-cc13fadad45a/Bar_Green.glb")
gltfShape38.withCollisions = true
gltfShape38.isPointerBlocker = true
gltfShape38.visible = true
bargreen.addComponentOrReplace(gltfShape38)

const bargreen2 = new Entity('bargreen2')
engine.addEntity(bargreen2)
bargreen2.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(28.609935760498047, 71.5, 51.5),
  rotation: new Quaternion(-4.8369380230988985e-15, 1, -1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
bargreen2.addComponentOrReplace(transform53)
const gltfShape39 = new GLTFShape("d918354b-4382-4b9d-acbb-cc13fadad45a/Bar_Green.glb")
gltfShape39.withCollisions = true
gltfShape39.isPointerBlocker = true
gltfShape39.visible = true
bargreen2.addComponentOrReplace(gltfShape39)

const concreteroundedtable = new Entity('concreteroundedtable')
engine.addEntity(concreteroundedtable)
concreteroundedtable.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(34.5000038, 71.5702744, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable.addComponentOrReplace(transform54)
const gltfShape40 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape40.withCollisions = true
gltfShape40.isPointerBlocker = true
gltfShape40.visible = true
concreteroundedtable.addComponentOrReplace(gltfShape40)

const concreteroundedtable2 = new Entity('concreteroundedtable2')
engine.addEntity(concreteroundedtable2)
concreteroundedtable2.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(33, 71.5702744, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable2.addComponentOrReplace(transform55)
const gltfShape41 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape41.withCollisions = true
gltfShape41.isPointerBlocker = true
gltfShape41.visible = true
concreteroundedtable2.addComponentOrReplace(gltfShape41)

const concreteroundedtable23 = new Entity('concreteroundedtable23')
engine.addEntity(concreteroundedtable23)
concreteroundedtable23.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(37, 71.5702744, 44.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable23.addComponentOrReplace(transform56)
const gltfShape42 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape42.withCollisions = true
gltfShape42.isPointerBlocker = true
gltfShape42.visible = true
concreteroundedtable23.addComponentOrReplace(gltfShape42)

const concreteroundedtable234 = new Entity('concreteroundedtable234')
engine.addEntity(concreteroundedtable234)
concreteroundedtable234.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(35.5, 71.5702744, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable234.addComponentOrReplace(transform57)
const gltfShape43 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape43.withCollisions = true
gltfShape43.isPointerBlocker = true
gltfShape43.visible = true
concreteroundedtable234.addComponentOrReplace(gltfShape43)

const concreteroundedtable2345 = new Entity('concreteroundedtable2345')
engine.addEntity(concreteroundedtable2345)
concreteroundedtable2345.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(32, 71.5702744, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable2345.addComponentOrReplace(transform58)
const gltfShape44 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape44.withCollisions = true
gltfShape44.isPointerBlocker = true
gltfShape44.visible = true
concreteroundedtable2345.addComponentOrReplace(gltfShape44)

const concreteroundedtable23456 = new Entity('concreteroundedtable23456')
engine.addEntity(concreteroundedtable23456)
concreteroundedtable23456.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(38.5, 71.5702744, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable23456.addComponentOrReplace(transform59)
const gltfShape45 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape45.withCollisions = true
gltfShape45.isPointerBlocker = true
gltfShape45.visible = true
concreteroundedtable23456.addComponentOrReplace(gltfShape45)

const concreteroundedtable234567 = new Entity('concreteroundedtable234567')
engine.addEntity(concreteroundedtable234567)
concreteroundedtable234567.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(36, 71.5702744, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteroundedtable234567.addComponentOrReplace(transform60)
const gltfShape46 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape46.withCollisions = true
gltfShape46.isPointerBlocker = true
gltfShape46.visible = true
concreteroundedtable234567.addComponentOrReplace(gltfShape46)

const funkyfloorlight = new Entity('funkyfloorlight')
engine.addEntity(funkyfloorlight)
funkyfloorlight.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(17.8019485, 71.3419, 42.82564),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyfloorlight.addComponentOrReplace(transform61)

const funkyfloorlight2 = new Entity('funkyfloorlight2')
engine.addEntity(funkyfloorlight2)
funkyfloorlight2.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(17, 71.3419, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyfloorlight2.addComponentOrReplace(transform62)

const funkyfloorlight23 = new Entity('funkyfloorlight23')
engine.addEntity(funkyfloorlight23)
funkyfloorlight23.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(38.5, 71.3419, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyfloorlight23.addComponentOrReplace(transform63)

const funkyfloorlight234 = new Entity('funkyfloorlight234')
engine.addEntity(funkyfloorlight234)
funkyfloorlight234.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(38, 71.3419, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyfloorlight234.addComponentOrReplace(transform64)

const funkyfloorlight2345 = new Entity('funkyfloorlight2345')
engine.addEntity(funkyfloorlight2345)
funkyfloorlight2345.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(18, 71.3419, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyfloorlight2345.addComponentOrReplace(transform65)

const funkyfloorlight23456 = new Entity('funkyfloorlight23456')
engine.addEntity(funkyfloorlight23456)
funkyfloorlight23456.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(34, 71.3419, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyfloorlight23456.addComponentOrReplace(transform66)

const tablelamplight = new Entity('tablelamplight')
engine.addEntity(tablelamplight)
tablelamplight.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(32.13079, 72.67412, 40.5091362),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight.addComponentOrReplace(transform67)

const tablelamplight2 = new Entity('tablelamplight2')
engine.addEntity(tablelamplight2)
tablelamplight2.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(33.14961, 72.67412, 43.3328857),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight2.addComponentOrReplace(transform68)

const tablelamplight23 = new Entity('tablelamplight23')
engine.addEntity(tablelamplight23)
tablelamplight23.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(34.60026, 72.67412, 46.8727722),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight23.addComponentOrReplace(transform69)

const tablelamplight234 = new Entity('tablelamplight234')
engine.addEntity(tablelamplight234)
tablelamplight234.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(37.10054, 72.67412, 44.4331245),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight234.addComponentOrReplace(transform70)

const tablelamplight2345 = new Entity('tablelamplight2345')
engine.addEntity(tablelamplight2345)
tablelamplight2345.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(35.6042175, 72.67412, 41.3749237),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight2345.addComponentOrReplace(transform71)

const tablelamplight23456 = new Entity('tablelamplight23456')
engine.addEntity(tablelamplight23456)
tablelamplight23456.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(38.5920525, 72.67412, 41.39891),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight23456.addComponentOrReplace(transform72)

const tablelamplight234567 = new Entity('tablelamplight234567')
engine.addEntity(tablelamplight234567)
tablelamplight234567.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(36.1423569, 72.67412, 37.90638),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablelamplight234567.addComponentOrReplace(transform73)

const rainlight = new Entity('rainlight')
engine.addEntity(rainlight)
rainlight.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(22, 2.374787, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 1, 3)
})
rainlight.addComponentOrReplace(transform74)

const rainlight2 = new Entity('rainlight2')
engine.addEntity(rainlight2)
rainlight2.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(33, 2.374787, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 1, 3)
})
rainlight2.addComponentOrReplace(transform75)

const imagefromurl = new Entity('imagefromurl')
engine.addEntity(imagefromurl)
imagefromurl.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(27.5, 1.5, 50.945980072021484),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.5, 2.25, 1)
})
imagefromurl.addComponentOrReplace(transform76)

const nftpictureframe23456789 = new Entity('nftpictureframe23456789')
engine.addEntity(nftpictureframe23456789)
nftpictureframe23456789.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(38.5, 50, 29.104110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.750043869018555, 8.75, 1.000004768371582)
})
nftpictureframe23456789.addComponentOrReplace(transform77)

const nftpictureframe234567891011121314151617 = new Entity('nftpictureframe234567891011121314151617')
engine.addEntity(nftpictureframe234567891011121314151617)
nftpictureframe234567891011121314151617.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(39, 50, 39.60411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(8.750043869018555, 8.75, 1.000004768371582)
})
nftpictureframe234567891011121314151617.addComponentOrReplace(transform78)

const nftpictureframe23456789101112131415161718192021 = new Entity('nftpictureframe23456789101112131415161718192021')
engine.addEntity(nftpictureframe23456789101112131415161718192021)
nftpictureframe23456789101112131415161718192021.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(39, 50, 54.10411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(8.750051498413086, 8.75, 1.0000057220458984)
})
nftpictureframe23456789101112131415161718192021.addComponentOrReplace(transform79)

const nftpictureframe23456789101112131415161718192021222324 = new Entity('nftpictureframe23456789101112131415161718192021222324')
engine.addEntity(nftpictureframe23456789101112131415161718192021222324)
nftpictureframe23456789101112131415161718192021222324.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(38.5, 50.5, 54.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.750049591064453, 8.75, 1.0000054836273193)
})
nftpictureframe23456789101112131415161718192021222324.addComponentOrReplace(transform80)

const wallplainblack = new Entity('wallplainblack')
engine.addEntity(wallplainblack)
wallplainblack.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(43.88051223754883, 47.5, 21.463462829589844),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(19.55637550354004, 2.3131377696990967, 0.14000000059604645)
})
wallplainblack.addComponentOrReplace(transform81)
const gltfShape47 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape47.withCollisions = true
gltfShape47.isPointerBlocker = true
gltfShape47.visible = true
wallplainblack.addComponentOrReplace(gltfShape47)

const wallplainblack2 = new Entity('wallplainblack2')
engine.addEntity(wallplainblack2)
wallplainblack2.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(11.0911388, 47.5, 21.3572617),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(19.6232224, 2.31313777, 0.139999792)
})
wallplainblack2.addComponentOrReplace(transform82)
const gltfShape48 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape48.withCollisions = true
gltfShape48.isPointerBlocker = true
gltfShape48.visible = true
wallplainblack2.addComponentOrReplace(gltfShape48)

const wallplainblack23 = new Entity('wallplainblack23')
engine.addEntity(wallplainblack23)
wallplainblack23.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(43.84687042236328, 47.5, 21.485647201538086),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallplainblack23.addComponentOrReplace(transform83)
const gltfShape49 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape49.withCollisions = true
gltfShape49.isPointerBlocker = true
gltfShape49.visible = true
wallplainblack23.addComponentOrReplace(gltfShape49)

const wallplainblack234 = new Entity('wallplainblack234')
engine.addEntity(wallplainblack234)
wallplainblack234.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(43.9450569152832, 47.5, 60.536468505859375),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallplainblack234.addComponentOrReplace(transform84)
const gltfShape50 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape50.withCollisions = true
gltfShape50.isPointerBlocker = true
gltfShape50.visible = true
wallplainblack234.addComponentOrReplace(gltfShape50)

const wallplainblack2345 = new Entity('wallplainblack2345')
engine.addEntity(wallplainblack2345)
wallplainblack2345.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(21.5743446, 47.5, 60.53647),
  rotation: new Quaternion(-1.72181109e-15, -3.7252903e-8, 1.77635684e-15, 1),
  scale: new Vector3(5.26489973, 2.31313777, 0.139999717)
})
wallplainblack2345.addComponentOrReplace(transform85)
const gltfShape51 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape51.withCollisions = true
gltfShape51.isPointerBlocker = true
gltfShape51.visible = true
wallplainblack2345.addComponentOrReplace(gltfShape51)

const wallplainblack23456 = new Entity('wallplainblack23456')
engine.addEntity(wallplainblack23456)
wallplainblack23456.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(21.5743446, 47.5, 21.3861179),
  rotation: new Quaternion(-1.72181109e-15, -3.7252903e-8, 1.77635684e-15, 1),
  scale: new Vector3(5.26489973, 2.31313777, 0.139999717)
})
wallplainblack23456.addComponentOrReplace(transform86)
const gltfShape52 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape52.withCollisions = true
gltfShape52.isPointerBlocker = true
gltfShape52.visible = true
wallplainblack23456.addComponentOrReplace(gltfShape52)

const nftpictureframe2345678910111213141516171819202122232425262728293031 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728293031')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728293031)
nftpictureframe2345678910111213141516171819202122232425262728293031.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(11.095813751220703, 49.9808235168457, 25.62269401550293),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(7.00004243850708, 7, 1.0000054836273193)
})
nftpictureframe2345678910111213141516171819202122232425262728293031.addComponentOrReplace(transform87)

const nftpictureframe2345678910111213141516171819202122232425262728293031323334 = new Entity('nftpictureframe2345678910111213141516171819202122232425262728293031323334')
engine.addEntity(nftpictureframe2345678910111213141516171819202122232425262728293031323334)
nftpictureframe2345678910111213141516171819202122232425262728293031323334.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(16.182266235351562, 49.625, 21.397174835205078),
  rotation: new Quaternion(3.6875261721360745e-17, 5.960464477539063e-8, -8.881784197001252e-16, 1),
  scale: new Vector3(10.500060081481934, 10.5, 1.0000048875808716)
})
nftpictureframe2345678910111213141516171819202122232425262728293031323334.addComponentOrReplace(transform88)

const ringwhitelight = new Entity('ringwhitelight')
engine.addEntity(ringwhitelight)
ringwhitelight.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(16.145158767700195, 52.2656135559082, 21.515615463256836),
  rotation: new Quaternion(-0.70710688829422, -1.072801744290172e-15, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(4, 2.000005006790161, 4.000010013580322)
})
ringwhitelight.addComponentOrReplace(transform89)
const gltfShape53 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape53.withCollisions = true
gltfShape53.isPointerBlocker = true
gltfShape53.visible = true
ringwhitelight.addComponentOrReplace(gltfShape53)

const spotlight = new Entity('spotlight')
engine.addEntity(spotlight)
spotlight.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(32.5, 79, 32.88615417480469),
  rotation: new Quaternion(-0.9303861856460571, -0.2024468183517456, -0.16614371538162231, -0.2565019130706787),
  scale: new Vector3(1, 0.38615620136260986, 1.0000025033950806)
})
spotlight.addComponentOrReplace(transform90)
const gltfShape54 = new GLTFShape("3ddda096-a798-432e-ba66-61354bccbcc9/Spotlight.glb")
gltfShape54.withCollisions = true
gltfShape54.isPointerBlocker = true
gltfShape54.visible = true
spotlight.addComponentOrReplace(gltfShape54)

const spotlight2 = new Entity('spotlight2')
engine.addEntity(spotlight2)
spotlight2.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(21.75901, 79, 32.8861542),
  rotation: new Quaternion(0.9569404, 1.5426704e-15, -1.1407618e-7, 0.2902847),
  scale: new Vector3(1, 0.386155874, 1.0000031)
})
spotlight2.addComponentOrReplace(transform91)
const gltfShape55 = new GLTFShape("3ddda096-a798-432e-ba66-61354bccbcc9/Spotlight.glb")
gltfShape55.withCollisions = true
gltfShape55.isPointerBlocker = true
gltfShape55.visible = true
spotlight2.addComponentOrReplace(gltfShape55)

const spotlight23 = new Entity('spotlight23')
engine.addEntity(spotlight23)
spotlight23.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(23.75901, 79, 32.8861542),
  rotation: new Quaternion(0.9194308, 0.0375095233, -0.09055615, 0.380840659),
  scale: new Vector3(0.99999994, 0.386155963, 1.00000286)
})
spotlight23.addComponentOrReplace(transform92)
const gltfShape56 = new GLTFShape("3ddda096-a798-432e-ba66-61354bccbcc9/Spotlight.glb")
gltfShape56.withCollisions = true
gltfShape56.isPointerBlocker = true
gltfShape56.visible = true
spotlight23.addComponentOrReplace(gltfShape56)

const spotlight234 = new Entity('spotlight234')
engine.addEntity(spotlight234)
spotlight234.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(30.5, 79, 32.88615417480469),
  rotation: new Quaternion(0.8147891163825989, -0.09196490049362183, 0.4623388946056366, 0.33749669790267944),
  scale: new Vector3(0.9999997615814209, 0.386156290769577, 1.0000044107437134)
})
spotlight234.addComponentOrReplace(transform93)
const gltfShape57 = new GLTFShape("3ddda096-a798-432e-ba66-61354bccbcc9/Spotlight.glb")
gltfShape57.withCollisions = true
gltfShape57.isPointerBlocker = true
gltfShape57.visible = true
spotlight234.addComponentOrReplace(gltfShape57)

const garlandcurveyellow = new Entity('garlandcurveyellow')
engine.addEntity(garlandcurveyellow)
garlandcurveyellow.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(36.16665, 77, 39.59119),
  rotation: new Quaternion(-0.02348313, 0.5309857, 0.0409384854, -0.8460655),
  scale: new Vector3(1.05418444, 1.00046659, 1.01275539)
})
garlandcurveyellow.addComponentOrReplace(transform94)
const gltfShape58 = new GLTFShape("680af140-41c7-40d9-8ce8-7648196c3caf/Garland_Curve_Yellow.glb")
gltfShape58.withCollisions = true
gltfShape58.isPointerBlocker = true
gltfShape58.visible = true
garlandcurveyellow.addComponentOrReplace(gltfShape58)

const garlandcurvebluepurple = new Entity('garlandcurvebluepurple')
engine.addEntity(garlandcurvebluepurple)
garlandcurvebluepurple.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(35.7083244, 77.23571, 35.6034126),
  rotation: new Quaternion(-0.0591094829, -0.34174186, -0.05910943, 0.9360688),
  scale: new Vector3(0.55652535, 1.00447237, 0.999999344)
})
garlandcurvebluepurple.addComponentOrReplace(transform95)
const gltfShape59 = new GLTFShape("73186899-cf6e-4a4c-a30b-a4c21fc3e86c/Garland_Curve_Blue_Purple.glb")
gltfShape59.withCollisions = true
gltfShape59.isPointerBlocker = true
gltfShape59.visible = true
garlandcurvebluepurple.addComponentOrReplace(gltfShape59)

const garlandcurveyellow2 = new Entity('garlandcurveyellow2')
engine.addEntity(garlandcurveyellow2)
garlandcurveyellow2.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(18.4379272, 75.98535, 37.89862),
  rotation: new Quaternion(0.129094616, -0.87055254, -0.06542643, 0.470310956),
  scale: new Vector3(0.8879632, 0.986828744, 0.952634454)
})
garlandcurveyellow2.addComponentOrReplace(transform96)
const gltfShape60 = new GLTFShape("680af140-41c7-40d9-8ce8-7648196c3caf/Garland_Curve_Yellow.glb")
gltfShape60.withCollisions = true
gltfShape60.isPointerBlocker = true
gltfShape60.visible = true
garlandcurveyellow2.addComponentOrReplace(gltfShape60)

const floorblack = new Entity('floorblack')
engine.addEntity(floorblack)
floorblack.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(43.89175796508789, 66, 60.258914947509766),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.7616422176361084, 1, 9.702486038208008)
})
floorblack.addComponentOrReplace(transform97)
const gltfShape61 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape61.withCollisions = true
gltfShape61.isPointerBlocker = true
gltfShape61.visible = true
floorblack.addComponentOrReplace(gltfShape61)

const floorblack2 = new Entity('floorblack2')
engine.addEntity(floorblack2)
floorblack2.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(21.8731689453125, 66, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.6503443717956543, 1, 2.6750564575195312)
})
floorblack2.addComponentOrReplace(transform98)
const gltfShape62 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape62.withCollisions = true
gltfShape62.isPointerBlocker = true
gltfShape62.visible = true
floorblack2.addComponentOrReplace(gltfShape62)

const floorblack23 = new Entity('floorblack23')
engine.addEntity(floorblack23)
floorblack23.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(21.8731689453125, 66, 45.274383544921875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.6503443717956543, 1, 5.95129919052124)
})
floorblack23.addComponentOrReplace(transform99)
const gltfShape63 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape63.withCollisions = true
gltfShape63.isPointerBlocker = true
gltfShape63.visible = true
floorblack23.addComponentOrReplace(gltfShape63)

const floorblack234 = new Entity('floorblack234')
engine.addEntity(floorblack234)
floorblack234.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(21.861377716064453, 66, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8710203766822815, 1, 2.675056219100952)
})
floorblack234.addComponentOrReplace(transform100)
const gltfShape64 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape64.withCollisions = true
gltfShape64.isPointerBlocker = true
gltfShape64.visible = true
floorblack234.addComponentOrReplace(gltfShape64)

const floorblack2345 = new Entity('floorblack2345')
engine.addEntity(floorblack2345)
floorblack2345.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(14.502442359924316, 66, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8568664193153381, 1, 2.675056219100952)
})
floorblack2345.addComponentOrReplace(transform101)
const gltfShape65 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape65.withCollisions = true
gltfShape65.isPointerBlocker = true
gltfShape65.visible = true
floorblack2345.addComponentOrReplace(gltfShape65)

const ropelight = new Entity('ropelight')
engine.addEntity(ropelight)
ropelight.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(27.5126953, 75.5, 54.7458153),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.87645221, 1, 1)
})
ropelight.addComponentOrReplace(transform102)

const ropelight2 = new Entity('ropelight2')
engine.addEntity(ropelight2)
ropelight2.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(27.5126953, 75.5, 27.354229),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.87645221, 1, 1)
})
ropelight2.addComponentOrReplace(transform103)

const floorglass23 = new Entity('floorglass23')
engine.addEntity(floorglass23)
floorglass23.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(30.5, 71.14559173583984, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1941921710968018, 25.5, 3.3009791374206543)
})
floorglass23.addComponentOrReplace(transform104)
const gltfShape66 = new GLTFShape("f4a4956e-f60a-4108-82c7-41b5ebda6549/GlassFloor.glb")
gltfShape66.withCollisions = true
gltfShape66.isPointerBlocker = true
gltfShape66.visible = true
floorglass23.addComponentOrReplace(gltfShape66)

const garlandcurveyellow23 = new Entity('garlandcurveyellow23')
engine.addEntity(garlandcurveyellow23)
garlandcurveyellow23.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(25.5, 76, 54.5),
  rotation: new Quaternion(0.09754518, 0.009607362, 0.09754515, 0.9903926),
  scale: new Vector3(1, 0.999999762, 0.9999998)
})
garlandcurveyellow23.addComponentOrReplace(transform105)
const gltfShape67 = new GLTFShape("680af140-41c7-40d9-8ce8-7648196c3caf/Garland_Curve_Yellow.glb")
gltfShape67.withCollisions = true
gltfShape67.isPointerBlocker = true
gltfShape67.visible = true
garlandcurveyellow23.addComponentOrReplace(gltfShape67)

const garlandcurvebluepurple2 = new Entity('garlandcurvebluepurple2')
engine.addEntity(garlandcurvebluepurple2)
garlandcurvebluepurple2.setParent(_scene)
const transform106 = new Transform({
  position: new Vector3(27.5, 76, 54.5),
  rotation: new Quaternion(0.0980171561, 0, -1.16845529e-8, 0.9951847),
  scale: new Vector3(1, 0.9999999, 0.9999999)
})
garlandcurvebluepurple2.addComponentOrReplace(transform106)
const gltfShape68 = new GLTFShape("73186899-cf6e-4a4c-a30b-a4c21fc3e86c/Garland_Curve_Blue_Purple.glb")
gltfShape68.withCollisions = true
gltfShape68.isPointerBlocker = true
gltfShape68.visible = true
garlandcurvebluepurple2.addComponentOrReplace(gltfShape68)

const bush23 = new Entity('bush23')
engine.addEntity(bush23)
bush23.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(39.5, 71.5, 47),
  rotation: new Quaternion(6.46967069e-15, -0.8314698, 9.911892e-8, 0.5555701),
  scale: new Vector3(0.463511616, 0.8669173, 0.647397459)
})
bush23.addComponentOrReplace(transform107)
const gltfShape69 = new GLTFShape("b34ad4ca-db96-44fe-8fd6-86b4aa9f2218/HWN20_Bush.glb")
gltfShape69.withCollisions = true
gltfShape69.isPointerBlocker = true
gltfShape69.visible = true
bush23.addComponentOrReplace(gltfShape69)

const bush234 = new Entity('bush234')
engine.addEntity(bush234)
bush234.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(15.560976, 71.5, 53.3896027),
  rotation: new Quaternion(-1.47312868e-15, 0.881921351, -1.05133211e-7, 0.471396744),
  scale: new Vector3(0.5000024, 0.8090848, 1.50000751)
})
bush234.addComponentOrReplace(transform108)
const gltfShape70 = new GLTFShape("b34ad4ca-db96-44fe-8fd6-86b4aa9f2218/HWN20_Bush.glb")
gltfShape70.withCollisions = true
gltfShape70.isPointerBlocker = true
gltfShape70.visible = true
bush234.addComponentOrReplace(gltfShape70)

const wallplainblack234567 = new Entity('wallplainblack234567')
engine.addEntity(wallplainblack234567)
wallplainblack234567.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(39.00187, 47.5, 51.4663162),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(2.76471162, 2.31313777, 1.63961744)
})
wallplainblack234567.addComponentOrReplace(transform109)
const gltfShape71 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape71.withCollisions = true
gltfShape71.isPointerBlocker = true
gltfShape71.visible = true
wallplainblack234567.addComponentOrReplace(gltfShape71)

const wallplainblack2345678 = new Entity('wallplainblack2345678')
engine.addEntity(wallplainblack2345678)
wallplainblack2345678.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(39.00187, 47.5, 36.9663162),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(2.76471162, 2.31313777, 1.6396203)
})
wallplainblack2345678.addComponentOrReplace(transform110)
const gltfShape72 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape72.withCollisions = true
gltfShape72.isPointerBlocker = true
gltfShape72.visible = true
wallplainblack2345678.addComponentOrReplace(gltfShape72)

const wallplainblack23456789 = new Entity('wallplainblack23456789')
engine.addEntity(wallplainblack23456789)
wallplainblack23456789.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(39.00187, 47.5, 26.4663162),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(2.76471162, 2.31313777, 1.63962173)
})
wallplainblack23456789.addComponentOrReplace(transform111)
const gltfShape73 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape73.withCollisions = true
gltfShape73.isPointerBlocker = true
gltfShape73.visible = true
wallplainblack23456789.addComponentOrReplace(gltfShape73)

const wallplainblack2345678910 = new Entity('wallplainblack2345678910')
engine.addEntity(wallplainblack2345678910)
wallplainblack2345678910.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(33, 71.5, 32.5),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(0.175492972, 1.83601069, 1.17390049)
})
wallplainblack2345678910.addComponentOrReplace(transform112)
const gltfShape74 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape74.withCollisions = true
gltfShape74.isPointerBlocker = true
gltfShape74.visible = true
wallplainblack2345678910.addComponentOrReplace(gltfShape74)

const wallplainblack234567891011 = new Entity('wallplainblack234567891011')
engine.addEntity(wallplainblack234567891011)
wallplainblack234567891011.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(21.9422226, 71.5, 32.5),
  rotation: new Quaternion(-1.53941536e-15, 0.7071068, -8.42936956e-8, 0.7071068),
  scale: new Vector3(0.175492972, 1.83601069, 1.17390049)
})
wallplainblack234567891011.addComponentOrReplace(transform113)
const gltfShape75 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape75.withCollisions = true
gltfShape75.isPointerBlocker = true
gltfShape75.visible = true
wallplainblack234567891011.addComponentOrReplace(gltfShape75)

const wallplainblack23456789101112 = new Entity('wallplainblack23456789101112')
engine.addEntity(wallplainblack23456789101112)
wallplainblack23456789101112.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(21.7249146, 78.7735443, 32.5787277),
  rotation: new Quaternion(0.5, 0.5, -0.50000006, 0.49999994),
  scale: new Vector3(0.09137493, 2.7540164, 0.7458175)
})
wallplainblack23456789101112.addComponentOrReplace(transform114)
const gltfShape76 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape76.withCollisions = true
gltfShape76.isPointerBlocker = true
gltfShape76.visible = true
wallplainblack23456789101112.addComponentOrReplace(gltfShape76)

const sofamodern = new Entity('sofamodern')
engine.addEntity(sofamodern)
sofamodern.setParent(_scene)
const transform115 = new Transform({
  position: new Vector3(20, 37.9603233, 25.5),
  rotation: new Quaternion(0, -0.2902847, 3.460463e-8, 0.956940353),
  scale: new Vector3(1, 1, 1)
})
sofamodern.addComponentOrReplace(transform115)
const gltfShape77 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape77.withCollisions = true
gltfShape77.isPointerBlocker = true
gltfShape77.visible = true
sofamodern.addComponentOrReplace(gltfShape77)

const sofamodern2 = new Entity('sofamodern2')
engine.addEntity(sofamodern2)
sofamodern2.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(15.5, 37.9603233, 24),
  rotation: new Quaternion(1.76008449e-15, -0.195090353, 2.32565824e-8, -0.98078537),
  scale: new Vector3(1, 1, 1)
})
sofamodern2.addComponentOrReplace(transform116)
const gltfShape78 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape78.withCollisions = true
gltfShape78.isPointerBlocker = true
gltfShape78.visible = true
sofamodern2.addComponentOrReplace(gltfShape78)

const sofamodern23 = new Entity('sofamodern23')
engine.addEntity(sofamodern23)
sofamodern23.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(12.5, 37.9603233, 28),
  rotation: new Quaternion(-3.2428667e-15, 0.8314696, -9.911889e-8, 0.555570245),
  scale: new Vector3(1.00000012, 1, 1.00000012)
})
sofamodern23.addComponentOrReplace(transform117)
const gltfShape79 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape79.withCollisions = true
gltfShape79.isPointerBlocker = true
gltfShape79.visible = true
sofamodern23.addComponentOrReplace(gltfShape79)

const sofamodern234 = new Entity('sofamodern234')
engine.addEntity(sofamodern234)
sofamodern234.setParent(_scene)
const transform118 = new Transform({
  position: new Vector3(43, 37.9603233, 23.5),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234.addComponentOrReplace(transform118)
const gltfShape80 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape80.withCollisions = true
gltfShape80.isPointerBlocker = true
gltfShape80.visible = true
sofamodern234.addComponentOrReplace(gltfShape80)

const sofamodern2345 = new Entity('sofamodern2345')
engine.addEntity(sofamodern2345)
sofamodern2345.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(41, 37.9603233, 23.5),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345.addComponentOrReplace(transform119)
const gltfShape81 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape81.withCollisions = true
gltfShape81.isPointerBlocker = true
gltfShape81.visible = true
sofamodern2345.addComponentOrReplace(gltfShape81)

const coffeetable2 = new Entity('coffeetable2')
engine.addEntity(coffeetable2)
coffeetable2.setParent(_scene)
const transform120 = new Transform({
  position: new Vector3(41.5101357, 37.98885, 25.4999981),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.55543828, 1.5, 1.49999976)
})
coffeetable2.addComponentOrReplace(transform120)
const gltfShape82 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape82.withCollisions = true
gltfShape82.isPointerBlocker = true
gltfShape82.visible = true
coffeetable2.addComponentOrReplace(gltfShape82)

const sofamodern23456 = new Entity('sofamodern23456')
engine.addEntity(sofamodern23456)
sofamodern23456.setParent(_scene)
const transform121 = new Transform({
  position: new Vector3(42, 37.9603233, 27.5),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456.addComponentOrReplace(transform121)
const gltfShape83 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape83.withCollisions = true
gltfShape83.isPointerBlocker = true
gltfShape83.visible = true
sofamodern23456.addComponentOrReplace(gltfShape83)

const sofamodern234567 = new Entity('sofamodern234567')
engine.addEntity(sofamodern234567)
sofamodern234567.setParent(_scene)
const transform122 = new Transform({
  position: new Vector3(40, 37.9603233, 27.5),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234567.addComponentOrReplace(transform122)
const gltfShape84 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape84.withCollisions = true
gltfShape84.isPointerBlocker = true
gltfShape84.visible = true
sofamodern234567.addComponentOrReplace(gltfShape84)

const sofamodern2345678 = new Entity('sofamodern2345678')
engine.addEntity(sofamodern2345678)
sofamodern2345678.setParent(_scene)
const transform123 = new Transform({
  position: new Vector3(41, 37.9603233, 32),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345678.addComponentOrReplace(transform123)
const gltfShape85 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape85.withCollisions = true
gltfShape85.isPointerBlocker = true
gltfShape85.visible = true
sofamodern2345678.addComponentOrReplace(gltfShape85)

const sofamodern23456789 = new Entity('sofamodern23456789')
engine.addEntity(sofamodern23456789)
sofamodern23456789.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(43, 37.9603233, 32),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456789.addComponentOrReplace(transform124)
const gltfShape86 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape86.withCollisions = true
gltfShape86.isPointerBlocker = true
gltfShape86.visible = true
sofamodern23456789.addComponentOrReplace(gltfShape86)

const coffeetable23 = new Entity('coffeetable23')
engine.addEntity(coffeetable23)
coffeetable23.setParent(_scene)
const transform125 = new Transform({
  position: new Vector3(41.5101357, 37.98885, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.55543828, 1.5, 1.49999976)
})
coffeetable23.addComponentOrReplace(transform125)
const gltfShape87 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape87.withCollisions = true
gltfShape87.isPointerBlocker = true
gltfShape87.visible = true
coffeetable23.addComponentOrReplace(gltfShape87)

const sofamodern2345678910 = new Entity('sofamodern2345678910')
engine.addEntity(sofamodern2345678910)
sofamodern2345678910.setParent(_scene)
const transform126 = new Transform({
  position: new Vector3(40, 37.9603233, 36),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345678910.addComponentOrReplace(transform126)
const gltfShape88 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape88.withCollisions = true
gltfShape88.isPointerBlocker = true
gltfShape88.visible = true
sofamodern2345678910.addComponentOrReplace(gltfShape88)

const sofamodern234567891011 = new Entity('sofamodern234567891011')
engine.addEntity(sofamodern234567891011)
sofamodern234567891011.setParent(_scene)
const transform127 = new Transform({
  position: new Vector3(42, 37.9603233, 36),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234567891011.addComponentOrReplace(transform127)
const gltfShape89 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape89.withCollisions = true
gltfShape89.isPointerBlocker = true
gltfShape89.visible = true
sofamodern234567891011.addComponentOrReplace(gltfShape89)

const sofamodern23456789101112 = new Entity('sofamodern23456789101112')
engine.addEntity(sofamodern23456789101112)
sofamodern23456789101112.setParent(_scene)
const transform128 = new Transform({
  position: new Vector3(36.573925, 37.9603233, 32),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456789101112.addComponentOrReplace(transform128)
const gltfShape90 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape90.withCollisions = true
gltfShape90.isPointerBlocker = true
gltfShape90.visible = true
sofamodern23456789101112.addComponentOrReplace(gltfShape90)

const sofamodern2345678910111213 = new Entity('sofamodern2345678910111213')
engine.addEntity(sofamodern2345678910111213)
sofamodern2345678910111213.setParent(_scene)
const transform129 = new Transform({
  position: new Vector3(34.573925, 37.9603233, 32),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345678910111213.addComponentOrReplace(transform129)
const gltfShape91 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape91.withCollisions = true
gltfShape91.isPointerBlocker = true
gltfShape91.visible = true
sofamodern2345678910111213.addComponentOrReplace(gltfShape91)

const coffeetable234 = new Entity('coffeetable234')
engine.addEntity(coffeetable234)
coffeetable234.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(35.08406, 37.98885, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.55543828, 1.5, 1.49999976)
})
coffeetable234.addComponentOrReplace(transform130)
const gltfShape92 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape92.withCollisions = true
gltfShape92.isPointerBlocker = true
gltfShape92.visible = true
coffeetable234.addComponentOrReplace(gltfShape92)

const sofamodern234567891011121314 = new Entity('sofamodern234567891011121314')
engine.addEntity(sofamodern234567891011121314)
sofamodern234567891011121314.setParent(_scene)
const transform131 = new Transform({
  position: new Vector3(35.573925, 37.9603233, 36),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234567891011121314.addComponentOrReplace(transform131)
const gltfShape93 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape93.withCollisions = true
gltfShape93.isPointerBlocker = true
gltfShape93.visible = true
sofamodern234567891011121314.addComponentOrReplace(gltfShape93)

const sofamodern23456789101112131415 = new Entity('sofamodern23456789101112131415')
engine.addEntity(sofamodern23456789101112131415)
sofamodern23456789101112131415.setParent(_scene)
const transform132 = new Transform({
  position: new Vector3(33.573925, 37.9603233, 36),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456789101112131415.addComponentOrReplace(transform132)
const gltfShape94 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape94.withCollisions = true
gltfShape94.isPointerBlocker = true
gltfShape94.visible = true
sofamodern23456789101112131415.addComponentOrReplace(gltfShape94)

const sofamodern2345678910111213141516 = new Entity('sofamodern2345678910111213141516')
engine.addEntity(sofamodern2345678910111213141516)
sofamodern2345678910111213141516.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(35.573925, 37.9603233, 27.5),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345678910111213141516.addComponentOrReplace(transform133)
const gltfShape95 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape95.withCollisions = true
gltfShape95.isPointerBlocker = true
gltfShape95.visible = true
sofamodern2345678910111213141516.addComponentOrReplace(gltfShape95)

const sofamodern234567891011121314151617 = new Entity('sofamodern234567891011121314151617')
engine.addEntity(sofamodern234567891011121314151617)
sofamodern234567891011121314151617.setParent(_scene)
const transform134 = new Transform({
  position: new Vector3(33.573925, 37.9603233, 27.5),
  rotation: new Quaternion(-2.24454541e-15, -1, 1.19209282e-7, 5.96046448e-8),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern234567891011121314151617.addComponentOrReplace(transform134)
const gltfShape96 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape96.withCollisions = true
gltfShape96.isPointerBlocker = true
gltfShape96.visible = true
sofamodern234567891011121314151617.addComponentOrReplace(gltfShape96)

const coffeetable2345 = new Entity('coffeetable2345')
engine.addEntity(coffeetable2345)
coffeetable2345.setParent(_scene)
const transform135 = new Transform({
  position: new Vector3(35.08406, 37.98885, 25.4999981),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.55543828, 1.5, 1.49999976)
})
coffeetable2345.addComponentOrReplace(transform135)
const gltfShape97 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape97.withCollisions = true
gltfShape97.isPointerBlocker = true
gltfShape97.visible = true
coffeetable2345.addComponentOrReplace(gltfShape97)

const sofamodern23456789101112131415161718 = new Entity('sofamodern23456789101112131415161718')
engine.addEntity(sofamodern23456789101112131415161718)
sofamodern23456789101112131415161718.setParent(_scene)
const transform136 = new Transform({
  position: new Vector3(36.573925, 37.9603233, 23.5),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern23456789101112131415161718.addComponentOrReplace(transform136)
const gltfShape98 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape98.withCollisions = true
gltfShape98.isPointerBlocker = true
gltfShape98.visible = true
sofamodern23456789101112131415161718.addComponentOrReplace(gltfShape98)

const sofamodern2345678910111213141516171819 = new Entity('sofamodern2345678910111213141516171819')
engine.addEntity(sofamodern2345678910111213141516171819)
sofamodern2345678910111213141516171819.setParent(_scene)
const transform137 = new Transform({
  position: new Vector3(34.573925, 37.9603233, 23.5),
  rotation: new Quaternion(1.30906253e-15, 5.96046448e-8, -1.27673792e-16, 1),
  scale: new Vector3(0.315558642, 1, 0.6205851)
})
sofamodern2345678910111213141516171819.addComponentOrReplace(transform137)
const gltfShape99 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape99.withCollisions = true
gltfShape99.isPointerBlocker = true
gltfShape99.visible = true
sofamodern2345678910111213141516171819.addComponentOrReplace(gltfShape99)

const roofglassedges234 = new Entity('roofglassedges234')
engine.addEntity(roofglassedges234)
roofglassedges234.setParent(_scene)
const transform138 = new Transform({
  position: new Vector3(33.02562, 37.7992058, 48),
  rotation: new Quaternion(0.49999994, -0.5000001, -0.5, 0.50000006),
  scale: new Vector3(2.41485214, 1.00000465, 2.18688059)
})
roofglassedges234.addComponentOrReplace(transform138)
const gltfShape100 = new GLTFShape("804c94f9-20d8-4fd3-aca0-d096cad08ff7/GlassRoof_2Edges.glb")
gltfShape100.withCollisions = true
gltfShape100.isPointerBlocker = true
gltfShape100.visible = true
roofglassedges234.addComponentOrReplace(gltfShape100)

const rainlight23 = new Entity('rainlight23')
engine.addEntity(rainlight23)
rainlight23.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(37.5, 37.42906, 55.7741966),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.705493, 2.5, 8.221693)
})
rainlight23.addComponentOrReplace(transform139)

const blockfloorlight2 = new Entity('blockfloorlight2')
engine.addEntity(blockfloorlight2)
blockfloorlight2.setParent(_scene)
const transform140 = new Transform({
  position: new Vector3(35.5, 45.4587173, 23.5),
  rotation: new Quaternion(-0.7071067, 8.802274e-15, 8.429368e-8, -0.7071068),
  scale: new Vector3(2.25, 11.2499723, 1.99999809)
})
blockfloorlight2.addComponentOrReplace(transform140)

const blockfloorlight23 = new Entity('blockfloorlight23')
engine.addEntity(blockfloorlight23)
blockfloorlight23.setParent(_scene)
const transform141 = new Transform({
  position: new Vector3(42, 45.4587173, 23.5),
  rotation: new Quaternion(-0.7071067, 8.802274e-15, 8.429368e-8, -0.7071068),
  scale: new Vector3(2.25, 11.2499685, 1.99999785)
})
blockfloorlight23.addComponentOrReplace(transform141)

const sofamodern234567891011121314151617181920 = new Entity('sofamodern234567891011121314151617181920')
engine.addEntity(sofamodern234567891011121314151617181920)
sofamodern234567891011121314151617181920.setParent(_scene)
const transform142 = new Transform({
  position: new Vector3(34.5, 37.960323333740234, 55),
  rotation: new Quaternion(2.6452013085628227e-15, 0.1950903981924057, -2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(0.31555864214897156, 1, 0.6205852031707764)
})
sofamodern234567891011121314151617181920.addComponentOrReplace(transform142)
const gltfShape101 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape101.withCollisions = true
gltfShape101.isPointerBlocker = true
gltfShape101.visible = true
sofamodern234567891011121314151617181920.addComponentOrReplace(gltfShape101)

const sofamodern23456789101112131415161718192021 = new Entity('sofamodern23456789101112131415161718192021')
engine.addEntity(sofamodern23456789101112131415161718192021)
sofamodern23456789101112131415161718192021.setParent(_scene)
const transform143 = new Transform({
  position: new Vector3(36, 37.960323333740234, 54),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofamodern23456789101112131415161718192021.addComponentOrReplace(transform143)
const gltfShape102 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape102.withCollisions = true
gltfShape102.isPointerBlocker = true
gltfShape102.visible = true
sofamodern23456789101112131415161718192021.addComponentOrReplace(gltfShape102)

const sofamodern2345678910111213141516171819202122 = new Entity('sofamodern2345678910111213141516171819202122')
engine.addEntity(sofamodern2345678910111213141516171819202122)
sofamodern2345678910111213141516171819202122.setParent(_scene)
const transform144 = new Transform({
  position: new Vector3(34, 37.960323333740234, 58),
  rotation: new Quaternion(-2.1478959832520877e-15, -0.9569403529167175, 1.1407617250824842e-7, -0.2902846336364746),
  scale: new Vector3(0.31555867195129395, 1, 0.6205850839614868)
})
sofamodern2345678910111213141516171819202122.addComponentOrReplace(transform144)
const gltfShape103 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape103.withCollisions = true
gltfShape103.isPointerBlocker = true
gltfShape103.visible = true
sofamodern2345678910111213141516171819202122.addComponentOrReplace(gltfShape103)

const sofamodern234567891011121314151617181920212223 = new Entity('sofamodern234567891011121314151617181920212223')
engine.addEntity(sofamodern234567891011121314151617181920212223)
sofamodern234567891011121314151617181920212223.setParent(_scene)
const transform145 = new Transform({
  position: new Vector3(35, 37.960323333740234, 59.5),
  rotation: new Quaternion(-3.121915686442279e-15, -0.9951847195625305, 1.1863525628541538e-7, -0.09801708161830902),
  scale: new Vector3(0.3155585825443268, 1, 0.6205849647521973)
})
sofamodern234567891011121314151617181920212223.addComponentOrReplace(transform145)
const gltfShape104 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape104.withCollisions = true
gltfShape104.isPointerBlocker = true
gltfShape104.visible = true
sofamodern234567891011121314151617181920212223.addComponentOrReplace(gltfShape104)

const sofamodern23456789101112131415161718192021222324 = new Entity('sofamodern23456789101112131415161718192021222324')
engine.addEntity(sofamodern23456789101112131415161718192021222324)
sofamodern23456789101112131415161718192021222324.setParent(_scene)
const transform146 = new Transform({
  position: new Vector3(38.5, 37.960323333740234, 54.5),
  rotation: new Quaternion(1.3090625266854458e-15, 5.960464477539063e-8, -1.2767379230034292e-16, 1),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofamodern23456789101112131415161718192021222324.addComponentOrReplace(transform146)
const gltfShape105 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape105.withCollisions = true
gltfShape105.isPointerBlocker = true
gltfShape105.visible = true
sofamodern23456789101112131415161718192021222324.addComponentOrReplace(gltfShape105)

const sofamodern2345678910111213141516171819202122232425 = new Entity('sofamodern2345678910111213141516171819202122232425')
engine.addEntity(sofamodern2345678910111213141516171819202122232425)
sofamodern2345678910111213141516171819202122232425.setParent(_scene)
const transform147 = new Transform({
  position: new Vector3(37.5, 37.960323333740234, 59.5),
  rotation: new Quaternion(-1.3455588470420287e-15, -0.9951847195625305, 1.1863525628541538e-7, 0.09801720082759857),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofamodern2345678910111213141516171819202122232425.addComponentOrReplace(transform147)
const gltfShape106 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape106.withCollisions = true
gltfShape106.isPointerBlocker = true
gltfShape106.visible = true
sofamodern2345678910111213141516171819202122232425.addComponentOrReplace(gltfShape106)

const sofamodern234567891011121314151617181920212223242526 = new Entity('sofamodern234567891011121314151617181920212223242526')
engine.addEntity(sofamodern234567891011121314151617181920212223242526)
sofamodern234567891011121314151617181920212223242526.setParent(_scene)
const transform148 = new Transform({
  position: new Vector3(40, 37.960323333740234, 59.5),
  rotation: new Quaternion(-2.244545407149119e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.31555864214897156, 1, 0.6205850839614868)
})
sofamodern234567891011121314151617181920212223242526.addComponentOrReplace(transform148)
const gltfShape107 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape107.withCollisions = true
gltfShape107.isPointerBlocker = true
gltfShape107.visible = true
sofamodern234567891011121314151617181920212223242526.addComponentOrReplace(gltfShape107)

const sofamodern23456789101112131415161718192021222324252627 = new Entity('sofamodern23456789101112131415161718192021222324252627')
engine.addEntity(sofamodern23456789101112131415161718192021222324252627)
sofamodern23456789101112131415161718192021222324252627.setParent(_scene)
const transform149 = new Transform({
  position: new Vector3(40.5, 37.960323333740234, 54.5),
  rotation: new Quaternion(6.18819666072212e-16, -0.09801708161830902, 1.1684551992630077e-8, 0.9951847195625305),
  scale: new Vector3(0.31555864214897156, 1, 0.6205853819847107)
})
sofamodern23456789101112131415161718192021222324252627.addComponentOrReplace(transform149)
const gltfShape108 = new GLTFShape("3fde7be8-91a4-44bc-bca2-6f4e93db40e2/ModernSofa.glb")
gltfShape108.withCollisions = true
gltfShape108.isPointerBlocker = true
gltfShape108.visible = true
sofamodern23456789101112131415161718192021222324252627.addComponentOrReplace(gltfShape108)

const concreteroundedtable2345678 = new Entity('concreteroundedtable2345678')
engine.addEntity(concreteroundedtable2345678)
concreteroundedtable2345678.setParent(_scene)
const transform150 = new Transform({
  position: new Vector3(38, 37.91381, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 1, 1.5)
})
concreteroundedtable2345678.addComponentOrReplace(transform150)
const gltfShape109 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape109.withCollisions = true
gltfShape109.isPointerBlocker = true
gltfShape109.visible = true
concreteroundedtable2345678.addComponentOrReplace(gltfShape109)

const rainlight234 = new Entity('rainlight234')
engine.addEntity(rainlight234)
rainlight234.setParent(_scene)
const transform151 = new Transform({
  position: new Vector3(26.265213012695312, 72.00099182128906, 40.55585479736328),
  rotation: new Quaternion(0, 0, 1, 2.9802322387695312e-8),
  scale: new Vector3(5.528193473815918, 0.08105109632015228, 13.215360641479492)
})
rainlight234.addComponentOrReplace(transform151)

const wallplainblack2345678910111213 = new Entity('wallplainblack2345678910111213')
engine.addEntity(wallplainblack2345678910111213)
wallplainblack2345678910111213.setParent(_scene)
const transform152 = new Transform({
  position: new Vector3(29.5, 0.11011028289794922, 51),
  rotation: new Quaternion(-0.7053897976875305, -2.6405588826605708e-8, 1.1036681257792225e-7, 0.7088196873664856),
  scale: new Vector3(2.094278573989868, 5.108496189117432, 0.14003726840019226)
})
wallplainblack2345678910111213.addComponentOrReplace(transform152)
const gltfShape110 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape110.withCollisions = true
gltfShape110.isPointerBlocker = true
gltfShape110.visible = true
wallplainblack2345678910111213.addComponentOrReplace(gltfShape110)

const ropelight23 = new Entity('ropelight23')
engine.addEntity(ropelight23)
ropelight23.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(27.3544464, 78.6150742, 32.74239),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9412798, 1, 1)
})
ropelight23.addComponentOrReplace(transform153)

const ringwhitelight2 = new Entity('ringwhitelight2')
engine.addEntity(ringwhitelight2)
ringwhitelight2.setParent(_scene)
const transform154 = new Transform({
  position: new Vector3(16.536377, 47.4975662, 47.63677),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.68569136, 2, 1.706808)
})
ringwhitelight2.addComponentOrReplace(transform154)
const gltfShape111 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape111.withCollisions = true
gltfShape111.isPointerBlocker = true
gltfShape111.visible = true
ringwhitelight2.addComponentOrReplace(gltfShape111)

const ringwhitelight23 = new Entity('ringwhitelight23')
engine.addEntity(ringwhitelight23)
ringwhitelight23.setParent(_scene)
const transform155 = new Transform({
  position: new Vector3(16.536377, 37.8493729, 47.63677),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.68569136, 2, 1.706808)
})
ringwhitelight23.addComponentOrReplace(transform155)
const gltfShape112 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape112.withCollisions = true
gltfShape112.isPointerBlocker = true
gltfShape112.visible = true
ringwhitelight23.addComponentOrReplace(gltfShape112)

const ringwhitelight234 = new Entity('ringwhitelight234')
engine.addEntity(ringwhitelight234)
ringwhitelight234.setParent(_scene)
const transform156 = new Transform({
  position: new Vector3(16.536377, 56.7777176, 47.63677),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.68569136, 2, 1.706808)
})
ringwhitelight234.addComponentOrReplace(transform156)
const gltfShape113 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape113.withCollisions = true
gltfShape113.isPointerBlocker = true
gltfShape113.visible = true
ringwhitelight234.addComponentOrReplace(gltfShape113)

const ringwhitelight2345 = new Entity('ringwhitelight2345')
engine.addEntity(ringwhitelight2345)
ringwhitelight2345.setParent(_scene)
const transform157 = new Transform({
  position: new Vector3(16.536376953125, 71.48666381835938, 47.63676834106445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6856913566589355, 2, 1.7068079710006714)
})
ringwhitelight2345.addComponentOrReplace(transform157)
const gltfShape114 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape114.withCollisions = true
gltfShape114.isPointerBlocker = true
gltfShape114.visible = true
ringwhitelight2345.addComponentOrReplace(gltfShape114)

const speakers234 = new Entity('speakers234')
engine.addEntity(speakers234)
speakers234.setParent(_scene)
const transform158 = new Transform({
  position: new Vector3(27, 71.5, 32),
  rotation: new Quaternion(8.624944325635962e-15, -3.1763735522036263e-22, -3.725290298461914e-8, 1),
  scale: new Vector3(2.0000033378601074, 2.0000033378601074, 1.000000238418579)
})
speakers234.addComponentOrReplace(transform158)

const obitaSuperHyperTrimmed = new Entity('obitaSuperHyperTrimmed')
engine.addEntity(obitaSuperHyperTrimmed)
obitaSuperHyperTrimmed.setParent(_scene)
const transform159 = new Transform({
  position: new Vector3(27.41318702697754, 0, 41.042301177978516),
  rotation: new Quaternion(-1.5684796016718762e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1, 0.9483510255813599, 1)
})
obitaSuperHyperTrimmed.addComponentOrReplace(transform159)
const gltfShape115 = new GLTFShape("ac15db56-3549-4b05-a37c-50e61fc61026/obita_super_hyper_trimmed.glb")
gltfShape115.withCollisions = true
gltfShape115.isPointerBlocker = true
gltfShape115.visible = true
obitaSuperHyperTrimmed.addComponentOrReplace(gltfShape115)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform160 = new Transform({
  position: new Vector3(38.5, 50, 39.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.75004768371582, 8.75, 1.0000052452087402)
})
nftPictureFrame.addComponentOrReplace(transform160)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform161 = new Transform({
  position: new Vector3(39, 50, 29.104110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(8.750049591064453, 8.75, 1.0000054836273193)
})
nftPictureFrame2.addComponentOrReplace(transform161)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform162 = new Transform({
  position: new Vector3(11.095813751220703, 49.9808235168457, 30.62269401550293),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(7.000044345855713, 7, 1.0000057220458984)
})
nftPictureFrame3.addComponentOrReplace(transform162)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform163 = new Transform({
  position: new Vector3(11.095813751220703, 49.9808235168457, 35.62269592285156),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(7.000046253204346, 7, 1.0000059604644775)
})
nftPictureFrame4.addComponentOrReplace(transform163)

const speakers3 = new Entity('speakers3')
engine.addEntity(speakers3)
speakers3.setParent(_scene)
const transform164 = new Transform({
  position: new Vector3(34, 71.5, 32),
  rotation: new Quaternion(-8.769785265550552e-15, 0.2902847230434418, -3.4604624943312956e-8, -0.9569404125213623),
  scale: new Vector3(2.000000476837158, 0.3420553207397461, 1.000000238418579)
})
speakers3.addComponentOrReplace(transform164)

const wallPlainBlack = new Entity('wallPlainBlack')
engine.addEntity(wallPlainBlack)
wallPlainBlack.setParent(_scene)
wallPlainBlack.addComponentOrReplace(gltfShape51)
const transform165 = new Transform({
  position: new Vector3(21.574344635009766, 56.92127990722656, 59.89120864868164),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallPlainBlack.addComponentOrReplace(transform165)

const wallPlainBlack2 = new Entity('wallPlainBlack2')
engine.addEntity(wallPlainBlack2)
wallPlainBlack2.setParent(_scene)
wallPlainBlack2.addComponentOrReplace(gltfShape48)
const transform166 = new Transform({
  position: new Vector3(11.314424514770508, 56.92127990722656, 21.357261657714844),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(19.623233795166016, 2.3131377696990967, 0.1399998813867569)
})
wallPlainBlack2.addComponentOrReplace(transform166)

const wallPlainBlack3 = new Entity('wallPlainBlack3')
engine.addEntity(wallPlainBlack3)
wallPlainBlack3.setParent(_scene)
wallPlainBlack3.addComponentOrReplace(gltfShape52)
const transform167 = new Transform({
  position: new Vector3(21.574344635009766, 56.92127990722656, 21.550071716308594),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallPlainBlack3.addComponentOrReplace(transform167)

const wallPlainBlack4 = new Entity('wallPlainBlack4')
engine.addEntity(wallPlainBlack4)
wallPlainBlack4.setParent(_scene)
wallPlainBlack4.addComponentOrReplace(gltfShape50)
const transform168 = new Transform({
  position: new Vector3(43.97306442260742, 56.92127990722656, 59.8050422668457),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallPlainBlack4.addComponentOrReplace(transform168)

const wallPlainBlack5 = new Entity('wallPlainBlack5')
engine.addEntity(wallPlainBlack5)
wallPlainBlack5.setParent(_scene)
wallPlainBlack5.addComponentOrReplace(gltfShape47)
const transform169 = new Transform({
  position: new Vector3(43.81536102294922, 56.92127990722656, 21.357261657714844),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(19.62322235107422, 2.3131377696990967, 0.13999979197978973)
})
wallPlainBlack5.addComponentOrReplace(transform169)

const wallPlainBlack6 = new Entity('wallPlainBlack6')
engine.addEntity(wallPlainBlack6)
wallPlainBlack6.setParent(_scene)
wallPlainBlack6.addComponentOrReplace(gltfShape49)
const transform170 = new Transform({
  position: new Vector3(43.97306442260742, 56.92127990722656, 21.915706634521484),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallPlainBlack6.addComponentOrReplace(transform170)

const speakers4 = new Entity('speakers4')
engine.addEntity(speakers4)
speakers4.setParent(_scene)
const transform171 = new Transform({
  position: new Vector3(25.195098876953125, 71.5, 32),
  rotation: new Quaternion(-7.267690005363647e-9, 0.19509033858776093, 1.328052512405975e-8, -0.9807853102684021),
  scale: new Vector3(2.0000033378601074, 2.0000033378601074, 1.000000238418579)
})
speakers4.addComponentOrReplace(transform171)

const speakers5 = new Entity('speakers5')
engine.addEntity(speakers5)
speakers5.setParent(_scene)
const transform172 = new Transform({
  position: new Vector3(31.5, 71.5, 31.5),
  rotation: new Quaternion(-7.267673129973673e-9, 0.19509033858776093, -5.979367756481224e-8, 0.9807853102684021),
  scale: new Vector3(2.0000033378601074, 2.0000033378601074, 1.000000238418579)
})
speakers5.addComponentOrReplace(transform172)

const floorBlack = new Entity('floorBlack')
engine.addEntity(floorBlack)
floorBlack.setParent(_scene)
floorBlack.addComponentOrReplace(gltfShape65)
const transform173 = new Transform({
  position: new Vector3(14.454675674438477, 66, 50),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071067690849304),
  scale: new Vector3(1.420506477355957, 0.9999999403953552, 1.337528109550476)
})
floorBlack.addComponentOrReplace(transform173)

const floorBlack2 = new Entity('floorBlack2')
engine.addEntity(floorBlack2)
floorBlack2.setParent(_scene)
floorBlack2.addComponentOrReplace(gltfShape65)
const transform174 = new Transform({
  position: new Vector3(18.35266876220703, 66, 50),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071067690849304),
  scale: new Vector3(1.420506477355957, 0.9999999403953552, 1.337528109550476)
})
floorBlack2.addComponentOrReplace(transform174)

const floorBlack3 = new Entity('floorBlack3')
engine.addEntity(floorBlack3)
floorBlack3.setParent(_scene)
floorBlack3.addComponentOrReplace(gltfShape65)
const transform175 = new Transform({
  position: new Vector3(13.5, 66, 49.78043746948242),
  rotation: new Quaternion(-0.5000000596046448, 0.5, 0.5, -0.5000000596046448),
  scale: new Vector3(1.4205087423324585, 1.000001072883606, 1.3375277519226074)
})
floorBlack3.addComponentOrReplace(transform175)

const floorBlack4 = new Entity('floorBlack4')
engine.addEntity(floorBlack4)
floorBlack4.setParent(_scene)
floorBlack4.addComponentOrReplace(gltfShape65)
const transform176 = new Transform({
  position: new Vector3(13.5, 66, 45.207584381103516),
  rotation: new Quaternion(-0.5000000596046448, 0.5, 0.5, -0.5000000596046448),
  scale: new Vector3(1.4205117225646973, 1.0000017881393433, 1.3375263214111328)
})
floorBlack4.addComponentOrReplace(transform176)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform177 = new Transform({
  position: new Vector3(43.5, 50, 29.104110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.750045776367188, 8.75, 1.0000050067901611)
})
nftPictureFrame5.addComponentOrReplace(transform177)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform178 = new Transform({
  position: new Vector3(43.5, 50, 39.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.750049591064453, 8.75, 1.0000054836273193)
})
nftPictureFrame6.addComponentOrReplace(transform178)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform179 = new Transform({
  position: new Vector3(43.5, 50, 50.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.750055313110352, 8.75, 1.0000061988830566)
})
nftPictureFrame7.addComponentOrReplace(transform179)

const wallPlainBlack7 = new Entity('wallPlainBlack7')
engine.addEntity(wallPlainBlack7)
wallPlainBlack7.setParent(_scene)
wallPlainBlack7.addComponentOrReplace(gltfShape52)
const transform180 = new Transform({
  position: new Vector3(21.777849197387695, 47.5, 39.5512580871582),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(1.0601623058319092, 2.3131377696990967, 1.28262460231781)
})
wallPlainBlack7.addComponentOrReplace(transform180)

const wallPlainBlack8 = new Entity('wallPlainBlack8')
engine.addEntity(wallPlainBlack8)
wallPlainBlack8.setParent(_scene)
wallPlainBlack8.addComponentOrReplace(gltfShape52)
const transform181 = new Transform({
  position: new Vector3(13.102814674377441, 47.5, 39.5512580871582),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(1.0601623058319092, 2.3131377696990967, 1.28262460231781)
})
wallPlainBlack8.addComponentOrReplace(transform181)

const wallPlainBlack9 = new Entity('wallPlainBlack9')
engine.addEntity(wallPlainBlack9)
wallPlainBlack9.setParent(_scene)
wallPlainBlack9.addComponentOrReplace(gltfShape52)
const transform182 = new Transform({
  position: new Vector3(12.102814674377441, 54.688236236572266, 39.5512580871582),
  rotation: new Quaternion(-2.634178386529129e-8, -2.6341778536220772e-8, -0.7071068286895752, 0.7071067690849304),
  scale: new Vector3(1.0601623058319092, 2.3131377696990967, 1.28262460231781)
})
wallPlainBlack9.addComponentOrReplace(transform182)

const barM = new Entity('barM')
engine.addEntity(barM)
barM.setParent(_scene)
barM.addComponentOrReplace(gltfShape37)
const transform183 = new Transform({
  position: new Vector3(28.067276000976562, 73.76612091064453, 54.87474060058594),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(2, 1.5, 1)
})
barM.addComponentOrReplace(transform183)

const ringWhiteLight = new Entity('ringWhiteLight')
engine.addEntity(ringWhiteLight)
ringWhiteLight.setParent(_scene)
ringWhiteLight.addComponentOrReplace(gltfShape53)
const transform184 = new Transform({
  position: new Vector3(11.208501815795898, 51.67728805541992, 25.619808197021484),
  rotation: new Quaternion(-0.5, 0.5, 0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(3.000000476837158, 2.0000059604644775, 3.0000085830688477)
})
ringWhiteLight.addComponentOrReplace(transform184)

const ringWhiteLight2 = new Entity('ringWhiteLight2')
engine.addEntity(ringWhiteLight2)
ringWhiteLight2.setParent(_scene)
ringWhiteLight2.addComponentOrReplace(gltfShape53)
const transform185 = new Transform({
  position: new Vector3(11.208501815795898, 51.67728805541992, 30.556194305419922),
  rotation: new Quaternion(-0.5, 0.5, 0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(3.000000476837158, 2.0000059604644775, 3.0000085830688477)
})
ringWhiteLight2.addComponentOrReplace(transform185)

const ringWhiteLight3 = new Entity('ringWhiteLight3')
engine.addEntity(ringWhiteLight3)
ringWhiteLight3.setParent(_scene)
ringWhiteLight3.addComponentOrReplace(gltfShape53)
const transform186 = new Transform({
  position: new Vector3(11.208501815795898, 51.67728805541992, 35.46417999267578),
  rotation: new Quaternion(-0.5, 0.5, 0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(3.000000476837158, 2.0000059604644775, 3.0000085830688477)
})
ringWhiteLight3.addComponentOrReplace(transform186)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
ringWhiteLight.addComponentOrReplace(gltfShape53)
const transform187 = new Transform({
  position: new Vector3(19.5, 58, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1.9999998807907104)
})
externalLink.addComponentOrReplace(transform187)

const clickArea = new Entity('clickArea')
engine.addEntity(clickArea)
clickArea.setParent(_scene)
ringWhiteLight.addComponentOrReplace(gltfShape53)
const transform188 = new Transform({
  position: new Vector3(16.5, 71.46770477294922, 47.71237564086914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 0.5099999904632568, 2)
})
clickArea.addComponentOrReplace(transform188)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
ringWhiteLight.addComponentOrReplace(gltfShape53)
const transform189 = new Transform({
  position: new Vector3(13, 58, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1.9999998807907104)
})
externalLink2.addComponentOrReplace(transform189)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
ringWhiteLight.addComponentOrReplace(gltfShape53)
externalLink3.setParent(_scene)
const transform190 = new Transform({
  position: new Vector3(19.5, 58, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1.9999998807907104)
})
externalLink3.addComponentOrReplace(transform190)

const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
ringWhiteLight.addComponentOrReplace(gltfShape53)
externalLink4.setParent(_scene)
const transform191 = new Transform({
  position: new Vector3(13, 58, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1.9999998807907104)
})
externalLink4.addComponentOrReplace(transform191)

const externalLink5 = new Entity('externalLink5')
engine.addEntity(externalLink5)
ringWhiteLight.addComponentOrReplace(gltfShape53)
externalLink5.setParent(_scene)
const transform192 = new Transform({
  position: new Vector3(19.5, 58, 39.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1.9999998807907104)
})
externalLink5.addComponentOrReplace(transform192)

const externalLink6 = new Entity('externalLink6')
engine.addEntity(externalLink6)
externalLink6.setParent(_scene)
ringWhiteLight.addComponentOrReplace(gltfShape53)
const transform193 = new Transform({
  position: new Vector3(13, 58, 39.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1.9999998807907104)
})
externalLink6.addComponentOrReplace(transform193)

const externalLink7 = new Entity('externalLink7')
engine.addEntity(externalLink7)
externalLink7.setParent(_scene)
ringWhiteLight.addComponentOrReplace(gltfShape53)
const transform194 = new Transform({
  position: new Vector3(42, 58, 39.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1.9999998807907104)
})
externalLink7.addComponentOrReplace(transform194)

const externalLink8 = new Entity('externalLink8')
engine.addEntity(externalLink8)
externalLink8.setParent(_scene)
ringWhiteLight.addComponentOrReplace(gltfShape53)
const transform195 = new Transform({
  position: new Vector3(35.5, 58, 39.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1.9999998807907104)
})
externalLink8.addComponentOrReplace(transform195)

const externalLink9 = new Entity('externalLink9')
engine.addEntity(externalLink9)
externalLink9.setParent(_scene)
ringWhiteLight.addComponentOrReplace(gltfShape53)
const transform196 = new Transform({
  position: new Vector3(35.5, 58, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1.9999998807907104)
})
externalLink9.addComponentOrReplace(transform196)

const externalLink10 = new Entity('externalLink10')
engine.addEntity(externalLink10)
externalLink10.setParent(_scene)
ringWhiteLight.addComponentOrReplace(gltfShape53)
const transform197 = new Transform({
  position: new Vector3(42, 58, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1.9999998807907104)
})
externalLink10.addComponentOrReplace(transform197)

const externalLink11 = new Entity('externalLink11')
engine.addEntity(externalLink11)
externalLink11.setParent(_scene)
ringWhiteLight.addComponentOrReplace(gltfShape53)
const transform198 = new Transform({
  position: new Vector3(42, 58, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1.9999998807907104)
})
externalLink11.addComponentOrReplace(transform198)

const externalLink12 = new Entity('externalLink12')
engine.addEntity(externalLink12)
externalLink12.setParent(_scene)
ringWhiteLight.addComponentOrReplace(gltfShape53)
const transform199 = new Transform({
  position: new Vector3(35.5, 58, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1.9999998807907104)
})
externalLink12.addComponentOrReplace(transform199)

const ropeLight2 = new Entity('ropeLight2')
engine.addEntity(ropeLight2)
ropeLight2.setParent(_scene)
const transform200 = new Transform({
  position: new Vector3(11.400850296020508, 57.00154113769531, 40.933311462402344),
  rotation: new Quaternion(2.5711109131500154e-14, 0.7071067690849304, -8.429371689544496e-8, -0.70710688829422),
  scale: new Vector3(3.382567882537842, 1, 1.0000029802322388)
})
ropeLight2.addComponentOrReplace(transform200)

const ropeLight = new Entity('ropeLight')
engine.addEntity(ropeLight)
ropeLight.setParent(_scene)
const transform201 = new Transform({
  position: new Vector3(43.730133056640625, 57.00154113769531, 40.933311462402344),
  rotation: new Quaternion(2.5711109131500154e-14, 0.7071067690849304, -8.429371689544496e-8, -0.70710688829422),
  scale: new Vector3(3.382575035095215, 1, 1.0000041723251343)
})
ropeLight.addComponentOrReplace(transform201)

const ropeLight3 = new Entity('ropeLight3')
engine.addEntity(ropeLight3)
ropeLight3.setParent(_scene)
const transform202 = new Transform({
  position: new Vector3(11.140120506286621, 47.676422119140625, 40.933311462402344),
  rotation: new Quaternion(2.5711109131500154e-14, 0.7071067690849304, -8.429371689544496e-8, -0.70710688829422),
  scale: new Vector3(3.3825747966766357, 1, 1.0000039339065552)
})
ropeLight3.addComponentOrReplace(transform202)

const ropeLight4 = new Entity('ropeLight4')
engine.addEntity(ropeLight4)
ropeLight4.setParent(_scene)
const transform203 = new Transform({
  position: new Vector3(43.797119140625, 47.676422119140625, 40.933311462402344),
  rotation: new Quaternion(2.5711109131500154e-14, 0.7071067690849304, -8.429371689544496e-8, -0.70710688829422),
  scale: new Vector3(3.3825814723968506, 1, 1.0000051259994507)
})
ropeLight4.addComponentOrReplace(transform203)

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
script2.spawn(clickarea, {"enabled":true,"onClickText":"Go up","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc","x":0,"y":23,"z":0,"curve":"linear","speed":3,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":4,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc","x":0,"y":-23,"z":0,"curve":"linear","speed":3,"relative":true,"onComplete":[]}},{"entityName":"toolbox","actionId":"delay","values":{"timeout":1,"onTimeout":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass","x":1,"y":1,"z":1,"curve":"linear","speed":15,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickarea","x":1,"y":1,"z":1,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}}]}}]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickarea","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, clickarea, channelBus))
script3.spawn(triggerarea, {"enabled":true,"onEnter":[{"entityName":"toolbox","actionId":"scale","values":{"target":"wallplainglass2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"wallplainglass","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}],"onLeave":[{"entityName":"toolbox","actionId":"scale","values":{"target":"wallplainglass2","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"wallplainglass","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, triggerarea, channelBus))
script2.spawn(clickarea2, {"enabled":true,"onClickText":"Go down","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":4,"onTimeout":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[{"entityName":"toolbox","actionId":"move","values":{"x":0,"y":0,"z":0,"curve":"linear","speed":10,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"target":"clickarea2","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}}]}}]}}]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickarea2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, clickarea2, channelBus))
script2.spawn(clickarea23, {"enabled":true,"onClickText":"Go up ","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc2","x":0,"y":8.75,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc2","x":0,"y":9.75,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc2","x":0,"y":9.25,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc2","x":0,"y":14.75,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass2","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":5,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorlightdisc2","x":0,"y":-42.5,"z":0,"curve":"linear","speed":4,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass2","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"x":1,"y":1,"z":1,"curve":"linear","speed":10,"onComplete":[],"target":"clickarea2"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickarea2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, clickarea23, channelBus))
script4.spawn(videostream, {"startOn":false,"onClickText":"Play!","volume":1,"onClick":[{"entityName":"videostream","actionId":"toggle","values":{}}],"customStation":"https://decentralive.tv/video/35bb413720da828a499cf76d570c4bbc.mp4","image":"https://i.postimg.cc/gcxWPzq4/Logotipo-vs-Isotipo-color-web.png","station":"https://theuniverse.club/live/genesisplaza/index.m3u8"}, createChannel(channelId, videostream, channelBus))
script5.spawn(blockfloorlight, {"startOn":true,"clickable":false}, createChannel(channelId, blockfloorlight, channelBus))
script6.spawn(speakers, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers, channelBus))
script6.spawn(speakers2, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers2, channelBus))
script7.spawn(radiocyberpunk, {"startOn":false,"volume":1,"onClickText":" ","onClick":[{"entityName":"radiocyberpunk","actionId":"toggle","values":{}}],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3","onActivate":[],"onDeactivate":[],"customStation":"https://decentralive.tv/video/f0d556385ef785b43df50fa4ebc3e3d3.mp3"}, createChannel(channelId, radiocyberpunk, channelBus))
script6.spawn(speakers23, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers23, channelBus))
script8.spawn(spark, {"active":true}, createChannel(channelId, spark, channelBus))
script8.spawn(spark2, {"active":true}, createChannel(channelId, spark2, channelBus))
script9.spawn(funkyfloorlight, {"startOn":true,"clickable":false}, createChannel(channelId, funkyfloorlight, channelBus))
script9.spawn(funkyfloorlight2, {"startOn":true,"clickable":false}, createChannel(channelId, funkyfloorlight2, channelBus))
script9.spawn(funkyfloorlight23, {"startOn":true,"clickable":false}, createChannel(channelId, funkyfloorlight23, channelBus))
script9.spawn(funkyfloorlight234, {"startOn":true,"clickable":true}, createChannel(channelId, funkyfloorlight234, channelBus))
script9.spawn(funkyfloorlight2345, {"startOn":true,"clickable":false}, createChannel(channelId, funkyfloorlight2345, channelBus))
script9.spawn(funkyfloorlight23456, {"startOn":true,"clickable":false}, createChannel(channelId, funkyfloorlight23456, channelBus))
script10.spawn(tablelamplight, {"startOn":true,"clickable":false}, createChannel(channelId, tablelamplight, channelBus))
script10.spawn(tablelamplight2, {"startOn":true,"clickable":false}, createChannel(channelId, tablelamplight2, channelBus))
script10.spawn(tablelamplight23, {"startOn":true,"clickable":false}, createChannel(channelId, tablelamplight23, channelBus))
script10.spawn(tablelamplight234, {"startOn":true,"clickable":false}, createChannel(channelId, tablelamplight234, channelBus))
script10.spawn(tablelamplight2345, {"startOn":true,"clickable":false}, createChannel(channelId, tablelamplight2345, channelBus))
script10.spawn(tablelamplight23456, {"startOn":true,"clickable":false}, createChannel(channelId, tablelamplight23456, channelBus))
script10.spawn(tablelamplight234567, {"startOn":true,"clickable":false}, createChannel(channelId, tablelamplight234567, channelBus))
script11.spawn(rainlight, {"startOn":true,"clickable":false}, createChannel(channelId, rainlight, channelBus))
script11.spawn(rainlight2, {"startOn":true,"clickable":false}, createChannel(channelId, rainlight2, channelBus))
script12.spawn(imagefromurl, {"image":"https://i.postimg.cc/gcxWPzq4/Logotipo-vs-Isotipo-color-web.png"}, createChannel(channelId, imagefromurl, channelBus))
script13.spawn(nftpictureframe23456789, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789, channelBus))
script13.spawn(nftpictureframe234567891011121314151617, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe234567891011121314151617, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021, channelBus))
script13.spawn(nftpictureframe23456789101112131415161718192021222324, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe23456789101112131415161718192021222324, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728293031, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728293031, channelBus))
script13.spawn(nftpictureframe2345678910111213141516171819202122232425262728293031323334, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftpictureframe2345678910111213141516171819202122232425262728293031323334, channelBus))
script14.spawn(ropelight, {"startOn":true,"clickable":false}, createChannel(channelId, ropelight, channelBus))
script14.spawn(ropelight2, {"startOn":true,"clickable":false}, createChannel(channelId, ropelight2, channelBus))
script11.spawn(rainlight23, {"startOn":true,"clickable":false}, createChannel(channelId, rainlight23, channelBus))
script5.spawn(blockfloorlight2, {"startOn":true,"clickable":false}, createChannel(channelId, blockfloorlight2, channelBus))
script5.spawn(blockfloorlight23, {"startOn":true,"clickable":false}, createChannel(channelId, blockfloorlight23, channelBus))
script11.spawn(rainlight234, {"startOn":true,"clickable":false}, createChannel(channelId, rainlight234, channelBus))
script14.spawn(ropelight23, {"startOn":true,"clickable":false}, createChannel(channelId, ropelight23, channelBus))
script6.spawn(speakers234, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers234, channelBus))
script13.spawn(nftPictureFrame, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script13.spawn(nftPictureFrame2, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script13.spawn(nftPictureFrame3, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script13.spawn(nftPictureFrame4, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script6.spawn(speakers3, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers3, channelBus))
script6.spawn(speakers4, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers4, channelBus))
script6.spawn(speakers5, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers5, channelBus))
script13.spawn(nftPictureFrame5, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script13.spawn(nftPictureFrame6, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script13.spawn(nftPictureFrame7, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script15.spawn(externalLink, {"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"Lol xd"}, createChannel(channelId, externalLink, channelBus))
script2.spawn(clickArea, {"enabled":true,"onClickText":"Jump down","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"scale","values":{"target":"toolbox","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass2","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":4,"onTimeout":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorglass2","x":1,"y":1,"z":1,"curve":"linear","speed":10,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea","x":1,"y":1,"z":1,"curve":"linear","speed":10,"onComplete":[]}}]}}]}}]}}]}, createChannel(channelId, clickArea, channelBus))
script15.spawn(externalLink2, {"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"Lol xd"}, createChannel(channelId, externalLink2, channelBus))
script15.spawn(externalLink3, {"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"Lol xd"}, createChannel(channelId, externalLink3, channelBus))
script15.spawn(externalLink4, {"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"Lol xd"}, createChannel(channelId, externalLink4, channelBus))
script15.spawn(externalLink5, {"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"Lol xd"}, createChannel(channelId, externalLink5, channelBus))
script15.spawn(externalLink6, {"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"Lol xd"}, createChannel(channelId, externalLink6, channelBus))
script15.spawn(externalLink7, {"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"Lol xd"}, createChannel(channelId, externalLink7, channelBus))
script15.spawn(externalLink8, {"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"Lol xd"}, createChannel(channelId, externalLink8, channelBus))
script15.spawn(externalLink9, {"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"Lol xd"}, createChannel(channelId, externalLink9, channelBus))
script15.spawn(externalLink10, {"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"Lol xd"}, createChannel(channelId, externalLink10, channelBus))
script15.spawn(externalLink11, {"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"Lol xd"}, createChannel(channelId, externalLink11, channelBus))
script15.spawn(externalLink12, {"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"Lol xd"}, createChannel(channelId, externalLink12, channelBus))
script14.spawn(ropeLight2, {"startOn":true,"clickable":false}, createChannel(channelId, ropeLight2, channelBus))
script14.spawn(ropeLight, {"startOn":true,"clickable":false}, createChannel(channelId, ropeLight, channelBus))
script14.spawn(ropeLight3, {"startOn":true,"clickable":false}, createChannel(channelId, ropeLight3, channelBus))
script14.spawn(ropeLight4, {"startOn":true,"clickable":false}, createChannel(channelId, ropeLight4, channelBus))