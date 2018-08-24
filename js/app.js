$(function() {
	modalTitleCreate();

	$('[data-toggle="popover"]').popover();
});

// CREATING THE CLICKABLE LINK TO OPEN THE MODAL FOR EACH STORY
function modalTitleCreate() {
	const $titlesArray = [];

	for (let i = 0; i < stories.length; i++) {
		$titlesArray.push(
			$("<h1>", {
				text: stories[i].title,
				"data-toggle": "popover",
				"data-trigger": "hover",
				"data-container": "body",
				"data-placement": "top",
				"data-content": "Preview: " + stories[i].firstSentence
			})
		);
	}

	$("#storyHeadings").append($titlesArray);

	$("#storyHeadings h1").wrap("<a data-toggle='modal'></a>");

	$("#storyHeadings a").each(function(j) {
		$(this).attr("data-target", "#storyModal" + j);
	});
	console.log("titlecreate");
	modalBodyCreate();
}

// TAKES THE STORIES JSON AND BUILDS THE MODAL BODY THE
// ASYNC FUNCTION ABOVE MODALTITLECREATE() BUILDS
function modalBodyCreate() {
	const $modal = [];
	const $storyIndex = [];
	const $storyTitle = [];
	const $stories = [];
	console.log($storyTitle);

	for (let i = 0; i < stories.length; i++) {
		$modal.push(
			$("<div>", {
				id: "storyModal" + i,
				class: "modal fade",
				role: "dialog",
				"aria-hidden": true
			})
		);
		$storyIndex.push(i);
		$storyTitle.push(stories[i].title);
		$stories.push(stories[i].story);
	}

	$("#storyModals").append($modal);

	$(".modal").each(function() {
		$(this)
			.append(
				$("<div>", {
					class: "modal-dialog modal-lg",
					role: "document"
				})
			)
			.append(
				$("<div>", {
					class: "modal-content"
				})
			);
	});

	$(".modal-content").each(function(i) {
		$(this)
			.append(
				$("<div>", {
					class: "modal-header",
					text: $storyTitle[i]
				})
			)
			.append(
				$("<div>", {
					class: "modal-body",
					text: $stories[i]
				})
			);
	});
}
