var Menu = function(element, options) {
	this.items = options.data;
	this.selected = options.selected || this.items[0];
	
	var that = this;
	var menu = document.createElement("ul");
	var selectedClass = "selected";
	
	this.items.forEach(function(item) {
		// Creates the list item.
        var li = document.createElement('li');
        var a = document.createElement('a');

        a.href = "";
		
		if (that.selected.name === item.name) {
			a.className = selectedClass;
		}

        // Sets its contents.
        a.appendChild(document.createTextNode(item.name));
        li.appendChild(a);

        // Adds it to the list.
        menu.appendChild(li)
	});
	
	element.appendChild(menu);
};