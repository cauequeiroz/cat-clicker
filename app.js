var $cat    = document.querySelector('img'),
	$count  = document.querySelector('span'),
	counter = 0;

var updateCount = function() {
	$count.innerHTML = counter;
};

var catClick = function() {
	counter++;
	updateCount();
};

$cat.addEventListener('click', catClick, false);