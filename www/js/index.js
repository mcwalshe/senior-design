    //functions for the index.html page
    function validateLogin() {
    	//call php
    	var name = document.forms["login"]["name"].value;
    	var pass = document.forms["login"]["pass"].value;
    	//validate username and password
	    if (name !== ""){
			isName = true;
		} else {
			isName = false;
		}
		if (pass !== "") {
			isPass = true;
		}else {
			isPass = false;
		}
		if (isName and isPass) {
			window.location.replace="./home.html"
		}
		else {
			window.location.replace="./home.html"
        }
    }
