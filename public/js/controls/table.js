var svgRenderer = function(td, data) {
    var icon;
    
    switch(data) {
        case "website":
            icon = websiteIcon;
            break;
        case "vm":
            icon = vmIcon;
            break;
        default:
            icon = "";
    }
    
    td.innerHTML = icon;
}

var actionsRenderer = function(td, data) {
    data.forEach(function(action) {
        var button = document.createElement("button");
        
        button.appendChild(document.createTextNode(action.text));
        td.appendChild(button);
    });
}

var stopWebsite = function() {
    
}

var Table = function(element, options) {
    this.data = options.data || [];
    this.colHeaders = options.colHeaders || [];
    this.headers = options.headers || true;
    this.colWidths = options.colWidths;
    this.columns = options.columns;
    
    var that = this;

	var tbl = document.createElement("div");
    tbl.className = "table";
    
    if (this.headers) {
        var tblHeader = document.createElement("div");
        
        tblHeader.classList.add("table-header", "table-row");
        tbl.appendChild(tblHeader);
        
        if (!that.colWidths) {
            tblHeader.classList.add("equal-widths")
        }
        
        this.colHeaders.forEach(function(header, index) {
            var th = document.createElement("div");
            th.className = "table-cell";
            
            if (that.colWidths) {
                th.style.width = that.colWidths[index];  
            }

            th.appendChild(document.createTextNode(header));
            tblHeader.appendChild(th);
        });
    }
	
	this.data.forEach(function(dataRow) {
        var row = dataRow.row;
        var tr = document.createElement("div");
        tr.className = "table-row";
        
        if (!that.colWidths) {
            tr.classList.add("equal-widths")
        }
        
        var count = 0;
        
		for (var key in row) {
            if (row.hasOwnProperty(key)) {
                var td = document.createElement("div");
                td.className = "table-cell";
                
                if (that.colWidths) {
                    td.style.width = that.colWidths[count];  
                }
                
                if (that.columns) {
                    var renderer = that.columns[key].renderer;
                    var val = row[key];
                    
                    switch(renderer) {
                        case "text":
                            td.appendChild(document.createTextNode(val));
                            break;
                        default:
                            renderer(td, val); 
                    }
                } else {
                    
                }

                tr.appendChild(td);
                count++;
            }
        }
        
        tbl.appendChild(tr);
	});
    
    element.appendChild(tbl);
}