Office.onReady((()=>{})),Office.actions.associate("translateMailBody",(async function(e){try{const t=await new Promise(((e,t)=>{Office.context.mailbox.item.getSelectedDataAsync(Office.CoercionType.Text,(o=>{o.status===Office.AsyncResultStatus.Succeeded?e(o.value.data):t(o.error.message)}))}));if(!t){console.error("No text selected.");const t={type:Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,message:"No text selected! Please select any text from mail body.",icon:"Icon.80x80",persistent:!0};return Office.context.mailbox.item.notificationMessages.replaceAsync("ActionPerformanceNotification",t),void e.completed()}const o=await async function(e){const t=JSON.stringify({text:e}),o=await fetch("https://us-central1-auditex-b2a31.cloudfunctions.net/function-1-test",{method:"POST",headers:{"Content-Type":"application/json"},body:t});if(!o.ok)throw new Error(`Error translating text: ${o.statusText}`);return(await o.json()).translation}(t);await function(e){return new Promise(((t,o)=>{const c=`<div dir="rtl">${e}</div>`;Office.context.mailbox.item.setSelectedDataAsync(c,{coercionType:Office.CoercionType.Html},(e=>{e.status===Office.AsyncResultStatus.Succeeded?t():o(e.error.message)}))}))}(o),e.completed(),console.log("Selected text translated successfully.")}catch(t){console.error("Error: ",t),e.completed()}}));
//# sourceMappingURL=commands.js.map