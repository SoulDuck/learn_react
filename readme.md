# Install API Uinsg npm
1. npm install -g babel_cli
2. npm install babel-preset-es2015
# 프로젝터 생성후 BABEL 적용
2_1. babel lec4_babel.js --presets=es2015 -o arrow-test.out.js
2_2. mkdir babeltest/
2_3. npm init -y
2_4. npm install --save-dev babel-cli
2_5. npm install --save-dev babel-preset-es2015


## example
{
  "name": "babeltest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1"
  }
}
