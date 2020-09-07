var sidebar = document.querySelector("#sidebar");
var sidebar_width = getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width');
var sidebar_expanded_width = getComputedStyle(document.documentElement).getPropertyValue('--sidebar-expanded-width');

var sidebar_expanded_bool = false;

var sidebar_tool_titles = document.querySelectorAll(".sidebar-tool-title");

// ? Why using a querySelectorAll for an element that is unique?

var sidebar_toggle = document.querySelectorAll(".sidebar-toggle")[0];

var sidebar_expanse_timing = getComputedStyle(document.documentElement).getPropertyValue('--sidebar-expanse-timing');


function expandSidebar() {
    sidebar.style.width = sidebar_expanded_width;

    for(var element of sidebar_tool_titles) {
        element.style.display = "block";
    }

    sidebar_toggle.style.transform = 'rotateZ(180deg)';
    sidebar_toggle.style.transition = 'transform '+ sidebar_expanse_timing;

    sidebar_expanded_bool = true;
}

function contractSidebar() {
    sidebar.style.width = sidebar_width;
    for(var element of sidebar_tool_titles) {
        element.style.display = "none";
    }
    sidebar_toggle.style.transform = 'rotateZ(0deg)';
    sidebar_toggle.style.transition = 'transform' + sidebar_expanse_timing;

    sidebar_expanded_bool = false;
}

sidebar_toggle.addEventListener('click', () => {
    !(sidebar_expanded_bool) ? expandSidebar() : contractSidebar();  
})