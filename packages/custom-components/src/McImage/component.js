export default {
  name: "图片",
  icon: "lets-icons:img-box",
  fields: {
    imageValue: {
      label: "图片内容",
      type: "object",
      child: {
        imagePath: {
          label: "图片上传",
          type: "upload",
          value: "",
        },
        jumpPath: {
          label: "页面跳转",
          type: "jump",
          value: "",
        },
      },
    },
    styles: {
      label: "图片样式",
      type: "object",
      child: {
        borderRadius: {
          label: "圆角",
          type: "number",
          value: 0,
        },
        height: {
          label: "高度",
          type: "number",
          attr: {
            max: 500,
          },
          value: 150,
        },
      },
    },
  },
};
