export default {
  name: "图文导航",
  icon: "material-symbols:image-aspect-ratio-outline-rounded",
  fields: {
    tabList: {
      label: "导航栏列表",
      type: "array",
      child: {
        label: {
          label: "导航名称",
          type: "string",
          value: "默认导航",
        },
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
      value: [
        {
          id: "0001",
          label: "标签1",
          imagePath:
            "https://sponsors.vuejs.org/images/chrome_frameworks_fund.png",
          jumpPath: "",
        },
        {
          id: "0002",
          label: "标签2",
          imagePath:
            "https://sponsors.vuejs.org/images/chrome_frameworks_fund.png",
          jumpPath: "",
        },
        {
          id: "0003",
          label: "标签3",
          imagePath:
            "https://sponsors.vuejs.org/images/chrome_frameworks_fund.png",
          jumpPath: "",
        },
      ],
    },
    attrs: {
      label: "导航栏设置",
      type: "object",
      child: {
        type: {
          label: "显示类型",
          type: "select",
          value: "image-text",
          data: [
            {
              id: "001",
              label: "图片",
              value: "image",
            },
            {
              id: "002",
              label: "文字",
              value: "text",
            },
            {
              id: "003",
              label: "图文",
              value: "image-text",
            },
          ],
        },
        imageWidth: {
          label: "图片宽度",
          type: "number",
          value: 50,
          correlation: "attrs.type!=='text'",
        },
        imageHeight: {
          label: "图片高度",
          type: "number",
          value: 50,
          correlation: "attrs.type!=='text'",
        },
        imageRadius: {
          label: "图片圆角",
          type: "number",
          value: 0,
          correlation: "attrs.type!=='text'",
        },
        itemGap: {
          label: "图文间隔",
          type: "number",
          value: 10,
          correlation: "attrs.type==='image-text'",
        },
        fontSize: {
          label: "文字大小",
          type: "number",
          value: 18,
          attr: {
            min: 12,
          },
          correlation: "attrs.type!=='image'",
        },
        color: {
          label: "文本颜色",
          type: "color",
          value: "#000000",
          correlation: "attrs.type!=='image'",
        },
      },
    },
    styles: {
      label: "导航栏样式",
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
        gap: {
          label: "单项间隔",
          type: "number",
          value: 0,
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
      },
    },
  },
};
