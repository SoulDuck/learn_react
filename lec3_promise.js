const fs = require("fs")
fs.writeFileSync("test.txt" , "Hello Javascript")
const content = fs.readFileSync("test.txt").toString()

//여기서는 비동기 함수를 쉽게 쓸수 있다.


console.log(content)
// type 1
fs.writeFile("test_2.txt" , "Hello Javascript" , function (error){
	fs.readFile("test_2.txt" , function (error , data){
		console.log(data.toString())
	})
})

// type 2
console.log('point a')
fs.writeFile("test_2.txt" , "Hello World Javascript" , (error) => {
	console.log('point b')
	fs.readFile("test_2.txt" , (error , data)=>{
		console.log('point c')
		console.log(data.toString())
	})
	console.log('point d')
})
console.log('point e')


// javascript 에서는 하나의 thread 만 있다.
// fs.writeFile , fs.readFile , Express 객체 는 절대로 즉시 실행되지 않는다.
// 실행하라고 예약을 거는것이다
// backgorund 에 있는 thread Q에 거는 것이다.


new Promise((resolve ) => { //new Promise((resolve , reject) => {
	fs.readfile("test_2.txt",(error , data) => {
		resolve(data.toString())
	})
}).then((value) =>{
	console.log(value)
}) // 2개의 매개변수를 갖는다 , resolve 을 가장 많이 사용한다




// Usage 1
read("test_2.txt").then( (value)=>{
	console.log(value)
})


function read(filename){
	return new Promise((resolve) => {
		fs.readFile(filename , (error , data)=>{
			resolve(data.toString())
		})
	})
}

// Usage 2 Promise
//이렇게 사용할수도 있다.
// return read("test_2.txt") 이렇게 하면 return 으로 돌아온 resolve 을 쓸수 있다.
// read 함수에서는 return 을 쓰지 않았는데도 말이다!
read("test_2.txt").then((value) => {
	console.log(value)
	return read("test_2.txt")
}).then((value) => {
	console.log(value)
})


// Usage 3
async function readAll(){
	const a = await read("test_2.txt") // promise 에 있는 내용을 실행하고  resolve 에 있는 내용을 return 한다.
	console.log(a)
	const b = await read("test_2.txt")
	console.log(b)
	const c = await read("test_2.txt")
	console.log(c)

}

readAll()