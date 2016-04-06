var Menu = function(element, options) {
	this.items = options.data;
	this.selected = options.selected || this.items[0];
	
	var that = this;
	var menu = document.createElement("ul");
	var selectedClass = "selected";
	
	this.items.forEach(function(item) {
		// Creates the list item.
        var itemElem = document.createElement('li');
		
		if (that.selected.name === item.name) {
			itemElem.className = selectedClass;
		}

        // Sets its contents.
        itemElem.appendChild(document.createTextNode(item.name));

        // Adds it to the list.
        menu.appendChild(itemElem)
	});
	
	element.appendChild(menu);
};