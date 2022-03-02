import { isPreviewMode } from '@decentraland/EnvironmentAPI'

/**
 * Quick function to add a cube that can run functions when clicked. By default only displayed when in preview mode for tests.
 *
 * @param pos - Transform arguments for the cube, including position, scale and rotation
 * @param triggeredFunction - Function to execute every time the cube is clicked.
 * @param label - Text to display over cube and on hover.
 * @param color - Cube color.
 * @param sphere - If true, use a sphere shape instead of cube.
 * @param noCollider - If true, cube has no collider.
 * @returns A new entity with the configured settings and a label as a child
 * @public
 */
export async function addTestCube(
  pos: TranformConstructorArgs,
  triggeredFunction: () => void,
  label?: string,
  color?: Color3,
  sphere?: boolean,
  noCollider?: boolean,
  keepInProduction?: boolean
): Promise<Entity> {
  // if not in preview return
  if (!keepInProduction && (await !isPreviewMode())) {
    return
  }

  let cube = new Entity()
  cube.addComponent(new Transform(pos))
  if (sphere) {
    cube.addComponent(new SphereShape())
    cube.getComponent(Transform).scale.setAll(0.5)
  } else {
    cube.addComponent(new BoxShape())
  }

  engine.addEntity(cube)

  cube.addComponent(
    new OnPointerDown(triggeredFunction, {
      hoverText: label ? label : 'click',
      button: ActionButton.POINTER
    })
  )

  if (color) {
    let cubeMaterial = new Material()
    cubeMaterial.albedoColor = color
    cube.addComponent(cubeMaterial)
  }

  if (noCollider) {
    cube.getComponent(BoxShape).withCollisions = false
  }

  if (label) {
    addLabel(label, cube, true)
  }

  return cube
}

/**
 * Maps a value from one range of values to its equivalent, scaled in proportion to another range of values, using maximum and minimum.
 *
 * @param text - Text to use on label
 * @param parent - Entity to place label on.
 * @param billboard - If true, label turns to always face player.
 * @param color - Text color. Black by default.
 * @param size - Text font size, 3 by default.
 * @param textOffset - Offset from parent entity's position. By default 1.5 meters above the parent.
 * @returns A new entity with the configured settings that is a child of the provided parent
 * @public
 */
export function addLabel(
  text: string,
  parent: IEntity,
  billboard?: boolean,
  color?: Color3,
  size?: number,
  textOffset?: TranformConstructorArgs
): Entity {
  let label = new Entity()
  label.addComponent(
    new Transform(
      textOffset ? textOffset : { position: new Vector3(0, 1.5, 0) }
    )
  )
  label.setParent(parent)
  let textShape = new TextShape(text)
  textShape.fontSize = size ? size : 3
  textShape.color = color ? color : Color3.Black()
  label.addComponent(textShape)
  if (billboard) {
    label.addComponent(new Billboard())
  }
  engine.addEntity(label)

  return label
}
