import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 0,
      name: '[横幅] 会员福利-去激活',
      rules: [
        {
          matches:
            'View[id="com.cainiao.wireless:id/vip_banner_fl_button_close_view"]',
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          snapshotUrls: 'https://i.gkd.li/i/22916578',
        },
      ],
    },
  ],
});
