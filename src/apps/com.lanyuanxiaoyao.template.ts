import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lanyuanxiaoyao.template',
  name: '规则模板',
  groups: [
    {
      key: 0,
      name: '[横幅] 横幅类0-99',
      rules: [
        {
          matches: 'ImageView',
          activityIds: 'com.lanyuanxiaoyao.template.MainActivity',
        },
      ],
    },
    {
      key: 100,
      name: '[弹窗] 弹窗类100-199',
      rules: [
        {
          matches: 'ImageView',
          activityIds: 'com.lanyuanxiaoyao.template.MainActivity',
        },
      ],
    },
    {
      key: 200,
      name: '[功能] 功能类200-299',
      rules: [
        {
          matches: 'ImageView',
          activityIds: 'com.lanyuanxiaoyao.template.MainActivity',
        },
      ],
    },
  ],
});
