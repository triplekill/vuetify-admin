(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d6c1"],{d0dc:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[n("v-switch",{staticClass:"mx-2",attrs:{label:"Text + icons"},model:{value:t.icons,callback:function(e){t.icons=e},expression:"icons"}}),n("v-switch",{staticClass:"mx-2",attrs:{label:"Centered",disabled:t.vertical},model:{value:t.centered,callback:function(e){t.centered=e},expression:"centered"}}),n("v-switch",{staticClass:"mx-2",attrs:{label:"Grow"},model:{value:t.grow,callback:function(e){t.grow=e},expression:"grow"}}),n("v-switch",{staticClass:"mx-2",attrs:{label:"Vertical"},model:{value:t.vertical,callback:function(e){t.vertical=e},expression:"vertical"}}),n("v-switch",{staticClass:"mx-2",attrs:{label:"Right"},model:{value:t.right,callback:function(e){t.right=e},expression:"right"}}),n("v-switch",{staticClass:"mx-2",attrs:{label:"show-arrows"},model:{value:t.arrows,callback:function(e){t.arrows=e},expression:"arrows"}}),n("v-flex",{attrs:{xs12:""}},[n("v-slider",{attrs:{min:"0",max:"30",label:"选项卡数量"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}})],1)],1),n("v-card",{attrs:{flat:"",tile:""}},[n("v-tabs",{staticClass:"elevation-2",attrs:{"background-color":"accent",color:"primary",centered:t.centered,grow:t.grow,vertical:t.vertical,right:t.right,dark:"","prev-icon":t.prevIcon?"mdi-arrow-left-bold-box-outline":void 0,"next-icon":t.nextIcon?"mdi-arrow-right-bold-box-outline":void 0,"icons-and-text":t.icons,"show-arrows":t.arrows},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider"),t._l(t.tabs,function(e){return n("v-tab",{key:e,attrs:{href:"#tab-"+e}},[t._v("\n                第 "+t._s(e)+" 项\n                "),t.icons?n("v-icon",[t._v("phone")]):t._e()],1)}),t._l(t.tabs,function(e){return n("v-tab-item",{key:e,attrs:{value:"tab-"+e}},[n("v-card-text",[t._v(t._s(t.text))])],1)})],2)],1)],1)},o=[],a={name:"Tab",data:function(){return{tab:null,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",icons:!1,centered:!1,grow:!1,vertical:!1,prevIcon:!1,nextIcon:!1,right:!1,tabs:5,arrows:!1}}},s=a,r=n("2877"),l=n("6544"),c=n.n(l),d=n("b0af"),u=n("99d9"),h=n("0e8f"),v=n("132d"),w=n("a722"),m=n("ba0d"),f=n("b73d"),b=n("71a3"),p=n("9d65"),x=n("4e82"),g=n("c3f0"),T=n("80d2"),C=n("58df"),E=Object(C["a"])(p["a"],Object(x["a"])("windowGroup","v-window-item","v-window")),k=E.extend().extend().extend({name:"v-window-item",directives:{Touch:g["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{done:null,isActive:!1,wasCancelled:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},mounted:function(){this.$el.addEventListener("transitionend",this.onTransitionEnd,!1)},beforeDestroy:function(){this.$el.removeEventListener("transitionend",this.onTransitionEnd,!1)},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()))},onAfterEnter:function(){var t=this;this.wasCancelled?this.wasCancelled=!1:requestAnimationFrame(function(){t.windowGroup.internalHeight=void 0,t.windowGroup.isActive=!1})},onBeforeEnter:function(){this.windowGroup.isActive=!0},onBeforeLeave:function(t){this.windowGroup.internalHeight=Object(T["e"])(t.clientHeight)},onEnterCancelled:function(){this.wasCancelled=!0},onEnter:function(t,e){var n=this,i=this.windowGroup.isBooted;i&&(this.done=e),this.$nextTick(function(){if(!n.computedTransition)return e();n.windowGroup.internalHeight=Object(T["e"])(t.clientHeight),!i&&setTimeout(e,100)})},onTransitionEnd:function(t){"transform"===t.propertyName&&t.target===this.$el&&this.done&&(this.done(),this.done=null)}},render:function(t){return t("transition",{props:{name:this.computedTransition},on:{afterEnter:this.onAfterEnter,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,enter:this.onEnter,enterCancelled:this.onEnterCancelled}},[this.genWindowItem()])}}),y=k.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=k.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),V=n("fe57"),G=n("9a96"),I=Object(r["a"])(s,i,o,!1,null,null,null);e["default"]=I.exports;c()(I,{VCard:d["a"],VCardText:u["b"],VFlex:h["a"],VIcon:v["a"],VLayout:w["a"],VSlider:m["a"],VSwitch:f["a"],VTab:b["a"],VTabItem:y,VTabs:V["a"],VTabsSlider:G["a"]})}}]);
//# sourceMappingURL=chunk-2d21d6c1.605b044c.js.map