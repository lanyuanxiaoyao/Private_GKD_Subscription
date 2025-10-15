import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yipiao',
  name: '智行火车票',
  groups: [
    {
      key: 0,
      name: '[横幅] 去**',
      rules: [
        {
          matches:
            'TextView[text^="去"] + ImageView[id="com.yipiao:id/arg"][clickable=true]',
          activityIds:
            'com.ct.client.selfservice5.activity.MealAllowanceActivityBlue',
          snapshotUrls: [
            'https://i.gkd.li/i/22917060',
            'https://i.gkd.li/i/22917069',
          ],
        },
      ],
    },
  ],
});
