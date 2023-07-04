( function() {

	var youtube = document.querySelectorAll( ".youtube" );
	
	for (var i = 0; i < youtube.length; i++) {
		
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/mqdefault.jpg";
		
		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );
		
				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
					
					// Adding the "active" class to the wrapper element
					var wrapper = this.closest('.wrapper');
					if (wrapper) {
					  wrapper.classList.add('active');
					}
					
				} );	


	};

	var link = document.querySelectorAll(".item-link");

	for (var i = 0; i < link.length; i++) {

		link[i].addEventListener("click", function() {

			var closest = this.closest('.content-item').querySelector('.youtube');
			var time = this.dataset.time;
		
			if (closest.querySelector('iframe') !== null) {

				var iframe = closest.querySelector('iframe');
					iframe.src = "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1" + "&start=" + time;
			
				// Adding the "active" class to the wrapper element	
				var wrapper = closest.closest('.wrapper');
				if (wrapper) {
					wrapper.classList.add('active');
				}

			} else {

				var iframe = document.createElement("iframe");

					iframe.setAttribute("frameborder", "0");
					iframe.setAttribute("allowfullscreen", "");
					iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1" + "&start=" + time);
				
					closest.innerHTML = "";
					closest.appendChild(iframe);
		
				// Adding the "active" class to the wrapper element	
				var wrapper = closest.closest('.wrapper');
				if (wrapper) {
					wrapper.classList.add('active');
				}
			}

			// Scroll the iframe into view with 10vh offset
			var offset = window.innerHeight * 0.15; // Calculate 15% of the viewport height
			iframe.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', blockOffset: offset });

	  	} );

	}

} )();