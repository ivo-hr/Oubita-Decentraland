/// --- Set up a system ---

class RotatorSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Transform)

  update(dt: number) {
    // iterate over the entities of the group
    for (let entity of this.group.entities) {
      // get the Transform component of the entity
      const transform = entity.getComponent(Transform)

      // mutate the rotation
      transform.rotate(Vector3.Up(), dt * 10)

    }
  }
}
let newPosY = 0;

class LiftSystem{
  update (dt: number){
    
      let ts = lift.getComponent(Transform)
    
    if (ts.position.y != newPosY) {
      ts.position = Vector3.Lerp(ts.position, new Vector3 (ts.position.x, newPosY, ts.position.z), 0.1)
    }
      
    if (getUp) cube.getComponent(Transform).position = new Vector3 (cube.getComponent(Transform).position.x, cube.getComponent(Transform).position.y + 0.1, cube.getComponent(Transform).position.z);
  }
}
let dir = Vector3.Zero();
let moved = false;
class MagicCarpet{
  start () {
    
  }
  update (dt: number){
    let mC = magicCarpet.getComponent(Transform);

    if (dir != Vector3.Zero()){
      mC.position = new Vector3 (mC.position.x + dir.x * 0.2, mC.position.y + dir.y * 0.2, mC.position.z + dir.z * 0.2);
      moved = true;
    }

  }
}
// Add a new instance of the system to the engine
//engine.addSystem(new RotatorSystem())
engine.addSystem(new LiftSystem())
engine.addSystem(new MagicCarpet())
/// --- Spawner function ---

function spawnCube(x: number, y: number, z: number, l: number, h: number, w: number) {
  // create the entity
  const cube = new Entity()

  // add a transform to the entity
  cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))

  // add a shape to the entity
  cube.addComponent(new BoxShape())
  cube.getComponent(Transform).scale = new Vector3(l, h, w);
  // add the entity to the engine
  engine.addEntity(cube)
  

  return cube
}

/// --- Spawn a cube ---

const cube = spawnCube(8, 0, 8, 3, 1, 3);
let getUp = false;
cube.addComponent(
  new OnPointerDown(() => {
    getUp = true;
  })
)




function spawnLift(x: number, y: number, z: number, size: number){

  const lift = new Entity();

  lift.addComponent(new Transform({ position: new Vector3(x, y, z) }));
  lift.addComponent(new CylinderShape());
  engine.addEntity(lift);
  lift.getComponent(Transform).scale = new Vector3(1 * size, 0.1 * size, 1 * size);

  return lift;
}


const lift = spawnLift(20, 0, 20, 3);


const liftCall = spawnCube(17, 0, 17, 1, 3, 1);

liftCall.addComponent(
  new OnPointerDown(() => {
    floor = 0;

    newPosY = 5*floor;
  })
)

const liftCtrl = spawnCube(1, 3, 0, 0.1, 1, 0.1);

liftCtrl.setParent(lift);

let up = false;
let floor = 0;
liftCtrl.addComponent(
  new OnPointerDown(() => {
    
    if (floor == 5) up = false;
    else if (floor == 0) up = true;

    if (up) floor++;
    else floor --;

    newPosY = 5*floor;
  })
)


function OubitaSpawner(x:number, y: number, z: number, file: string){
  
  const office = new Entity();

  office.addComponent(new Transform({ position: new Vector3(x, y, z)}));
  office.addComponent(new GLTFShape(file));
  engine.addEntity(office);

  return office;
}

const fatOffice = OubitaSpawner(74, 0, 16
  , "models/obita_base_Vb_0.6.glb");

const office = OubitaSpawner(15, 0, 20, "models/obita_base_Vb_0.6_phat.glb");



const magicCarpet = spawnCube(3, 0, 3, 2, 0.1, 2)
magicCarpet.addComponent(
  new OnPointerDown(() => {
    
    dir = Vector3.Zero();

  })
)
const upButt = spawnCube(0.5, 6, 0, 0.1, 1, 1)
const dwnButt = spawnCube(0.5, 3, 0, 0.1, 1, 1)
const fwdButt = spawnCube(0.5, 9, 0, 0.1, 1, 1)
const bkButt = spawnCube(-0.5, 9, 0, 0.1, 1, 1)
const lButt = spawnCube(0, 9, -0.5, 1, 1, 0.1)
const rButt = spawnCube(0, 9, +0.5, 1, 1, 0.1)
upButt.setParent(magicCarpet);
dwnButt.setParent(magicCarpet);
fwdButt.setParent(magicCarpet);
bkButt.setParent(magicCarpet);
lButt.setParent(magicCarpet);
rButt.setParent(magicCarpet);

upButt.addComponent(
  new OnPointerDown(() => {
    
    dir = Vector3.Up();

  })
)
dwnButt.addComponent(
  new OnPointerDown(() => {
    
    dir = Vector3.Down();

  })
)
fwdButt.addComponent(
  new OnPointerDown(() => {
    
    dir = Vector3.Right();

  })
)
bkButt.addComponent(
  new OnPointerDown(() => {
    
    dir = Vector3.Left();

  })
)
lButt.addComponent(
  new OnPointerDown(() => {
    
    dir = Vector3.Backward();

  })
)
rButt.addComponent(
  new OnPointerDown(() => {
    
    dir = Vector3.Forward();

  })
)

const callCarpet = spawnCube(1, 1, 1, 1, 1, 1)

callCarpet.addComponent(
  new OnPointerDown(() => {
    
    magicCarpet.getComponent(Transform).position = new Vector3 (3, 0, 3);
    dir = Vector3.Zero();

  })
)