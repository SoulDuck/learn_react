# Install API Uinsg npm
1. npm install -g babel_cli
2. npm install babel-preset-es2015
# 프로젝터 생성후 BABEL 적용
2_1. babel lec4_babel.js --presets=es2015 -o arrow-test.out.js <br>
2_2. mkdir babeltest/<br>
2_3. npm init -y<br>
2_4. npm install --save-dev babel-cli<br>
2_5. npm install --save-dev babel-preset-es2015<br>

--save-dev 키워드를 적용시키면 package.json 에 아래와 같은 *dependencies* 가 적용된다
## example
<pre>
{
  "name": "babeltest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel src -d dest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1"
  }
}
</pre>


2_6 Make .babelrc

<pre>
{
    "presets":["es2015"]
}
</pre>



### How to export

make src , dst folder and install babel ,<br>
and add "build": "babel src -d dst" to package.json<br>


외부로 출력하고 싶은 method , class , Variable 앞에 export 키워드를 붙인다

<pre>
export function add_export(a,b){return a+b}
export function mul_export(a,b){return a*b}
</pre>

그리고 npm run build && node /dst/main.js 을 실행한다

/dst/main.js 에서는 babel 로 변환된 코드들이 들어있다



### How to Import
<pre>
//Usage 1
// babel를 사용하지 않고 사용할 때
calculator = require('./lec5_module')
console.log(calculator.add(10,100))
console.log(calculator.mul(10,100))
</pre>

<pre>
// Usage 2
// babel 사용할 때
import {add as a , mul as m , test as t  } from './lec5_module'
</pre>


<pre>
Import Usage 3
import * as cal  from './lec5_module'
cal.add(10,20)
</pre>


# Install React
https://reactjs.org/docs/cdn-links.html : react 을 기본으로 실행하는 CDN LINK<br>
https://cdnjs.com/libraries/babel-standalone : babel 형식으로 작성되어 있는 스크립트 태그를  실행하게 해주는 lib


# React Framework
```html

<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>
</head>

<body>
    <div id="root"> </div>
    <script type="text/babel">
        const element = <h1>{z2(hour)}:{z2(min)}:{z2(sec)}</h1>
        ReactDOM.render(element , root)
    </script>
</body>
</html>

```


# React Function 1 Compoment Framework

```html
    <div id="root"> </div>
    <script type="text/babel">
    	function Coustom(props){
    	return <h1 style={{color : props.color }}> {props.title} {props.children}</h1>
    }
    	const root = document.getElementById('root')
    	const element = <Coustom title='Title:' color='red'> First Component </Coustom>
        ReactDOM.render(element , root)
    </script>

```


```html
    <div id="root"> </div>
    <script type="text/babel">
    	function Coustom(props){
    	return <h1 style={{color : props.color }}> {props.title} {props.children}</h1>
    }
    	const root = document.getElementById('root')
    	const element = <Coustom title='Title:' color='red'> First Component </Coustom>
        ReactDOM.render(element , root)
    </script>

```


# React Function 2 Compoment Framework
```html
    <script type="text/babel">
    //함수 생성부
    function Func2(props){
        return <h1 style={{color : props.color}}>{props.children}</h1>
    }
    //함수 적용부


    const element = <div>
        <Func1 color = "red"> Hello Component </Func1>
    </div>
    ReactDOM.render(element , root)
    </script>
```

# React Function 3 Compoenent Framework
```html
    <script type="text/babel>
    // 함수 생성부

    const Func3 = (props){
        <h1 style = {{color :props.color}} > {props.children}<h1>
    }
    //함수 적용부
    const element <div>
    <Func3 color = "green" > Hello React </Func3>
    </div>
    </script>
```

# React Class 1 Compoment Framework
```html
    class Test_A extends React.Component{
        render(){
            return <h1 style = {{color : this.props.color}}>{this.props.children}</h1>
        }
    }
    console element = <Test_A color="red"> Hello Component</Test>
    ReactDOM.render(element , root)
```

```html
    <div id='root'></div>
    <script type = 'text/babel'>
    class Test_A extends React.Component {
        // 생성자
        constructor(props , context , updater){
            super(props , context , updater)
            // Usage of state
            // 계속해서 변결될것들.
            // this.state = {}
            // this.state.<키>
            // this.setState({<키> : <값>}) // 상태 변경 , render() , 화면 변경
             this.state = {text : 'Hello ReactWorld'}
             setTimeout(() =>{
                this.setState({text : '안녕히가세요'})
             } ,3000);
        }
        render(){
            return <h1>{this.state.text}</h1>
        }
        const element = <Test_A/>
        const root = document.getElementById('root')
        ReactDOM.render(element , root)
    }
    const element <Test_A/>
    cons root = document.getElementById('root')
    ReactDOM.render(element , root)
     </script>
```

# Event 1
```html
  <div id='root'></div>
  <script type='text/babel'>
    class CBox extends React.Component {
        constructor(props){
          super(props)
          this.state = {checked : false}
        }
      render(){
        let mark = 'o'
        let bstyle = { fontWeight : 'normal'}
        if (this.state.checked){
          mark = '●'
          bstyle = {fontWeight : 'bold'}
        }

        const clickHandler = (function(e){
            const newValue = !this.state.checked
            this.setState({
              checked:newValue
            })
          }).bind(this)
        return <div onClick={clickHandler} style={bstyle}>
          {mark} {this.props.label}
        </div>
      }
    }
    const dom = <div>
      <CBox label = 'apple' />
      <CBox label = 'banana' />
      <CBox label = 'Watermelon'/>
    </div>
    ReactDOM.render(dom , document.getElementById('root'))
```
# event 2
```html
    <div id='root'></div>
    <script type='text/babel'>

    ...

    render(){

    let mark = '○'
    let bstyle = { fontWeight : 'normal'}
    if (this.state.checked){
      mark = '●'
      bstyle = { fontWeight : 'bold' }
    }
    //clickhandler
    const clickHandler = (e)=>{
      const newValue = !this.state.checked
      this.setState({checked: newValue})
    }
    return (<div onClick={clickHandler} style={bstyle}>
      {mark} {this.props.label}
    </div>)
    }
    </script>
```

# Create React APP

## 1. install

## 2. start project
> create-react-app PROJECTNAME



# Usage propTypes  , defaultProps
```html
    //TestInput.js
    import React , {Component} from 'react';
    import PropTypes from 'prop-types'

    export default class TestInput extends Component{
      constructor(props){
        super(props)
        console.log(props)
      }
      render(){
        return (<h1> Test Input </h1>);
      }
    }
    // property 로  들어오는 변수가 뭔지 검사한다
    TestInput.propTypes = {
      property1 : PropTypes.string,
      property2 : PropTypes.number,
      property3 : PropTypes.bool.isRequired
    }
    // default 로 property 가 들어간다
    TestInput.defaultProps= {
      property1 : '안녕하세요' ,
      property2 : 273 ,
      property3 : true
    }


    // App. js
    class App extends Component {
      render() {
        return (
          <TestInput/>
        );
      }
    }
    export default App;


```