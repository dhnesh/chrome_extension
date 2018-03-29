$(document).on("click","#spendamount",function() {
    
    

    var notifOptions=
    {
    	type:'basic',
    	iconUrl:"images/pegi.png",
    	title:"Limit Reached!",
    	message:"Uh Oh! LImit Reached!"

    };

    chrome.notifications.create('limitNotif',notifOptions);
 chrome.storage.onChanged.addListner(function(changes,storageName){

 chrome.browserAction.setBadgeText({"text":changes.total.newValue.toString()

})	
 })   


});