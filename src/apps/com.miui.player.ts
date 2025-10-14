import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.player',
  name: '小米音乐',
  groups: [
    {
      key: 0,
      name: '[横幅] 超级会员已过期',
      rules: [
        {
          matches: 'ImageView[id="com.miui.player:id/dunning_close_btn"]',
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          snapshotUrls: 'https://i.gkd.li/i/22898656',
        },
      ],
    },
    {
      key: 1,
      name: '[弹窗] 免费体验高品质效果',
      rules: [
        {
          matches: 'ViewGroup[desc^="关闭弹窗"]',
          activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          snapshotUrls: 'https://i.gkd.li/i/22899655',
        },
      ],
    },
  ],
});
