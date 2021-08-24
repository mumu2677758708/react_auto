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

export const LOC_TYPE = {
  TIMELIST_1: "timeList1Arr",
  TIMELIST_2: "timeList2Arr",
  TIMELIST_3: "timeList3Arr",
  SECTION_B_TAB_1: "sectionRateTab1Arr",
  SECTION_B_TAB_2: "sectionRateTab2Arr",
  SECTION_B_TAB_3: "sectionRateTab3Arr"
}
export const TIME_NEED = [
  //目标盈
  {
    rateId: "1_1",
    loc: LOC_TYPE.TIMELIST_1,
    index: 0,
    categoryCode: 'A'
  },
  // 目标盈快车版
  {
    categoryCodeId: "1_2",
    loc: LOC_TYPE.TIMELIST_1,
    index: 1,
    categoryCode: 'K',
  },

  //目标盈 稳健版
  {
    categoryCodeId: "2_1",
    loc: LOC_TYPE.TIMELIST_2,
    index: 0,
    categoryCode: 'B',
  },
  // 远见长盈
  {
    categoryCodeId: "3_1",
    loc: LOC_TYPE.TIMELIST_3,
    index: 1,
    categoryCode: 'Y',
  }
];
export const getTIMEDataCategoryCodeId = (categoryCodeId) => {
  return TIME_NEED.filter(el => el.categoryCodeId === categoryCodeId)[0];
}
export const getRateDataByRateId = (rateId) => {
  return RATE_NEED.filter(el => el.rateId === rateId)[0];
}



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
export const FETCH_TYPE = {
  GET_GOAL: "getGoal",
  MONEY_PLUS: "moneyPlusInfo",
  FUND_NET_VALUE: "fundNetValue",
  GET_CARD: "getCard",
}
/**
 * 请求到数据
 */
export const RATE_TYPE = {
  FIVE_YEAR: "fiveYearRiseFall",
  SINGLE_MONTH: "rateOfReturnInSingleMonth",
  THREE_MONTH: 'threeMonthRiseFall',
  SINCE_ANNUAL: "annualizaIncomeRate", // 成立以来年化收益率
  ONE_YEAR: 'oneYearRiseFall',
  ONE_YEAR2: "rateOfReturnInSingleYear",
  THREE_YEAR: "rateOfReturnInThreeYear",
  THREE_YEAR2: "threeYearRiseFall",
  SINCE_THIS_YEAR: "rateOfReturnInSinceThisYear",
  SIX_MONTH_GROUP: "sixMonthRiseFall",
  SIX_MONTH: "rateOfReturnInSixMonth",
  MAX_INC: "incValue",
  FULL_HISTORY: "rateOfReturnInSinceStart",
  ONE_WEEK: "oneWeekRiseFall",
  SINCE_RISE: "sinceFoundRiseFall"
}
/**
 * 待请求的数据
 */
export const RATE_NEED = [{
    rateId: "2_1", // 增盈强债
    fetchType: FETCH_TYPE.GET_GOAL,
    rateType: RATE_TYPE.SINCE_RISE,
    loc: LOC_TYPE.SECTION_B_TAB_2,
    index: 0,
    groupId: 248,
  },
  {
    rateId: "2_2", // 确幸组合
    fetchType: FETCH_TYPE.GET_GOAL,
    rateType: RATE_TYPE.SINCE_ANNUAL,
    loc: LOC_TYPE.SECTION_B_TAB_2,
    index: 1,
    groupId: 19,
  },
  {
    rateId: "2_3", // 稳健长盈组合
    fetchType: FETCH_TYPE.GET_GOAL,
    rateType: RATE_TYPE.SINCE_ANNUAL,
    loc: LOC_TYPE.SECTION_B_TAB_2,
    index: 2,
    groupId: 8,
  },
  {
    rateId: "3_1",
    fetchType: FETCH_TYPE.GET_GOAL,
    rateType: RATE_TYPE.SINCE_ANNUAL,
    loc: LOC_TYPE.SECTION_B_TAB_3,
    index: 0,
    groupId: 9,
  },
];

