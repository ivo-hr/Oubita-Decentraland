import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item"
import Script2 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script3 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script4 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script5 from "../b79a150e-5914-4fdf-a6b4-c7ff0c6833dd/src/item"
import Script6 from "../9ca76658-8c9c-43fe-ab17-e4ec05b6ae35/src/item"
import Script7 from "../4adfea35-fb5c-4f64-bb5e-c7ebfa350868/src/item"
import Script8 from "../da30258e-3cc1-48a4-bc55-508e923ae977/src/item"
import Script9 from "../8d62d5a3-411c-43f8-a438-574ccf3d0fbe/src/item"
import Script10 from "../2166e10c-6d1a-4579-a18e-20abb4e1e8bf/src/item"
import Script11 from "../a3401af9-8e2b-4b2b-915e-ccb8ed611c88/src/item"
import Script12 from "../4c9fa249-97ec-4f32-8fb8-b96f69ba8892/src/item"
import Script13 from "../2263960d-51ff-483a-bd2a-a9d286558620/src/item"
import Script14 from "../e25d12ec-e349-4c76-9826-1094458e3982/src/item"
import Script15 from "../85cf3207-2792-4349-9938-21fd82ea2168/src/item"
import Script16 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script17 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script18 from "../a87c0a7e-f8f7-4bc8-b02d-60e053ccf939/src/item"

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

const obita2 = new Entity('obita2')
engine.addEntity(obita2)
obita2.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(27.5, 0, 41.040374755859375),
  rotation: new Quaternion(5.592420684798639e-16, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(1, 0.9470276236534119, 1)
})
obita2.addComponentOrReplace(transform27)
const gltfShape5 = new GLTFShape("ba302e1a-e3ca-4056-a01d-d32b461dffef/obita_1.4.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
obita2.addComponentOrReplace(gltfShape5)

const roofGlassEdges = new Entity('roofGlassEdges')
engine.addEntity(roofGlassEdges)
roofGlassEdges.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(22.000446319580078, 33.79520797729492, 51.638572692871094),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.8167576789855957, 1, 2.7590525150299072)
})
roofGlassEdges.addComponentOrReplace(transform28)
const gltfShape6 = new GLTFShape("804c94f9-20d8-4fd3-aca0-d096cad08ff7/GlassRoof_2Edges.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
roofGlassEdges.addComponentOrReplace(gltfShape6)

const roofGlassEdges2 = new Entity('roofGlassEdges2')
engine.addEntity(roofGlassEdges2)
roofGlassEdges2.setParent(_scene)
roofGlassEdges2.addComponentOrReplace(gltfShape6)
const transform29 = new Transform({
  position: new Vector3(22.000446319580078, 43.277099609375, 51.638572692871094),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.816758155822754, 1, 2.7590529918670654)
})
roofGlassEdges2.addComponentOrReplace(transform29)

const roofGlassEdges3 = new Entity('roofGlassEdges3')
engine.addEntity(roofGlassEdges3)
roofGlassEdges3.setParent(_scene)
roofGlassEdges3.addComponentOrReplace(gltfShape6)
const transform30 = new Transform({
  position: new Vector3(22.000446319580078, 52.61660385131836, 51.638572692871094),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.8167595863342285, 1, 2.75905442237854)
})
roofGlassEdges3.addComponentOrReplace(transform30)

const floorGlass2 = new Entity('floorGlass2')
engine.addEntity(floorGlass2)
floorGlass2.setParent(_scene)
floorGlass2.addComponentOrReplace(gltfShape3)
const transform31 = new Transform({
  position: new Vector3(18.436330795288086, 71.49091339111328, 49.63858413696289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass2.addComponentOrReplace(transform31)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(35.4310188293457, 25.987442016601562, 41),
  rotation: new Quaternion(0.13794967532157898, -0.6935198903083801, 0.13794976472854614, 0.6935199499130249),
  scale: new Vector3(5.5000081062316895, 5.500000476837158, 1.000001311302185)
})
videoStream.addComponentOrReplace(transform32)

const couchCurved = new Entity('couchCurved')
engine.addEntity(couchCurved)
couchCurved.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(19.664531707763672, 37.878963470458984, 25.957033157348633),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
couchCurved.addComponentOrReplace(transform33)
const gltfShape7 = new GLTFShape("2079fbe2-51e5-4fdf-82bd-37374422b2e3/CurvedCouch.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
couchCurved.addComponentOrReplace(gltfShape7)

const couchCurved2 = new Entity('couchCurved2')
engine.addEntity(couchCurved2)
couchCurved2.setParent(_scene)
couchCurved2.addComponentOrReplace(gltfShape7)
const transform34 = new Transform({
  position: new Vector3(14.990690231323242, 37.878963470458984, 23.69817352294922),
  rotation: new Quaternion(9.300132710858967e-16, -0.4713967442512512, 5.6194863873315626e-8, -0.8819212913513184),
  scale: new Vector3(1, 1, 1)
})
couchCurved2.addComponentOrReplace(transform34)

const coffeeTable = new Entity('coffeeTable')
engine.addEntity(coffeeTable)
coffeeTable.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(16.5, 37.98884963989258, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
coffeeTable.addComponentOrReplace(transform35)
const gltfShape8 = new GLTFShape("b01154d9-db05-4713-ace7-692b67220bb0/Table_06/Table_06.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
coffeeTable.addComponentOrReplace(gltfShape8)

const blockFloorLight = new Entity('blockFloorLight')
engine.addEntity(blockFloorLight)
blockFloorLight.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(16.5, 37.958717346191406, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.5, 2)
})
blockFloorLight.addComponentOrReplace(transform36)

const fridgeCounter = new Entity('fridgeCounter')
engine.addEntity(fridgeCounter)
fridgeCounter.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(12.5, 37.94488525390625, 30.5),
  rotation: new Quaternion(-1.0848133067569484e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
fridgeCounter.addComponentOrReplace(transform37)
const gltfShape9 = new GLTFShape("cd54d23e-eef5-48f6-bfb2-ff7878b37d0b/Fridge_Counter.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
fridgeCounter.addComponentOrReplace(gltfShape9)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(36.5, 37.930137634277344, 34.789939880371094),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(5.8376994132995605, 2.366330862045288, 1.0000032186508179)
})
wallPlainGlass3.addComponentOrReplace(transform38)
wallPlainGlass3.addComponentOrReplace(gltfShape2)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape2)
const transform39 = new Transform({
  position: new Vector3(36.495765686035156, 37.930137634277344, 37.789939880371094),
  rotation: new Quaternion(7.262432537671112e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(3.5920002460479736, 2.3636560440063477, 1.000002145767212)
})
wallPlainGlass4.addComponentOrReplace(transform39)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape2)
const transform40 = new Transform({
  position: new Vector3(36.495765686035156, 37.930137634277344, 29.789939880371094),
  rotation: new Quaternion(7.262432537671112e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(3.5920002460479736, 2.3496503829956055, 1.000002145767212)
})
wallPlainGlass5.addComponentOrReplace(transform40)

const coffeeTable2 = new Entity('coffeeTable2')
engine.addEntity(coffeeTable2)
coffeeTable2.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(40.5, 38, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2, 3.5)
})
coffeeTable2.addComponentOrReplace(transform41)
const gltfShape10 = new GLTFShape("61265486-0bbb-462e-80c0-30754daf97ed/Coffee_Table.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
coffeeTable2.addComponentOrReplace(gltfShape10)

const coffeeTable3 = new Entity('coffeeTable3')
engine.addEntity(coffeeTable3)
coffeeTable3.setParent(_scene)
coffeeTable3.addComponentOrReplace(gltfShape10)
const transform42 = new Transform({
  position: new Vector3(40.5, 38, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2, 3.5)
})
coffeeTable3.addComponentOrReplace(transform42)

const wallPlainGlass7 = new Entity('wallPlainGlass7')
engine.addEntity(wallPlainGlass7)
wallPlainGlass7.setParent(_scene)
wallPlainGlass7.addComponentOrReplace(gltfShape2)
const transform43 = new Transform({
  position: new Vector3(33.06464385986328, 37.930137634277344, 52.789939880371094),
  rotation: new Quaternion(7.262432537671112e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(4.356088638305664, 2.3496503829956055, 1.000002145767212)
})
wallPlainGlass7.addComponentOrReplace(transform43)

const coffeeTable4 = new Entity('coffeeTable4')
engine.addEntity(coffeeTable4)
coffeeTable4.setParent(_scene)
coffeeTable4.addComponentOrReplace(gltfShape10)
const transform44 = new Transform({
  position: new Vector3(39, 38, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2, 3.5)
})
coffeeTable4.addComponentOrReplace(transform44)

const spotlightLight = new Entity('spotlightLight')
engine.addEntity(spotlightLight)
spotlightLight.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(38.5, 43.33962631225586, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.374999046325684, 1, 13.124999046325684)
})
spotlightLight.addComponentOrReplace(transform45)

const spotlightLight2 = new Entity('spotlightLight2')
engine.addEntity(spotlightLight2)
spotlightLight2.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(40.5, 43.33962631225586, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.374999046325684, 1, 13.124999046325684)
})
spotlightLight2.addComponentOrReplace(transform46)

const spotlightLight3 = new Entity('spotlightLight3')
engine.addEntity(spotlightLight3)
spotlightLight3.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(40.5, 43.33962631225586, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.374999046325684, 1, 13.124999046325684)
})
spotlightLight3.addComponentOrReplace(transform47)

