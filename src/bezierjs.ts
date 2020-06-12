/**
 * 相对于坐标系而不是canvase的坐标。
 */
class P {
  x: number;
  y: number;
  scale: number = 1;
  constructor(x: number, y: number) {
    this.x = x * P.prototype.scale;
    this.y = y * P.prototype.scale;
  }
}
enum key {
  x = "x",
  y = "y",
}
function 阶乘(n: number): number {
  if (n === 0) return 1;
  return n * 阶乘(n - 1)
}
function 组合(n: number, i: number): number {
  return 阶乘(n) / (阶乘(i) * 阶乘(n - i))
}

export default class Bezier {
  pointArray: P[] = [];
  addPoint = (x: number, y: number) => {
    this.pointArray.push(new P(x, y));
  }
  getPoint = (index: number) => {
    return this.pointArray[index];
  }
  getPointArray = () => {
    return this.pointArray
  }
  bezier_x = (t: number) => {
    return this.bezier(t, this.pointArray.length - 1, key.x);
  }
  bezier_y = (t: number) => {
    return this.bezier(t, this.pointArray.length - 1, key.y)
  }
  /**
   * 计算贝塞尔曲线
   * @param t [0,1] 0-1之间的小数
   * @param n 几项贝塞尔曲线，默认3项
   * @param key 控制点对象P的key，也就是x或y字符串
   */
  bezier = (t: number, n: number, key: key) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      const tn = 组合(n, i) * this.pointArray[i][key] * Math.pow(1 - t, n - i) * Math.pow(t, i);
      sum += tn;
    }
    return sum
  }
}