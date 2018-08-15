$(function () {


	modalTitleCreate();
});

// CREATING THE CLICKABLE LINK TO OPEN THE MODAL FOR EACH STORY
function modalTitleCreate() {

	const $titlesArray = [];

	for (let i = 0; i < stories.length; i++) {

		$titlesArray.push($("<h1>", {
			text: stories[i].title
		}));
	}


	$("#storyHeadings").append($titlesArray);
	$("#storyHeadings h1").wrap(
		"<a data-toggle='modal'></a>"
	);
	$("#storyHeadings a").each(function (j) {
		$(this).attr('data-target', '#storyModal' + j);
	})

	storyHeaderPopover();
}

function storyHeaderPopover() {
	$.each(stories, function () {
		// THIS IS WHERE TO START ADDING THE POPOVER TO THE H1 TAG FROM PREVIOUS FUNCTION ============================================================
	})

}


// TAKES THE STORIES JSON AND BUILDS THE MODAL BODY THE 
// ASYNC FUNCTION ABOVE MODALTITLECREATE() BUILDS
function modalBodyCreate() {}