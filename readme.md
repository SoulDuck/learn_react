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
    **"build": "babel src -d dest"**
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