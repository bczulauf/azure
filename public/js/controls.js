var popups = [];
var isHiddenClass = "is-hidden";
var tableHeaders = ["name", "group"];
var tableItems = [
	{
        data: {
            name: "gogo",
            group: "gogo app"
        },
        metaData: {
            id: "7e4890",
            type: "website"
        }
	},
	{
        data: {
            name: "howdy",
            group: "personal"
        },
        metaData: {
            id: "898d90",
            type: "website"
        }
	}
];
var websiteIcon = "<svg viewBox='0 0 50 50' class='fill-light' role='img' xmlns:svg='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' focusable='false'><path d='M40.193,44.839c-4.53,3.464-9.867,5.151-15.167,5.151c-7.52,0-14.956-3.376-19.87-9.803 C-3.24,29.225-1.168,13.548,9.814,5.148C14.343,1.663,19.686,0,24.979,0c7.52,0,14.958,3.376,19.87,9.809 C53.247,20.768,51.154,36.448,40.193,44.839' class='fill-dark'></path><path d='M35.6,29.378c1.816,2.368,5.186,2.796,7.541,1.004c0.123-0.094,0.218-0.208,0.33-0.309 c2.409,1.697,4.082,2.817,5.025,3.459c0.279-0.723,0.472-1.417,0.67-2.142c-0.996-0.741-2.343-1.778-4.29-3.356 c0.639-1.68,0.437-3.64-0.73-5.171c-1.669-2.16-4.626-2.709-6.936-1.377c-2.546-2.284-5.343-4.902-8.293-7.833 c9.165-4.929,15.676-4.207,15.676-4.207c-1.087-1.386-2.305-2.6-3.606-3.697c-3.865-0.597-9.869-0.53-16.729,3.119l-0.002-0.003 l-0.001,0c-2.286-2.393-4.613-4.958-6.983-7.712c-1.134,0.363-2.242,0.812-3.312,1.347c1.749,2.862,4.102,5.749,6.754,8.565h0 c0.005,0.006,0.011,0.011,0.017,0.017c-2.211,1.546-4.673,3.613-6.944,6.015c-0.29,0.309-0.569,0.62-0.842,0.931 c-1.357-0.284-2.784-0.201-4.117,0.282C6.564,13.425,6.746,9.501,7.104,7.478c-0.983,1.03-1.901,2.113-2.692,3.267 C3.821,13.16,3.653,16.643,5.397,20.84c-2.019,2.642-2.114,6.389-0.005,9.153c0.176,0.229,0.364,0.442,0.559,0.645 c-0.921,3.137-1.333,6.163-1.46,8.761c0.237,0.322,0.237,0.582,0.472,0.896c1.199,1.538,2.705,2.834,4.16,4.008 c-0.18-2.75,0.014-6.806,1.714-11.372c1.173,0.089,2.366-0.096,3.483-0.566c0.64,0.563,1.31,1.132,2.025,1.711 c2.453,1.942,4.9,3.453,7.285,4.643c-0.124,1.213,0.18,2.474,0.968,3.518c1.685,2.176,4.805,2.582,6.983,0.919 c0.453-0.347,0.811-0.766,1.108-1.216c3.889,0.866,7.287,1.019,9.806,1.019c0.386,0,2.177-2.436,3.203-3.946 c-1.534,0.321-6.083,0.946-12.3-0.84c-0.15-0.698-0.437-1.376-0.898-1.98c-1.579-2.07-4.466-2.518-6.618-1.133 c-2.161-1.172-4.424-2.641-6.758-4.49c-0.471-0.373-0.923-0.745-1.359-1.118c1.426-2.247,1.578-5.127,0.318-7.55 c0.286-0.286,0.567-0.573,0.871-0.857c2.311-2.159,4.485-3.887,6.519-5.274c-0.082-0.076-0.156-0.156-0.236-0.233 c0.081,0.075,0.157,0.152,0.239,0.227c-0.001,0-0.001,0.001-0.002,0.001c3.121,2.886,6.43,5.621,9.564,8.065 C34.209,25.589,34.339,27.73,35.6,29.378z'></path></svg>";

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

var Table = function(element, items, headers) {
	var tbl = document.createElement("div");
    tbl.id = "table";
    
    var tblHeader = document.createElement("div");
    tblHeader.id = "table-header";
    
    var tblBody = document.createElement("div");
    tblBody.id = "table-body";
    
    headers.forEach(function(header) {
        var th = headerRow.insertCell();
        
        th.appendChild(document.createTextNode(header));
    });
	
	items.forEach(function(item) {
		var tr = tbl.insertRow();
		var data = item.data;
        var metaData = item.metaData;
        var icon;
        
        if (metaData.type = "website") {
            var td = tr.insertCell();
            
            td.className = "icon-cell";
            td.innerHTML = websiteIcon;
        }
        
		for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var td = tr.insertCell();
                
                td.appendChild(document.createTextNode(data[key]));
            }
        }
        
        if (metaData.type = "website") {
            var td = tr.insertCell();
            
            td.className = "icon-cell";
            td.innerHTML = websiteIcon;
        }
	});
    
    page.appendChild(tbl);
}

function initialize() {
	var userButton = document.getElementById("user-button");
	var userMenu = document.getElementById("user-menu");
    var page = document.getElementById("page");
	var userDropdown = new Dropdown(userButton, userMenu);
    var resourceTable = new Table(page, tableItems, tableHeaders);
	
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