const tallPalmTree = new Entity('tallPalmTree')
engine.addEntity(tallPalmTree)
tallPalmTree.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(15.5, 71.5, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree.addComponentOrReplace(transform48)
const gltfShape11 = new GLTFShape("a29c8a0e-1f2c-4d85-a099-36301da3fe36/PalmTree_02/PalmTree_02.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
tallPalmTree.addComponentOrReplace(gltfShape11)

const smallPalmTree = new Entity('smallPalmTree')
engine.addEntity(smallPalmTree)
smallPalmTree.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(17, 71.5, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smallPalmTree.addComponentOrReplace(transform49)
const gltfShape12 = new GLTFShape("3f7e1dbd-8693-409d-9dd9-2a06feaadec9/JunglePlant_07/JunglePlant_07.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
smallPalmTree.addComponentOrReplace(gltfShape12)

const tallPalmTree2 = new Entity('tallPalmTree2')
engine.addEntity(tallPalmTree2)
tallPalmTree2.setParent(_scene)
tallPalmTree2.addComponentOrReplace(gltfShape11)
const transform50 = new Transform({
  position: new Vector3(15.5, 71.5, 38.5),
  rotation: new Quaternion(-1.1059513315930347e-15, 0.5555702447891235, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
tallPalmTree2.addComponentOrReplace(transform50)

const bentPalmTree = new Entity('bentPalmTree')
engine.addEntity(bentPalmTree)
bentPalmTree.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(16.500001907348633, 71, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bentPalmTree.addComponentOrReplace(transform51)
const gltfShape13 = new GLTFShape("e0db669f-e803-4528-bb16-e1e3001956d9/PalmTree_01/PalmTree_01.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
bentPalmTree.addComponentOrReplace(gltfShape13)

const tallPalmTree3 = new Entity('tallPalmTree3')
engine.addEntity(tallPalmTree3)
tallPalmTree3.setParent(_scene)
tallPalmTree3.addComponentOrReplace(gltfShape11)
const transform52 = new Transform({
  position: new Vector3(39.5, 71.5, 46.75),
  rotation: new Quaternion(-1.1059513315930347e-15, 0.5555702447891235, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999997615814209, 1, 0.9999997615814209)
})
tallPalmTree3.addComponentOrReplace(transform52)

const tallPalmTree4 = new Entity('tallPalmTree4')
engine.addEntity(tallPalmTree4)
tallPalmTree4.setParent(_scene)
tallPalmTree4.addComponentOrReplace(gltfShape11)
const transform53 = new Transform({
  position: new Vector3(39.5, 71.5, 38.25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree4.addComponentOrReplace(transform53)

const bush = new Entity('bush')
engine.addEntity(bush)
bush.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(15.500003814697266, 71.5, 34.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1.5, 1.0000016689300537)
})
bush.addComponentOrReplace(transform54)
const gltfShape14 = new GLTFShape("b34ad4ca-db96-44fe-8fd6-86b4aa9f2218/HWN20_Bush.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
bush.addComponentOrReplace(gltfShape14)

const bentPalmTree2 = new Entity('bentPalmTree2')
engine.addEntity(bentPalmTree2)
bentPalmTree2.setParent(_scene)
bentPalmTree2.addComponentOrReplace(gltfShape13)
const transform55 = new Transform({
  position: new Vector3(38.5, 71, 35.5),
  rotation: new Quaternion(-1.2518071228575546e-14, 0.9807853102684021, -1.169186987226567e-7, 0.19509033858776093),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
bentPalmTree2.addComponentOrReplace(transform55)

const bush2 = new Entity('bush2')
engine.addEntity(bush2)
bush2.setParent(_scene)
bush2.addComponentOrReplace(gltfShape14)
const transform56 = new Transform({
  position: new Vector3(38.5, 71.5, 30.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.5, 1.0000019073486328)
})
bush2.addComponentOrReplace(transform56)

const smallPalmTree2 = new Entity('smallPalmTree2')
engine.addEntity(smallPalmTree2)
smallPalmTree2.setParent(_scene)
smallPalmTree2.addComponentOrReplace(gltfShape12)
const transform57 = new Transform({
  position: new Vector3(16.5, 71.5, 30.5),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
smallPalmTree2.addComponentOrReplace(transform57)

const bentPalmTree3 = new Entity('bentPalmTree3')
engine.addEntity(bentPalmTree3)
bentPalmTree3.setParent(_scene)
bentPalmTree3.addComponentOrReplace(gltfShape13)
const transform58 = new Transform({
  position: new Vector3(16.500001907348633, 71, 42),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
bentPalmTree3.addComponentOrReplace(transform58)

const jungleShrub = new Entity('jungleShrub')
engine.addEntity(jungleShrub)
jungleShrub.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(18.000003814697266, 71.5, 52),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
jungleShrub.addComponentOrReplace(transform59)
const gltfShape15 = new GLTFShape("d8b2cdd4-043a-4982-91c2-202d85677533/JunglePlant_02/JunglePlant_02.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
jungleShrub.addComponentOrReplace(gltfShape15)

const jungleShrub2 = new Entity('jungleShrub2')
engine.addEntity(jungleShrub2)
jungleShrub2.setParent(_scene)
jungleShrub2.addComponentOrReplace(gltfShape15)
const transform60 = new Transform({
  position: new Vector3(17, 71.5, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 2, 2)
})
jungleShrub2.addComponentOrReplace(transform60)

const jungleShrub3 = new Entity('jungleShrub3')
engine.addEntity(jungleShrub3)
jungleShrub3.setParent(_scene)
jungleShrub3.addComponentOrReplace(gltfShape15)
const transform61 = new Transform({
  position: new Vector3(37.5, 72, 34.5),
  rotation: new Quaternion(-1.1059513315930347e-15, -0.5555702447891235, 6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(1.9999998807907104, 2, 1.9999998807907104)
})
jungleShrub3.addComponentOrReplace(transform61)

const mixtable = new Entity('mixtable')
engine.addEntity(mixtable)
mixtable.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(27, 73.18089294433594, 31),
  rotation: new Quaternion(-5.884156619524912e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(1, 1, 1)
})
mixtable.addComponentOrReplace(transform62)

const speakers = new Entity('speakers')
engine.addEntity(speakers)
speakers.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(20.5, 71.5, 31),
  rotation: new Quaternion(-5.410954887277719e-15, -0.2902846932411194, 3.460463915416767e-8, -0.9569404125213623),
  scale: new Vector3(2.000000476837158, 2, 1.000000238418579)
})
speakers.addComponentOrReplace(transform63)

const speakers2 = new Entity('speakers2')
engine.addEntity(speakers2)
speakers2.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(36, 71.5, 30.5),
  rotation: new Quaternion(-1.1387964105513595e-15, 0.19509033858776093, -2.325656645041363e-8, -0.9807853102684021),
  scale: new Vector3(3.7071073055267334, 4, 1.1464468240737915)
})
speakers2.addComponentOrReplace(transform64)

const radioCyberpunk = new Entity('radioCyberpunk')
engine.addEntity(radioCyberpunk)
radioCyberpunk.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(27.836605072021484, 73.23040008544922, 30.767698287963867),
  rotation: new Quaternion(-7.5014728586828e-15, 0.9807853102684021, -1.1691871293351142e-7, -0.19509033858776093),
  scale: new Vector3(1.0000005960464478, 2.567028522491455, 1.0000005960464478)
})
radioCyberpunk.addComponentOrReplace(transform65)

const wallLEDGrid = new Entity('wallLEDGrid')
engine.addEntity(wallLEDGrid)
wallLEDGrid.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(33, 71.29338836669922, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.784754753112793, 0.5, 22.658113479614258)
})
wallLEDGrid.addComponentOrReplace(transform66)
const gltfShape16 = new GLTFShape("bdd5671b-9c8f-43c7-8385-f0dd70257863/LEDGridWall.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
wallLEDGrid.addComponentOrReplace(gltfShape16)

const speakers3 = new Entity('speakers3')
engine.addEntity(speakers3)
speakers3.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(21.5, 71.5, 28.5),
  rotation: new Quaternion(-3.605510936468756e-15, 0.19509029388427734, -2.3256580661268345e-8, 0.9807853698730469),
  scale: new Vector3(3.7071075439453125, 4, 1.1464470624923706)
})
speakers3.addComponentOrReplace(transform67)

const stairsFloating = new Entity('stairsFloating')
engine.addEntity(stairsFloating)
stairsFloating.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(34.85047149658203, 71.28866577148438, 30.5),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000039339065552, 0.5, 0.5000019669532776)
})
stairsFloating.addComponentOrReplace(transform68)
const gltfShape17 = new GLTFShape("896b942f-3c65-4d53-b8ff-8d874270fe6e/floatingStairs.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
stairsFloating.addComponentOrReplace(gltfShape17)

const roofBlack = new Entity('roofBlack')
engine.addEntity(roofBlack)
roofBlack.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(42.000003814697266, 66.5, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.790256023406982, 1, 9.876068115234375)
})
roofBlack.addComponentOrReplace(transform69)
const gltfShape18 = new GLTFShape("0d67ab09-6591-44dc-bc70-2fd1dbc49d06/BlackRoof.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
roofBlack.addComponentOrReplace(gltfShape18)

const mLongLoopedCable = new Entity('mLongLoopedCable')
engine.addEntity(mLongLoopedCable)
mLongLoopedCable.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(28.818626403808594, 73.3042984008789, 26.472681045532227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mLongLoopedCable.addComponentOrReplace(transform70)
const gltfShape19 = new GLTFShape("382afbea-28ae-42ad-a046-9376b21541f8/Cable_4M_02/Cable_4M_02.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
mLongLoopedCable.addComponentOrReplace(gltfShape19)

const pillarGlow = new Entity('pillarGlow')
engine.addEntity(pillarGlow)
pillarGlow.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(32.84147262573242, 73, 32.85993576049805),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4999999403953552, 1.5, 0.4999999701976776)
})
pillarGlow.addComponentOrReplace(transform71)
const gltfShape20 = new GLTFShape("52481f8f-e316-4c1f-8c96-9b059e5d0909/GlowPillar.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
pillarGlow.addComponentOrReplace(gltfShape20)

const pillarGlow2 = new Entity('pillarGlow2')
engine.addEntity(pillarGlow2)
pillarGlow2.setParent(_scene)
pillarGlow2.addComponentOrReplace(gltfShape20)
const transform72 = new Transform({
  position: new Vector3(21.841472625732422, 73, 32.85993576049805),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4999999403953552, 1.5, 0.4999999701976776)
})
pillarGlow2.addComponentOrReplace(transform72)

const ceilingStriplight = new Entity('ceilingStriplight')
engine.addEntity(ceilingStriplight)
ceilingStriplight.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(30.753782272338867, 75, 32.79954147338867),
  rotation: new Quaternion(1.69727750463141e-14, -0.7071068286895752, 8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
ceilingStriplight.addComponentOrReplace(transform73)

const ceilingStriplight2 = new Entity('ceilingStriplight2')
engine.addEntity(ceilingStriplight2)
ceilingStriplight2.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(24.01087760925293, 75, 32.79954147338867),
  rotation: new Quaternion(1.69727750463141e-14, -0.7071068286895752, 8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
ceilingStriplight2.addComponentOrReplace(transform74)

const spotlightStripLight = new Entity('spotlightStripLight')
engine.addEntity(spotlightStripLight)
spotlightStripLight.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(27, 75, 32.78843688964844),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
spotlightStripLight.addComponentOrReplace(transform75)

const spark = new Entity('spark')
engine.addEntity(spark)
spark.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(21.67552375793457, 78.02174377441406, 32.75471115112305),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark.addComponentOrReplace(transform76)

const spark2 = new Entity('spark2')
engine.addEntity(spark2)
spark2.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(32.69689178466797, 78.02174377441406, 32.75471115112305),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark2.addComponentOrReplace(transform77)

const barM = new Entity('barM')
engine.addEntity(barM)
barM.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(28.5, 73.76612091064453, 54.87474060058594),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
barM.addComponentOrReplace(transform78)
const gltfShape21 = new GLTFShape("2312b12f-d481-4229-be52-82aa3819a391/Furnit Bar 4 2M.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
barM.addComponentOrReplace(gltfShape21)

const barM2 = new Entity('barM2')
engine.addEntity(barM2)
barM2.setParent(_scene)
barM2.addComponentOrReplace(gltfShape21)
const transform79 = new Transform({
  position: new Vector3(26.75421905517578, 73.76612091064453, 54.87474060058594),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
barM2.addComponentOrReplace(transform79)

const barGreen = new Entity('barGreen')
engine.addEntity(barGreen)
barGreen.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(22.500003814697266, 71.5, 52.5),
  rotation: new Quaternion(-4.8369380230988985e-15, 1, -1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
barGreen.addComponentOrReplace(transform80)
const gltfShape22 = new GLTFShape("d918354b-4382-4b9d-acbb-cc13fadad45a/Bar_Green.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
barGreen.addComponentOrReplace(gltfShape22)

const barGreen2 = new Entity('barGreen2')
engine.addEntity(barGreen2)
barGreen2.setParent(_scene)
barGreen2.addComponentOrReplace(gltfShape22)
const transform81 = new Transform({
  position: new Vector3(28.609935760498047, 71.5, 52.5),
  rotation: new Quaternion(-4.8369380230988985e-15, 1, -1.1920928244535389e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
barGreen2.addComponentOrReplace(transform81)

const concreteRoundedTable = new Entity('concreteRoundedTable')
engine.addEntity(concreteRoundedTable)
concreteRoundedTable.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(34.500003814697266, 71.57027435302734, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable.addComponentOrReplace(transform82)
const gltfShape23 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
concreteRoundedTable.addComponentOrReplace(gltfShape23)

const concreteRoundedTable2 = new Entity('concreteRoundedTable2')
engine.addEntity(concreteRoundedTable2)
concreteRoundedTable2.setParent(_scene)
concreteRoundedTable2.addComponentOrReplace(gltfShape23)
const transform83 = new Transform({
  position: new Vector3(33, 71.57027435302734, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable2.addComponentOrReplace(transform83)

const concreteRoundedTable3 = new Entity('concreteRoundedTable3')
engine.addEntity(concreteRoundedTable3)
concreteRoundedTable3.setParent(_scene)
concreteRoundedTable3.addComponentOrReplace(gltfShape23)
const transform84 = new Transform({
  position: new Vector3(37, 71.57027435302734, 44.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable3.addComponentOrReplace(transform84)

const concreteRoundedTable4 = new Entity('concreteRoundedTable4')
engine.addEntity(concreteRoundedTable4)
concreteRoundedTable4.setParent(_scene)
concreteRoundedTable4.addComponentOrReplace(gltfShape23)
const transform85 = new Transform({
  position: new Vector3(35.5, 71.57027435302734, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable4.addComponentOrReplace(transform85)

const concreteRoundedTable5 = new Entity('concreteRoundedTable5')
engine.addEntity(concreteRoundedTable5)
concreteRoundedTable5.setParent(_scene)
concreteRoundedTable5.addComponentOrReplace(gltfShape23)
const transform86 = new Transform({
  position: new Vector3(32, 71.57027435302734, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable5.addComponentOrReplace(transform86)

const concreteRoundedTable6 = new Entity('concreteRoundedTable6')
engine.addEntity(concreteRoundedTable6)
concreteRoundedTable6.setParent(_scene)
concreteRoundedTable6.addComponentOrReplace(gltfShape23)
const transform87 = new Transform({
  position: new Vector3(38.5, 71.57027435302734, 41.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable6.addComponentOrReplace(transform87)

const concreteRoundedTable7 = new Entity('concreteRoundedTable7')
engine.addEntity(concreteRoundedTable7)
concreteRoundedTable7.setParent(_scene)
concreteRoundedTable7.addComponentOrReplace(gltfShape23)
const transform88 = new Transform({
  position: new Vector3(36, 71.57027435302734, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable7.addComponentOrReplace(transform88)

const funkyFloorLight = new Entity('funkyFloorLight')
engine.addEntity(funkyFloorLight)
funkyFloorLight.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(17.80194854736328, 71.34190368652344, 42.82564163208008),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight.addComponentOrReplace(transform89)

const funkyFloorLight2 = new Entity('funkyFloorLight2')
engine.addEntity(funkyFloorLight2)
funkyFloorLight2.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(17, 71.34190368652344, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight2.addComponentOrReplace(transform90)

const funkyFloorLight3 = new Entity('funkyFloorLight3')
engine.addEntity(funkyFloorLight3)
funkyFloorLight3.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(38.5, 71.34190368652344, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight3.addComponentOrReplace(transform91)

const funkyFloorLight4 = new Entity('funkyFloorLight4')
engine.addEntity(funkyFloorLight4)
funkyFloorLight4.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(38, 71.34190368652344, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight4.addComponentOrReplace(transform92)

const funkyFloorLight5 = new Entity('funkyFloorLight5')
engine.addEntity(funkyFloorLight5)
funkyFloorLight5.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(18, 71.34190368652344, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight5.addComponentOrReplace(transform93)

const funkyFloorLight6 = new Entity('funkyFloorLight6')
engine.addEntity(funkyFloorLight6)
funkyFloorLight6.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(34, 71.34190368652344, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
funkyFloorLight6.addComponentOrReplace(transform94)

const tableLampLight = new Entity('tableLampLight')
engine.addEntity(tableLampLight)
tableLampLight.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(32.13079071044922, 72.67411804199219, 40.50913619995117),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight.addComponentOrReplace(transform95)

const tableLampLight2 = new Entity('tableLampLight2')
engine.addEntity(tableLampLight2)
tableLampLight2.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(33.14960861206055, 72.67411804199219, 43.3328857421875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight2.addComponentOrReplace(transform96)

const tableLampLight3 = new Entity('tableLampLight3')
engine.addEntity(tableLampLight3)
tableLampLight3.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(34.60026168823242, 72.67411804199219, 46.872772216796875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight3.addComponentOrReplace(transform97)

const tableLampLight4 = new Entity('tableLampLight4')
engine.addEntity(tableLampLight4)
tableLampLight4.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(37.10054016113281, 72.67411804199219, 44.43312454223633),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight4.addComponentOrReplace(transform98)

const tableLampLight5 = new Entity('tableLampLight5')
engine.addEntity(tableLampLight5)
tableLampLight5.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(35.604217529296875, 72.67411804199219, 41.37492370605469),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight5.addComponentOrReplace(transform99)

const tableLampLight6 = new Entity('tableLampLight6')
engine.addEntity(tableLampLight6)
tableLampLight6.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(38.5920524597168, 72.67411804199219, 41.39891052246094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight6.addComponentOrReplace(transform100)

const tableLampLight7 = new Entity('tableLampLight7')
engine.addEntity(tableLampLight7)
tableLampLight7.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(36.142356872558594, 72.67411804199219, 37.90637969970703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableLampLight7.addComponentOrReplace(transform101)

const radioCyberpunk2 = new Entity('radioCyberpunk2')
engine.addEntity(radioCyberpunk2)
radioCyberpunk2.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(40.82681655883789, 71.84272766113281, 44.5),
  rotation: new Quaternion(-7.5014728586828e-15, 0.9807853102684021, -1.1691871293351142e-7, -0.19509033858776093),
  scale: new Vector3(0.14363409578800201, 1.3091845512390137, 0.4901173412799835)
})
radioCyberpunk2.addComponentOrReplace(transform102)

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(22, 2.3747870922088623, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 1, 3)
})
rainLight.addComponentOrReplace(transform103)

const rainLight2 = new Entity('rainLight2')
engine.addEntity(rainLight2)
rainLight2.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(33, 2.3747870922088623, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 1, 3)
})
rainLight2.addComponentOrReplace(transform104)

const ceilingStriplight3 = new Entity('ceilingStriplight3')
engine.addEntity(ceilingStriplight3)
ceilingStriplight3.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(28.447551727294922, 27.895545959472656, 35.42642593383789),
  rotation: new Quaternion(2.519601992594534e-14, 1.1920927533992653e-7, -9.641743851343705e-15, 1),
  scale: new Vector3(1.5000053644180298, 1.5, 1.5000051259994507)
})
ceilingStriplight3.addComponentOrReplace(transform105)

const spotlightStripLight2 = new Entity('spotlightStripLight2')
engine.addEntity(spotlightStripLight2)
spotlightStripLight2.setParent(_scene)
const transform106 = new Transform({
  position: new Vector3(28.430898666381836, 27.895545959472656, 41.057098388671875),
  rotation: new Quaternion(-1.0115003181831311e-14, -1, 1.1920927533992653e-7, 1.1920927533992653e-7),
  scale: new Vector3(1.5000053644180298, 1.5, 1.5000051259994507)
})
spotlightStripLight2.addComponentOrReplace(transform106)

const ceilingStriplight4 = new Entity('ceilingStriplight4')
engine.addEntity(ceilingStriplight4)
ceilingStriplight4.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(28.447559356689453, 27.895545959472656, 45.54078674316406),
  rotation: new Quaternion(2.519601992594534e-14, 1.1920927533992653e-7, -9.641743851343705e-15, 1),
  scale: new Vector3(1.5000057220458984, 1.5, 1.5000054836273193)
})
ceilingStriplight4.addComponentOrReplace(transform107)

const wallPlainPistachio = new Entity('wallPlainPistachio')
engine.addEntity(wallPlainPistachio)
wallPlainPistachio.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(29.77194595336914, 0, 31),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.3601064682006836, 5.011066436767578, 0.19875061511993408)
})
wallPlainPistachio.addComponentOrReplace(transform108)
const gltfShape24 = new GLTFShape("71bba827-1721-4afc-a521-e75344c63f0f/PlainPistachioWall.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
wallPlainPistachio.addComponentOrReplace(gltfShape24)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(27.5, 0.5, 50.945980072021484),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.5, 4.5, 1)
})
imageFromURL.addComponentOrReplace(transform109)

const coffeeMachine = new Entity('coffeeMachine')
engine.addEntity(coffeeMachine)
coffeeMachine.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(11.702714920043945, 38.923316955566406, 33.10163879394531),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
coffeeMachine.addComponentOrReplace(transform110)
const gltfShape25 = new GLTFShape("bf7da256-1314-40dc-a5b4-19c8dc5196e4/Coffee_Machine.glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
coffeeMachine.addComponentOrReplace(gltfShape25)

const roundedStarlightRug = new Entity('roundedStarlightRug')
engine.addEntity(roundedStarlightRug)
roundedStarlightRug.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(16.5, 38, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
roundedStarlightRug.addComponentOrReplace(transform111)
const gltfShape26 = new GLTFShape("0b906173-5b55-4c95-9a53-9d9c6ba21fe0/Carpet_02/Carpet_02.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
roundedStarlightRug.addComponentOrReplace(gltfShape26)

const rainLight3 = new Entity('rainLight3')
engine.addEntity(rainLight3)
rainLight3.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(17, 37.42906188964844, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5)
})
rainLight3.addComponentOrReplace(transform112)

const couchThreeSeater = new Entity('couchThreeSeater')
engine.addEntity(couchThreeSeater)
couchThreeSeater.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(20.5, 37.89574432373047, 35.90058135986328),
  rotation: new Quaternion(1.0008235314104617e-15, -0.70710688829422, 8.429370268459024e-8, 0.7071067094802856),
  scale: new Vector3(1, 1, 1)
})
couchThreeSeater.addComponentOrReplace(transform113)
const gltfShape27 = new GLTFShape("7ec82823-7d54-4456-9a88-faf48f6098e1/ThreeSeater_Couch.glb")
gltfShape27.withCollisions = true
gltfShape27.isPointerBlocker = true
gltfShape27.visible = true
couchThreeSeater.addComponentOrReplace(gltfShape27)

const couchThreeSeater2 = new Entity('couchThreeSeater2')
engine.addEntity(couchThreeSeater2)
couchThreeSeater2.setParent(_scene)
couchThreeSeater2.addComponentOrReplace(gltfShape27)
const transform114 = new Transform({
  position: new Vector3(20.5, 37.89574432373047, 31.390714645385742),
  rotation: new Quaternion(1.0008235314104617e-15, -0.70710688829422, 8.429370268459024e-8, 0.7071067094802856),
  scale: new Vector3(1, 1, 1)
})
couchThreeSeater2.addComponentOrReplace(transform114)

const table = new Entity('table')
engine.addEntity(table)
table.setParent(_scene)
const transform115 = new Transform({
  position: new Vector3(20.872072219848633, 37.94304275512695, 31.997154235839844),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.200634479522705, 1, 1.8871008157730103)
})
table.addComponentOrReplace(transform115)
const gltfShape28 = new GLTFShape("55a98e69-9ec8-4f04-ba26-8764b255dd50/Furnit 1.glb")
gltfShape28.withCollisions = true
gltfShape28.isPointerBlocker = true
gltfShape28.visible = true
table.addComponentOrReplace(gltfShape28)

const pillarGlow3 = new Entity('pillarGlow3')
engine.addEntity(pillarGlow3)
pillarGlow3.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(39, 47.5, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.3164892196655273, 11.603154182434082)
})
pillarGlow3.addComponentOrReplace(transform116)
pillarGlow3.addComponentOrReplace(gltfShape20)

const obita = new Entity('obita')
engine.addEntity(obita)
obita.setParent(_scene)
obita.addComponentOrReplace(gltfShape5)
const transform117 = new Transform({
  position: new Vector3(27.5, 0, 41),
  rotation: new Quaternion(5.592420684798639e-16, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(1, 0.9470276236534119, 1)
})
obita.addComponentOrReplace(transform117)

const pillarGlow4 = new Entity('pillarGlow4')
engine.addEntity(pillarGlow4)
pillarGlow4.setParent(_scene)
pillarGlow4.addComponentOrReplace(gltfShape20)
const transform118 = new Transform({
  position: new Vector3(39, 47.5, 42.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.3164892196655273, 11.603154182434082)
})
pillarGlow4.addComponentOrReplace(transform118)

const pillarGlow5 = new Entity('pillarGlow5')
engine.addEntity(pillarGlow5)
pillarGlow5.setParent(_scene)
pillarGlow5.addComponentOrReplace(gltfShape20)
const transform119 = new Transform({
  position: new Vector3(39, 47.5, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.3164892196655273, 11.603154182434082)
})
pillarGlow5.addComponentOrReplace(transform119)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform120 = new Transform({
  position: new Vector3(38.5, 49, 41.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000078678131104, 3.5, 1.000002145767212)
})
nftPictureFrame.addComponentOrReplace(transform120)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform121 = new Transform({
  position: new Vector3(38.5, 49, 38.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000088214874268, 3.5, 1.000002384185791)
})
nftPictureFrame2.addComponentOrReplace(transform121)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform122 = new Transform({
  position: new Vector3(38.5, 51.5, 38.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000107288360596, 3.5, 1.0000028610229492)
})
nftPictureFrame3.addComponentOrReplace(transform122)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform123 = new Transform({
  position: new Vector3(38.5, 51.5, 41.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500011682510376, 3.5, 1.0000030994415283)
})
nftPictureFrame4.addComponentOrReplace(transform123)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(38.5, 54, 41.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000126361846924, 3.5, 1.0000033378601074)
})
nftPictureFrame5.addComponentOrReplace(transform124)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform125 = new Transform({
  position: new Vector3(38.5, 54, 38.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500013589859009, 3.5, 1.0000035762786865)
})
nftPictureFrame6.addComponentOrReplace(transform125)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform126 = new Transform({
  position: new Vector3(38.5, 49, 27.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500009775161743, 3.5, 1.0000026226043701)
})
nftPictureFrame9.addComponentOrReplace(transform126)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform127 = new Transform({
  position: new Vector3(38.5, 49, 30.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000088214874268, 3.5, 1.000002384185791)
})
nftPictureFrame10.addComponentOrReplace(transform127)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform128 = new Transform({
  position: new Vector3(38.5, 51.5, 29.104110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.750038146972656, 8.75, 1.0000040531158447)
})
nftPictureFrame11.addComponentOrReplace(transform128)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform129 = new Transform({
  position: new Vector3(39, 54, 30.604110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.5000174045562744, 3.5, 1.000004529953003)
})
nftPictureFrame13.addComponentOrReplace(transform129)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(39, 51.5, 30.604110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.500014543533325, 3.5, 1.0000038146972656)
})
nftPictureFrame14.addComponentOrReplace(transform130)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform131 = new Transform({
  position: new Vector3(39, 49, 30.604110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.5000126361846924, 3.5, 1.0000033378601074)
})
nftPictureFrame15.addComponentOrReplace(transform131)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform132 = new Transform({
  position: new Vector3(39, 49, 27.604110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.500011682510376, 3.5, 1.0000030994415283)
})
nftPictureFrame16.addComponentOrReplace(transform132)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(39, 51.5, 27.604110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.5000154972076416, 3.5, 1.0000040531158447)
})
nftPictureFrame17.addComponentOrReplace(transform133)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform134 = new Transform({
  position: new Vector3(39, 54, 27.604110717773438),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.500016450881958, 3.5, 1.0000042915344238)
})
nftPictureFrame18.addComponentOrReplace(transform134)

const nftPictureFrame19 = new Entity('nftPictureFrame19')
engine.addEntity(nftPictureFrame19)
nftPictureFrame19.setParent(_scene)
const transform135 = new Transform({
  position: new Vector3(39, 54, 41.10411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.500018358230591, 3.5, 1.000004768371582)
})
nftPictureFrame19.addComponentOrReplace(transform135)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform136 = new Transform({
  position: new Vector3(39, 49, 39.60411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(8.750038146972656, 8.75, 1.0000040531158447)
})
nftPictureFrame22.addComponentOrReplace(transform136)

const nftPictureFrame24 = new Entity('nftPictureFrame24')
engine.addEntity(nftPictureFrame24)
nftPictureFrame24.setParent(_scene)
const transform137 = new Transform({
  position: new Vector3(39, 54, 38.10411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.5000174045562744, 3.5, 1.000004529953003)
})
nftPictureFrame24.addComponentOrReplace(transform137)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform138 = new Transform({
  position: new Vector3(39, 54, 55.60411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.500023126602173, 3.5, 1.0000059604644775)
})
nftPictureFrame7.addComponentOrReplace(transform138)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(39, 54, 52.60411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.5000221729278564, 3.5, 1.0000057220458984)
})
nftPictureFrame8.addComponentOrReplace(transform139)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform140 = new Transform({
  position: new Vector3(39, 49, 54.10411071777344),
  rotation: new Quaternion(8.189012043067958e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(8.75004768371582, 8.75, 1.0000052452087402)
})
nftPictureFrame12.addComponentOrReplace(transform140)

const nftPictureFrame20 = new Entity('nftPictureFrame20')
engine.addEntity(nftPictureFrame20)
nftPictureFrame20.setParent(_scene)
const transform141 = new Transform({
  position: new Vector3(38.5, 49, 52.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500013589859009, 3.5, 1.0000035762786865)
})
nftPictureFrame20.addComponentOrReplace(transform141)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform142 = new Transform({
  position: new Vector3(38.5, 49, 55.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000126361846924, 3.5, 1.0000033378601074)
})
nftPictureFrame21.addComponentOrReplace(transform142)

const nftPictureFrame23 = new Entity('nftPictureFrame23')
engine.addEntity(nftPictureFrame23)
nftPictureFrame23.setParent(_scene)
const transform143 = new Transform({
  position: new Vector3(38.5, 51.5, 54.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.750045776367188, 8.75, 1.0000050067901611)
})
nftPictureFrame23.addComponentOrReplace(transform143)

const wallPlainBlack = new Entity('wallPlainBlack')
engine.addEntity(wallPlainBlack)
wallPlainBlack.setParent(_scene)
const transform144 = new Transform({
  position: new Vector3(43.97306442260742, 47.5, 21.357261657714844),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(19.623207092285156, 2.3131377696990967, 0.13999967277050018)
})
wallPlainBlack.addComponentOrReplace(transform144)
const gltfShape29 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape29.withCollisions = true
gltfShape29.isPointerBlocker = true
gltfShape29.visible = true
wallPlainBlack.addComponentOrReplace(gltfShape29)

const wallPlainBlack2 = new Entity('wallPlainBlack2')
engine.addEntity(wallPlainBlack2)
wallPlainBlack2.setParent(_scene)
wallPlainBlack2.addComponentOrReplace(gltfShape29)
const transform145 = new Transform({
  position: new Vector3(11.09113883972168, 47.5, 21.357261657714844),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(19.623218536376953, 2.3131377696990967, 0.13999976217746735)
})
wallPlainBlack2.addComponentOrReplace(transform145)

const wallPlainBlack3 = new Entity('wallPlainBlack3')
engine.addEntity(wallPlainBlack3)
wallPlainBlack3.setParent(_scene)
wallPlainBlack3.addComponentOrReplace(gltfShape29)
const transform146 = new Transform({
  position: new Vector3(43.97306442260742, 47.5, 21.386117935180664),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallPlainBlack3.addComponentOrReplace(transform146)

const wallPlainBlack4 = new Entity('wallPlainBlack4')
engine.addEntity(wallPlainBlack4)
wallPlainBlack4.setParent(_scene)
wallPlainBlack4.addComponentOrReplace(gltfShape29)
const transform147 = new Transform({
  position: new Vector3(43.97306442260742, 47.5, 60.536468505859375),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallPlainBlack4.addComponentOrReplace(transform147)

const wallPlainBlack5 = new Entity('wallPlainBlack5')
engine.addEntity(wallPlainBlack5)
wallPlainBlack5.setParent(_scene)
wallPlainBlack5.addComponentOrReplace(gltfShape29)
const transform148 = new Transform({
  position: new Vector3(21.574344635009766, 47.5, 60.536468505859375),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallPlainBlack5.addComponentOrReplace(transform148)

const wallPlainBlack6 = new Entity('wallPlainBlack6')
engine.addEntity(wallPlainBlack6)
wallPlainBlack6.setParent(_scene)
wallPlainBlack6.addComponentOrReplace(gltfShape29)
const transform149 = new Transform({
  position: new Vector3(21.574344635009766, 47.5, 21.386117935180664),
  rotation: new Quaternion(-1.7218110939706257e-15, -3.725290298461914e-8, 1.7763568394002505e-15, 1),
  scale: new Vector3(5.264899730682373, 2.3131377696990967, 0.13999971747398376)
})
wallPlainBlack6.addComponentOrReplace(transform149)

const nftPictureFrame25 = new Entity('nftPictureFrame25')
engine.addEntity(nftPictureFrame25)
nftPictureFrame25.setParent(_scene)
const transform150 = new Transform({
  position: new Vector3(11.095813751220703, 49, 31.104110717773438),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.500013589859009, 3.5, 1.0000035762786865)
})
nftPictureFrame25.addComponentOrReplace(transform150)

const nftPictureFrame26 = new Entity('nftPictureFrame26')
engine.addEntity(nftPictureFrame26)
nftPictureFrame26.setParent(_scene)
const transform151 = new Transform({
  position: new Vector3(11.095813751220703, 49, 34.10411071777344),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.500014543533325, 3.5, 1.0000038146972656)
})
nftPictureFrame26.addComponentOrReplace(transform151)

const nftPictureFrame27 = new Entity('nftPictureFrame27')
engine.addEntity(nftPictureFrame27)
nftPictureFrame27.setParent(_scene)
const transform152 = new Transform({
  position: new Vector3(11.095813751220703, 51.5, 34.10411071777344),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.500016450881958, 3.5, 1.0000042915344238)
})
nftPictureFrame27.addComponentOrReplace(transform152)

const nftPictureFrame28 = new Entity('nftPictureFrame28')
engine.addEntity(nftPictureFrame28)
nftPictureFrame28.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(11.095813751220703, 51.5, 31.104110717773438),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.5000174045562744, 3.5, 1.000004529953003)
})
nftPictureFrame28.addComponentOrReplace(transform153)

const nftPictureFrame29 = new Entity('nftPictureFrame29')
engine.addEntity(nftPictureFrame29)
nftPictureFrame29.setParent(_scene)
const transform154 = new Transform({
  position: new Vector3(11.095813751220703, 54, 31.104110717773438),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.500018358230591, 3.5, 1.000004768371582)
})
nftPictureFrame29.addComponentOrReplace(transform154)

const nftPictureFrame30 = new Entity('nftPictureFrame30')
engine.addEntity(nftPictureFrame30)
nftPictureFrame30.setParent(_scene)
const transform155 = new Transform({
  position: new Vector3(11.095813751220703, 54, 34.10411071777344),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.5000193119049072, 3.5, 1.0000050067901611)
})
nftPictureFrame30.addComponentOrReplace(transform155)

const nftPictureFrame31 = new Entity('nftPictureFrame31')
engine.addEntity(nftPictureFrame31)
nftPictureFrame31.setParent(_scene)
const transform156 = new Transform({
  position: new Vector3(11.095813751220703, 49.5, 26.604110717773438),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(7.000036716461182, 7, 1.000004768371582)
})
nftPictureFrame31.addComponentOrReplace(transform156)

const nftPictureFrame35 = new Entity('nftPictureFrame35')
engine.addEntity(nftPictureFrame35)
nftPictureFrame35.setParent(_scene)
const transform157 = new Transform({
  position: new Vector3(11.095813751220703, 54, 25.104110717773438),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.5000193119049072, 3.5, 1.0000050067901611)
})
nftPictureFrame35.addComponentOrReplace(transform157)

const nftPictureFrame36 = new Entity('nftPictureFrame36')
engine.addEntity(nftPictureFrame36)
nftPictureFrame36.setParent(_scene)
const transform158 = new Transform({
  position: new Vector3(11.095813751220703, 54, 28.104110717773438),
  rotation: new Quaternion(-8.492664037296205e-15, -0.70710688829422, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.5000202655792236, 3.5, 1.0000052452087402)
})
nftPictureFrame36.addComponentOrReplace(transform158)

const nftPictureFrame32 = new Entity('nftPictureFrame32')
engine.addEntity(nftPictureFrame32)
nftPictureFrame32.setParent(_scene)
const transform159 = new Transform({
  position: new Vector3(17.845813751220703, 50.5, 21.397174835205078),
  rotation: new Quaternion(3.6875261721360745e-17, 5.960464477539063e-8, -8.881784197001252e-16, 1),
  scale: new Vector3(7.000040054321289, 7, 1.0000048875808716)
})
nftPictureFrame32.addComponentOrReplace(transform159)

const nftPictureFrame33 = new Entity('nftPictureFrame33')
engine.addEntity(nftPictureFrame33)
nftPictureFrame33.setParent(_scene)
const transform160 = new Transform({
  position: new Vector3(13.345813751220703, 52.5, 21.397174835205078),
  rotation: new Quaternion(3.6875261721360745e-17, 5.960464477539063e-8, -8.881784197001252e-16, 1),
  scale: new Vector3(3.500018835067749, 3.5, 1.000004768371582)
})
nftPictureFrame33.addComponentOrReplace(transform160)

const nftPictureFrame34 = new Entity('nftPictureFrame34')
engine.addEntity(nftPictureFrame34)
nftPictureFrame34.setParent(_scene)
const transform161 = new Transform({
  position: new Vector3(13.345813751220703, 50, 21.397174835205078),
  rotation: new Quaternion(3.6875261721360745e-17, 5.960464477539063e-8, -8.881784197001252e-16, 1),
  scale: new Vector3(3.500014305114746, 3.5, 1.0000038146972656)
})
nftPictureFrame34.addComponentOrReplace(transform161)

const doorframeBlack = new Entity('doorframeBlack')
engine.addEntity(doorframeBlack)
doorframeBlack.setParent(_scene)
const transform162 = new Transform({
  position: new Vector3(21.87889862060547, 47.542572021484375, 39.500003814697266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.432254314422607, 2.2960193157196045, 1)
})
doorframeBlack.addComponentOrReplace(transform162)
const gltfShape30 = new GLTFShape("fb7c3a1e-aaf1-4bb1-baa1-0e0f57ed9b3f/BlackDoorframe.glb")
gltfShape30.withCollisions = true
gltfShape30.isPointerBlocker = true
gltfShape30.visible = true
doorframeBlack.addComponentOrReplace(gltfShape30)

const galleryLight = new Entity('galleryLight')
engine.addEntity(galleryLight)
galleryLight.setParent(_scene)
const transform163 = new Transform({
  position: new Vector3(18.5, 54, 21.34850311279297),
  rotation: new Quaternion(0, 0, -8.940696716308594e-8, 1),
  scale: new Vector3(4.5, 1.5, 1.5)
})
galleryLight.addComponentOrReplace(transform163)

const galleryLight2 = new Entity('galleryLight2')
engine.addEntity(galleryLight2)
galleryLight2.setParent(_scene)
const transform164 = new Transform({
  position: new Vector3(11.05478572845459, 53, 25.985076904296875),
  rotation: new Quaternion(-6.322027701344268e-8, 0.7071068286895752, -1.4751397259260557e-7, 0.7071068286895752),
  scale: new Vector3(4.500007629394531, 1.5, 1.5000038146972656)
})
galleryLight2.addComponentOrReplace(transform164)

const ringWhiteLight = new Entity('ringWhiteLight')
engine.addEntity(ringWhiteLight)
ringWhiteLight.setParent(_scene)
const transform165 = new Transform({
  position: new Vector3(16.500001907348633, 56.39739227294922, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 2, 2)
})
ringWhiteLight.addComponentOrReplace(transform165)
const gltfShape31 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape31.withCollisions = true
gltfShape31.isPointerBlocker = true
gltfShape31.visible = true
ringWhiteLight.addComponentOrReplace(gltfShape31)

const ringPurpleLight = new Entity('ringPurpleLight')
engine.addEntity(ringPurpleLight)
ringPurpleLight.setParent(_scene)
const transform166 = new Transform({
  position: new Vector3(16.55759620666504, 38, 47.76373291015625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.7026450634002686, 1, 1.734947681427002)
})
ringPurpleLight.addComponentOrReplace(transform166)
const gltfShape32 = new GLTFShape("d1335dc0-98a6-430b-87db-0591e03455a5/Ring_Purple_Light.glb")
gltfShape32.withCollisions = true
gltfShape32.isPointerBlocker = true
gltfShape32.visible = true
ringPurpleLight.addComponentOrReplace(gltfShape32)

const ringGreenLight = new Entity('ringGreenLight')
engine.addEntity(ringGreenLight)
ringGreenLight.setParent(_scene)
const transform167 = new Transform({
  position: new Vector3(16.544048309326172, 47.55891799926758, 47.6561164855957),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6489653587341309, 1, 1.7172220945358276)
})
ringGreenLight.addComponentOrReplace(transform167)
const gltfShape33 = new GLTFShape("8afb65e1-05e3-46a7-949a-e9ed299e623c/Ring_Green_Light.glb")
gltfShape33.withCollisions = true
gltfShape33.isPointerBlocker = true
gltfShape33.visible = true
ringGreenLight.addComponentOrReplace(gltfShape33)

const ringRedLight = new Entity('ringRedLight')
engine.addEntity(ringRedLight)
ringRedLight.setParent(_scene)
const transform168 = new Transform({
  position: new Vector3(16.563888549804688, 56.855899810791016, 47.72080993652344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.736613392829895, 1, 1.7327123880386353)
})
ringRedLight.addComponentOrReplace(transform168)
const gltfShape34 = new GLTFShape("4bd7a0cc-0016-49c2-8075-7ec361af961a/Ring_Red_Light.glb")
gltfShape34.withCollisions = true
gltfShape34.isPointerBlocker = true
gltfShape34.visible = true
ringRedLight.addComponentOrReplace(gltfShape34)

const ringBlueLight = new Entity('ringBlueLight')
engine.addEntity(ringBlueLight)
ringBlueLight.setParent(_scene)
const transform169 = new Transform({
  position: new Vector3(16.5650634765625, 71.58967590332031, 47.67985153198242),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.765059471130371, 1, 1.7139307260513306)
})
ringBlueLight.addComponentOrReplace(transform169)
const gltfShape35 = new GLTFShape("c64dfc6d-582d-497a-a657-e204c1672a7b/Ring_Blue_Light.glb")
gltfShape35.withCollisions = true
gltfShape35.isPointerBlocker = true
gltfShape35.visible = true
ringBlueLight.addComponentOrReplace(gltfShape35)

const spotlight = new Entity('spotlight')
engine.addEntity(spotlight)
spotlight.setParent(_scene)
const transform170 = new Transform({
  position: new Vector3(32.5, 79, 32.88615417480469),
  rotation: new Quaternion(-0.9385530352592468, -0.2681880593299866, 0.11108724027872086, -0.1866898238658905),
  scale: new Vector3(0.9999998807907104, 0.38615572452545166, 1.0000020265579224)
})
spotlight.addComponentOrReplace(transform170)
const gltfShape36 = new GLTFShape("3ddda096-a798-432e-ba66-61354bccbcc9/Spotlight.glb")
gltfShape36.withCollisions = true
gltfShape36.isPointerBlocker = true
gltfShape36.visible = true
spotlight.addComponentOrReplace(gltfShape36)

const spotlight2 = new Entity('spotlight2')
engine.addEntity(spotlight2)
spotlight2.setParent(_scene)
spotlight2.addComponentOrReplace(gltfShape36)
const transform171 = new Transform({
  position: new Vector3(21.759010314941406, 79, 32.88615417480469),
  rotation: new Quaternion(0.9569404125213623, 1.5426704018899192e-15, -1.1407617961367578e-7, 0.2902846932411194),
  scale: new Vector3(1, 0.3861556649208069, 1.0000025033950806)
})
spotlight2.addComponentOrReplace(transform171)

const spotlight3 = new Entity('spotlight3')
engine.addEntity(spotlight3)
spotlight3.setParent(_scene)
spotlight3.addComponentOrReplace(gltfShape36)
const transform172 = new Transform({
  position: new Vector3(23.759010314941406, 79, 32.88615417480469),
  rotation: new Quaternion(0.9194307923316956, 0.03750952333211899, -0.09055615216493607, 0.3808406591415405),
  scale: new Vector3(0.9999999403953552, 0.38615596294403076, 1.0000028610229492)
})
spotlight3.addComponentOrReplace(transform172)

const spotlight4 = new Entity('spotlight4')
engine.addEntity(spotlight4)
spotlight4.setParent(_scene)
spotlight4.addComponentOrReplace(gltfShape36)
const transform173 = new Transform({
  position: new Vector3(30.5, 79, 32.88615417480469),
  rotation: new Quaternion(0.9385530352592468, -0.05663171783089638, 0.18668970465660095, 0.2847069501876831),
  scale: new Vector3(0.9999999403953552, 0.38615596294403076, 1.000003695487976)
})
spotlight4.addComponentOrReplace(transform173)

const nftPictureFrame37 = new Entity('nftPictureFrame37')
engine.addEntity(nftPictureFrame37)
nftPictureFrame37.setParent(_scene)
const transform174 = new Transform({
  position: new Vector3(43.94169235229492, 49, 52.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500014543533325, 3.5, 1.0000038146972656)
})
nftPictureFrame37.addComponentOrReplace(transform174)

const nftPictureFrame38 = new Entity('nftPictureFrame38')
engine.addEntity(nftPictureFrame38)
nftPictureFrame38.setParent(_scene)
const transform175 = new Transform({
  position: new Vector3(43.94169235229492, 49, 55.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500013589859009, 3.5, 1.0000035762786865)
})
nftPictureFrame38.addComponentOrReplace(transform175)

const nftPictureFrame39 = new Entity('nftPictureFrame39')
engine.addEntity(nftPictureFrame39)
nftPictureFrame39.setParent(_scene)
const transform176 = new Transform({
  position: new Vector3(43.94169235229492, 51.5, 54.10411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.75004768371582, 8.75, 1.0000052452087402)
})
nftPictureFrame39.addComponentOrReplace(transform176)

const nftPictureFrame40 = new Entity('nftPictureFrame40')
engine.addEntity(nftPictureFrame40)
nftPictureFrame40.setParent(_scene)
const transform177 = new Transform({
  position: new Vector3(43.89124298095703, 54, 46.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000174045562744, 3.5, 1.000004529953003)
})
nftPictureFrame40.addComponentOrReplace(transform177)

const nftPictureFrame41 = new Entity('nftPictureFrame41')
engine.addEntity(nftPictureFrame41)
nftPictureFrame41.setParent(_scene)
const transform178 = new Transform({
  position: new Vector3(43.89124298095703, 54, 49.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500016450881958, 3.5, 1.0000042915344238)
})
nftPictureFrame41.addComponentOrReplace(transform178)

const nftPictureFrame42 = new Entity('nftPictureFrame42')
engine.addEntity(nftPictureFrame42)
nftPictureFrame42.setParent(_scene)
const transform179 = new Transform({
  position: new Vector3(43.89124298095703, 51.5, 49.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000154972076416, 3.5, 1.0000040531158447)
})
nftPictureFrame42.addComponentOrReplace(transform179)

const nftPictureFrame43 = new Entity('nftPictureFrame43')
engine.addEntity(nftPictureFrame43)
nftPictureFrame43.setParent(_scene)
const transform180 = new Transform({
  position: new Vector3(43.89124298095703, 51.5, 46.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500014543533325, 3.5, 1.0000038146972656)
})
nftPictureFrame43.addComponentOrReplace(transform180)

const nftPictureFrame44 = new Entity('nftPictureFrame44')
engine.addEntity(nftPictureFrame44)
nftPictureFrame44.setParent(_scene)
const transform181 = new Transform({
  position: new Vector3(43.89124298095703, 49, 49.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500011682510376, 3.5, 1.0000030994415283)
})
nftPictureFrame44.addComponentOrReplace(transform181)

const nftPictureFrame45 = new Entity('nftPictureFrame45')
engine.addEntity(nftPictureFrame45)
nftPictureFrame45.setParent(_scene)
const transform182 = new Transform({
  position: new Vector3(43.89124298095703, 49, 46.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000126361846924, 3.5, 1.0000033378601074)
})
nftPictureFrame45.addComponentOrReplace(transform182)

const nftPictureFrame46 = new Entity('nftPictureFrame46')
engine.addEntity(nftPictureFrame46)
nftPictureFrame46.setParent(_scene)
const transform183 = new Transform({
  position: new Vector3(43.94169235229492, 53.25267791748047, 42.10411071777344),
  rotation: new Quaternion(0.7071067690849304, -5.795191881929895e-8, -0.70710688829422, -2.6341774983507094e-8),
  scale: new Vector3(8.750057220458984, 8.75001335144043, 1.0000064373016357)
})
nftPictureFrame46.addComponentOrReplace(transform183)

const nftPictureFrame47 = new Entity('nftPictureFrame47')
engine.addEntity(nftPictureFrame47)
nftPictureFrame47.setParent(_scene)
const transform184 = new Transform({
  position: new Vector3(43.94169235229492, 55.75267791748047, 43.60411071777344),
  rotation: new Quaternion(0.7071067690849304, -5.795191881929895e-8, -0.70710688829422, -2.6341774983507094e-8),
  scale: new Vector3(3.5000193119049072, 3.500006675720215, 1.0000050067901611)
})
nftPictureFrame47.addComponentOrReplace(transform184)

const nftPictureFrame48 = new Entity('nftPictureFrame48')
engine.addEntity(nftPictureFrame48)
nftPictureFrame48.setParent(_scene)
const transform185 = new Transform({
  position: new Vector3(43.94169235229492, 55.75267791748047, 40.60411071777344),
  rotation: new Quaternion(0.7071067690849304, -5.795191881929895e-8, -0.70710688829422, -2.6341774983507094e-8),
  scale: new Vector3(3.500018358230591, 3.500006675720215, 1.000004768371582)
})
nftPictureFrame48.addComponentOrReplace(transform185)

const nftPictureFrame49 = new Entity('nftPictureFrame49')
engine.addEntity(nftPictureFrame49)
nftPictureFrame49.setParent(_scene)
const transform186 = new Transform({
  position: new Vector3(43.94169235229492, 53.25267791748047, 33.10411071777344),
  rotation: new Quaternion(0.7071067690849304, -5.795191881929895e-8, -0.70710688829422, -2.6341774983507094e-8),
  scale: new Vector3(8.750062942504883, 8.750024795532227, 1.000007152557373)
})
nftPictureFrame49.addComponentOrReplace(transform186)

const nftPictureFrame50 = new Entity('nftPictureFrame50')
engine.addEntity(nftPictureFrame50)
nftPictureFrame50.setParent(_scene)
const transform187 = new Transform({
  position: new Vector3(43.94169235229492, 55.75267791748047, 34.60411071777344),
  rotation: new Quaternion(0.7071067690849304, -5.795191881929895e-8, -0.70710688829422, -2.6341774983507094e-8),
  scale: new Vector3(3.5000221729278564, 3.5000123977661133, 1.0000057220458984)
})
nftPictureFrame50.addComponentOrReplace(transform187)

const nftPictureFrame51 = new Entity('nftPictureFrame51')
engine.addEntity(nftPictureFrame51)
nftPictureFrame51.setParent(_scene)
const transform188 = new Transform({
  position: new Vector3(43.94169235229492, 55.75267791748047, 31.604110717773438),
  rotation: new Quaternion(0.7071067690849304, -5.795191881929895e-8, -0.70710688829422, -2.6341774983507094e-8),
  scale: new Vector3(3.50002121925354, 3.5000123977661133, 1.0000054836273193)
})
nftPictureFrame51.addComponentOrReplace(transform188)

const nftPictureFrame52 = new Entity('nftPictureFrame52')
engine.addEntity(nftPictureFrame52)
nftPictureFrame52.setParent(_scene)
const transform189 = new Transform({
  position: new Vector3(43.89124298095703, 54, 37.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000202655792236, 3.5, 1.0000052452087402)
})
nftPictureFrame52.addComponentOrReplace(transform189)

const nftPictureFrame53 = new Entity('nftPictureFrame53')
engine.addEntity(nftPictureFrame53)
nftPictureFrame53.setParent(_scene)
const transform190 = new Transform({
  position: new Vector3(43.89124298095703, 51.5, 37.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000174045562744, 3.5, 1.000004529953003)
})
nftPictureFrame53.addComponentOrReplace(transform190)

const nftPictureFrame54 = new Entity('nftPictureFrame54')
engine.addEntity(nftPictureFrame54)
nftPictureFrame54.setParent(_scene)
const transform191 = new Transform({
  position: new Vector3(43.89124298095703, 49, 37.60411071777344),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000154972076416, 3.5, 1.0000040531158447)
})
nftPictureFrame54.addComponentOrReplace(transform191)

const nftPictureFrame55 = new Entity('nftPictureFrame55')
engine.addEntity(nftPictureFrame55)
nftPictureFrame55.setParent(_scene)
const transform192 = new Transform({
  position: new Vector3(43.89124298095703, 54, 25.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000202655792236, 3.5, 1.0000052452087402)
})
nftPictureFrame55.addComponentOrReplace(transform192)

const nftPictureFrame56 = new Entity('nftPictureFrame56')
engine.addEntity(nftPictureFrame56)
nftPictureFrame56.setParent(_scene)
const transform193 = new Transform({
  position: new Vector3(43.89124298095703, 51.5, 25.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000174045562744, 3.5, 1.000004529953003)
})
nftPictureFrame56.addComponentOrReplace(transform193)

const nftPictureFrame57 = new Entity('nftPictureFrame57')
engine.addEntity(nftPictureFrame57)
nftPictureFrame57.setParent(_scene)
const transform194 = new Transform({
  position: new Vector3(43.89124298095703, 49, 25.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000154972076416, 3.5, 1.0000040531158447)
})
nftPictureFrame57.addComponentOrReplace(transform194)

const nftPictureFrame58 = new Entity('nftPictureFrame58')
engine.addEntity(nftPictureFrame58)
nftPictureFrame58.setParent(_scene)
const transform195 = new Transform({
  position: new Vector3(43.89124298095703, 49, 28.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500014543533325, 3.5, 1.0000038146972656)
})
nftPictureFrame58.addComponentOrReplace(transform195)

const nftPictureFrame59 = new Entity('nftPictureFrame59')
engine.addEntity(nftPictureFrame59)
nftPictureFrame59.setParent(_scene)
const transform196 = new Transform({
  position: new Vector3(43.89124298095703, 51.5, 28.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.500018358230591, 3.5, 1.000004768371582)
})
nftPictureFrame59.addComponentOrReplace(transform196)

const nftPictureFrame60 = new Entity('nftPictureFrame60')
engine.addEntity(nftPictureFrame60)
nftPictureFrame60.setParent(_scene)
const transform197 = new Transform({
  position: new Vector3(43.89124298095703, 54, 28.604110717773438),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5000193119049072, 3.5, 1.0000050067901611)
})
nftPictureFrame60.addComponentOrReplace(transform197)

const wallCorrugatedMetal = new Entity('wallCorrugatedMetal')
engine.addEntity(wallCorrugatedMetal)
wallCorrugatedMetal.setParent(_scene)
const transform198 = new Transform({
  position: new Vector3(35.5, 56.84843444824219, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal.addComponentOrReplace(transform198)
const gltfShape37 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape37.withCollisions = true
gltfShape37.isPointerBlocker = true
gltfShape37.visible = true
wallCorrugatedMetal.addComponentOrReplace(gltfShape37)

const wallCorrugatedMetal2 = new Entity('wallCorrugatedMetal2')
engine.addEntity(wallCorrugatedMetal2)
wallCorrugatedMetal2.setParent(_scene)
wallCorrugatedMetal2.addComponentOrReplace(gltfShape37)
const transform199 = new Transform({
  position: new Vector3(37.5, 56.84843444824219, 60.08271789550781),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal2.addComponentOrReplace(transform199)

const wallCorrugatedMetal3 = new Entity('wallCorrugatedMetal3')
engine.addEntity(wallCorrugatedMetal3)
wallCorrugatedMetal3.setParent(_scene)
wallCorrugatedMetal3.addComponentOrReplace(gltfShape37)
const transform200 = new Transform({
  position: new Vector3(39.5, 56.84843444824219, 60.37971496582031),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal3.addComponentOrReplace(transform200)

const wallCorrugatedMetal4 = new Entity('wallCorrugatedMetal4')
engine.addEntity(wallCorrugatedMetal4)
wallCorrugatedMetal4.setParent(_scene)
wallCorrugatedMetal4.addComponentOrReplace(gltfShape37)
const transform201 = new Transform({
  position: new Vector3(41.5, 56.84843444824219, 60.58368682861328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal4.addComponentOrReplace(transform201)

const wallCorrugatedMetal5 = new Entity('wallCorrugatedMetal5')
engine.addEntity(wallCorrugatedMetal5)
wallCorrugatedMetal5.setParent(_scene)
wallCorrugatedMetal5.addComponentOrReplace(gltfShape37)
const transform202 = new Transform({
  position: new Vector3(43.5, 56.84843444824219, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.6522276401519775, 1)
})
wallCorrugatedMetal5.addComponentOrReplace(transform202)

const wallCorrugatedMetal6 = new Entity('wallCorrugatedMetal6')
engine.addEntity(wallCorrugatedMetal6)
wallCorrugatedMetal6.setParent(_scene)
wallCorrugatedMetal6.addComponentOrReplace(gltfShape37)
const transform203 = new Transform({
  position: new Vector3(13.5, 56.84843444824219, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.86922287940979, 1)
})
wallCorrugatedMetal6.addComponentOrReplace(transform203)

const wallCorrugatedMetal7 = new Entity('wallCorrugatedMetal7')
engine.addEntity(wallCorrugatedMetal7)
wallCorrugatedMetal7.setParent(_scene)
wallCorrugatedMetal7.addComponentOrReplace(gltfShape37)
const transform204 = new Transform({
  position: new Vector3(15.5, 56.84843444824219, 60.53369140625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal7.addComponentOrReplace(transform204)

const wallCorrugatedMetal8 = new Entity('wallCorrugatedMetal8')
engine.addEntity(wallCorrugatedMetal8)
wallCorrugatedMetal8.setParent(_scene)
wallCorrugatedMetal8.addComponentOrReplace(gltfShape37)
const transform205 = new Transform({
  position: new Vector3(17.5, 56.84843444824219, 60.637943267822266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal8.addComponentOrReplace(transform205)

const wallCorrugatedMetal9 = new Entity('wallCorrugatedMetal9')
engine.addEntity(wallCorrugatedMetal9)
wallCorrugatedMetal9.setParent(_scene)
wallCorrugatedMetal9.addComponentOrReplace(gltfShape37)
const transform206 = new Transform({
  position: new Vector3(19.5, 56.84843444824219, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal9.addComponentOrReplace(transform206)

const wallCorrugatedMetal10 = new Entity('wallCorrugatedMetal10')
engine.addEntity(wallCorrugatedMetal10)
wallCorrugatedMetal10.setParent(_scene)
wallCorrugatedMetal10.addComponentOrReplace(gltfShape37)
const transform207 = new Transform({
  position: new Vector3(21.5, 56.84843444824219, 60.637943267822266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal10.addComponentOrReplace(transform207)

const wallCorrugatedMetal11 = new Entity('wallCorrugatedMetal11')
engine.addEntity(wallCorrugatedMetal11)
wallCorrugatedMetal11.setParent(_scene)
wallCorrugatedMetal11.addComponentOrReplace(gltfShape37)
const transform208 = new Transform({
  position: new Vector3(13.5, 56.84843444824219, 22.180461883544922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.86922287940979, 1)
})
wallCorrugatedMetal11.addComponentOrReplace(transform208)

const wallCorrugatedMetal12 = new Entity('wallCorrugatedMetal12')
engine.addEntity(wallCorrugatedMetal12)
wallCorrugatedMetal12.setParent(_scene)
wallCorrugatedMetal12.addComponentOrReplace(gltfShape37)
const transform209 = new Transform({
  position: new Vector3(15.5, 56.84843444824219, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal12.addComponentOrReplace(transform209)

const wallCorrugatedMetal13 = new Entity('wallCorrugatedMetal13')
engine.addEntity(wallCorrugatedMetal13)
wallCorrugatedMetal13.setParent(_scene)
wallCorrugatedMetal13.addComponentOrReplace(gltfShape37)
const transform210 = new Transform({
  position: new Vector3(17.5, 56.84843444824219, 21.828968048095703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal13.addComponentOrReplace(transform210)

const wallCorrugatedMetal14 = new Entity('wallCorrugatedMetal14')
engine.addEntity(wallCorrugatedMetal14)
wallCorrugatedMetal14.setParent(_scene)
wallCorrugatedMetal14.addComponentOrReplace(gltfShape37)
const transform211 = new Transform({
  position: new Vector3(19.5, 56.84843444824219, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal14.addComponentOrReplace(transform211)

const wallCorrugatedMetal15 = new Entity('wallCorrugatedMetal15')
engine.addEntity(wallCorrugatedMetal15)
wallCorrugatedMetal15.setParent(_scene)
wallCorrugatedMetal15.addComponentOrReplace(gltfShape37)
const transform212 = new Transform({
  position: new Vector3(21.5, 56.84843444824219, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal15.addComponentOrReplace(transform212)

const wallCorrugatedMetal16 = new Entity('wallCorrugatedMetal16')
engine.addEntity(wallCorrugatedMetal16)
wallCorrugatedMetal16.setParent(_scene)
wallCorrugatedMetal16.addComponentOrReplace(gltfShape37)
const transform213 = new Transform({
  position: new Vector3(41.5, 56.84843444824219, 22),
  rotation: new Quaternion(-2.140074904533615e-15, 1, -1.1920928244535389e-7, -4.470348358154297e-8),
  scale: new Vector3(1, 2.86922287940979, 1)
})
wallCorrugatedMetal16.addComponentOrReplace(transform213)

const wallCorrugatedMetal17 = new Entity('wallCorrugatedMetal17')
engine.addEntity(wallCorrugatedMetal17)
wallCorrugatedMetal17.setParent(_scene)
wallCorrugatedMetal17.addComponentOrReplace(gltfShape37)
const transform214 = new Transform({
  position: new Vector3(39.5, 56.84843444824219, 21.76665496826172),
  rotation: new Quaternion(-2.140074904533615e-15, 1, -1.1920928244535389e-7, -4.470348358154297e-8),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal17.addComponentOrReplace(transform214)

const wallCorrugatedMetal18 = new Entity('wallCorrugatedMetal18')
engine.addEntity(wallCorrugatedMetal18)
wallCorrugatedMetal18.setParent(_scene)
wallCorrugatedMetal18.addComponentOrReplace(gltfShape37)
const transform215 = new Transform({
  position: new Vector3(37.5, 56.84843444824219, 22.105985641479492),
  rotation: new Quaternion(-2.140074904533615e-15, 1, -1.1920928244535389e-7, -4.470348358154297e-8),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal18.addComponentOrReplace(transform215)

const wallCorrugatedMetal19 = new Entity('wallCorrugatedMetal19')
engine.addEntity(wallCorrugatedMetal19)
wallCorrugatedMetal19.setParent(_scene)
wallCorrugatedMetal19.addComponentOrReplace(gltfShape37)
const transform216 = new Transform({
  position: new Vector3(35.5, 56.84843444824219, 22),
  rotation: new Quaternion(-2.140074904533615e-15, 1, -1.1920928244535389e-7, -4.470348358154297e-8),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal19.addComponentOrReplace(transform216)

const wallCorrugatedMetal20 = new Entity('wallCorrugatedMetal20')
engine.addEntity(wallCorrugatedMetal20)
wallCorrugatedMetal20.setParent(_scene)
wallCorrugatedMetal20.addComponentOrReplace(gltfShape37)
const transform217 = new Transform({
  position: new Vector3(33.5, 56.84843444824219, 22),
  rotation: new Quaternion(-2.140074904533615e-15, 1, -1.1920928244535389e-7, -4.470348358154297e-8),
  scale: new Vector3(1, 3.441601037979126, 1)
})
wallCorrugatedMetal20.addComponentOrReplace(transform217)

const wallCorrugatedMetal21 = new Entity('wallCorrugatedMetal21')
engine.addEntity(wallCorrugatedMetal21)
wallCorrugatedMetal21.setParent(_scene)
wallCorrugatedMetal21.addComponentOrReplace(gltfShape37)
const transform218 = new Transform({
  position: new Vector3(11.268433570861816, 56.84843444824219, 60.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 2.5994718074798584, 1.0000014305114746)
})
wallCorrugatedMetal21.addComponentOrReplace(transform218)

const wallCorrugatedMetal22 = new Entity('wallCorrugatedMetal22')
engine.addEntity(wallCorrugatedMetal22)
wallCorrugatedMetal22.setParent(_scene)
wallCorrugatedMetal22.addComponentOrReplace(gltfShape37)
const transform219 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 58.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 2.5994718074798584, 1.0000011920928955)
})
wallCorrugatedMetal22.addComponentOrReplace(transform219)

const wallCorrugatedMetal23 = new Entity('wallCorrugatedMetal23')
engine.addEntity(wallCorrugatedMetal23)
wallCorrugatedMetal23.setParent(_scene)
wallCorrugatedMetal23.addComponentOrReplace(gltfShape37)
const transform220 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 56.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 2.5994718074798584, 1.0000014305114746)
})
wallCorrugatedMetal23.addComponentOrReplace(transform220)

const wallCorrugatedMetal24 = new Entity('wallCorrugatedMetal24')
engine.addEntity(wallCorrugatedMetal24)
wallCorrugatedMetal24.setParent(_scene)
wallCorrugatedMetal24.addComponentOrReplace(gltfShape37)
const transform221 = new Transform({
  position: new Vector3(11.232842445373535, 56.84843444824219, 54.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 2.5994718074798584, 1.0000019073486328)
})
wallCorrugatedMetal24.addComponentOrReplace(transform221)

const wallCorrugatedMetal25 = new Entity('wallCorrugatedMetal25')
engine.addEntity(wallCorrugatedMetal25)
wallCorrugatedMetal25.setParent(_scene)
wallCorrugatedMetal25.addComponentOrReplace(gltfShape37)
const transform222 = new Transform({
  position: new Vector3(11.083913803100586, 56.84843444824219, 52.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 2.4903154373168945, 1.000002384185791)
})
wallCorrugatedMetal25.addComponentOrReplace(transform222)

const wallCorrugatedMetal26 = new Entity('wallCorrugatedMetal26')
engine.addEntity(wallCorrugatedMetal26)
wallCorrugatedMetal26.setParent(_scene)
wallCorrugatedMetal26.addComponentOrReplace(gltfShape37)
const transform223 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 50.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 2.5994718074798584, 1.000002145767212)
})
wallCorrugatedMetal26.addComponentOrReplace(transform223)

const wallCorrugatedMetal27 = new Entity('wallCorrugatedMetal27')
engine.addEntity(wallCorrugatedMetal27)
wallCorrugatedMetal27.setParent(_scene)
wallCorrugatedMetal27.addComponentOrReplace(gltfShape37)
const transform224 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 48.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 2.5994718074798584, 1.000002384185791)
})
wallCorrugatedMetal27.addComponentOrReplace(transform224)

const wallCorrugatedMetal28 = new Entity('wallCorrugatedMetal28')
engine.addEntity(wallCorrugatedMetal28)
wallCorrugatedMetal28.setParent(_scene)
wallCorrugatedMetal28.addComponentOrReplace(gltfShape37)
const transform225 = new Transform({
  position: new Vector3(11.003806114196777, 56.84843444824219, 46.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 2.346181631088257, 1.0000030994415283)
})
wallCorrugatedMetal28.addComponentOrReplace(transform225)

const wallCorrugatedMetal29 = new Entity('wallCorrugatedMetal29')
engine.addEntity(wallCorrugatedMetal29)
wallCorrugatedMetal29.setParent(_scene)
wallCorrugatedMetal29.addComponentOrReplace(gltfShape37)
const transform226 = new Transform({
  position: new Vector3(11.003806114196777, 56.84843444824219, 44.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 2.346181631088257, 1.0000033378601074)
})
wallCorrugatedMetal29.addComponentOrReplace(transform226)

const wallCorrugatedMetal30 = new Entity('wallCorrugatedMetal30')
engine.addEntity(wallCorrugatedMetal30)
wallCorrugatedMetal30.setParent(_scene)
wallCorrugatedMetal30.addComponentOrReplace(gltfShape37)
const transform227 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 42.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 2.5994718074798584, 1.0000030994415283)
})
wallCorrugatedMetal30.addComponentOrReplace(transform227)

const wallCorrugatedMetal31 = new Entity('wallCorrugatedMetal31')
engine.addEntity(wallCorrugatedMetal31)
wallCorrugatedMetal31.setParent(_scene)
wallCorrugatedMetal31.addComponentOrReplace(gltfShape37)
const transform228 = new Transform({
  position: new Vector3(11.326261520385742, 56.84843444824219, 40.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 2.5994718074798584, 1.0000035762786865)
})
wallCorrugatedMetal31.addComponentOrReplace(transform228)

const wallCorrugatedMetal32 = new Entity('wallCorrugatedMetal32')
engine.addEntity(wallCorrugatedMetal32)
wallCorrugatedMetal32.setParent(_scene)
wallCorrugatedMetal32.addComponentOrReplace(gltfShape37)
const transform229 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 38.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 2.5994718074798584, 1.0000035762786865)
})
wallCorrugatedMetal32.addComponentOrReplace(transform229)

const wallCorrugatedMetal33 = new Entity('wallCorrugatedMetal33')
engine.addEntity(wallCorrugatedMetal33)
wallCorrugatedMetal33.setParent(_scene)
wallCorrugatedMetal33.addComponentOrReplace(gltfShape37)
const transform230 = new Transform({
  position: new Vector3(11.326261520385742, 56.84843444824219, 36.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000042915344238, 2.5994718074798584, 1.0000042915344238)
})
wallCorrugatedMetal33.addComponentOrReplace(transform230)

const wallCorrugatedMetal34 = new Entity('wallCorrugatedMetal34')
engine.addEntity(wallCorrugatedMetal34)
wallCorrugatedMetal34.setParent(_scene)
wallCorrugatedMetal34.addComponentOrReplace(gltfShape37)
const transform231 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 34.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000042915344238, 2.5994718074798584, 1.0000042915344238)
})
wallCorrugatedMetal34.addComponentOrReplace(transform231)

const wallCorrugatedMetal35 = new Entity('wallCorrugatedMetal35')
engine.addEntity(wallCorrugatedMetal35)
wallCorrugatedMetal35.setParent(_scene)
wallCorrugatedMetal35.addComponentOrReplace(gltfShape37)
const transform232 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 32.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004529953003, 2.5994718074798584, 1.000004529953003)
})
wallCorrugatedMetal35.addComponentOrReplace(transform232)

const wallCorrugatedMetal36 = new Entity('wallCorrugatedMetal36')
engine.addEntity(wallCorrugatedMetal36)
wallCorrugatedMetal36.setParent(_scene)
wallCorrugatedMetal36.addComponentOrReplace(gltfShape37)
const transform233 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 30.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004768371582, 2.5994718074798584, 1.000004768371582)
})
wallCorrugatedMetal36.addComponentOrReplace(transform233)

const wallCorrugatedMetal37 = new Entity('wallCorrugatedMetal37')
engine.addEntity(wallCorrugatedMetal37)
wallCorrugatedMetal37.setParent(_scene)
wallCorrugatedMetal37.addComponentOrReplace(gltfShape37)
const transform234 = new Transform({
  position: new Vector3(11.335603713989258, 56.84843444824219, 28.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000052452087402, 2.5994718074798584, 1.0000052452087402)
})
wallCorrugatedMetal37.addComponentOrReplace(transform234)

const wallCorrugatedMetal38 = new Entity('wallCorrugatedMetal38')
engine.addEntity(wallCorrugatedMetal38)
wallCorrugatedMetal38.setParent(_scene)
wallCorrugatedMetal38.addComponentOrReplace(gltfShape37)
const transform235 = new Transform({
  position: new Vector3(11.335603713989258, 56.84843444824219, 26.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000054836273193, 2.5994718074798584, 1.0000054836273193)
})
wallCorrugatedMetal38.addComponentOrReplace(transform235)

const wallCorrugatedMetal39 = new Entity('wallCorrugatedMetal39')
engine.addEntity(wallCorrugatedMetal39)
wallCorrugatedMetal39.setParent(_scene)
wallCorrugatedMetal39.addComponentOrReplace(gltfShape37)
const transform236 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 24.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000054836273193, 2.5994718074798584, 1.0000054836273193)
})
wallCorrugatedMetal39.addComponentOrReplace(transform236)

const wallCorrugatedMetal40 = new Entity('wallCorrugatedMetal40')
engine.addEntity(wallCorrugatedMetal40)
wallCorrugatedMetal40.setParent(_scene)
wallCorrugatedMetal40.addComponentOrReplace(gltfShape37)
const transform237 = new Transform({
  position: new Vector3(11.1954345703125, 56.84843444824219, 22.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.5000030994415283, 2.5994718074798584, 1.0000061988830566)
})
wallCorrugatedMetal40.addComponentOrReplace(transform237)

const wallCorrugatedMetal41 = new Entity('wallCorrugatedMetal41')
engine.addEntity(wallCorrugatedMetal41)
wallCorrugatedMetal41.setParent(_scene)
wallCorrugatedMetal41.addComponentOrReplace(gltfShape37)
const transform238 = new Transform({
  position: new Vector3(43.50428009033203, 56.84843444824219, 60.54208755493164),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 2.5994718074798584, 1.0000026226043701)
})
wallCorrugatedMetal41.addComponentOrReplace(transform238)

const wallCorrugatedMetal42 = new Entity('wallCorrugatedMetal42')
engine.addEntity(wallCorrugatedMetal42)
wallCorrugatedMetal42.setParent(_scene)
wallCorrugatedMetal42.addComponentOrReplace(gltfShape37)
const transform239 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 56.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 2.5994718074798584, 1.0000028610229492)
})
wallCorrugatedMetal42.addComponentOrReplace(transform239)

const wallCorrugatedMetal43 = new Entity('wallCorrugatedMetal43')
engine.addEntity(wallCorrugatedMetal43)
wallCorrugatedMetal43.setParent(_scene)
wallCorrugatedMetal43.addComponentOrReplace(gltfShape37)
const transform240 = new Transform({
  position: new Vector3(43.72320556640625, 56.84843444824219, 54.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 2.333955764770508, 1.0000035762786865)
})
wallCorrugatedMetal43.addComponentOrReplace(transform240)

const wallCorrugatedMetal44 = new Entity('wallCorrugatedMetal44')
engine.addEntity(wallCorrugatedMetal44)
wallCorrugatedMetal44.setParent(_scene)
wallCorrugatedMetal44.addComponentOrReplace(gltfShape37)
const transform241 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 58.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 2.5994718074798584, 1.0000026226043701)
})
wallCorrugatedMetal44.addComponentOrReplace(transform241)

const wallCorrugatedMetal45 = new Entity('wallCorrugatedMetal45')
engine.addEntity(wallCorrugatedMetal45)
wallCorrugatedMetal45.setParent(_scene)
wallCorrugatedMetal45.addComponentOrReplace(gltfShape37)
const transform242 = new Transform({
  position: new Vector3(43.69071578979492, 56.84843444824219, 48.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000042915344238, 2.333955764770508, 1.0000042915344238)
})
wallCorrugatedMetal45.addComponentOrReplace(transform242)

const wallCorrugatedMetal46 = new Entity('wallCorrugatedMetal46')
engine.addEntity(wallCorrugatedMetal46)
wallCorrugatedMetal46.setParent(_scene)
wallCorrugatedMetal46.addComponentOrReplace(gltfShape37)
const transform243 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 50.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 2.5994718074798584, 1.0000035762786865)
})
wallCorrugatedMetal46.addComponentOrReplace(transform243)

const wallCorrugatedMetal47 = new Entity('wallCorrugatedMetal47')
engine.addEntity(wallCorrugatedMetal47)
wallCorrugatedMetal47.setParent(_scene)
wallCorrugatedMetal47.addComponentOrReplace(gltfShape37)
const transform244 = new Transform({
  position: new Vector3(43.55057907104492, 56.84843444824219, 52.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 2.5994718074798584, 1.0000035762786865)
})
wallCorrugatedMetal47.addComponentOrReplace(transform244)

const wallCorrugatedMetal48 = new Entity('wallCorrugatedMetal48')
engine.addEntity(wallCorrugatedMetal48)
wallCorrugatedMetal48.setParent(_scene)
wallCorrugatedMetal48.addComponentOrReplace(gltfShape37)
const transform245 = new Transform({
  position: new Vector3(43.52910232543945, 56.84843444824219, 44.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004529953003, 2.5994718074798584, 1.000004529953003)
})
wallCorrugatedMetal48.addComponentOrReplace(transform245)

const wallCorrugatedMetal49 = new Entity('wallCorrugatedMetal49')
engine.addEntity(wallCorrugatedMetal49)
wallCorrugatedMetal49.setParent(_scene)
wallCorrugatedMetal49.addComponentOrReplace(gltfShape37)
const transform246 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 46.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000040531158447, 2.5994718074798584, 1.0000040531158447)
})
wallCorrugatedMetal49.addComponentOrReplace(transform246)

const wallCorrugatedMetal50 = new Entity('wallCorrugatedMetal50')
engine.addEntity(wallCorrugatedMetal50)
wallCorrugatedMetal50.setParent(_scene)
wallCorrugatedMetal50.addComponentOrReplace(gltfShape37)
const transform247 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 42.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004529953003, 2.5994718074798584, 1.000004529953003)
})
wallCorrugatedMetal50.addComponentOrReplace(transform247)

const wallCorrugatedMetal51 = new Entity('wallCorrugatedMetal51')
engine.addEntity(wallCorrugatedMetal51)
wallCorrugatedMetal51.setParent(_scene)
wallCorrugatedMetal51.addComponentOrReplace(gltfShape37)
const transform248 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 40.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000004768371582, 2.5994718074798584, 1.000004768371582)
})
wallCorrugatedMetal51.addComponentOrReplace(transform248)

const wallCorrugatedMetal52 = new Entity('wallCorrugatedMetal52')
engine.addEntity(wallCorrugatedMetal52)
wallCorrugatedMetal52.setParent(_scene)
wallCorrugatedMetal52.addComponentOrReplace(gltfShape37)
const transform249 = new Transform({
  position: new Vector3(43.411216735839844, 56.84843444824219, 38.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000052452087402, 2.5994718074798584, 1.0000052452087402)
})
wallCorrugatedMetal52.addComponentOrReplace(transform249)

const wallCorrugatedMetal53 = new Entity('wallCorrugatedMetal53')
engine.addEntity(wallCorrugatedMetal53)
wallCorrugatedMetal53.setParent(_scene)
wallCorrugatedMetal53.addComponentOrReplace(gltfShape37)
const transform250 = new Transform({
  position: new Vector3(43.411216735839844, 56.84843444824219, 36.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000057220458984, 2.5994718074798584, 1.0000057220458984)
})
wallCorrugatedMetal53.addComponentOrReplace(transform250)

const wallCorrugatedMetal54 = new Entity('wallCorrugatedMetal54')
engine.addEntity(wallCorrugatedMetal54)
wallCorrugatedMetal54.setParent(_scene)
wallCorrugatedMetal54.addComponentOrReplace(gltfShape37)
const transform251 = new Transform({
  position: new Vector3(43.63229751586914, 56.84843444824219, 34.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000061988830566, 2.5175273418426514, 1.0000061988830566)
})
wallCorrugatedMetal54.addComponentOrReplace(transform251)

const wallCorrugatedMetal55 = new Entity('wallCorrugatedMetal55')
engine.addEntity(wallCorrugatedMetal55)
wallCorrugatedMetal55.setParent(_scene)
wallCorrugatedMetal55.addComponentOrReplace(gltfShape37)
const transform252 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 32.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000059604644775, 2.5994718074798584, 1.0000059604644775)
})
wallCorrugatedMetal55.addComponentOrReplace(transform252)

