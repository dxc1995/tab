function $(id) {
	return typeof id === "string"? document.getElementById(id):id;
}

window.onload = function() {
	var lis = $("notice-tit").getElementsByTagName("li"),
	    divs = $("notice-con").getElementsByTagName("div");
	var timer = null;

	if(timer) {
		clearTimeout(timer);
		timer = null;
	}

	for(var i = 0;i<lis.length;i++) {
		lis[i].id = i;
		lis[i].onmouseover = function() {
			var that = this;
			timer = setTimeout(function() {
			  for(var j = 0; j<lis.length; j++) {
				lis[j].className = "";
				divs[j].style.display = "none";
			   }
			   lis[that.id].className="select";
			   divs[that.id].style.display = "block";
			},500)
		}
	}
}