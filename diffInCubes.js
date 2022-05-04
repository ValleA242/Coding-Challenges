function findDifference(a, b) {
  let aCube = a.reduce((x,y) => x * y, 1) 
  let bCube = b.reduce((c,d) => c * d, 1)
  return aCube > bCube ? aCube - bCube : bCube - aCube
}
