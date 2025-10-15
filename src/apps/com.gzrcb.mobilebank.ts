import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gzrcb.mobilebank',
  name: '广州农商银行',
  groups: [
    {
      key: 100,
      name: '[弹窗] 全屏广告',
      rules: [
        {
          matches:
            'ImageButton[id="com.gzrcb.mobilebank:id/img_advertisement_close"]',
          activityIds: 'com.gzrcb.mobilebank',
        },
      ],
    },
  ],
});
