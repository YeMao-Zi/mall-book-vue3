const e = {
  name: "公告",
  icon: "icon-park-outline:volume-notice",
  fields: {
    imageValue: {
      label: "公告内容",
      type: "object",
      child: {
        text: {
          label: "公告文本",
          type: "text",
          value: "想今宵、也对新月，过轻寒、何处小桥。"
        },
        icon: {
          label: "公告图标",
          type: "upload",
          value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABR5JREFUWEfFl2uME1UUx/9nWnYjoCvQmcIKGmBtZ19s4kZ84dugiSYkhIdCNMQowtJZFSQajGSJGHwG7HSJoiYikYCIXzT4ATFE9IMGEl/bTpc1PmKWdtpuMLy2SztH7nQGu2ULZXHDJP0w986953fv+Z9HCZf5octsH8MG4A5ImXQgMMCeU7WdsT+He5CLBki0B+dITM8CuBHAaGGYJFblt+NxF0LAmRn1DYlh9Y86vnbKxr9PlQOsGCD9zPX1Vt6zDUDruZvxfEWPf+qOp0PBeyyifTYc0GUhN8ev9/w2FERFAMkV6i0k8R6ArnY2MQD8euY3r/A+GKB3VcDnHZAOAFCd7/8BW48oke4vSyEuCJBaoT7EEsTpqgFYzKQpvtg7qb7gPDDtHApAjGW0uqvy8H4C4H7HqAWy7lTC3d8WQ5wXIKM1NuSR/wmAVxgH0yIlErONmu3BBWcBmBcokfiu0tMxQCktuAGg5525RK7Kaq59qzvtfjsIwGxrrCMpP9mdtIheI/BM+5IJq/1h4013zgwF54NInHCQCzJtTVMsKXe7z2fsoA5YNqymCjjbXQTeJ+vx+wYBJJ6bMUbKDnwGYHYZtR6UE8bNtAv5swBacB5AzqkLGrBPHFJ7QJgm5mQ9tpAA7l3aOtpbdfIgiOttXItm+ztjex2RAklNXUfA2jLGT8MjzVQ2RX8sni93A6am/gKgyd6caa0cib3suOwBMNkiJPA2WY8/dhbA1II7AFpYWIS7iw1J5DEn6F3RUrhyAOlQQM2T9B0B4wH055G7dpLekxK3k9bU3xm4ToyfONY/buqHf/TbGij2kaIbF4yMC4nQ1IKPA/SBo52N/rCx0lnzIpjW2+PMs/yRuAD9/wG44y5vKpMQ6bkWQK+iG9cUAAKzwHZ+EDe9WI4Y20cEQBhIafWbGbzcdl1eulLZHD0uogye/GF7jLBGCRsbRgzA1NQQAL2gHekORY8eMNsaxsJjHbNdALzr141lIwaQDNW3EXGnK2w5YuzvWzqtJldddbQAxe8revzJEQMwQ2oYBM1xwSRlczSRCKnNEuHn4hAdEQAhwnQm0eOE3AlFN8Y6uniQwV84GliihI2tIwKQbK9/lJg/KoQbtvgjxlMOwOsMXm2rgvleXyT+tQ2QbFc/JsYiJ27XFScdD1t7fHr3D8NMRNkzINPkSLxXNCmpjJoE4ANwMpcdI9duOXTSvYFXAKwpNeK8nybmW+VI/GDxfCWpGKD1ih57yT59oax/XnorNkBi2XRFGjVKFIcZQ0EwEFUmTGyhjv05d35QOXYakkL5VUXnMxWE3fJ4Y4GoiHYxqj5xyG1Q8pbUNKkz2lVIB0WPqP8W5xV3yCI8QcDiwvt/pxFv5W4g8XTDTcQcUI7EtrvV09TU3QDmFqIPW5WIscS1cd68L8q0JzvQ5ajZItAqWY9tsgEqaEgOa3XVNfBsdQsdgJ5cdkyL8H1FALZ72uubJOZvAIwrLOKdxFjJwG1DNSTuxhmtbnIeXhFyLc5Yvwee1tLKWlHlS2qBljPpVISMKLHiyQLoBtDsQA3qio+saGj0SNZ+R/Hik15LkuZOfDv6fanGKgKwVdyutjJDtNo15wi1pCc0Q+oLIGxwRPZVldezsGZjV99QAq8YQCw+urx5XNY78DCBhDBvAHCFbaTkj0lSq5tO8L4Hwl45bLwq2rKhjDuA5abOPy4SS1+mUSXi4+PD0b+Gt0tJGA53k0tZd1EuuBRD5db+C+CYkz/mc8yRAAAAAElFTkSuQmCC"
        }
      }
    },
    attrs: {
      label: "导航栏设置",
      type: "object",
      child: {
        speed: {
          label: "滚动速率",
          type: "number",
          value: 100,
          attr: {
            min: 10,
            max: 200
          }
        },
        scrollable: {
          label: "滚动播放",
          type: "switch",
          value: !0,
          tip: "是否开启滚动播放，内容长度溢出时默认开启"
        }
      }
    },
    styles: {
      label: "公告样式",
      type: "object",
      child: {
        borderRadius: {
          label: "圆角",
          type: "number",
          value: 0
        },
        fontSize: {
          label: "字体大小",
          type: "number",
          value: 18,
          attr: {
            min: 10
          }
        },
        padding: {
          label: "边距",
          type: "number",
          value: 5
        },
        backgroundColor: {
          label: "背景色",
          type: "color",
          value: "rgba(255, 251, 233, 1)"
        },
        color: {
          label: "字体颜色",
          type: "color",
          value: "rgba(234, 109, 40, 1)"
        }
      }
    }
  }
};
export {
  e as default
};
