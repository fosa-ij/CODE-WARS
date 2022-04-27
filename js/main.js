//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let program = (a, b) => {
  // let aTrans = a.map(x => Math.pow(x, 2)).reduce((acc, curr) => acc + curr, 0)
  let aTrans = a.reduce((acc, curr) => acc + Math.pow(curr, 2), 0)

  // let bTrans = b.map(x => Math.pow(x, 3)).reduce((acc, curr) => acc + curr, 0)
  let bTrans = b.reduce((acc, curr) => acc + Math.pow(curr, 3), 0)
  console.log(`aTrans: ${aTrans}, bTrans: ${bTrans}`)
  return aTrans > bTrans

}
console.log(program([-6, 32, 25], [-1, 10, 9]))