const wallCorrugatedMetal56 = new Entity('wallCorrugatedMetal56')
engine.addEntity(wallCorrugatedMetal56)
wallCorrugatedMetal56.setParent(_scene)
wallCorrugatedMetal56.addComponentOrReplace(gltfShape37)
const transform253 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 30.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000061988830566, 2.5994718074798584, 1.0000061988830566)
})
wallCorrugatedMetal56.addComponentOrReplace(transform253)

const wallCorrugatedMetal57 = new Entity('wallCorrugatedMetal57')
engine.addEntity(wallCorrugatedMetal57)
wallCorrugatedMetal57.setParent(_scene)
wallCorrugatedMetal57.addComponentOrReplace(gltfShape37)
const transform254 = new Transform({
  position: new Vector3(43.70798110961914, 56.84843444824219, 28.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000006914138794, 2.341512441635132, 1.000006914138794)
})
wallCorrugatedMetal57.addComponentOrReplace(transform254)

const wallCorrugatedMetal58 = new Entity('wallCorrugatedMetal58')
engine.addEntity(wallCorrugatedMetal58)
wallCorrugatedMetal58.setParent(_scene)
wallCorrugatedMetal58.addComponentOrReplace(gltfShape37)
const transform255 = new Transform({
  position: new Vector3(43.65621566772461, 56.84843444824219, 26.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000076293945312, 2.3376147747039795, 1.0000076293945312)
})
wallCorrugatedMetal58.addComponentOrReplace(transform255)

