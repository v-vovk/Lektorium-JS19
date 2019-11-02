'use strict'
import './scss/main.scss'

// чесно говоря відкрив отут вкладку solution
// https://leetcode.com/problems/spiral-matrix-iii/

let spiralMatrixIII = function(R, C, r0, c0) {
  let n = Math.max(r0, c0, R-1-r0, C-1-c0)
  let res = [[r0,c0]]
  for(let i=1; i<=n; i++){
    for(let j=1-i; j<=i; j++) res.push([r0+j,c0+i]) // line 1
    for(let j=i-1; j>=-i; j--) res.push([r0+i,c0+j]) // line 2
    for(let j=i-1; j>=-i; j--) res.push([r0+j,c0-i]) // line 3
    for(let j=1-i; j<=i; j++) res.push([r0-i,c0+j]) // line 4
  }
  return res.filter(x=>x[0]>=0&&x[0]<R&&x[1]>=0&&x[1]<C)
}

console.log(...spiralMatrixIII(5, 6, 1, 4))
