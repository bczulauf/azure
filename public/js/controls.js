var popups = [];
var isHiddenClass = "is-hidden";

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

function initialize() {
	var userButton = document.getElementById("user-button");
	var userMenu = document.getElementById("user-menu");
    var page = document.getElementById("page");
	var userDropdown = new Dropdown(userButton, userMenu);
    var resourceTable = new Table(page, {
        data: data,
        colWidths:  [1, 6, 3, 2],
        colHeaders: ["", "Name", "Group", "Actions"],
        columns: {
            icon: { renderer: svgRenderer },
            name: { renderer: "text" },
            group: { renderer: "text" },
            actions: { renderer: actionsRenderer }
        }
    });
	
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