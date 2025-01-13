export default {
  name: "轮播",
  icon: "solar:slider-vertical-line-duotone",
  fields: {
    list: {
      label: "轮播列表",
      type: "array",
      child: {
        imagePath: {
          label: "轮播图片",
          type: "upload",
          value: "",
        },
        jumpPath: {
          label: "页面跳转",
          type: "jump",
          value: "",
        },
      },
      value: [
        {
          id: "0001",
          imagePath:
            "https://sponsors.vuejs.org/images/chrome_frameworks_fund.png",
          jumpPath: "https://www.baidu.com/",
        },
        {
          id: "0002",
          imagePath:
            "https://sponsors.vuejs.org/images/chrome_frameworks_fund.png",
          jumpPath: "https://cn.bing.com/",
        },
      ],
    },
    attrs: {
      label: "轮播设置",
      type: "object",
      child: {
        autoplay: {
          label: "自动播放",
          type: "switch",
          value: true,
        },
        loop: {
          label: "是否循环",
          type: "switch",
          value: true,
        },
      },
    },
    styles: {
      label: "走马灯样式",
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
