// 以向面板拖拽了一个轮播图为结构示例

// 组件的初始化配置
const initial = {
  // 左侧拖拽组件的完整配置
  fields: {
    McCarousel: {
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
            image: "http://110.41.150.71:8090/img/1667354598861.png",
          },
          {
            id: "0002",
            image: "http://110.41.150.71:8090/img/1667354575078.png",
          },
        ],
      },
      attrs: {
        label: "轮播设置",
        type: "object",
      },
      styles: {
        label: "走马灯样式",
        type: "object",
        child: {
          borderRadius: {
            label: "圆角",
            type: "number",
            value: 10,
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
  },
  // 左侧拖拽组件的响应源
  initializing: [
    {
      component: "McCarousel",
      name: "轮播",
      icon: "icon-park-outline:carousel",
      list: [
        {
          id: "0001",
          image: "http://110.41.150.71:8090/img/1667354598861.png",
        },
        {
          id: "0002",
          image: "http://110.41.150.71:8090/img/1667354575078.png",
        },
      ],
      attrs: {},
      styles: {
        borderRadius: 10,
        height: 150,
      },
    },
  ],
};

/** START 中间面板区域*/
// 中间面板的响应数据：
const widgets = [
  {
    component: "McCarousel",
    name: "轮播",
    icon: "icon-park-outline:carousel",
    list: [
      {
        id: "0001",
        image: "http://110.41.150.71:8090/img/1667354598861.png",
      },
      {
        id: "0002",
        image: "http://110.41.150.71:8090/img/1667354575078.png",
      },
    ],
    attrs: {},
    styles: {
      borderRadius: 10,
      height: 150,
    },
    id: "7n0cchauqdi",
  },
];
/** END */

/** START 右侧控制区域*/
// 拍平后组件的对应的响应数据
const curComponent = {
  component: "McCarousel",
  name: "轮播",
  icon: "icon-park-outline:carousel",
  list: [
    {
      id: "0001",
      imagePath: "https://sponsors.vuejs.org/images/chrome_frameworks_fund.png",
      jumpPath: "https://www.baidu.com",
    },
    {
      id: "0002",
      imagePath: "https://sponsors.vuejs.org/images/chrome_frameworks_fund.png",
      jumpPath: "https://www.baidu.com",
    },
  ],
  attrs: {},
  styles: {
    borderRadius: 10,
    height: 150,
  },
  id: "7n0cchauqdi",
};

// 组件对应的完整配置
const curShemaField = initial.fields.McCarousel;
/** END */
