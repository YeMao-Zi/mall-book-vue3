import navBar from "@/components/navBar/index.vue";
import { createApp, createVNode, render } from "vue";
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

export const test = () => {
  const div = document.createElement("div");
  // const componentInstance = createApp(navBar, {
  //   text: "1234",
  // });
  // componentInstance.mount(div);

  const vm = createVNode(navBar, { text: "1234" }); // 创建vNode
  render(vm, div);
  console.log(div);
  // document.body.appendChild(div);
};
