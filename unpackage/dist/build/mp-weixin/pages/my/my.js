"use strict";const s=require("../../common/vendor.js"),t={data:()=>({historyNews:[],historyNewsStatus:!0,noHistoryNewsPicUrl:"../../static/img/noNewsHistory.png",historyNewsPicUrl:"../../static/img/newsHistory.png"}),methods:{goNewsDetail(t){s.index.navigateTo({url:`/pages/newsDetail/newsDetail?cid=${t.cid}&id=${t.id}`})},getHistoryNews(){var t=s.index.getStorageSync("historyArr");this.historyNewsStatus=!!t,this.historyNews=t}},onShow(){this.getHistoryNews()}};if(!Array){s.resolveComponent("newBox")()}Math;const e=s._export_sfc(t,[["render",function(t,e,i,o,r,a){return s.e({a:r.historyNewsStatus?r.historyNewsPicUrl:r.noHistoryNewsPicUrl,b:!r.historyNewsStatus},(r.historyNewsStatus,{}),{c:s.f(r.historyNews,((t,e,i)=>({a:t.id,b:s.o(a.goNewsDetail,t.id),c:"a05b0995-0-"+i,d:s.p({item:t})})))})}],["__scopeId","data-v-a05b0995"]]);wx.createPage(e);