const wallCorrugatedMetal59 = new Entity('wallCorrugatedMetal59')
engine.addEntity(wallCorrugatedMetal59)
wallCorrugatedMetal59.setParent(_scene)
wallCorrugatedMetal59.addComponentOrReplace(gltfShape37)
const transform256 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 24.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000006914138794, 2.5994718074798584, 1.000006914138794)
})
wallCorrugatedMetal59.addComponentOrReplace(transform256)

const wallCorrugatedMetal60 = new Entity('wallCorrugatedMetal60')
engine.addEntity(wallCorrugatedMetal60)
wallCorrugatedMetal60.setParent(_scene)
wallCorrugatedMetal60.addComponentOrReplace(gltfShape37)
const transform257 = new Transform({
  position: new Vector3(43.598915100097656, 56.84843444824219, 22.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.5000038146972656, 2.5994718074798584, 1.0000076293945312)
})
wallCorrugatedMetal60.addComponentOrReplace(transform257)

const garlandCurveYellow = new Entity('garlandCurveYellow')
engine.addEntity(garlandCurveYellow)
garlandCurveYellow.setParent(_scene)
const transform258 = new Transform({
  position: new Vector3(36.166648864746094, 77, 39.591190338134766),
  rotation: new Quaternion(-0.02348312921822071, 0.5309857130050659, 0.04093848541378975, -0.8460655212402344),
  scale: new Vector3(1.0541843175888062, 1.0004665851593018, 1.012755274772644)
})
garlandCurveYellow.addComponentOrReplace(transform258)
const gltfShape38 = new GLTFShape("680af140-41c7-40d9-8ce8-7648196c3caf/Garland_Curve_Yellow.glb")
gltfShape38.withCollisions = true
gltfShape38.isPointerBlocker = true
gltfShape38.visible = true
garlandCurveYellow.addComponentOrReplace(gltfShape38)

