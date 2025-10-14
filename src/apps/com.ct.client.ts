import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: 0,
      name: '"关注流量使用情况"弹窗',
      rules: [
        {
          matches: 'ImageView[id="com.ct.client:id/iv_close"]',
          activityIds:
            'com.ct.client.selfservice5.activity.MealAllowanceActivityBlue',
          snapshotUrls: 'https://i.gkd.li/i/22898036',
        },
      ],
    },
  ],
});
