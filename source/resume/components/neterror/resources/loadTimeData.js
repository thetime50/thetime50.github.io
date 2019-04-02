var loadTimeData={
	values:{
	  offlineContentList:"",
	  //downloadButton
	  //suggestedOfflineContentPresentation
	  //attemptAutoFetch
	  //reloadButton.msg
	  // Check for Google cached copy suggestion.
	  //cacheButton
	  //disabledEasterEgg
	},
	getValue:function (s){
	  return this.values[s]
	},
	valueExists:function (s){
	  return this.values.hasOwnProperty(s)
	}
 }

//var iconClass='icon-offline'