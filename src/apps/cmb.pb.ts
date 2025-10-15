import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmb.pb',
  name: '招商银行',
  groups: [
    {
      key: 0,
      name: '[横幅] 好礼相送',
      rules: [
        {
          matches: 'ImageView[id="cmb.pb:id/bubble_close"]',
          activityIds: 'cmb.pb.app.mainframe.container.PBMainActivity',
        },
      ],
    },
  ],
});
