export default {
  name: "魔方",
  icon: "fluent-mdl2:snap-to-grid",
  fields: {
    cube: {
      label: "魔方数据",
      type: "cube",
      value: {
        row: 6,
        column: 5,
        list: [],
      },
    },
    styles: {
      label: "魔方配置",
      type: "object",
      child: {
        marginTop: {
          label: "上下移动",
          type: "number",
          value: 0,
          attr: {
            min: -50,
            max: 50,
          },
        },
        marginLeft: {
          label: "左右移动",
          type: "number",
          value: 0,
          attr: {
            min: -50,
            max: 50,
          },
        },
        borderRadius: {
          label: "圆角",
          type: "number",
          value: 0,
        },
        backgroundColor: {
          label: "背景色",
          type: "color",
          value: "rgba(255, 255, 255, 0)",
        },
        gap: {
          label: "单项间隔",
          type: "number",
          value: 0,
        },
      },
    },
  },
};