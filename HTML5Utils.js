var HTML5Utils=(function(){
	
	function init(){
		
	}
	
	var XHR=(function(){

		function init(method,url,async)
		{
			if(typeof async=='undefined') async=true;
			this.xhr=new XMLHttpRequest();
			if("withCredentials" in xhr){
				// Check if the XMLHttpRequest object has a "withCredentials" property.
				// "withCredentials" only exists on XMLHTTPRequest2 objects.
				xhr.open(method,url,async);
			}else if(typeof XDomainRequest != "undefined") {
				// Otherwise, check if XDomainRequest.
				// XDomainRequest only exists in IE, and is IE's way of making CORS requests.
				xhr=new XDomainRequest();
				xhr.open(method,url);
			}else{
				// Otherwise, CORS is not supported by the browser.
				xhr=null;
			}
			if(!xhr) throw new Error('CORS XHR is not supported by the browser');
		}
		
		init.prototype.responseType='';
		init.prototype.setRequestHeader=function(header,value){
			this.xhr.setRequestHeader(header,value);
		};
		init.prototype.getResponseHeader=function(header){
			return this.xhr.getResponseHeader();
		};
		init.prototype.getAllResponseHeaders=function(header,value){
			return this.xhr.getAllResponseHeaders();
		};
		init.prototype.send=function(){
			
		};
		
		
	});
	
	function createCORSRequest(method, url) {
	  var xhr = new XMLHttpRequest();
	  if ("withCredentials" in xhr) {
	
	    // Check if the XMLHttpRequest object has a "withCredentials" property.
	    // "withCredentials" only exists on XMLHTTPRequest2 objects.
	    xhr.open(method, url, true);
	
	  } else if (typeof XDomainRequest != "undefined") {
	
	    // Otherwise, check if XDomainRequest.
	    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
	    xhr = new XDomainRequest();
	    xhr.open(method, url);
	
	  } else {
	
	    // Otherwise, CORS is not supported by the browser.
	    xhr = null;
	
	  }
	  return xhr;
	}
	
	var xhr = createCORSRequest('GET', url);
	if (!xhr) {
	  throw new Error('CORS not supported');
	}
	
	
	
	// Make the actual CORS request.
	function makeCorsRequest() {
	  // All HTML5 Rocks properties support CORS.
	  var url = 'http://updates.html5rocks.com';
	
	  var xhr = createCORSRequest('GET', url);
	  if (!xhr) {
	    alert('CORS not supported');
	    return;
	  }
	
	  // Response handlers.
	  xhr.onload = function() {
	    var text = xhr.responseText;
	    var title = getTitle(text);
	    alert('Response from CORS request to ' + url + ': ' + title);
	  };
	
	  xhr.onerror = function() {
	    alert('Woops, there was an error making the request.');
	  };
	
	  xhr.send();
	}
	
})();
