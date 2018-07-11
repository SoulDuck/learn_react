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
<pre>
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
</pre>