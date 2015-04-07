
function myClass(val){
	this.otto=val;

	var echo = function(){
		console.log(this.otto);
	}

}

var myObject = new myClass('test');

