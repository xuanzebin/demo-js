#!/usr/bin/env node

var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的
if (fs.existsSync("./" + dirName))
process.exit(1)
else{
    var way ="./" + dirName
    fs.mkdirSync(way) // mkdir $1
    fs.mkdirSync(way + '/css') // mkdir css
    fs.mkdirSync(way + '/js') // mkdir js
    fs.writeFileSync(way + "/index.html", "<!DOCTYPE>\n" + "<title>Hello</title>\n" + "<h1>Hi</h1>")
    fs.writeFileSync(way + "/css/style.css", "h1{color: red;}")
    fs.writeFileSync(way + "/js/main.js", "var string = " + "Hello World\n" + "alert(string)")

    process.exit(0)
}
