/// Only run once the entire document has been loaded
window.onload = function() {
    // Fetch all elements that will need to be modified
    var tableOfContents = document.getElementById("table-of-contents");
    var body = document.body;
    var row = document.createElement("div");
    var container = document.createElement("div");
    var content = document.getElementById("content");
    var oldNavbar = document.getElementById("org-div-home-and-up");
    var navbar = document.createElement("nav");
    var navList = document.createElement("ul");
    var navItems = document.querySelectorAll("#org-div-home-and-up a");
    // Set classnames
    container.className = "container";
    row.className = "row";
    navbar.className = "container navbar navbar-light navbar-expand-sm";
    tableOfContents.className = "col-md-5";
    navList.className = "navbar-nav mr-auto d-none d-sm-flex";
    content.className = "col-md-7";
    //Set the navlist inline style
    navList.style = "list-style:none;padding-left: 1rem;";
    // Add all items to the navlist
    for (var i = 0; i < navItems.length; i++){
        var item = document.createElement("li");
        item.innerHTML = navItems.item(i).outerHTML;
        var link = item.querySelector("a");
        item.className = "nav-item";
        link.className = "nav-link";
        navList.appendChild(item);
    }
    // Appends all children to where they should be in the DOM
    navbar.appendChild(navList);
    body.replaceChild(navbar, oldNavbar);
    row.appendChild(content);
    row.appendChild(tableOfContents);
    container.appendChild(row);
    body.appendChild(navbar);
    body.appendChild(container);
    downgradeHeaders();
}
/// Iteratively finds all h<n> elements and lowers their level by one.
function downgradeHeaders () {
    var headerCount = 5;
    var allHeaders = [];
    for(var i = 1; i <= headerCount; i++) {
        // Use querySelectorAll for a static list instead of a live list
        var headerList = document.querySelectorAll("h"+i);
        allHeaders[i] = headerList;
    }
    for(var i = 1; i <= headerCount; i++){
        var headers = allHeaders[i];
        if (headers) {
        for (var y = 0; y < headers.length; y++){
            var header = headers.item(y);
            var newHeader = document.createElement("h"+(i+1));
            newHeader.innerHTML = header.innerHTML;
            newHeader.id = header.id;
            header.parentNode.replaceChild(newHeader, header);
        }
      }
    }
}
