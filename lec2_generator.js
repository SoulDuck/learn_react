function * counter() { 

	// 시작 부분부터 읽는다.
	yield 1  // { value: 1, done: false }
	yield 2 // { value: 2, done: false }
	yield 3 // { value: 3, done: false }
	return 1 // { value: 1, done: true }
} 

generatorObject = counter()
console.log(generatorObject.next())
console.log(generatorObject.next())


// normal rev for Loop
a = [1,2,3,4] 
for ( let i =a.length -1 ;  i> 0 ; i--){
	console.log(a[i])
}

// generator for Loop

function * reverse(array){
	for (let i = array.length -1 ; i >=0; i--){
		yield array[i]
	}
}

a = [1,2,3,4,5]
for (const value of reverse(a)){
	console.log(value
	)
}

// generator for filter 
console.log('generator for filter')
function * filter (array , condition){
	for (const value of array)
		if(condition(value))
			yield value
}
a = [1 ,2, 3 ,4 ,5 ,6]
for (const value of filter(a , (x)=> x>2 )){
	console.log(value)
}










