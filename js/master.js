(() => {
	// What do we want to work with
	// 
	// This is a 1 to 1 connection (selects one element)
	var badge = document.querySelector('#badge')

	// This is a one to many selection (gets a collection of elements)
	var allBadges = document.querySelectorAll('.isabadge')

	// What do we want it to do
	function logMyID() {
		// Log some stuff to the dev tools
		console.log(this.id);
		debugger;
	}

	// How do we want to do that?
	// 1 to 1 event handling
	badge.addEventListener('click', logMyID);

	allBadges.forEach(currentbadge => currentbadge.addEventListener('click', logMyID));
})();