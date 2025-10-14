import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1927321,
  name: 'LanyuanXiaoyao Private Rules',
  version: 0,
  author: 'lanyuanxiaoyao',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/lanyuanxiaoyao/Private_GKD_Subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
