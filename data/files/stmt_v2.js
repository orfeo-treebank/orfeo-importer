function printStmt () {
        window.print ( );
}

function showTable(bodyDiv) {
    if (bodyDiv != null) {
        bodyDiv.style.display = 'block';
        bodyDiv.style.position = '';
    }
}

function hideTable(bodyDiv) {
    if (bodyDiv != null) {
        bodyDiv.style.display = 'none';
        bodyDiv.style.position = 'absolute';
    }
}

function openSection(headingDiv) {
    if (headingDiv != null) {
        headingDiv.className = "sectionHeadingOpened";
    }
}

function closeSection(headingDiv) {
    if (headingDiv != null) {
        headingDiv.className = "sectionHeadingClosed";
    }
}

function showPanel(divId) {
    openSection(panelHead(divId));
    showTable(panelBody(divId));
}

function hidePanel(divId) {
    closeSection(panelHead(divId));
    hideTable(panelBody(divId));
}

function flashPanel(divId) {
    if (panelHead(divId).className == "sectionHeadingOpened") {
        panelHead(divId).className = "sectionHeadingHighlighted";
    } else {
        panelHead(divId).className = "sectionHeadingOpened";
    }
}

function showFlashPanel(divId) {
    showTable(panelBody(divId));
    panelHead(divId).className = "sectionHeadingHighlighted";
    for (var i=1; i < 10; i++) {
        setTimeout(function() { flashPanel(divId); }, 360*i);
    }
}

function panelHead(divId) {
    return document.getElementById(divId + "_head");
}
function panelBody(divId) {
    return document.getElementById(divId + "_body");
}

function showHide(divId) {
    if (panelBody(divId).style.display == "none") {
        showPanel(divId);
        return true;
    } else {
        hidePanel(divId);
        return false;
    }
}

function expand_contract_all (showOrHide) {
    for (var i=0; i < document.getElementsByTagName('div').length; i++) {
        if (((document.getElementsByTagName('div')[i].id ).indexOf("_head") >= 0)) {
          el = document.getElementsByTagName('div')[i];
          if ((showOrHide == 1 && el.className == "sectionHeadingClosed") ||
          (showOrHide == 0 && el.className == "sectionHeadingOpened"))
            if (el.fireEvent) {
              el.fireEvent('onclick');
            } else {
              var evObj = document.createEvent('Events');
              evObj.initEvent('click', true, false);
              el.dispatchEvent(evObj);
            }

        }
    }
}

function openWin (url) {
    newWindow = window.open(url, 'popUp', 'height=400, width=650, scrollbars=yes');
    if (window.focus) {
        newWindow.focus();
    }
    return false;
}
