// 获取随机字符串
export const randomString = () => Math.random().toString(36).slice(2);

// 对象拷贝
export const copyObject = (orig: object) => {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig),
  );
};