const garlandCurveBluePurple = new Entity('garlandCurveBluePurple')
engine.addEntity(garlandCurveBluePurple)
garlandCurveBluePurple.setParent(_scene)
const transform259 = new Transform({
  position: new Vector3(35.70832443237305, 77.23571014404297, 35.60341262817383),
  rotation: new Quaternion(-0.059109482914209366, -0.3417418599128723, -0.05910943076014519, 0.9360687732696533),
  scale: new Vector3(0.5565253496170044, 1.0044724941253662, 0.9999992847442627)
})
garlandCurveBluePurple.addComponentOrReplace(transform259)
const gltfShape39 = new GLTFShape("73186899-cf6e-4a4c-a30b-a4c21fc3e86c/Garland_Curve_Blue_Purple.glb")
gltfShape39.withCollisions = true
gltfShape39.isPointerBlocker = true
gltfShape39.visible = true
garlandCurveBluePurple.addComponentOrReplace(gltfShape39)

const garlandCurveYellow2 = new Entity('garlandCurveYellow2')
engine.addEntity(garlandCurveYellow2)
garlandCurveYellow2.setParent(_scene)
garlandCurveYellow2.addComponentOrReplace(gltfShape38)
const transform260 = new Transform({
  position: new Vector3(18.437925338745117, 75.9853515625, 37.89862060546875),
  rotation: new Quaternion(0.12909461557865143, -0.8705525398254395, -0.06542643159627914, 0.4703109562397003),
  scale: new Vector3(0.8879626989364624, 0.9868287444114685, 0.9526340961456299)
})
garlandCurveYellow2.addComponentOrReplace(transform260)

