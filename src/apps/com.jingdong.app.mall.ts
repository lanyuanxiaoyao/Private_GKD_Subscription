import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '[横幅] 砸京蛋',
      rules: [
        {
          matches: 'ImageView[id="com.jd.lib.cart.feature:id/wb"][desc="关闭"]',
          activityIds: '.MainFrameActivity',
          snapshotUrls: 'https://i.gkd.li/i/22917731',
        },
      ],
    },
  ],
});
