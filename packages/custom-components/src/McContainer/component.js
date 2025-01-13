export default {
  name: "容器",
  icon: "mynaui:box",
  children: [],
  fields: {
    styles: {
      label: "容器样式",
      type: "object",
      child: {
        paddingTop: {
          label: "上内间距",
          type: "number",
          value: 10,
        },
        paddingBottom: {
          label: "下内间距",
          type: "number",
          value: 10,
        },
        paddingLeft: {
          label: "左内间距",
          type: "number",
          value: 10,
        },
        paddingRight: {
          label: "右内间距",
          type: "number",
          value: 10,
        },
        backgroundColor: {
          label: "背景色",
          type: "color",
          value: "rgba(255, 255, 255, 0)",
        },
        marginTop: {
          label: "上外间距",
          type: "number",
          value: 0,
        },
        marginBottom: {
          label: "下外间距",
          type: "number",
          value: 0,
        },
        marginLeft: {
          label: "左外间距",
          type: "number",
          value: 0,
        },
        marginRight: {
          label: "右外间距",
          type: "number",
          value: 0,
        },
        borderWidth: {
          label: "边框宽度",
          type: "number",
          value: 1,
        },
        borderColor: {
          label: "边框颜色",
          type: "color",
          value: "rgba(209, 209, 212, 0.95)",
        },
        borderRadius: {
          label: "圆角",
          type: "number",
          value: 0,
        },
        backgroundImage: {
          label: "背景图片",
          type: "upload",
          value: "",
        },
      },
    },
  },
};
