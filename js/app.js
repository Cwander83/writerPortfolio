$(function() {
	modalTitleCreate();

	$(window).scroll(function() {
		/* affix after scrolling 100px */
		if ($(document).scrollTop() > 100) {
			$("nav").addClass("shrink");
		} else {
			$("nav").removeClass("shrink");
		}
	});
	detectmob();
	// HIDING THE POPOVER IN A MOBILE VIEWPORT
	function detectmob() {
		if (window.innerWidth <= 800) {
			$('[data-toggle="popover"]').popover("hide");
			console.log("if popover");
		} else {
			return $('[data-toggle="popover"]').popover();
		}
		console.log("else popover");
	}
});

// CREATING THE CLICKABLE LINK TO OPEN THE MODAL FOR EACH STORY
function modalTitleCreate() {
	const $titlesArray = [];

	for (let i = 0; i < stories.length; i++) {
		$titlesArray.push(
			$("<h1>", {
				class: "storyHeader",
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

	// MODAL
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

	// MODAL HEADER AND BODY
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
					class: "modal-body"
				})
			);
	});

	// STORIES TO THE MODAL BODY
	$(".modal-body").each(function(i) {
		$(this).html($stories[i]);
	});
	console.log("modal create");
}
