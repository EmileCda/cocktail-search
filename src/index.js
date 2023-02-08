// javascript for coctail search project


// ------------------------------------------------------------------------------------------------------
/**
 * what to do when click on the logo : add the searchbar on the page 
 *  and resize logo (half of splash)
 * 
 */
function clickLogo(){
	
}
// ------------------------------------------------------------------------------------------------------
function initPage(){

	addMainContainer()
	setScreenSize();
	window.onresize = setScreenSize; // if windows resize then resize mainContainer

	addDivSearchAndLogo()
	addLogo()
	document.querySelector('.logo')
	        .addEventListener('click', clickLogo)			// if click on the splash then change page to logo + search bar
	 
}


document.addEventListener("DOMContentLoaded",initPage); 	// waiting for document loaded before code executing
