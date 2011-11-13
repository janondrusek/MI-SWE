var Progressbar = Class.create({
	initialize : function() {
		i = 0;
		[ 10, 50, 80, 100 ].forEach(function(item) {
			setTimeout(function() {
				jQuery("#progressbar").progressbar({
					value : item
				});
			}, 1000 * i);
			i++;
		});
	},
});