const floorBlack = new Entity('floorBlack')
engine.addEntity(floorBlack)
floorBlack.setParent(_scene)
const transform261 = new Transform({
  position: new Vector3(43.70232391357422, 66, 59.763206481933594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.6503443717956543, 1, 9.454117774963379)
})
floorBlack.addComponentOrReplace(transform261)
const gltfShape40 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape40.withCollisions = true
gltfShape40.isPointerBlocker = true
gltfShape40.visible = true
floorBlack.addComponentOrReplace(gltfShape40)

const floorBlack2 = new Entity('floorBlack2')
engine.addEntity(floorBlack2)
floorBlack2.setParent(_scene)
floorBlack2.addComponentOrReplace(gltfShape40)
const transform262 = new Transform({
  position: new Vector3(22, 66, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.6503443717956543, 1, 2.6750564575195312)
})
floorBlack2.addComponentOrReplace(transform262)

const wallcornerBlack = new Entity('wallcornerBlack')
engine.addEntity(wallcornerBlack)
wallcornerBlack.setParent(_scene)
const transform263 = new Transform({
  position: new Vector3(18.885377883911133, 65.5, 50.116092681884766),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9775807857513428, 1.4910802841186523, 2.218144416809082)
})
wallcornerBlack.addComponentOrReplace(transform263)
const gltfShape41 = new GLTFShape("b147f30c-9dee-4138-8ac3-3f9d1fadee5f/BlackCorner.glb")
gltfShape41.withCollisions = true
gltfShape41.isPointerBlocker = true
gltfShape41.visible = true
wallcornerBlack.addComponentOrReplace(gltfShape41)

