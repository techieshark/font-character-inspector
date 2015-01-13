$(window).load(function () {
		var svgns = 'http://www.w3.org/2000/svg';
		var svgUrl = 'font.svg';

		$('#svg').load(svgUrl, function (svgUrl) {
			// Insert content of the SVG file in our invisible DOM node
			$('#svg').append(svgUrl);

			// Find all glyph nodes in the SVG file
			var svg = $('svg').find('glyph[unicode]');
			var unicodePrefix = '\\'; // Add unicode escaping for CSS, JS escaped
			var iconOutput = '';
			var icons = [];
			var i = 0;

			for (i=0; i < svg.length; i++) {
				var unicode = svg[i].getAttribute('unicode').toString();

				icons.push(unicode);
			}

			for (i=0; i < icons.length; i++) {
				var iconChar = icons[i].charCodeAt();

				iconChar = iconChar.toString(16); // Convert to string format
				iconOutput += '<tr><td class="icon--' + icons[i] + '">' + icons[i] + '</td><td><code>' + unicodePrefix + iconChar + '</code></td></tr>';
			}

			$('.icons').append(iconOutput);
		});
	});