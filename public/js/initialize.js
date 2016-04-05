var popups = [];
var isHiddenClass = "is-hidden";
var data = [
    {
        row: {
            icon: "website",
            name: "zoom.com",
            group: "zoom app",
            actions: [ { text: "Stop", action: stopWebsite }, { text: "Visit", action: "link" } ]
        },
        uri: "/link"
    },
    {
        row: {
            icon: "website",
            name: "gogo.com",
            group: "go app",
            actions: [ { text: "Stop", action: stopWebsite }, { text: "Visit", action: "link" } ]   
        },
        uri: "/link"
    },
    {
        row: {
            icon: "vm",
            name: "text vm",
            group: "testing",
            actions: [ { text: "Stop", action: stopWebsite }, { text: "Visit", action: "link" } ]   
        },
        uri: "/link"
    }
];

var isDescendant = function(parent, child) {
     var node = child.parentNode;
	 
     while (node != null) {
         if (node === parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}

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