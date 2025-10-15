import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.samsclub.app',
  name: '山姆会员商店',
  groups: [
    {
      key: 0,
      name: '[横幅] 免费申请联名卡',
      rules: [
        {
          matches:
            'ImageView[id="cn.samsclub.app:id/fragment_home_window_delete_iv"]',
          activityIds: '.ui.MainActivity',
          snapshotUrls: 'https://i.gkd.li/i/22917773',
        },
      ],
    },
    {
      key: 1,
      fastQuery: true,
      name: '[横幅] 新鲜事',
      rules: [
        {
          matches: '[id="cn.samsclub.app:id/iv_bubble_close"]',
          activityIds: '.ui.MainActivity',
        },
      ],
    },
  ],
});
