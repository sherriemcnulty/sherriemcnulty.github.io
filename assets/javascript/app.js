$(document).ready(function () {
	$("#home").addClass("active");

	// NAVBAR CLICK EVENTS
	$("#home").click(function (event) {
		event.preventDefault();
	});
	$("#resume").click(function (event) {
		window.open("./assets/documents/resume.PDF", "_blank");
		location.reload();
		event.preventDefault();
	});
	$("#linkedin").click(function (event) {
		window.open("https://www.linkedin.com/in/sherrie-mcnulty/", "_blank");
		location.reload();
		event.preventDefault();
	});
	$("#contact").click(function (event) {
		$("#contactModal").modal("show");
		event.preventDefault();
	});

	// Contact modal callback
	$("#contactModal").on("hidden.bs.modal", function (event) {
		$("nav ul li a").removeClass("active");
		$("#home").addClass("active");
		event.preventDefault();
	});
});
