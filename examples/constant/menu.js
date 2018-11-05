import * as NAVCONFIG from '../nav.config.json'
const zhCnNav = NAVCONFIG['zh-CN'];
export const zybMenu = [
  {
    title: '开发指南',
    children: [
      {
        title: '安装',
        link: '/zh-CN/component/installation'
      }
    ]
  },
  {
    title: 'Basic',
    children: [
      {
        title: 'Color 色彩',
        link: '/zh-CN/component/zybColor'
      },
      {
        title: 'Font 字体',
        link: '/zh-CN/component/zybFont'
      },
      {
        title: 'Button 按钮',
        link: '/zh-CN/component/button'
      },
      {
        title: 'Icons 图标',
        link: 'zybIcons'
      }
    ]
  },
  {
    title: 'Navigation',
    children: [
      {
        title: 'Menu 导航菜单',
        link: 'zybMenu'
      },
      {
        title: 'Breadcrumb 面包屑',
        link: 'zybBreadcrumb'
      },
      {
        title: 'Dropdown 下拉菜单',
        link: 'zybDropdown'
      },
      {
        title: 'Pagination 分页',
        link: 'zybPagination'
      }
    ]
  },
  {
    title: 'Form',
    children: [
      {
        title: 'Radio 单选框',
        link: 'zybRadio'
      },
      {
        title: 'Checkbox 多选框',
        link: 'zybCheckbox'
      },
      {
        title: 'Input 输入框',
        link: 'zybInput'
      },
      {
        title: 'TextArea 文本域',
        link: 'zybTextArea'
      },
      {
        title: 'Search 搜索',
        link: 'zybSearch'
      },
      {
        title: 'InputNumber 计数器',
        link: 'zybInputNumber'
      },
      {
        title: 'Select 选择器',
        link: 'zybSelect'
      },
      {
        title: 'Cascader 级联选择器',
        link: 'zybCascader'
      },
      {
        title: 'Switch 开关',
        link: 'zybSwitch'
      },
      {
        title: 'Slide 滑块',
        link: 'zybSlide'
      }
    ]
  },
  {
    title: 'View',
    children: [
      {
        title: 'Carousel 走马灯',
        link: 'zybCarousel'
      },
      {
        title: 'Collapse 折叠面板',
        link: 'zybCollapse'
      },
      {
        title: 'Tree 树形控件',
        link: 'zybTree'
      },
      {
        title: 'Table 表格',
        link: 'zybTable'
      },
      {
        title: 'Tabs 标签页',
        link: 'zybTabs'
      },
      {
        title: 'Preview 图片预览',
        link: 'zybPreview'
      },
      {
        title: 'Scrollbar 滚动条',
        link: 'zybScrollbar'
      }
    ]
  },
  {
    title: 'FeedBack',
    children: [
      {
        title: 'Tooltip 文字提示',
        link: 'zybTooltip'
      },
      {
        title: 'Message 全局提示',
        link: 'zybMessage'
      },
      {
        title: 'Notification 通知',
        link: 'zybNotification'
      },
      {
        title: 'Model 对话框',
        link: 'zybModel'
      },
      {
        title: 'Spin 加载中',
        link: 'zybSpin'
      }
    ]
  },
  {
    title: '媒体播放',
    children: [
      {
        title: 'Voice 音频播放',
        link: 'zybVoice'
      }
    ]
  }
];


export const zybZhCnNavMenu = NAVCONFIG['zh-CN'][4].groups;
