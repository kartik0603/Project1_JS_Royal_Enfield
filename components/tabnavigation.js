function openTab(event, tabId) {
    var i, tabcontent, tablinks;

  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");

    localStorage.setItem("selectedTab", tabId);
}

function loadDefaultTab() {
  
    var defaultTabId = localStorage.getItem("selectedTab") || "tab1";


    document.getElementById(defaultTabId).style.display = "block";

    
    var activeTabLink = document.querySelector(".tablinks[data-tab-id='" + defaultTabId + "']");
    if (activeTabLink) {
        activeTabLink.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", function() {

    loadDefaultTab();
});