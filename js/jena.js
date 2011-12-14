$(document)
		.ready(
				function() {
					$("body").empty();
					var draculaUrl = "http://api.sindice.com/v3/search?nq=*%20<http://xmlns.com/foaf/0.1/knows>%20<http://www.example.com/People/Drakula/%23me>&format=json";

					$.get(draculaUrl, function(data) {
						$.each(data.entries, function(index, value) {
							console.log(value);
							$("body").append("<p>" + value.title[0].value + "</p>");
						});
					});
				});