import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quark.browser',
  name: '夸克',
  groups: [
    {
      key: 200,
      enable: false,
      name: '[功能] 直接进入网盘',
      rules: [
        {
          matches: 'FrameLayout[desc="夸克网盘"]',
          activityIds: 'com.ucpro.BrowserActivity',
        },
      ],
    },
  ],
});
