# 这是一个自定义的可视化web页面装修编辑器

## 可视化平台的核心

分为三个区域：

- 可拖拽组件列表
- 模拟效果的展示画布
- 组件属性的控制面板

![image-20240708160752315](https://s2.loli.net/2024/07/08/oQP3utclDBAkGYH.png)

### Schema

#### 规范

问题: 应该如何去描述一个组件的信息？

一个成熟的可视化平台，经过大量的迭代，无数实用的业务组件会在其后大量的新增与迭代，那么一套标准的规范就显得很重要。

例如,通过一段 `json` 数据去描述组件，特别是当需要跨平台、跨技术栈时，这很重要。

因为 `json` 是无序的、无定性的，因此不同的平台或会有自己定义的 `Schema` 协议。

```js
{
  "label": "标题组件",     // 组件名
  "icon": "icon-title",  // 组件图标
  "fields": {            // 组件属性
    "title": {                  // 属性名
      "label": "标题",           // 属性label
      "type": "string",         // 属性类型
      "value": "LEADING SERIES" // 属性初始值
    }
  }
}
```

上面的一段代码中的 `fields.title` 部分其实就是下图描述**标题内容**的一个 `Schema` 片段

![image-20240708161945280](https://s2.loli.net/2024/07/08/SVLMw31Tv2rjzpl.png)

#### 复合组件

当一个复合组件，同时需要传入数组、对象、对象数组等复合属性时，那么又该如何定义呢？

比如下面这个导航栏组件：

<img src="https://s2.loli.net/2024/07/08/hsmbEeqQVHnGtNk.png" alt="image-20240708164037604" style="zoom:50%;" />

对这个导航栏的描述分为三个部分：

- 导航栏列表（对象数组）：
  ::: details

  ```json
      "tabList": {
        "label": "导航栏列表",
        "type": "array",
        "child": {
          "label": {
            "label": "导航名称",
            "type": "string",
            "value": "默认导航"
          },
          "image": {
            "label": "图片上传",
            "type": "string",
            "value": "https://s2.loli.net/2024/07/08/hsmbEeqQVHnGtNk.png"
          },
          "link": {
            "label": "跳转链接",
            "type": "link",
            "value": "https://www.baidu.com"
          }
        },
        "value": [
          {
            "id": "01",
            "label": "推荐酒店",
            "image": "https://s2.loli.net/2024/07/08/hsmbEeqQVHnGtNk.png",
            "link": ""
          },
          {
            "id": "02",
            "label": "热销抢购",
            "image": "https://s2.loli.net/2024/07/08/hsmbEeqQVHnGtNk.png",
            "link": ""
          }
        ]
      }
  ```

  :::

- 导航栏设置
  ::: details

  ```json
      "attr": {
        "label": "导航栏设置",
        "type": "object",
        "child": {
          "model": {
            "label": "模式选择",
            "type": "select",
            "value": "fixed",
            "data": [
              { "id": "fixed", "label": "固定", "value": "fixed" },
              { "id": "scroll", "label": "滑动", "value": "scroll" }
            ]
          },
          "type": {
            "label": "显示类型",
            "type": "select",
            "value": "image-text",
            "data": [
              { "id": "image", "label": "图片", "value": "image" }
              // ...省略代码
            ]
          },
          "max": {
            "label": "最多显示",
            "type": "select",
            "value": "4",
            "data": [
              { "id": "1", "label": "1个", "value": "1" }
              // ...省略代码
            ]
          }
        }
      }
  ```

  :::

- 导航栏样式
  ::: details

  ```json
  "styles": {
        "label": "导航栏样式",
        "type": "object",
        "child": {
          "pagePadding": {
            "label": "页面边距",
            "type": "number",
            "value": 0
          },
          "comPaddingTop": {
            "label": "上边距",
            "type": "number",
            "value": 0
          },
          "comPaddingBottom": {
            "label": "下边距",
            "type": "number",
            "value": 0
          },
          "itemPadding": {
            "label": "单项边距",
            "type": "number",
            "value": 0
          }
        }
      }
  ```

  :::

组合起来就构成了一个描述组件的 json

::: details

```json
{
  "name": "图文导航",
  "icon": "icon-daohan",
  "fields": {
    "tabList": {
      "label": "导航栏列表",
      "type": "array",
      "child": {
        "label": {
          "label": "导航名称",
          "type": "string",
          "value": "默认导航"
        },
        "image": {
          "label": "图片上传",
          "type": "string",
          "value": "https://s2.loli.net/2024/07/08/hsmbEeqQVHnGtNk.png"
        },
        "link": {
          "label": "跳转链接",
          "type": "link",
          "value": "https://www.baidu.com"
        }
      },
      "value": [
        {
          "id": "01",
          "label": "推荐酒店",
          "image": "https://s2.loli.net/2024/07/08/hsmbEeqQVHnGtNk.png",
          "link": ""
        },
        {
          "id": "02",
          "label": "热销抢购",
          "image": "https://s2.loli.net/2024/07/08/hsmbEeqQVHnGtNk.png",
          "link": ""
        }
      ]
    },
    "attr": {
      "label": "导航栏设置",
      "type": "object",
      "child": {
        "model": {
          "label": "模式选择",
          "type": "select",
          "value": "fixed",
          "data": [
            { "id": "fixed", "label": "固定", "value": "fixed" },
            { "id": "scroll", "label": "滑动", "value": "scroll" }
          ]
        },
        "type": {
          "label": "显示类型",
          "type": "select",
          "value": "image-text",
          "data": [
            { "id": "image", "label": "图片", "value": "image" }
            // ...省略代码
          ]
        },
        "max": {
          "label": "最多显示",
          "type": "select",
          "value": "4",
          "data": [
            { "id": "1", "label": "1个", "value": "1" }
            // ...省略代码
          ]
        }
      }
    },
    "styles": {
      "label": "导航栏样式",
      "type": "object",
      "child": {
        "pagePadding": {
          "label": "页面边距",
          "type": "number",
          "value": 0
        },
        "comPaddingTop": {
          "label": "上边距",
          "type": "number",
          "value": 0
        },
        "comPaddingBottom": {
          "label": "下边距",
          "type": "number",
          "value": 0
        },
        "itemPadding": {
          "label": "单项边距",
          "type": "number",
          "value": 0
        }
      }
    }
  }
}

```

:::

## 运行
1.执行 `npm install` 安装依赖
2.执行 `npm run build:comp` 和 `npm run build:editor` 构建依赖
3.执行 `npm run dev` 启动项目

## 发布
### 传统npm发布
1.执行 `publish:comp` 是单独发布中间的视图组件
2.执行 `publish:editor` 是单独发布编辑器组件

### changeset发布
依赖 changeset 的发包能力
1.执行 `pnpm changeset` 创建 changeset
  - 在发布之前，可以不断的执行 `pnpm changeset` 来添加变更记录。
2.执行 `pnpm changeset version` 构建版本
  - 该命令会根据 changeset 文件更新包的版本号和依赖关系，并生成更新日志。同时会消耗掉所有的 changeset 文件。
3.执行 `pnpm changeset publish` 发包