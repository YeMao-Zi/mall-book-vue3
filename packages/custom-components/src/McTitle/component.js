export default {
  name: "标题",
  icon: "icon-park-outline:add-text",
  fields: {
    value: {
      label: "标题内容",
      type: "object",
      child: {
        title: {
          label: "标题",
          type: "string",
          value: "LARGE TITLE",
        },
        info: {
          label: "副标题",
          type: "string",
          value: "副标题",
        },
      },
    },
    styles: {
      label: "标题样式",
      type: "object",
      child: {
        titleSize: {
          label: "标题字体",
          type: "number",
          value: 20,
        },
        infoSize: {
          label: "副标题字体",
          type: "number",
          value: 12,
        },
        titleColor: {
          label: "标题颜色",
          type: "color",
          value: "#333333",
        },
        infoColor: {
          label: "副标题颜色",
          type: "color",
          value: "#999999",
        },
      },
    },
  },
};
