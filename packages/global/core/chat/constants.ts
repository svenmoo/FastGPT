import { i18nT } from '../../../web/i18n/utils';

export enum ChatRoleEnum {
  System = 'System',
  Human = 'Human',
  AI = 'AI'
}
export const ChatRoleMap = {
  [ChatRoleEnum.System]: {
    name: '系统'
  },
  [ChatRoleEnum.Human]: {
    name: '用户'
  },
  [ChatRoleEnum.AI]: {
    name: 'AI'
  }
};

export enum ChatFileTypeEnum {
  image = 'image',
  file = 'file'
}
export enum ChatItemValueTypeEnum {
  text = 'text',
  file = 'file',
  tool = 'tool',
  interactive = 'interactive',
  reasoning = 'reasoning'
}

export enum ChatSourceEnum {
  test = 'test',
  online = 'online',
  share = 'share',
  api = 'api',
  cronJob = 'cronJob',
  team = 'team',
  feishu = 'feishu',
  official_account = 'official_account',
  wecom = 'wecom',
  mcp = 'mcp'
}

export const ChatSourceMap = {
  [ChatSourceEnum.test]: {
    name: i18nT('common:core.chat.logs.test')
  },
  [ChatSourceEnum.online]: {
    name: i18nT('common:core.chat.logs.online')
  },
  [ChatSourceEnum.share]: {
    name: i18nT('common:core.chat.logs.share')
  },
  [ChatSourceEnum.api]: {
    name: i18nT('common:core.chat.logs.api')
  },
  [ChatSourceEnum.cronJob]: {
    name: i18nT('chat:source_cronJob')
  },
  [ChatSourceEnum.team]: {
    name: i18nT('common:core.chat.logs.team')
  },
  [ChatSourceEnum.feishu]: {
    name: i18nT('common:core.chat.logs.feishu')
  },
  [ChatSourceEnum.official_account]: {
    name: i18nT('common:core.chat.logs.official_account')
  },
  [ChatSourceEnum.wecom]: {
    name: i18nT('common:core.chat.logs.wecom')
  },
  [ChatSourceEnum.mcp]: {
    name: i18nT('common:core.chat.logs.mcp')
  }
};

export enum ChatStatusEnum {
  loading = 'loading',
  running = 'running',
  finish = 'finish'
}