const wallcornerBlack2 = new Entity('wallcornerBlack2')
engine.addEntity(wallcornerBlack2)
wallcornerBlack2.setParent(_scene)
wallcornerBlack2.addComponentOrReplace(gltfShape41)
const transform264 = new Transform({
  position: new Vector3(14.385377883911133, 65.5, 45.116092681884766),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1.9775807857513428, 1.4910802841186523, 2.218144416809082)
})
wallcornerBlack2.addComponentOrReplace(transform264)

const floorBlack3 = new Entity('floorBlack3')
engine.addEntity(floorBlack3)
floorBlack3.setParent(_scene)
floorBlack3.addComponentOrReplace(gltfShape40)
const transform265 = new Transform({
  position: new Vector3(22, 66, 45.274383544921875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.6503443717956543, 1, 5.95129919052124)
})
floorBlack3.addComponentOrReplace(transform265)

const floorBlack4 = new Entity('floorBlack4')
engine.addEntity(floorBlack4)
floorBlack4.setParent(_scene)
floorBlack4.addComponentOrReplace(gltfShape40)
const transform266 = new Transform({
  position: new Vector3(22, 66, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8223557472229004, 1, 2.675056219100952)
})
floorBlack4.addComponentOrReplace(transform266)

const floorBlack5 = new Entity('floorBlack5')
engine.addEntity(floorBlack5)
floorBlack5.setParent(_scene)
floorBlack5.addComponentOrReplace(gltfShape40)
const transform267 = new Transform({
  position: new Vector3(14.481378555297852, 66, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7695773839950562, 1, 2.675056219100952)
})
floorBlack5.addComponentOrReplace(transform267)

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
const script16 = new Script16()
const script17 = new Script17()
const script18 = new Script18()
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
script16.init(options)
script17.init(options)
script18.init(options)
script1.spawn(toolbox, {}, createChannel(channelId, toolbox, channelBus))
script2.spawn(clickArea, {"enabled":true,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc","x":0,"y":23,"z":0,"curve":"linear","speed":3,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":4,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc","x":0,"y":-23,"z":0,"curve":"linear","speed":3,"relative":true,"onComplete":[]}},{"entityName":"toolbox","actionId":"delay","values":{"timeout":1,"onTimeout":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorGlass","x":1,"y":1,"z":1,"curve":"linear","speed":15,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea","x":1,"y":1,"z":1,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea2","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}}]}}]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorGlass","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, clickArea, channelBus))
script3.spawn(triggerArea, {"enabled":true,"onEnter":[{"entityName":"toolbox","actionId":"scale","values":{"target":"wallPlainGlass","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"wallPlainGlass2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}],"onLeave":[{"entityName":"toolbox","actionId":"scale","values":{"target":"wallPlainGlass","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"wallPlainGlass2","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, triggerArea, channelBus))
script2.spawn(clickArea2, {"enabled":true,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorGlass","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":10,"onTimeout":[{"entityName":"toolbox","actionId":"scale","values":{"target":"floorGlass","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}}]}},{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc","x":0,"y":23,"z":0,"curve":"easeinoutsine","speed":3,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":4,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc","x":0,"y":-23,"z":0,"curve":"linear","speed":3,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea2","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}}]}}]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea2","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, clickArea2, channelBus))
script2.spawn(clickArea3, {"enabled":true,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc2","x":0,"y":8.75,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc2","x":0,"y":9.75,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc2","x":0,"y":9.25,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc2","x":0,"y":14.75,"z":0,"curve":"linear","speed":5,"relative":true,"onComplete":[]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"floorGlass2","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":5,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"floorLightDisc2","x":0,"y":-42.5,"z":0,"curve":"linear","speed":4,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea3","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[{"entityName":"toolbox","actionId":"scale","values":{"x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"entityName":"toolbox","actionId":"scale","values":{"target":"clickArea3","x":0,"y":0,"z":0,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, clickArea3, channelBus))
script4.spawn(videoStream, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"customStation":"https://decentralive.tv/video/11687ca777b5acce9c522d591137c087.mp4","image":"https://i.postimg.cc/6pMZYFNk/OUBITA-LOGO.png","station":"https://theuniverse.club/live/genesisplaza/index.m3u8"}, createChannel(channelId, videoStream, channelBus))
script5.spawn(blockFloorLight, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight, channelBus))
script6.spawn(spotlightLight, {"startOn":true,"clickable":true}, createChannel(channelId, spotlightLight, channelBus))
script6.spawn(spotlightLight2, {"startOn":true,"clickable":true}, createChannel(channelId, spotlightLight2, channelBus))
script6.spawn(spotlightLight3, {"startOn":true,"clickable":true}, createChannel(channelId, spotlightLight3, channelBus))
script7.spawn(mixtable, {"onActivate":[{"entityName":"radioCyberpunk","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"radioCyberpunk","actionId":"deactivate","values":{}}]}, createChannel(channelId, mixtable, channelBus))
script8.spawn(speakers, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers, channelBus))
script8.spawn(speakers2, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers2, channelBus))
script9.spawn(radioCyberpunk, {"startOn":false,"volume":1,"onClickText":" ","onClick":[],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3","onActivate":[{"entityName":"radioCyberpunk2","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"radioCyberpunk2","actionId":"deactivate","values":{}}],"customStation":"https://decentralive.tv/video/f0d556385ef785b43df50fa4ebc3e3d3.mp3"}, createChannel(channelId, radioCyberpunk, channelBus))
script8.spawn(speakers3, {"clickable":false,"onActivate":[]}, createChannel(channelId, speakers3, channelBus))
script10.spawn(ceilingStriplight, {"startOn":true,"clickable":false}, createChannel(channelId, ceilingStriplight, channelBus))
script10.spawn(ceilingStriplight2, {"startOn":true,"clickable":false}, createChannel(channelId, ceilingStriplight2, channelBus))
script11.spawn(spotlightStripLight, {"startOn":true,"clickable":true}, createChannel(channelId, spotlightStripLight, channelBus))
script12.spawn(spark, {"active":true}, createChannel(channelId, spark, channelBus))
script12.spawn(spark2, {"active":true}, createChannel(channelId, spark2, channelBus))
script13.spawn(funkyFloorLight, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight, channelBus))
script13.spawn(funkyFloorLight2, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight2, channelBus))
script13.spawn(funkyFloorLight3, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight3, channelBus))
script13.spawn(funkyFloorLight4, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight4, channelBus))
script13.spawn(funkyFloorLight5, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight5, channelBus))
script13.spawn(funkyFloorLight6, {"startOn":true,"clickable":true}, createChannel(channelId, funkyFloorLight6, channelBus))
script14.spawn(tableLampLight, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight, channelBus))
script14.spawn(tableLampLight2, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight2, channelBus))
script14.spawn(tableLampLight3, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight3, channelBus))
script14.spawn(tableLampLight4, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight4, channelBus))
script14.spawn(tableLampLight5, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight5, channelBus))
script14.spawn(tableLampLight6, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight6, channelBus))
script14.spawn(tableLampLight7, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight7, channelBus))
script9.spawn(radioCyberpunk2, {"startOn":false,"volume":1,"onClickText":" ","onClick":[],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3"}, createChannel(channelId, radioCyberpunk2, channelBus))
script15.spawn(rainLight, {"startOn":true,"clickable":false}, createChannel(channelId, rainLight, channelBus))
script15.spawn(rainLight2, {"startOn":true,"clickable":false}, createChannel(channelId, rainLight2, channelBus))
script10.spawn(ceilingStriplight3, {"startOn":true,"clickable":false}, createChannel(channelId, ceilingStriplight3, channelBus))
script11.spawn(spotlightStripLight2, {"startOn":true,"clickable":true}, createChannel(channelId, spotlightStripLight2, channelBus))
script10.spawn(ceilingStriplight4, {"startOn":true,"clickable":false}, createChannel(channelId, ceilingStriplight4, channelBus))
script16.spawn(imageFromURL, {"image":"https://i.postimg.cc/6pMZYFNk/OUBITA-LOGO.png"}, createChannel(channelId, imageFromURL, channelBus))
script15.spawn(rainLight3, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight3, channelBus))
script17.spawn(nftPictureFrame, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script17.spawn(nftPictureFrame2, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script17.spawn(nftPictureFrame3, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script17.spawn(nftPictureFrame4, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script17.spawn(nftPictureFrame5, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script17.spawn(nftPictureFrame6, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script17.spawn(nftPictureFrame9, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script17.spawn(nftPictureFrame10, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script17.spawn(nftPictureFrame11, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script17.spawn(nftPictureFrame13, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script17.spawn(nftPictureFrame14, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script17.spawn(nftPictureFrame15, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script17.spawn(nftPictureFrame16, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script17.spawn(nftPictureFrame17, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame17, channelBus))
script17.spawn(nftPictureFrame18, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script17.spawn(nftPictureFrame19, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame19, channelBus))
script17.spawn(nftPictureFrame22, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script17.spawn(nftPictureFrame24, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame24, channelBus))
script17.spawn(nftPictureFrame7, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script17.spawn(nftPictureFrame8, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script17.spawn(nftPictureFrame12, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script17.spawn(nftPictureFrame20, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame20, channelBus))
script17.spawn(nftPictureFrame21, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script17.spawn(nftPictureFrame23, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame23, channelBus))
script17.spawn(nftPictureFrame25, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame25, channelBus))
script17.spawn(nftPictureFrame26, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame26, channelBus))
script17.spawn(nftPictureFrame27, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame27, channelBus))
script17.spawn(nftPictureFrame28, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame28, channelBus))
script17.spawn(nftPictureFrame29, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame29, channelBus))
script17.spawn(nftPictureFrame30, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame30, channelBus))
script17.spawn(nftPictureFrame31, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame31, channelBus))
script17.spawn(nftPictureFrame35, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame35, channelBus))
script17.spawn(nftPictureFrame36, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame36, channelBus))
script17.spawn(nftPictureFrame32, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame32, channelBus))
script17.spawn(nftPictureFrame33, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame33, channelBus))
script17.spawn(nftPictureFrame34, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame34, channelBus))
script18.spawn(galleryLight, {"startOn":true,"clickable":true}, createChannel(channelId, galleryLight, channelBus))
script18.spawn(galleryLight2, {"startOn":true,"clickable":true}, createChannel(channelId, galleryLight2, channelBus))
script17.spawn(nftPictureFrame37, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame37, channelBus))
script17.spawn(nftPictureFrame38, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame38, channelBus))
script17.spawn(nftPictureFrame39, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame39, channelBus))
script17.spawn(nftPictureFrame40, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame40, channelBus))
script17.spawn(nftPictureFrame41, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame41, channelBus))
script17.spawn(nftPictureFrame42, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame42, channelBus))
script17.spawn(nftPictureFrame43, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame43, channelBus))
script17.spawn(nftPictureFrame44, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame44, channelBus))
script17.spawn(nftPictureFrame45, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame45, channelBus))
script17.spawn(nftPictureFrame46, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame46, channelBus))
script17.spawn(nftPictureFrame47, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame47, channelBus))
script17.spawn(nftPictureFrame48, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame48, channelBus))
script17.spawn(nftPictureFrame49, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame49, channelBus))
script17.spawn(nftPictureFrame50, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame50, channelBus))
script17.spawn(nftPictureFrame51, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame51, channelBus))
script17.spawn(nftPictureFrame52, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame52, channelBus))
script17.spawn(nftPictureFrame53, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame53, channelBus))
script17.spawn(nftPictureFrame54, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame54, channelBus))
script17.spawn(nftPictureFrame55, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame55, channelBus))
script17.spawn(nftPictureFrame56, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame56, channelBus))
script17.spawn(nftPictureFrame57, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame57, channelBus))
script17.spawn(nftPictureFrame58, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame58, channelBus))
script17.spawn(nftPictureFrame59, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame59, channelBus))
script17.spawn(nftPictureFrame60, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame60, channelBus))