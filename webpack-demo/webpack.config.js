// 完全遵循了CommonJS规范  这里可以直接写node平台的代码
const path = require('path')

module.exports = {
  entry: './main.js', // 指定入口, 相对路径和绝对路径均可
  output: {
    path: path.join(__dirname, './dist'), // 指定出口目录, 必须是绝对路径, 相对路径会报错!!!
    filename: 'bundle.js' // 指定出口文件名
  }, // 指定出口, 如果不设置, 默认是 ./dist 目录, 输出入口文件同名的文件
  mode: 'development' // 开发  developer 开发者  Programmer 程序员
}