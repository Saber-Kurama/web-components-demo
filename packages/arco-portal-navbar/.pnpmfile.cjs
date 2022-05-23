/*
 * @Author: saber
 * @Date: 2022-04-13 16:08:29
 * @LastEditTime: 2022-05-23 11:11:15
 * @LastEditors: saber
 * @Description: 
 */
const { linkPaths } = require('./.digitforce.js');
function readPackage(pkg, context) {
  // 添加了 dev 环境
  if (pkg.name == '@dangojs/arco-portal-navbar-webcomponent') {
    Object.keys(linkPaths).forEach((key) => {
     
      if (pkg.dependencies[key]) {
        pkg.dependencies[key] = linkPaths[key];
      }
      if (pkg.devDependencies[key]) {
        pkg.devDependencies[key] = linkPaths[key];
      }
    });
  }
  // console.log('pkg', pkg);
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
