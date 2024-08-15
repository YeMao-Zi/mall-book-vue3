// 获取随机字符串
export const randomString = () => Math.random().toString(36).slice(2);

// 对象拷贝
export const deepClone = (obj: any) => {
  if (typeof obj !== "object") {
    return obj;
  }
  let objClone = new obj.constructor(); //使用构造器,是对象输出{}，是数组输出[],是基本数据类型就输出原始数据。
  for (const key in obj) {
    // 深层拷贝，如果还有结构调用自身实现递归
    objClone[key] = deepClone(obj[key]);
  }
  //基本类型直接赋值
  return objClone;
};
