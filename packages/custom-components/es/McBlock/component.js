const e = {
  name: "占位",
  icon: "fluent-mdl2:rectangle-shape",
  fields: {
    styles: {
      label: "容器样式",
      type: "object",
      child: {
        backgroundColor: {
          label: "背景色",
          type: "color",
          value: "rgba(209, 209, 212, 0.95)"
        },
        backgroundImage: {
          label: "背景图片",
          type: "upload",
          value: ""
        },
        height: {
          label: "高度",
          type: "number",
          attr: {
            max: 500
          },
          value: 20
        }
      }
    }
  }
};
export {
  e as default
};
