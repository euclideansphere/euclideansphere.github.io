$(document).ready(function() {
		$(".show-link").mouseover(function() {
				var link = $("#toggle-link > a");
				link.attr("href", $(this).attr("href"));

				if (this.id == "resume") {
						link.text("~/austinhartline-resume.pdf");
				} else if (this.id == "linkedin") {
						link.text("linkedin.com/in/austinhartline");
				} else if (this.id == "github") {
						link.text("github.com/euclindeansphere");
				}

				link.parent().css("visibility", "visible");
		});

		$(".business-card > h1").mouseover(function() {
				$("#toggle-link").css("visibility", "hidden");
		});
});
