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