var question10 = [
	"first",
	"second",
	"third",
	"fourth"
];

var num = 1;

var me{
	firstname: "Evan",
	lastname: "Sugiyama",
	age: 16
}

(function () {
	question10.pop();
	question10.push(num);
	for (var i = 0; i < question10.length; i++) {
		var node = document.createElement("LI");
		var arr = document.createTextNode(question10[i])
		document.getElementById("fourth").appendChild(node);
		node.appendChild(arr);
	}
	
}());