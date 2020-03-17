(this.webpackJsonpdatagrid=this.webpackJsonpdatagrid||[]).push([[0],{82:function(e,t,a){e.exports=a(96)},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),i=a.n(l),o=a(14),c=a(143),s=a(13),u=a(136),d=a(137),f=a(124),m=a(76),g=a(145),h=(a(91),Object(m.a)({palette:{type:"light",primary:{main:"#E8676B",contrastText:"#FFFFFF"},secondary:{main:"#bbbbbb",contrastText:"#3d4451"},text:{primary:"#3d4451",secondary:"#3d4451"},background:{default:"#FFFFFF"}},typography:{fontFamily:"Ubuntu Condensed",fontSize:16,h1:{fontSize:"3.5rem",lineHeight:"1.2",fontWeight:"bold",color:"#3d4451",margin:"10px 0 30px"},h2:{fontSize:"2rem",lineHeight:"1.2",fontWeight:"bold",color:"#3d4451",margin:"20px 0 20px"},h3:{fontSize:"1.6rem",lineHeight:"1.2",fontWeight:"bold",color:"#3d4451",padding:"10px 0 20px"},h6:{fontSize:"1.2rem",lineHeight:"1.2",fontWeight:"bold",color:"#3d4451",margin:"10px 0 10px"},body1:{fontSize:"1.25rem",lineHeight:"1.6",color:"#000000"},body2:{fontSize:"1rem",lineHeight:"1.4",color:"rgb(61, 68, 81)"},button:{fontSize:"1rem",lineHeight:"1.4",color:"rgb(61, 68, 81)"},caption:{fontSize:".8rem",lineHeight:"1",color:"rgb(61, 68, 81)"}},spacing:function(e){return"".concat(.25*e,"rem")},overrides:{MuiCssBaseline:{"@global":{"@font-face":[{fontFamily:"Ubuntu Condensed",fontStyle:"normal",fontWeight:"400"}]}},MuiInput:{underline:{"&&&&:hover:before":{borderBottom:"1px solid rgba(0, 0, 0, 0.42)"}}}}})),p=Object(g.a)(h),b=a(9),v=function(e){return{type:"REFRESH_DATA",payload:e}},y=function(e){return{type:"SELECT_ITEM",payload:e}},E=function(e){return{type:"REFRESH_FILTERED_DATA",payload:e}},O=a(8),S=a(67),C=a.n(S),w=a(2),x=a(6),D=a(128),k=a(99),j=a(146),N=a(97),I=a(72),T=a.n(I),R=a(71),V=a.n(R),F=function(e){return e.map((function(e){var t=e.index,a=e.id,n=e.company,r=e.url,l=e.foundedYear,i=e.founder,o=e.fundingTotal,c=e.status,s=e.geo,u=function(e){return e.toLocaleString("ru-RU",{maximumFractionDigits:2,minimumFractionDigits:2})};return{index:t,id:a,company:n,url:r,foundedYear:l,founder:i,fundingTotal:o,categories:e.businessTypes.reduce((function(e,t){return"".concat(e," ").concat(t,",")}),""),status:c,latitude:u(s.latitude),longitude:u(s.longitude)}}))},A=a(138),_=a(142),L=a(98),H=a(127),B=a(141),P=a(70),G=a.n(P),M=["Games","IT","Media","Medicine","Tourism"],W=["operating","closed"],z=(new Date).getFullYear(),Y=z-10,J=[{id:"index",label:"\u2116",isVisible:!0},{id:"icon",label:"icon",isVisible:!0},{id:"company",label:"Company",isVisible:!0},{id:"foundedYear",label:"Founded in",isVisible:!0},{id:"founder",label:"Founder",isVisible:!0},{id:"fundingTotal",label:"Funding total, USD * 10^3",isVisible:!0},{id:"businessTypes",label:"Business category",isVisible:!0},{id:"status",label:"Status",isVisible:!0},{id:"geo",label:"Geo location",isVisible:!0}],U={itemHeight:40,amount:25,tolerance:3,minIndex:0,maxIndex:999,startIndex:3},q={orderBy:"index",index:{sortDirection:"asc"},company:{sortDirection:"asc",searchValue:""},foundedYear:{sortDirection:"asc",searchRange:[Y,z]},founder:{sortDirection:"asc",searchValue:""},fundingTotal:{sortDirection:"asc",searchRange:[5,5e3]},businessTypes:{sortDirection:"asc",categories:Array(M.length).fill(!1)},status:{isShowOnlyOperating:!1,statusToShow:"all"},searchByAllStr:"",columnConfig:J},$=function(e){localStorage.removeItem("DATAGRID_SORT_CONFIG"),localStorage.setItem("DATAGRID_SORT_CONFIG",JSON.stringify(e))},X=Object(f.a)((function(e){return{columnToggler:{padding:5},icon:{borderRadius:3,width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:e.palette.background.default,backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:e.palette.secondary.light},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:e.palette.primary.main,backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",boxShadow:"inset 0 0 0 1px rgba(16,22,26,.1), inset 0 -1px 0 rgba(16,22,26,.1)","&:before":{display:"block",width:16,height:16,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",content:'""'},"input:hover ~ &":{backgroundColor:e.palette.primary.light}},popover:{"& .MuiPopover-paper":{padding:10}}}})),K=function(e){var t=X(),a=e.filterConfig,n=e.refreshData,l=r.a.useState(null),i=Object(b.a)(l,2),o=i[0],c=i[1],u=Boolean(o),d=u?"Column viewing toggle":void 0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{title:"Column viewing toggle"},r.a.createElement(N.a,{"aria-label":"Column viewing toggle",className:t.columnToggler,onClick:function(e){c(e.currentTarget)},"aria-describedby":d},r.a.createElement(G.a,null))),r.a.createElement(A.a,{disableScrollLock:!0,id:d,open:u,anchorEl:o,onClose:function(){c(null)},anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},className:t.popover},r.a.createElement(_.a,{component:"fieldset",className:t.formControl},r.a.createElement(L.a,null,a.columnConfig.map((function(e){var l,i=e.id,o=e.label,c=e.isVisible;return"Company"!==o?r.a.createElement(H.a,{key:o,control:r.a.createElement(B.a,{checked:c,onChange:(l=i,function(){var e=a.columnConfig.map((function(e){var t=e.id,a=e.isVisible;return t===l?Object(s.a)({},e,{isVisible:!a}):e})),t=Object(s.a)({},a,{columnConfig:e});$(t),n({filterConfig:t})}),value:o,color:"default",checkedIcon:r.a.createElement("span",{className:Object(w.a)(t.icon,t.checkedIcon)}),icon:r.a.createElement("span",{className:t.icon}),inputProps:{"aria-label":o}}),label:o}):null}))))))};K.defaultProps={filterConfig:{},refreshData:function(){}};var Q=Object(o.b)((function(e){return{filterConfig:e.filterConfig}}),(function(e){return{refreshData:function(t){return e(v(t))}}}))(K),Z=Object(f.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",height:100},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(x.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},description:{color:e.palette.primary.main,maxWidth:400,"& *":{paddingBottom:10,display:"block"}},download:{padding:"5px 5px 0"}}})),ee=function(e){var t=Z(),a=e.selected,l=e.filteredData,i=e.handleDelete,o=a.length,c=Object(n.useState)(F(l)),s=Object(b.a)(c,2),u=s[0],d=s[1];return Object(n.useEffect)((function(){d(F(l))}),[l,a]),r.a.createElement(D.a,{className:Object(w.a)(t.root,Object(O.a)({},t.highlight,o>0))},o>0?r.a.createElement(k.a,{color:"primary",variant:"subtitle1",className:t.description},o," selected"):r.a.createElement("div",{className:t.description},r.a.createElement(k.a,{variant:"h3",id:"tableTitle"},"StartUp Investments"),r.a.createElement(k.a,{variant:"body2"},"Information about startup companies and investment")),o>0?r.a.createElement(j.a,{title:"Delete"},r.a.createElement(N.a,{"aria-label":"delete",onClick:i},r.a.createElement(V.a,null))):r.a.createElement("div",{className:t.tools},r.a.createElement(j.a,{title:"download CSV"},r.a.createElement(N.a,{"aria-label":"download CSV",className:t.download},r.a.createElement(C.a,{datas:u,filename:"csvData.csv",separator:";"},r.a.createElement(T.a,null)))),r.a.createElement(Q,null)))};ee.defaultProps={selected:[],filteredData:[],handleDelete:function(){}};var te=Object(o.b)((function(e){return{selected:e.selected,filteredData:e.filteredData}}),(function(e){return{selectItem:function(t){return e(y(t))},refreshData:function(t){return e(v(t))}}}))(ee),ae=a(129),ne=Object(f.a)({swicther:{position:"absolute",top:30,right:25,zIndex:10,"& span":{fontSize:16}}}),re=function(e){var t=e.checked,a=e.toggleChecked,n=ne();return r.a.createElement(L.a,{className:n.swicther},r.a.createElement(H.a,{control:r.a.createElement(ae.a,{size:"small",checked:t,onChange:a,color:"primary"}),label:"Virtual Scroller",labelPlacement:"start"}))};re.defaultProps={checked:!0,toggleChecked:function(){}};var le=re,ie=function(e,t,a,n){var r=Math.max(a,e),l=Math.min(e+t-1,n.length);return n.slice(r,l)},oe=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0},ce=function(e,t){return"desc"===e?function(e,a){return oe(e,a,t)}:function(e,a){return-oe(e,a,t)}},se=function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))},ue=a(16),de=a(147),fe=function(e,t,a,n,r){console.log("isSelected: ",e);var l=[];return e?(console.log("isSelected - true: "),t.forEach((function(e){"operating"===e.status&&l.push(e)}))):l=t.slice(),n(Object(s.a)({},r,{status:{isShowOnlyOperating:e,statusToShow:e?"operating":"all"}})),l},me=a(73),ge=a.n(me),he=a(130),pe=Object(f.a)((function(e){return{button:{width:20,height:25,"&:hover":{backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",backgroundColor:e.palette.secondary.light,"& svg":{fill:e.palette.background.default}}}}})),be=function(e){var t=e.toggleStatus,a=e.refreshData,n=e.filterConfig,l=pe(),i=JSON.parse(localStorage.getItem("DATAGRID_SORT_CONFIG")).status.isShowOnlyOperating;return r.a.createElement(j.a,{title:i?"Show all":"Show only operating","aria-label":"Show company status"},r.a.createElement(he.a,{value:"check",selected:i,className:l.button,onChange:function(){t(!i),a({filterConfig:Object(s.a)({},n,{status:{isShowOnlyOperating:i,statusToShow:i?"operating":"all"}})})}},r.a.createElement(ge.a,null)))};be.defaultProps={toggleStatus:function(){},refreshData:function(){},filterConfig:{}};var ve=Object(o.b)((function(e){return{filterConfig:e.filterConfig}}),(function(e){return{refreshData:function(t){return e(v(t))}}}))(be),ye=function(e){var t=e.order,a=e.orderBy,n=e.numSelected,l=e.rowCount,i=e.onRequestSort,o=e.selectItem,c=e.scrollLeft,s=e.filteredData,u=e.refreshFilteredData,d=e.filterConfig,m=Object(f.a)((function(e){return{head:{position:"sticky",top:0,zIndex:2},head2:{position:"absolute",top:0,display:"flex",height:60,zIndex:2,"& div":{textAlign:"center",lineHeight:"50px",borderRight:"1px solid ".concat(e.palette.secondary.light),borderTop:"1px solid ".concat(e.palette.secondary.light),"&:last-child":{borderRight:"none"}},"& .MuiTableSortLabel-active":{"& .MuiTableSortLabel-icon":{fill:e.palette.primary.main}}},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},checkbox:{minWidth:50,width:50,backgroundColor:e.palette.background.default,boxShadow:e.shadows[1],padding:0},wrap:{border:"none"},cell:{minWidth:200,width:200,height:60,backgroundColor:e.palette.background.default,boxShadow:e.shadows[1],zIndex:2},index:{minWidth:45,height:60,backgroundColor:e.palette.background.default,boxShadow:e.shadows[1]},icon:{width:55,minWidth:50,height:60,backgroundColor:e.palette.background.default,boxShadow:e.shadows[1]},foundedYear:{width:120,height:60,backgroundColor:e.palette.background.default,boxShadow:e.shadows[1]},fundingTotal:{width:200,height:60,backgroundColor:e.palette.background.default,boxShadow:e.shadows[1]},status:{minWidth:100,height:60,backgroundColor:e.palette.background.default,boxShadow:e.shadows[1],"& .Mui-selected":{backgroundColor:e.palette.primary.light,"& svg":{fill:e.palette.background.default}}},company:{minWidth:200,height:60,backgroundColor:e.palette.background.default,boxShadow:e.shadows[1],zIndex:11},stickyColumn:{position:"absolute",top:0,left:c,width:200,height:60,backgroundColor:e.palette.background.default,boxShadow:e.shadows[1],zIndex:11},sortLabel:{"& svg":{opacity:.3,"&:hover":{opacity:1}}}}})),g=d.columnConfig?d.columnConfig:J,h=m(),p=JSON.parse(localStorage.getItem("DATAGRID_SORT_CONFIG")),b=c<150?Object(ue.a)(g):[].concat(Object(ue.a)(g),[{id:"companySticky",label:"Company",isVisible:!0}]),y=function(e){var t=fe(e,s,u,$,p),a=JSON.parse(localStorage.getItem("DATAGRID_SORT_CONFIG"));v({filterConfig:a}),u({filteredData:t})};return r.a.createElement("div",{className:h.head},r.a.createElement("div",{className:h.head2},r.a.createElement("div",{className:h.checkbox},r.a.createElement(B.a,{indeterminate:n>0&&n<l,checked:l>0&&n===s.length,onChange:function(e){if(e.target.checked){var t=s.map((function(e){return e.id}));o({selected:t})}else o({selected:[]})},inputProps:{"aria-label":"select all"}})),b.map((function(e){var n,l=e.id,o=e.label,c=e.isVisible,s="icon"===l?h.icon:"index"===l?h.index:"foundedYear"===l?h.foundedYear:"status"===l?h.status:"fundingTotal"===l?h.fundingTotal:"company"===l?h.company:"companySticky"===l?h.stickyColumn:h.cell;return r.a.createElement("div",{key:l,className:h.wrap},c?r.a.createElement("div",{className:s},["icon","geo"].includes(l)?o:"status"===l?r.a.createElement(r.a.Fragment,null,"".concat(o," "),r.a.createElement(ve,{toggleStatus:y})):r.a.createElement(de.a,{active:a===l,direction:a===l?t:"asc",onClick:(n=l,function(){i(n)}),className:h.sortLabel},o,a===l?r.a.createElement("span",{className:h.visuallyHidden},"desc"===t?"sorted descending":"sorted ascending"):null)):null)}))))};ye.defaultProps={numSelected:0,onRequestSort:function(){},order:"asc",orderBy:"",rowCount:0,scrollLeft:0,filteredData:[],selectItem:function(){},filterConfig:{},refreshFilteredData:function(){}};var Ee=Object(o.b)((function(e){return{filteredData:e.filteredData,filterConfig:e.filterConfig}}),(function(e){return{refreshData:function(t){return e(v(t))},selectItem:function(t){return e(y(t))},refreshShownData:function(t){return e({type:"REFRESH_SHOWN_DATA",payload:t})},refreshFilteredData:function(t){return e(E(t))}}}))(ye),Oe=Object(f.a)((function(e){return{row:{display:"flex",height:U.itemHeight,position:"relative"},checkbox:{minWidth:50,borderBottom:"1px solid ".concat(e.palette.secondary.light),borderRight:"1px solid ".concat(e.palette.secondary.light)},checkboxChecked:{"& svg":{fill:e.palette.primary.main}},center:{display:"flex",justifyContent:"center",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.secondary.light),borderRight:"1px solid ".concat(e.palette.secondary.light)},textVerCenter:{display:"flex",alignItems:"center",padding:e.spacing(1),borderBottom:"1px solid ".concat(e.palette.secondary.light),borderRight:"1px solid ".concat(e.palette.secondary.light)},cell:{minWidth:200,width:200,height:U.itemHeight,wordWrap:"break-word",backgroundColor:e.palette.background.default,"&:lastChild":{borderRight:"none"}},index:{minWidth:45},icon:{minWidth:55},img:{borderRadius:"50%"},foundedYear:{minWidth:120,justifyContent:"flex-end",height:U.itemHeight},status:{minWidth:100,height:U.itemHeight},fundingTotal:{minWidth:200,height:U.itemHeight,justifyContent:"flex-end"},link:{color:e.palette.info.main.dark},highlightedText:{backgroundColor:e.palette.secondary.light,borderRadius:4,padding:"0 5px"},cellSelected:{backgroundColor:"#FFC9CC",color:"#000000"},company:{minWidth:200,height:40,wordWrap:"break-word"},stickyColumn:{position:"absolute",top:0,width:200,height:U.itemHeight,boxShadow:e.shadows[1],wordWrap:"break-word",zIndex:1},whiteBg:{backgroundColor:e.palette.background.default}}})),Se=function(e){return e.toLocaleString("ru-RU",{maximumFractionDigits:2,minimumFractionDigits:2})},Ce=function(e){var t=e.coors,a=e.geoClass,n=Se(t.latitude),l=Se(t.longitude);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"["),r.a.createElement("span",{className:a},n),r.a.createElement("span",null,";\u2002"),r.a.createElement("span",{className:a},l),r.a.createElement("span",null,"]"))};Ce.defaultProps={geoClass:"",coors:{latitude:0,longitude:0}};var we=function(e){var t,a,l=e.item,i=e.selected,o=e.selectItem,c=e.scrollLeft,s=e.filterConfig,u=Oe(p),d=l.index,f=l.id,m=l.icon,g=l.company,h=l.url,v=l.foundedYear,y=l.founder,E=l.fundingTotal,S=l.status,C=l.geo,x=l.businessTypes,D=Object(n.useState)(!1),k=Object(b.a)(D,2),j=k[0],N=k[1],I=s.columnConfig?s.columnConfig:J;Object(n.useEffect)((function(){var e;N((e=f,-1!==i.indexOf(e)))}),[i]);var T="enhanced-table-checkbox-".concat(d);return r.a.createElement("div",{className:u.row,key:f},r.a.createElement("div",{className:Object(w.a)(u.center,u.checkbox,Object(O.a)({},u.cellSelected,j))},r.a.createElement(B.a,{checked:j,inputProps:{"aria-labelledby":T},onChange:function(){var e=j?i.filter((function(e){return e!==f})):[].concat(Object(ue.a)(i),[f]);N(!j),o({selected:e})},color:"secondary",className:j?u.checkboxChecked:null})),s.columnConfig[0].isVisible?r.a.createElement("div",{className:Object(w.a)(u.index,u.center,Object(O.a)({},u.cellSelected,j))},d+1):null,s.columnConfig[1].isVisible?r.a.createElement("div",{className:Object(w.a)(u.icon,u.center,Object(O.a)({},u.cellSelected,j))},r.a.createElement("img",{src:m,alt:g,className:u.img})):null,I[2].isVisible?r.a.createElement("div",{className:Object(w.a)(u.company,u.textVerCenter,(t={},Object(O.a)(t,u.cellSelected,j),Object(O.a)(t,u.whiteBg,!j),t))},r.a.createElement("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:u.link},g)):null,I[2].isVisible&&c>150?r.a.createElement("div",{style:{left:c},className:Object(w.a)(u.stickyColumn,u.textVerCenter,(a={},Object(O.a)(a,u.cellSelected,j),Object(O.a)(a,u.whiteBg,!j),a))},r.a.createElement("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:u.link},g)):null,I[3].isVisible?r.a.createElement("div",{className:Object(w.a)(u.foundedYear,u.textVerCenter,Object(O.a)({},u.cellSelected,j))},v):null,I[4].isVisible?r.a.createElement("div",{className:Object(w.a)(u.cell,u.textVerCenter,Object(O.a)({},u.cellSelected,j))},y):null,I[5].isVisible?r.a.createElement("div",{className:Object(w.a)(u.fundingTotal,u.textVerCenter,Object(O.a)({},u.cellSelected,j))},E.toLocaleString()):null,I[6].isVisible?r.a.createElement("div",{className:Object(w.a)(u.cell,u.textVerCenter,Object(O.a)({},u.cellSelected,j))},x.map((function(e,t){return r.a.createElement("span",{key:"".concat(f,"-").concat(e,"-").concat(t)},"|\xa0",r.a.createElement("span",{className:u.highlightedText},""===e?null:e),t===x.length-1?" |":null)}))):null,I[7].isVisible?r.a.createElement("div",{className:Object(w.a)(u.status,u.textVerCenter,Object(O.a)({},u.cellSelected,j))},S):null,I[8].isVisible?r.a.createElement("div",{className:Object(w.a)(u.cell,u.textVerCenter,Object(O.a)({},u.cellSelected,j))},r.a.createElement(Ce,{coors:C,geoClass:u.highlightedText})):null)};we.defaultProps={item:{},selected:[],selectItem:function(){},scrollLeft:0,filterConfig:{}};var xe=Object(o.b)((function(e){return{selected:e.selected,filterConfig:e.filterConfig}}),(function(e){return{selectItem:function(t){return e(y(t))}}}))(we),De=function(e){var t=Object(f.a)({virtScroller:{height:900,overflow:"auto",minHeight:500}})(),a=JSON.parse(localStorage.getItem("DATAGRID_SORT_CONFIG")),l=e.selected,i=e.shownData,o=e.filteredData,c=e.isVirtual,u=Object(n.useState)(function(e){var t=e.itemHeight,a=e.amount,n=e.tolerance,r=e.minIndex,l=a*t,i=(e.maxIndex-r+1)*t,o=n*t,c=(e.startIndex-n-r)*t+60;return{settings:e,viewportHeight:l,totalHeight:i,toleranceHeight:o,bufferHeight:l+2*o,bufferedItems:a+2*n,topPaddingHeight:c,bottomPaddingHeight:i-c,initialPosition:c+o}}(U)),d=Object(b.a)(u,2),m=d[0],g=d[1],h=Object(n.useState)(a.orderBy),p=Object(b.a)(h,2),v=p[0],y=p[1],E=Object(n.useState)(a[v].sortDirection),O=Object(b.a)(E,2),S=O[0],C=O[1],w=Object(n.useState)(0),x=Object(b.a)(w,2),D=x[0],k=x[1],j=Object(n.useState)(0),N=Object(b.a)(j,2),I=N[0],T=N[1],R=Object(n.useState)(c?i:o),V=Object(b.a)(R,2),F=V[0],A=(V[1],Object(n.createRef)()),_=U.itemHeight,L=U.minIndex,H=U.tolerance,B=function(t){var a=t.target,n=m.totalHeight,r=m.toleranceHeight,l=m.bufferedItems,i=a.scrollTop,c=a.scrollLeft;if(T(c),D!==A.current.scrollTop){var u=L+Math.floor((i-r)/_),d=ie(u,l,L,o),f=Math.max((u-L)*_,0)+60,h=Math.max(n-f-d.length*_,0);e.refreshData({shownData:d}),g(Object(s.a)({},m,{topPaddingHeight:f,bottomPaddingHeight:h}))}k(A.current.scrollTop)};Object(n.useEffect)((function(){var t=ie(0,25,0,o);e.refreshData({shownData:t}),m.initialPosition||B({target:{scrollTop:0}})}),[F,o]);var P=m.topPaddingHeight,G=m.bottomPaddingHeight;return r.a.createElement("div",{className:t.virtScroller,ref:A,onScroll:B},r.a.createElement(Ee,{numSelected:l.length,order:S,orderBy:v,onRequestSort:function(t){var n=v===t&&"asc"===S?"desc":"asc";C(n),y(t);var r=se(o,ce(n,t)),l=A.current.clientHeight,i=Math.ceil(l/_),c=ie(0,i+H,0,r);a.orderBy=t,a[t].sortDirection=n,$(a),e.refreshData({shownData:c})},rowCount:i.length,scrollLeft:I}),r.a.createElement("div",{style:{height:P}}),i.map((function(e){return r.a.createElement(xe,{item:e,key:e.id,scrollLeft:I})})),r.a.createElement("div",{style:{height:G}}))};De.defaultProps={filteredData:[],shownData:[],selected:[],refreshData:function(){},isVirtual:!0};var ke=Object(o.b)((function(e){return{filteredData:e.filteredData,shownData:e.shownData,selected:e.selected}}),(function(e){return{refreshData:function(t){return e(v(t))}}}))(De),je=Object(f.a)({table:{width:"100%",minWidth:300,height:900,overflow:"scroll"},empty:{width:"100%",height:60,backgroundColor:"transparent",border:"none"}}),Ne=function(e){var t=je(),a=JSON.parse(localStorage.getItem("DATAGRID_SORT_CONFIG")),l=e.selected,i=e.filteredData,o=e.refreshData,c=Object(n.useState)(a.orderBy),s=Object(b.a)(c,2),u=s[0],d=s[1],f=Object(n.useState)(a[u].sortDirection),m=Object(b.a)(f,2),g=m[0],h=m[1],p=Object(n.useState)(0),v=Object(b.a)(p,2),y=v[0],E=v[1];Object(n.useEffect)((function(){var e=ie(0,25,0,i);o({shownData:e})}),[i]);return r.a.createElement("div",{className:t.table,onScroll:function(e){var t=e.target.scrollLeft;E(t)}},r.a.createElement(Ee,{numSelected:l.length,order:g,orderBy:u,onRequestSort:function(e){h(u===e&&"asc"===g?"desc":"asc"),d(e);var t=se(i,ce(g,u));$(a),o({shownData:t})},rowCount:i.length,scrollLeft:y}),r.a.createElement("div",{className:t.empty}),i.map((function(e){return r.a.createElement(xe,{item:e,key:e.id,scrollLeft:y})})))};Ne.defaultProps={selected:[],filteredData:{},refreshData:function(){}};var Ie=Object(o.b)((function(e){return{initialData:e.initialData,filteredData:e.filteredData,selected:e.selected}}),(function(e){return{refreshData:function(t){return e(v(t))}}}))(Ne),Te=Object(f.a)((function(e){return{root:{position:"relative",width:"100%",height:"100%",maxWidth:1200,minWidth:400,boxShadow:e.shadows[3]}}})),Re=function(e){var t=e.isVirtual,a=e.toggleVirtualTable,n=e.selected,l=e.refreshData,i=e.initialData,o=Te(),c=r.a.useState(t),s=Object(b.a)(c,2),u=s[0],d=s[1];return r.a.createElement("div",{className:o.root},r.a.createElement(le,{checked:u,toggleChecked:function(){d(!u),a({isVirtual:!t})}}),r.a.createElement(te,{handleDelete:function(){var e=i.filter((function(e){return!n.includes(e.id)}));l({initialData:e,selected:[]}),l({filteredData:e})}}),u?r.a.createElement(ke,null):r.a.createElement(Ie,null))};Re.defaultProps={initialData:[],isVirtual:!0,selected:[],refreshData:function(){},toggleVirtualTable:function(){}};var Ve=Object(o.b)((function(e){return{isVirtual:e.isVirtual,initialData:e.initialData,selected:e.selected}}),(function(e){return{toggleVirtualTable:function(t){return e({type:"TOGGLE_VIRTUAL_TABLE",payload:t})},refreshData:function(t){return e(v(t))}}}))(Re),Fe=a(101),Ae=a(131),_e=a(132),Le=a(133),He=a(144),Be=a(134),Pe=a(135),Ge=a(54),Me=a.n(Ge),We=a(139),ze=Object(f.a)((function(e){return{icon:{borderRadius:"50%",width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:e.palette.background.default,backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:e.palette.secondary.light},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:e.palette.primary.main,backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:e.palette.primary.light}}}})),Ye=function(e){var t=ze();return r.a.createElement(We.a,Object.assign({color:"default",checkedIcon:r.a.createElement("span",{className:Object(w.a)(t.icon,t.checkedIcon)}),icon:r.a.createElement("span",{className:t.icon})},e))},Je=Object(f.a)((function(e){return{wrap:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:300,minWidth:300,height:1e3,marginBottom:40,padding:10,marginRight:10,boxShadow:e.shadows[3]},header:{display:"flex",justifyContent:"space-between",padding:"20px 0 20px","& div":{height:30},"& h3":{padding:0}},filter:Object(O.a)({padding:"10 0",marginBottom:20},e.breakpoints.down("sm"),{marginBottom:20}),title:{fontSize:"1.2rem",lineHeight:"1.2",fontWeight:"bold",color:e.palette.text.primary,margin:"10px 0 10px"},icon:{borderRadius:3,width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:e.palette.background.default,backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:e.palette.secondary.light},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:e.palette.primary.main,backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",boxShadow:"inset 0 0 0 1px rgba(16,22,26,.1), inset 0 -1px 0 rgba(16,22,26,.1)","&:before":{display:"block",width:16,height:16,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",content:'""'},"input:hover ~ &":{backgroundColor:e.palette.primary.light}},search:Object(O.a)({position:"relative",borderRadius:e.shape.borderRadius,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",fontSize:"1rem"},inputInput:Object(O.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%",backgroundColor:Object(x.b)(e.palette.secondary.light,.25)},e.breakpoints.up("sm"),{width:150,"&:focus":{backgroundColor:Object(x.b)(e.palette.secondary.light,.15),width:245}}),inputHeader:Object(O.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%",backgroundColor:Object(x.b)(e.palette.secondary.light,.25)},e.breakpoints.up("sm"),{width:150,"&:focus":{backgroundColor:Object(x.b)(e.palette.secondary.light,.15),width:190}}),range:{width:240,margin:"25px 20px 0"},inputs:{display:"flex",justifyContent:"space-between",width:"100%"},input:{width:60},fundInput:{width:85}}})),Ue=function(e){var t=e.refreshFilteredData,a=e.initialData,l=e.filteredData,i=e.isVirtual,o=e.refreshData,c=Je(),s=JSON.parse(localStorage.getItem("DATAGRID_SORT_CONFIG")),u=Object(n.useState)([]),d=Object(b.a)(u,2),f=d[0],m=d[1],g=l.slice(),h=Object(n.useState)(""),p=Object(b.a)(h,2),v=p[0],y=p[1],E=Object(n.useState)(""),O=Object(b.a)(E,2),S=O[0],C=O[1],x=Object(n.useState)(""),D=Object(b.a)(x,2),j=D[0],N=D[1],I=s.status.statusToShow,T=r.a.useState([Y,z]),R=Object(b.a)(T,2),V=R[0],F=R[1],A=r.a.useState([5,5e3]),P=Object(b.a)(A,2),G=P[0],J=P[1],U=[],X=[].concat(Object(ue.a)(W),["all"]),K=new Map;M.forEach((function(e,t){K.set(e,s.businessTypes.categories[t]),s.businessTypes.categories[t]&&U.push(e)}));var Q=function(e){var a=e.target.value,n=[];g.forEach((function(e){e.company.toLowerCase().includes(a.toLowerCase())&&n.push(e)})),s.company.searchValue=a,C(a),t({filteredData:n}),g=n.slice(),$(s)},Z=function(e){var a=e.target.value,n=[];g.forEach((function(e){e.founder.toLowerCase().includes(a.toLowerCase())&&n.push(e)})),s.founder.searchValue=a,N(a),t({filteredData:n}),g=n.slice(),$(s)},ee=function(e){var a=e.target.value,n=[];g.forEach((function(e){(e.founder.toLowerCase().includes(a.toLowerCase())||e.company.toLowerCase().includes(a.toLowerCase()))&&n.push(e)})),s.searchByAllStr=a,y(a),t({filteredData:n}),g=n.slice(),$(s)},te=function(e){var t=e.target,a=t.value,n=t.checked;K.set(a,n);var r=new Set(f);n?r.add(a):r.delete(a);var l=M.indexOf(a);s.businessTypes.categories[l]=n;var i=Object(ue.a)(r);m(i),$(s)},ae=function(e){var a=e.target.value,n=[];"all"===a?n=Object(ue.a)(g):g.forEach((function(e){e.status===a&&n.push(e)})),s.status.statusToShow=a,s.status.isShowOnlyOperating="operating"===a,t({filteredData:n}),I=a,g=n.slice(),$(s),o({filterConfig:s})},ne=function(e){var a=[];g.forEach((function(t){t.foundedYear>=e[0]&&t.foundedYear<=e[1]&&a.push(t)})),s.foundedYear.searchRange=e,t({filteredData:a}),g=a.slice(),F(e),$(s)},re=function(e){var a=[];g.forEach((function(t){t.fundingTotal>=e[0]&&t.fundingTotal<=e[1]&&a.push(t)})),s.fundingTotal.searchRange=e,t({filteredData:a}),g=a.slice(),J(e),$(s)},le=function(){if(V[0]<Y){var e=[Y,V[1]];ne(e),F([Y,V[1]])}else if(V[1]>z){var t=[V[0],z];ne(t),F([V[0],z])}},ie=function(){if(G[0]<5){var e=[5,G[1]];re(e),J([5,G[1]])}else if(G[1]>5e3){var t=[G[0],5e3];re(t),J([G[0],5e3])}};return Object(n.useEffect)((function(){!function(){var e=[];[0,M.length].includes(f.length)?e=a.slice():a.forEach((function(t){t.businessTypes.map((function(e){return f.includes(e)})).some((function(e){return!0===e}))&&e.push(t)})),g=e.slice();var n=s.company.searchValue;Q({target:{value:n}});var r=s.founder.searchValue;Z({target:{value:r}});var l=s.status.statusToShow;ae({target:{value:l}});var i=s.foundedYear.searchRange;ne(i);var o=s.fundingTotal.searchRange;re(o);var c=s.searchByAllStr;ee({target:{value:c}});var u=s.orderBy,d=s[u].sortDirection,m=se(g,ce(d,u));t({filteredData:m}),g=m.slice(),s.status.isShowOnlyOperating&&ae({target:{value:"operating"}})}()}),[f,S,j,I,v,i]),Object(n.useEffect)((function(){m(U)}),[]),r.a.createElement("div",{className:c.wrap},r.a.createElement("div",{className:c.filters},r.a.createElement("div",{className:c.header},r.a.createElement(k.a,{variant:"h3"},"Filters"),r.a.createElement("div",{className:c.search},r.a.createElement("div",{className:c.searchIcon},r.a.createElement(Me.a,null)),r.a.createElement(Fe.a,{placeholder:"Search everywhere",classes:{root:c.inputRoot,input:c.inputHeader},inputProps:{"aria-label":"Search everywhere"},onChange:ee,value:s.searchByAllStr}))),r.a.createElement(Ae.a,null),r.a.createElement("div",{className:c.filter},r.a.createElement(k.a,{className:c.title},"Company"),r.a.createElement("div",{className:c.search},r.a.createElement("div",{className:c.searchIcon},r.a.createElement(Me.a,null)),r.a.createElement(Fe.a,{placeholder:"Search by company name",classes:{root:c.inputRoot,input:c.inputInput},inputProps:{"aria-label":"Search by company name"},onChange:Q,value:s.company.searchValue}))),r.a.createElement("div",{className:c.filter},r.a.createElement(k.a,{className:c.title},"Founder"),r.a.createElement("div",{className:c.search},r.a.createElement("div",{className:c.searchIcon},r.a.createElement(Me.a,null)),r.a.createElement(Fe.a,{placeholder:"Search by company founders",classes:{root:c.inputRoot,input:c.inputInput},inputProps:{"aria-label":"Search by company founders"},onChange:Z,value:s.founder.searchValue}))),r.a.createElement("div",{className:c.filter},r.a.createElement(_.a,{component:"fieldset",className:c.formControl},r.a.createElement(_e.a,{component:"legend",className:c.title},"Type of business"),r.a.createElement(L.a,null,M.map((function(e){return r.a.createElement(H.a,{key:e,control:r.a.createElement(B.a,{checked:K.get(e),onChange:te,value:e,color:"default",checkedIcon:r.a.createElement("span",{className:Object(w.a)(c.icon,c.checkedIcon)}),icon:r.a.createElement("span",{className:c.icon}),inputProps:{"aria-label":e}}),label:e})}))))),r.a.createElement("div",{className:c.filter},r.a.createElement(_.a,{component:"fieldset"},r.a.createElement(_e.a,{component:"legend",className:c.title},"Status of company"),r.a.createElement(Le.a,{"aria-label":"Status of compan",name:"Status of compan",onChange:ae,value:I},X.map((function(e){return r.a.createElement(H.a,{key:e,control:r.a.createElement(Ye,null),value:e,label:e})}))))),r.a.createElement("div",{className:c.filter},r.a.createElement(k.a,{className:c.title},"Year of foundation range"),r.a.createElement(He.a,{min:Y,max:z,step:1,value:V,onChange:function(e,t){ne(t),F(t)},valueLabelDisplay:"auto","aria-labelledby":"Year of foundation range",className:c.range}),r.a.createElement("div",{className:c.inputs},r.a.createElement(Be.a,{className:c.input,value:V[0],onChange:function(e){var t=e.target.value;if(t<=V[1]){var a=[Number(t),V[1]];ne(a),F(a)}},onBlur:le,inputProps:{step:1,min:Y,max:z,type:"number","aria-labelledby":"minimum value in years range of company released"}}),r.a.createElement(Be.a,{className:c.input,value:V[1],onChange:function(e){var t=e.target.value;if(t>=V[0]){var a=[V[0],Number(t)];ne(a),F(a)}},onBlur:le,inputProps:{step:1,min:Y,max:z,type:"number","aria-labelledby":"maximum value in years range of company released"}})))),r.a.createElement("div",{className:c.filter},r.a.createElement(k.a,{className:c.title},"Funding total, USD \xd7 10",r.a.createElement("sup",null,"3")),r.a.createElement(He.a,{min:5,max:5e3,step:5,value:G,onChange:function(e,t){re(t),J(t)},valueLabelDisplay:"auto","aria-labelledby":"Year of foundation range",className:c.range}),r.a.createElement("div",{className:c.inputs},r.a.createElement(Be.a,{className:c.input,value:G[0],onChange:function(e){var t=e.target.value;if(t<=G[1]){var a=[Number(t),G[1]];re(a),J(a)}},onBlur:ie,inputProps:{step:5,min:5,max:5e3,type:"number","aria-labelledby":"minimum value of company funding"}}),r.a.createElement(Be.a,{className:c.input,value:G[1],onChange:function(e){var t=e.target.value;if(t>=G[0]){var a=[G[0],Number(t)];re(a),J(a)}},onBlur:ie,inputProps:{step:5,min:5,max:5e3,type:"number","aria-labelledby":"maximum value of company funding"}}))),r.a.createElement(Pe.a,{variant:"outlined",color:"primary",className:c.defaultSettings,onClick:function(){$(q),m([])}},"Reset filters"))};Ue.defaultProps={initialData:[],filteredData:[],isVirtual:!0,refreshData:function(){},refreshFilteredData:function(){}};var qe=Object(o.b)((function(e){return{initialData:e.initialData,filteredData:e.filteredData,isVirtual:e.isVirtual}}),(function(e){return{refreshData:function(t){return e(v(t))},refreshFilteredData:function(t){return e(E(t))}}}))(Ue),$e=Object(c.b)(qe),Xe=Object(f.a)({container:{display:"flex",flexWrap:"nowrap",justifyContent:"center",padding:20}}),Ke=function(){var e,t=Xe(),a=localStorage.getItem("DATAGRID_SORT_CONFIG");try{e=Object(s.a)({},null===a?q:JSON.parse(a))}catch(n){localStorage.removeItem("DATAGRID_SORT_CONFIG"),e=Object(s.a)({},q)}return localStorage.removeItem("DATAGRID_SORT_CONFIG"),localStorage.setItem("DATAGRID_SORT_CONFIG",JSON.stringify(e)),r.a.createElement(u.a,{theme:p},r.a.createElement(d.a,null),r.a.createElement("div",{className:t.container},r.a.createElement($e,null),r.a.createElement(Ve,null)))},Qe=a(25),Ze=Object(Qe.a)({}),et=a(38),tt=a(75),at=a.n(tt);var nt=function(){var e=Math.random(),t=document.createElement("CANVAS");t.width=30,t.height=30,document.body.append(t);var a,n,r=30,l=[];if(t.getContext){var i=t.getContext("2d");i.clearRect(0,0,r,30),i.fillStyle="transparent",i.fillRect(0,0,r,30);a=function(){!function(e,t){for(var a=Math.ceil(e),n=Math.floor(t),r=0;r<3;r+=1)l.push(Math.floor(Math.random()*(n-a))+a)}(0,255);var a=0,o=0,c=l[0],s=l[1],u=l[2];i.fillStyle="rgb(".concat(c,",").concat(s,",").concat(u,")");for(var d=0;d<5;d+=1){for(var f=0;f<5;f+=1)e<.4?(i.fillRect(a,o,6,6),i.fillRect(r-a-6,o,6,6),a+=6):(c-=5,s+=5,u+=5,i.fillStyle="rgb(".concat(c,",").concat(s,",").concat(u,")"),a+=6),e=Math.random();o+=6,a=0}n=t.toDataURL(),t.remove()}}return a(),n},rt=function(e,t,a,n,r,l){for(var i=[],o=0;o<e;o+=1)i.push(Object(s.a)({},t(a,n,r,l),{},{index:o}));return i}(1e3,(function(e,t,a,n){var r=at()("en-EN");r.seed(Math.floor(1e7*Math.random()));for(var l=r.random.masked("aaa-AAA_999999:*"),i=nt(),o=r.company.name(),c="https://".concat(r.random.string(10),".com"),s=r.date.past(10,new Date).getFullYear(),u=r.names.name(),d=r.random.number(a,n),f=r.random.boolean()?t[0]:t[1],m=r.address.geoLocation(),g=[];0===g.length;)for(var h=0;h<2;h+=1){var p=e[r.random.number(0,5)];void 0===p||g.includes(p)||g.push(p)}return{id:l,icon:i,company:o,url:c,foundedYear:s,founder:u,fundingTotal:d,status:f,geo:m,businessTypes:g}}),M,W,5,5e3),lt={initialData:rt,filteredData:rt,shownData:[],selected:[],filterConfig:q,isVirtual:!0},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REFRESH_DATA":case"SELECT_ITEM":case"FILTERS_CONFIG":case"REFRESH_FILTERED_DATA":case"REFRESH_SHOWN_DATA":case"TOGGLE_VIRTUAL_TABLE":return Object(s.a)({},e,{},t.payload);default:return e}},ot=function(){return function(e){return function(t){return e(t)}}},ct=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||et.c,st=Object(et.d)(it,ct(Object(et.a)(ot)));i.a.render(r.a.createElement(o.a,{store:st},r.a.createElement(c.a,{history:Ze},r.a.createElement(Ke,null))),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.7bb8cb73.chunk.js.map