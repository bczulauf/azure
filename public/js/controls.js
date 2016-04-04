var popups = [];
var isHiddenClass = "is-hidden";
var tableData = [
	{
		id: "7e4890",
		name: "gogo",
		type: "website",
		updated: "5/12/15"
	},
	{
		id: "8e4890",
		name: "howdy",
		type: "website",
		updated: "3/12/16"
	}
]

function isDescendant(parent, child) {
     var node = child.parentNode;
	 
     while (node != null) {
         if (node === parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}

var Dropdown = function(button, menu, isOpen) {
    this.button = button;
	this.menu = menu;
	this.isOpen = false;
	
	var that = this;
	
	this.button.classList.add("popup-button");
	
	if (!isOpen) {
		this.menu.classList.add(isHiddenClass);
	}
    
	button.addEventListener("click", function(event){
		that.isOpen ? that.hide() : that.show();
	}, false);
	
	popups.push(this);
};

Dropdown.prototype.show = function() {
    this.menu.classList.remove(isHiddenClass);
	this.isOpen = true;
};

Dropdown.prototype.hide = function() {
    this.menu.classList.add(isHiddenClass);
	this.isOpen = false;
};

var Table = function(data) {
	var tbl = document.createElement("table");
	var tbdy = document.createElement("tbody");
	var td = document.createElement("td");
	
	data.forEach(function(dataRow) {
		var tr = tbl.insertRow();
		
		
		
	})
}

function initialize() {
	var userButton = document.getElementById("user-button");
	var userMenu = document.getElementById("user-menu");
	var userDropdown = new Dropdown(userButton, userMenu);
	
	// Hides each popup on document click.
	document.addEventListener("click", function(event) {
		var target = event.target;
		
		popups.forEach(function(popup) {
			if (popup.isOpen) {
				var button = popup.button;
			
				if (button !== target && !isDescendant(button, target)) {
					popup.hide();
				}
			}
		});
	}, false);
}