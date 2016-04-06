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
var apps = [
    {
        name: "Website",
        icon: websiteIcon
    },
    {
        name: "VM",
        icon: vmIcon
    },
    {
        name: "SQL Database",
        icon: dbIcon
    }
]

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
    var pageContent = document.getElementById("page-content");
    var pageMenu = document.getElementById("page-menu");
	var userDropdown = new Dropdown(userButton, userMenu);
    var resourceTable = new Table(pageContent, {
        data: data,
        colWidths:  [1, 6, 3, 2],
        colHeaders: ["", "Name", "Group", ""],
        columns: {
            icon: { renderer: svgRenderer },
            name: { renderer: "text" },
            group: { renderer: "text" },
            actions: { renderer: actionsRenderer }
        }
    });
    var menuItems = apps.slice(0);
    menuItems.unshift({ name: "All", icon: "" });
    var resourceMenu = new Menu(pageMenu, {
        data: menuItems
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