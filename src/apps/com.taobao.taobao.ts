import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 0,
      name: '[横幅] 抢先购',
      rules: [
        {
          matches: 'TextView[text="뉜"] < FrameLayout[clickable=true]',
          activityIds: 'com.taobao.tao.welcome.Welcome',
        },
      ],
    },
  ],
});
