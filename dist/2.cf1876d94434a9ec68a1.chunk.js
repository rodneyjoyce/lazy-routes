webpackJsonp([2,7],{562:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(135),r=n(575),i=n(206),c=n(137),a=n(72),s=n(571),l=n(138),u=n(566),_=n(52);n.d(e,"Mod1ModuleNgFactory",function(){return f});var p=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},h=function(t){function e(e){t.call(this,e,[s.a],[])}return p(e,t),Object.defineProperty(e.prototype,"_NgLocalization_3",{get:function(){return null==this.__NgLocalization_3&&(this.__NgLocalization_3=new a.a(this.parent.get(l.a))),this.__NgLocalization_3},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ROUTES_4",{get:function(){return null==this.__ROUTES_4&&(this.__ROUTES_4=[[{path:"",component:u.a}]]),this.__ROUTES_4},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new i.a,this._RouterModule_1=new c.g(this.parent.get(c.h,null)),this._Mod1Module_2=new r.a,this._Mod1Module_2},e.prototype.getInternal=function(t,e){return t===i.a?this._CommonModule_0:t===c.g?this._RouterModule_1:t===r.a?this._Mod1Module_2:t===a.b?this._NgLocalization_3:t===_.a?this._ROUTES_4:e},e.prototype.destroyInternal=function(){},e}(o.a),f=new o.b(h,r.a)},566:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t.prototype.ngOnInit=function(){console.log("Books")},t=r([n.i(o._4)({selector:"app-books",templateUrl:"./books.component.html"}),i("design:paramtypes",[])],t)}()},571:function(t,e,n){"use strict";var o=n(566),r=n(205),i=n(44),c=n(136),a=n(71),s=n(70),l=n(93);n.d(e,"a",function(){return f});var u=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},_=function(){function t(){this._changed=!1,this.context=new o.a}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var o=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),o},t.prototype.checkHost=function(t,e,n,o){},t.prototype.handleEvent=function(t,e){var n=!0;return n},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}(),p=i.createRenderComponentType("",0,c.b.None,[],{}),h=function(t){function e(n,o,r,i){t.call(this,e,p,a.a.HOST,n,o,r,i,s.b.CheckAlways)}return u(e,t),e.prototype.createInternal=function(t){return this._el_0=i.selectOrCreateRenderHostElement(this.renderer,"app-books",i.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new g(this.viewUtils,this,0,this._el_0),this._BooksComponent_0_3=new _,this.compView_0.create(this._BooksComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new l.a(0,this,this._el_0,this._BooksComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===o.a&&0===e?this._BooksComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._BooksComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t)},e.prototype.destroyInternal=function(){this.compView_0.destroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(r.a),f=new l.b("app-books",h,o.a),d=[],y=i.createRenderComponentType("",0,c.b.None,d,{}),g=function(t){function e(n,o,r,i){t.call(this,e,y,a.a.COMPONENT,n,o,r,i,s.b.CheckAlways)}return u(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);return this._el_0=i.createRenderElement(this.renderer,e,"p",i.EMPTY_INLINE_ARRAY,null),this._text_1=this.renderer.createText(this._el_0,"\n  books works!\n",null),this._text_2=this.renderer.createText(e,"\n",null),this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._text_2],null),null},e}(r.a)},575:function(t,e,n){"use strict";var o=n(0),r=n(94),i=n(307),c=n(566);n.d(e,"a",function(){return u});var a=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=[{path:"",component:c.a}],u=function(){function t(){}return t=a([n.i(o.l)({imports:[r.g,i.a.forChild(l)],declarations:[c.a]}),s("design:paramtypes",[])],t)}()}});