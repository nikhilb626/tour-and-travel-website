function showSearch(){
    var searchBar=document.getElementById("search_here");
    searchBar.classList.toggle("hidden");

}


function showLogin(){
    var loginForm=document.getElementById("login_form");

    loginForm.classList.remove("hiddenLog");
}

function hideLogin(){
    var loginForm=document.getElementById("login_form");

    loginForm.classList.add("hiddenLog");
}


function navigate(){
    var toggleNavigator=document.getElementById("navLinksNav");

    toggleNavigator.classList.add("navHidden")
}

function navigClose(){
    var toggleNavigator=document.getElementById("navLinksNav");

    toggleNavigator.classList.remove("navHidden")
}