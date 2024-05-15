/**
 * 获取assets目录下的所有文件夹
 * 获取每个文件夹下的所有文件名以及文件首行
 * 写入到router中的content.json文件
 */

const fs = require("fs");
const path = require("path");
// 获取md文件首行，作为title
const getTitle = (url) => {
  const data = fs.readFileSync(url, "utf-8");
  return data.split("\n").shift().slice(2);
};
// assets文件夹路径
const contentPath = path.resolve(__dirname, "..") + "/assets";
const routerPath = path.resolve(__dirname, "..") + "/router";
// assets文件夹下所有文件夹名称
const folderList = fs.readdirSync(contentPath).filter((item) => {
  return fs.statSync(path.join(contentPath, item)).isDirectory();
});
// code目录和其他目录
const otherList = folderList.filter((item) => item !== "code");
const result = {};
// 处理code目录
const codePath = contentPath + "/code";
const codeList = fs.readdirSync(codePath).filter((item) => {
  return fs.statSync(path.join(codePath, item)).isDirectory();
});
result["code"] = {
  title: getTitle(codePath + "/README.md"),
  list: codeList.map((code) => ({
    title: getTitle(codePath + "/" + code + "/README.md"),
    key: code,
  })),
};
// 处理其他目录
otherList.forEach((folderItem) => {
  const folderPath = contentPath + "/" + folderItem;
  const fileList = fs.readdirSync(folderPath);
  const articleList = fileList.filter((i) => i !== "README.md");
  result[folderItem] = {
    title: getTitle(folderPath + "/README.md"),
    list: articleList.map((article) => ({
      title: getTitle(folderPath + "/" + article),
      key: article,
    })),
  };
});
fs.writeFileSync(routerPath + "/content.json", JSON.stringify(result));