// 人气优选
export let MOCK_BAND_LIST_1 = [{
		rate: {
			rate_num: "12",
			rate_desc: "参考目标止盈收益率",
		},
		title: "目标盈",
		tag: {
			tag_label: "波段神器",
			tag_desc: "无募集期",
		},
		link: {
			funcName: "webVC",
			args: {
				url: "https://yrd.yixinfund.com/dh/fund/yxl_mby_labor/index.html",
			}
		},
		risk: {
			rish_cl: "cl_yellow",
			risk_desc: "中高风险"
		},
		bury_tag: "人气优选-目标盈",
		time: {
			show: true,
			showRate: true,
			status: "1",
			day: "0",
			hours: "0",
			minutes: "0",
			seconds: "0"
		}
	}, {
		rate: {
			rate_num: "5",
			rate_desc: "参考目标止盈收益率",
		},
		title: "目标盈快车版",
		tag: {
			tag_label: "择机买入",
			tag_desc: "指数建仓",
		},
		link: {
			funcName: "webVC",
			args: {
				url: "https://yrd.yixinfund.com/dh/fund/yxl_mby_kc_03/index.html",
			}
		},
		risk: {
			rish_cl: "cl_orange",
			risk_desc: "高风险"
		},
		bury_tag: "人气优选-目标盈快车版",
		time: {
			show: true,
			showRate: true,
			status: "1",
			day: "0",
			hours: "0",
			minutes: "0",
			seconds: "0"
		}
	}
	/*, {
	    	rate: {
	    		rate_num: "--",
	    		rate_desc: "近7日年化收益率",
	    	},
	    	title: "宜钱包",
	    	tag: {
	    		tag_label: "1万快赎",
	    		tag_desc: "货基申赎零费率",
	    	},
	    	link: {
	    		loginNeed: 1,
	    		funcName: "myWallet",
	    		args: {}
	    	},
	    	risk: {
	    		rish_cl: "risk-desc-gray",
	    		risk_desc: "|  买入组合更快建仓"
	    	},
	    	bury_tag: "人气优选-宜钱包",
	    	time: {
	    		show: false,
	    		showRate: false,
	    		status: "1",
	    		day: "0",
	    		hours: "0",
	    		minutes: "0",
	    		seconds: "0"
	    	}
	    }*/
	, {

		rate: {
			rate_showTxtBool: true,
			//rate_showTxt: `1<span>元起投</span>`,
			rate_num: "1",
			rate_unit: "元起",
			rate_desc: "买入组合更快建仓 ",
		},
		title: "宜钱包",
		tag: {
			tag_label: "1万快赎",
			//tag_desc: "货基申赎零费率",
			tag_desc: "货基申赎0费率",
		},
		link: {
			loginNeed: 1,
			funcName: "myWallet",
			args: {}
		},
		risk: {
			rish_cl: "risk-desc-gray",
			risk_desc: ""
		},
		bury_tag: "人气优选-宜钱包",
		time: {
			show: false,
			showRate: true,
			status: "1",
			day: "0",
			hours: "0",
			minutes: "0",
			seconds: "0"
		}
	}
];
// 积极投资
export let MOCK_BAND_LIST_2 = [{
		rate: {
			rate_num: "2.35",
			rate_desc: "成立以来收益率",
		},
		title: "增盈强债",
		tag: {
			tag_label: "强债配置",
			tag_desc: "避险优选",
		},
		/*sstag: {
			tag_label: "调仓中",
			tag_desc: " 暂停申购",
		},*/
		link: {
			/*noJump:true,
			funcName: "raDetail",
			args: {
				'raId': '248',
				'thirdProductId': '235'
			}*/
			// noJump: false,
			funcName: "webVC",
			args: {
				url: "http://pzfund-test.yrcfqdxm.paas.corp/155/mubiaoying/#/portfolio-details?thirdProductId=235",
			}
		},
		risk: {
			rish_cl: "cl_blue",
			risk_desc: "低风险"
		},
		bury_tag: "稳健投资-增盈强债",
		time: {
			show: false,
			showRate: false,
			day: "0",
			hours: "0",
			minutes: "0",
			seconds: "0"
		}
	},
	{
		rate: {
			rate_num: "10",
			rate_desc: "成立以来年化收益率",
		},
		title: "确幸组合",
		tag: {
			tag_label: "固收打底",
			tag_desc: "安心回报",
		},
		link: {
			/*funcName: "raDetail",
			args: {
				'raId': '19',
				'thirdProductId': '28'
			}*/
			funcName: "webVC",
			args: {
				url: "http://pzfund-test.yrcfqdxm.paas.corp/155/mubiaoying/#/portfolio-details?thirdProductId=28",
			}
		},
		risk: {
			rish_cl: "cl_yellow",
			risk_desc: "中低风险"
		},
		bury_tag: "稳健投资-确幸组合",
		time: {
			show: false,
			day: "0",
			hours: "0",
			minutes: "0",
			seconds: "0"
		}
	},
	{
		rate: {
			rate_num: "10",
			rate_desc: "成立以来年化收益率",
		},
		title: "稳健长盈组合",

		tag: {
			tag_label: "均衡配置",
			tag_desc: "进阶收益",
		},
		link: {
			/*funcName: "raDetail",
			args: {
				'raId': '8',
				'thirdProductId': '18'
			}*/
			funcName: "webVC",
			args: {
				url: "http://pzfund-test.yrcfqdxm.paas.corp/155/mubiaoying/#/portfolio-details?thirdProductId=18",
			}
		},
		risk: {
			rish_cl: "cl_yellow",
			risk_desc: "中风险"
		},
		bury_tag: "稳健投资-稳健长盈组合",
		time: {
			show: false,
			showRate: false,
			day: "0",
			hours: "0",
			minutes: "0",
			seconds: "0"
		}
	},
	// {
	// 	rate: {
	// 		rate_num: "10",
	// 		rate_desc: "近一年收益率",
	// 	},
	// 	title: "稳盈宝",
	// 	tag: {
	// 		tag_label: "超低波动",
	// 		tag_desc: "纯债优选",
	// 	},
	// 	link: {
	// 		funcName: "raDetail",
	// 		args: {
	// 			'raId': '10',
	// 			'thirdProductId': '20'
	// 		}
	// 		/*funcName: "",
	// 		args: {
	// 		    'thirdProductId': ''
	// 		}*/
	// 	},
	// 	risk: {
	// 		rish_cl: "cl_blue",
	// 		risk_desc: "低风险"
	// 	},
	// 	bury_tag: "稳健投资-稳盈宝",
	// 	time: {
	// 		show: false,
	// 		showRate: false,
	// 		day: "0",
	// 		hours: "0",
	// 		minutes: "0",
	// 		seconds: "0"
	// 	}
	// },
];

