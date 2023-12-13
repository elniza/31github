var arr1 = ['z', 'c', 'x', 'b', 'y', 'a']
var arr2 = [456, 12, 98, 876, 1, 23, 345, 100]
var arr3 = ['Alex Zachary', 'Devin Soriano', 'Zintis May', 'Charles Messini', 'Charles Albert']
var arr4 = [ 'lightning', 'fort', 'to', 'cat',  'store', 'strong', 'a', 'markets', 'phonetic' ]

arr1.sort()
console.log(arr1)
arr2.sort( function(a,b){return a-b} )
arr3.sort( function(n1, n2){
  var splitName1 = n1.split(" ")
  var splitName2 = n2.split(" ")
  var n1FirstLetter
})
arr4.sort( (a,b)=>a.length - b.length)


console.log(arr2)
console.log(arr3)
console.log(arr4)