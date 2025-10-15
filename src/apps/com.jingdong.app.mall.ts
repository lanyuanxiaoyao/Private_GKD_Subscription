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
    {
      key: 200,
      enable: false,
      fastQuery: true,
      name: '[功能] 清空未读消息',
      actionMaximum: 1,
      rules: [
        {
          matches: '[id="com.jd.lib.message.feature:id/gq"]',
          activityIds: '.MainFrameActivity',
        },
      ],
    },
  ],
});
