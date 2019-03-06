from pyquery import PyQuery as pq
import os
def convert(path, links=None, show_up_link=True):
    d = pq(filename=path)
    toc = d("#table-of-contents")
    body = d("body")
    row = pq("<div class=\"row\"></div>")
    container = pq("<div class=\"container\"></div>")
    content = d("#content")
    old_navbar = d("#org-div-home-and-up")
    navbar = pq("<nav class=\"container navbar navbar-light navbar-expand-sm\"")
    nav_list = pq("<ul class=\"navbar-nav mr-auto d-none d-sm-flex\"></ul>")
    nav_items = d("#org-div-home-and-up a")
    tables = d("table")
    source = d(".org-src-container")
    source_pre = d(".org-src-container pre")
    title = d(".title")
    new_title = pq("<h2>"+title.text()+"</h2>")
    title.replace_with(new_title)
    toc.addClass("col-md-5")
    content.addClass("col-md-7")
    for item in tables:
        item.addClass("table table-sm table-hover")
        item.remove_attr("border")
        item.remove_attr("cellspacing")
        item.remove_attr("cellpadding")
        item.remove_attr("frame")
        item.remove_attr("rules")
    for item in source:
        item.addClass("highlight")
    nav_list.attr("style", "list-style:none;padding-left: 1rem;")
    for item in nav_items:
        item = pq(item)
        new_item = pq("<li></li>")
        new_item.html(item.outer_html())
        link = new_item.children("a")
        new_item.addClass("nav-item")
        link.addClass("nav-link")
        if link.text() != "UP" or show_up_link:
            nav_list.append(new_item)
    if links:
        for link in links:
            link = pq("<li class=\"nav-item\"><a class=\"nav-link\" href=\""+link['href']+"\">"+link['text']+"</a></li>")
            nav_list.append(link)
    navbar.append(nav_list)
    if old_navbar: 
        old_navbar.replace_with(navbar)
    elif navbar.children().length > 0:
        body.append(navbar)
    row.append(content)
    row.append(toc)
    container.append(row)
    body.append(container)
    output = open(path, "w")
    output.write(d.outer_html())
    output.close()