// 主题投资
export let MOCK_BAND_LIST_3 = [{
	rate: {
		rate_num: "10",
		rate_desc: "成立以来年化收益率",
	},
	title: "攻守兼备组合",
	tag: {
		tag_label: "积极进取",
		tag_desc: "兼顾回撤",
	},
	/*tag: {
		tag_label: "调仓中",
		tag_desc: " 暂停申购",
	},*/
	link: {
		//noJump:true,
		/*funcName: "raDetail",
		args: {
			'raId': '9',
			'thirdProductId': '19'
		}*/
		funcName: "webVC",
		args: {
			url: "http://pzfund-test.yrcfqdxm.paas.corp/155/mubiaoying/#/portfolio-details?thirdProductId=19",
		}
	},
	risk: {
		rish_cl: "cl_yellow",
		risk_desc: "中高风险"
	},
	bury_tag: "积极投资-攻守兼备组合",
	time: {
		show: false,
		day: "0",
		hours: "0",
		minutes: "0",
		seconds: "0"
	}
}, {
	rate: {
		rate_num: "15-25",
		rate_desc: "参考业绩标准（年化）",
	},
	title: "远见长盈",
	titleTargetPrdName: true,
	tag: {
		tag_label: "紧跟趋势",
		tag_desc: "长期绩优",
	},
	link: {
		funcName: "webVC",
		args: {
			// url: "https://yrd.yixinfund.com/dh/fund/mby_wwy/?from=jj_banner",
			//url:"https://yrd.yixinfund.com/dh/mubiaoying/#/detail?gid=240",
			url: "https://yrd.yixinfund.com/dh/fund/yxl_yjcy/index.html",
		}
	},
	risk: {
		rish_cl: "cl_orange",
		risk_desc: "高风险"
	},
	bury_tag: "积极投资-远见长盈",
	time: {
		show: true,
		showRate: true,
		status: "1",
		day: "0",
		hours: "0",
		minutes: "0",
		seconds: "0"
	}
}, {
	rate: {
		rate_num: "15-25",
		rate_desc: "参考业绩标准（年化）",
	},
	title: "特色投资",
	tag: {
		tag_label: "掘金热点",
		tag_desc: "择优布局",
	},
	tagTitleShow: false,
	tagTitle: {
		tag_label: "选对主题",
		tag_desc: "事半功倍",
	},
	risk: {
		rish_cl: "cl_yellow",
		risk_desc: "中高风险"
	},
	link: {
		funcName: "webVC",
		args: {
			url: "http://pzfund-test.yrcfqdxm.paas.corp/155/activity_tstz/index.html",
		}
	},
	/* risk:{
	     rish_cl:"no-label",
	     risk_desc:""
	 },*/
	bury_tag: "积极投资-特色投资",
	time: {
		show: false,
		showRate: true,
		status: "1",
		day: "0",
		hours: "0",
		minutes: "0",
		seconds: "0"
	}
}, ];