// 业绩周报
import BANNER_IMG6 from "../images/banner/banner_6.png";
// 盈计划官宣
import BANNER_IMG7 from "../images/banner/banner_7.png";
// 目标盈 快车达标
import BANNER_IMG14 from "../images/banner/banner_14.png";
// 主理人方法论
import BANNER_IMG18 from "../images/banner/banner_18.png";
import BANNER_IMG20 from "../images/banner/banner_20.png";
// 主理人方法论
import BANNER_IMG_ONE_18 from "../images/banner/banner_one_18.png";
import BANNER_IMG_ONE_20 from "../images/banner/banner_one_20.png";

import iconAddSecA_1 from "../images/icon/addSecAIcon_1.png";
import iconAddSecA_2 from "../images/icon/addSecAIcon_2.png";
import iconAddSecA_3 from "../images/icon/addSecAIcon_3.png";
import iconAddSecA_4 from "../images/icon/addSecAIcon_4.png";

export const MOCK_BANNER_LIST = [{
    imgUrl: BANNER_IMG20,
    imgUrlOne: BANNER_IMG_ONE_20,
    link: "https://yrd.yixinfund.com/dh/fund/yxl_mby_cgb/index.html",
    bury_tag: "首页头图-Banner1",
    sensors_title: "banner-目标盈"

  },
  {
    imgUrl: BANNER_IMG18,
    imgUrlOne: BANNER_IMG_ONE_18,
    link: {
      funcName: "articleDetail",
      args: {
        articleId: "23b5c64c67eb4688bad41f65c9cee055"
      }
    },
    bury_tag: "首页头图-Banner2",
    sensors_title: "banner-主理人方法论"

  },
  {
    imgUrl: BANNER_IMG14,
    imgUrlOne: ``,
    link: {
      funcName: "articleDetail",
      args: {
        articleId: "136a842dc8e441c1b3da29eda6c2af4e"

      }
    },
    bury_tag: "首页头图-Banner2",
    sensors_title: "banner-达标喜报"
  },
  {
    imgUrl: BANNER_IMG6,
    imgUrlOne: ``,
    link: "https://yrd.yixinfund.com/dh/fund/activity_yjzb/index.html",
    bury_tag: "首页头图-Banner2",
    sensors_title: "banner-业绩周报"
  },
  {
    imgUrl: BANNER_IMG7,
    imgUrlOne: ``,
    link: {
      funcName: "articleDetail",
      args: {
        articleId: "44f34afdf213442aae88e60347e5a3de"

      }
    },
    bury_tag: "首页头图-Banner1",
    sensors_title: "banner-盈计划官宣"

  },

]
export const ADD_SECA_CFG = [{
    icon: iconAddSecA_1,
    label: "现金管理",
    link: {
      funcName: "webVC",
      args: {
        url: "https://yrd.yixinfund.com/dh/fund/activity_xjgl/index.html"
      },
    },
    buryTag: `icon-现金管理`,
    sensors_title: "现金管理"
  },
  {
    icon: iconAddSecA_2,
    label: "投资计划",
    link: {
      funcName: "webVC",
      args: {
        url: "https://yrd.yixinfund.com/dh/fund/yxl_yjcy/index.html"
      }
    },
    buryTag: `icon-投资计划`,
    sensors_title: "投资计划"
  },
  {
    icon: iconAddSecA_3,
    label: "目标盈",
    link: {
      funcName: "webVC",
      args: {
        url: "https://yrd.yixinfund.com/dh/fund/yxl_mby_cgb/index.html"
      }
    },
    buryTag: `icon-目标盈`,
    sensors_title: "目标盈"
  },
  {
    icon: iconAddSecA_4,
    label: "全部产品",
    link: {
      funcName: "webVC",
      args: {
        url: 'https://yrd.yixinfund.com/dh/fund/combine_guide/index.html#/'
      }
    },
    buryTag: `icon-全部产品`,
    sensors_title: "全部产品"
  }
];
// Card类型
export const CARD_TYPE = {
  CARD_TYPE_A: "card_type_a", //* rate 需要请求API
  CARD_TYPE_B: "card_type_b", //* 描述
  CARD_TYPE_C: "card_type_c", //* rate 不需要请求API
};
// 推荐卡片位
export let MOCK_CARD_ONE = [{
  type: CARD_TYPE.CARD_TYPE_C,
  title: "目标盈快车版",
  title_sub: "力争更快达标",
  tag: {
    main: "目标盈快车版",
    sub: "申购截止14:55"
  },
  apply_time: {
    apply_num: "14:55",
    apply_desc: "申购截止"
  },
  rate: {
    rate_num: "5.00",
    rate_desc: "目标止盈收益率"
  },
  fund_desc: "",
  desc: `多策略配置，资金布局更科学`,
  btn_label: "立即申购",
  link: {
    funcName: "webVC",
    args: {
      url: "https://yrd.yixinfund.com/dh/fund/yxl_mby_kc_03/index.html",
    }
  },
  bury_tag: "card-目标盈快车版",
  sensors_title: "card-目标盈快车版",
}];
export let MOCK_TABS_LIST = [{
    tab_title: "人气优选",
    desc: {
      desc_title: "人气优选",
      desc_content: "人气优选基金产品，超74.5%用户的选择。",
    },
    thisActive: true,
  },
  {
    tab_title: "稳健投资",
    desc: {
      desc_title: "稳健投资",
      desc_content: "严控波动，分散投资，做好配置，是稳健之道。",
    },
    thisActive: false,
  },
  {
    tab_title: "积极投资",
    desc: {
      desc_title: "积极投资",
      desc_content: "采取积极进取型策略，紧跟市场趋势，力争获取更高收益。",
    },
    thisActive: false,
  }
]