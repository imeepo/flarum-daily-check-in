(()=>{var e=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={};(()=>{"use strict";e(t),flarum.core.compat.extend,app.initializers.add("imeepo-checkin",(function(){app.extensionData.for("imeepo-daily-check-in").registerSetting((function(){return m("div",{className:"Form-group"},m("label",null,app.translator.trans("imeepo-checkin.admin.settings.reward-money")),m("div",{class:"helpText"},app.translator.trans("imeepo-checkin.admin.settings.reward-money-requirement")),m("input",{type:"string",className:"FormControl",step:"any",bidi:this.setting("imeepo-forum-checkin.checkinRewardMoney")}))})).registerSetting({setting:"imeepo-forum-checkin.randMoney",label:app.translator.trans("imeepo-checkin.admin.settings.rand-money"),type:"switch"}).registerSetting({setting:"imeepo-forum-checkin.checkinTimeZone",label:app.translator.trans("imeepo-checkin.admin.settings.timezone"),type:"number"}).registerSetting({setting:"imeepo-forum-checkin.autoCheckIn",label:app.translator.trans("imeepo-checkin.admin.settings.auto-check-in"),type:"switch"}).registerSetting({setting:"imeepo-forum-checkin.autoCheckInDelay",label:app.translator.trans("imeepo-checkin.admin.settings.auto-check-in-delay"),type:"number"}).registerSetting({setting:"imeepo-forum-checkin.checkinSuccessPromptType",label:app.translator.trans("imeepo-checkin.admin.settings.check-in-success-prompt-type"),type:"select",options:{0:app.translator.trans("imeepo-checkin.admin.settings.None"),1:app.translator.trans("imeepo-checkin.admin.settings.Alert"),2:app.translator.trans("imeepo-checkin.admin.settings.Modal")}}).registerSetting((function(){return m("div",{className:"Form-group"},m("label",null,app.translator.trans("imeepo-checkin.admin.settings.check-in-success-prompt-text")),m("div",{class:"helpText"},app.translator.trans("imeepo-checkin.admin.settings.check-in-success-prompt-example-text")),m("input",{type:"string",className:"FormControl",step:"any",bidi:this.setting("imeepo-forum-checkin.checkinSuccessPromptText")}))})).registerSetting((function(){return m("div",{className:"Form-group"},m("label",null,app.translator.trans("imeepo-checkin.admin.settings.check-in-success-prompt-reward-text")),m("div",{class:"helpText"},app.translator.trans("imeepo-checkin.admin.settings.reward-money-requirement")),m("div",{class:"helpText"},app.translator.trans("imeepo-checkin.admin.settings.check-in-success-prompt-example-reward-text")),m("input",{type:"string",className:"FormControl",step:"any",bidi:this.setting("imeepo-forum-checkin.checkinSuccessPromptRewardText")}))})).registerPermission({icon:"fas fa-id-card",label:app.translator.trans("imeepo-checkin.admin.settings.allow-check-in"),permission:"checkin.allowCheckIn"},"moderate",90)}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map