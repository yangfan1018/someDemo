function cssjs(a, b) {
    if (a && a.split(".").length > 1 && a.split(".")[0] != "") {
        var c = a.split(".");
        var type1 = c[c.length - 1];

    } else {
        return;
    }
    if (b && b.split(".").length > 1 && b.split(".")[0] != "") {
        var d = a.split(".");
        var type2 = c[c.length - 1];
    }
    if (type1 != "js" && type1 != "css") {
        return;
    }
    var tag, attr;
    type1 == "js" ? (tag = "script", attr = "src") : (tag = "link", attr = "href")
    if (type1 == type2) {
        var allsuspects = document.getElementsByTagName(tag);
        for (var x = 0; x < allsuspects.length; x++) {
            if (allsuspects[x] && allsuspects[x].getAttribute(attr) != null && allsuspects[x].getAttribute(attr).indexOf(a) != -1) {
                var newElement = createjscssfile(b, type1)
                allsuspects[x].parentNode.replaceChild(newElement, allsuspects[x])

            }
        }
    } else if (type2 && type1 != type2) {
        return;
    } else if (!type2) {

        var allsuspects = document.getElementsByTagName(tag);
        for (var x = 0; x < allsuspects.length; x++) {
            if (allsuspects[x] && allsuspects[x].getAttribute(attr) != null && allsuspects[x].getAttribute(attr).indexOf(a) != -1) {
                return;
            }
        }
        var newElment = createjscssfile(a, type1);
        document.getElementsByTagName("head")[0].appendChild(newElment)
    }
}

function createjscssfile(filename, filetype) {
    if (filetype == "js") {
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", filename)
    } else if (filetype == "css") {
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    return fileref
}