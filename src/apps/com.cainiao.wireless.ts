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
    {
      key: 2,
      name: '[横幅] 菜鸟APP体验调研',
      rules: [
        {
          matches: 'View[desc="菜鸟APP体验调研"] +n ImageView',
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          snapshotUrls: 'https://i.gkd.li/i/22917057',
        },
      ],
    },
    {
      key: 3,
      name: '[横幅] 开启手机通知',
      rules: [
        {
          matches: 'View[desc="去开启"] -n ImageView[width=58][height=58]',
          activityIds: '.homepage.view.activity.HomePageActivity',
        },
      ],
    },
    {
      key: 100,
      name: '[弹窗] 超时享',
      rules: [
        {
          matches: 'Image[text="超时享"] + View > Image',
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          snapshotUrls: 'https://i.gkd.li/i/22916794',
        },
      ],
    },
    {
      key: 200,
      name: '[功能] 消息一键已读',
      rules: [
        {
          matches: 'TextView[text="一键已读"]',
          activityIds: '.homepage.view.activity.HomePageActivity',
        },
      ],
    },
  ],
});
