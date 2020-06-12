# JavaScript计算贝塞尔曲线

## 安装

```
npm install @wangshushuo/bezierjs
```

## 示例

```js
import Bezier from '@wangshushuo/bezierjs'
// const Bezier = require("@wangshushuo/bezierjs")

const bezier = new Bezier();
bezier.addPoint(10, 10)
bezier.addPoint(100, 300)
bezier.addPoint(200, 20)
bezier.addPoint(250, 400)
bezier.addPoint(500, 20)

for (let t = 0; t < 100; t++) {
  const x = bezier.bezier_x(t / 100)
  const y = bezier.bezier_y(t / 100)
  console.log(x,y);
}
```
首先添加若干控制点，最后计算得到的xy可以用于在canvas画布内绘制一个曲线。

如果一共添加了4个控制点，就是三阶贝塞尔曲线，是css中的transitation使用的。

## 在canvas中绘制贝塞尔曲线

这是一个例子：http://wss.cool/react-bezier/

项目地址：https://github.com/wangshushuo/react-bezier/

## 发布到npm

首先打包 `yarn build`

然后登录到npm `npm login` ，这里要注意看登录是是淘宝仓库还是npm仓库。如果是淘宝的，要切换到npm仓库。

```
npm config set registry https://registry.npm.taobao.org/
```

```
npm config set registry https://registry.npmjs.org/
```

然后就可以发布了

```
npm publish --access public
```

这会把dist目录和LISCENSE和package.json发布出去。
