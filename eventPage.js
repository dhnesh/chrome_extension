var aa={
   
   "id": "wikiit",
   "title": "WikiIt",
   "contexts": ["selection"],


};

chrome.contextMenus.create(aa);



chrome.contextMenus.onClicked.addListener(function(clickData){

	if (clickData.menuItemId == 'wikiit' && clickData.selectionText )

			{
				alert('in here')

				var wikiUrl='https://en.wikipedia.org/wiki/'+(clickData.selectionText);
				var createdata=
				{
					"url":wikiUrl,
					"type":"popup",
					"left":5,
					"top":5,
					
						
				};
				chrome.windows.create(createdata,function(){});

			}

	else  {

			alert(' in else ')

			}
});