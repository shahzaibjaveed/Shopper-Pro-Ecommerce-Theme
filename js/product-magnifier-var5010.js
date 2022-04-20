"use strict";
// product-magnifier var
	var artfurniture_magnifier_vars;
	var yith_magnifier_options = {
		sliderOptions: {
			responsive: artfurniture_magnifier_vars.responsive,
			circular: artfurniture_magnifier_vars.circular,
			infinite: artfurniture_magnifier_vars.infinite,
			direction: 'left',
            debug: false,
            auto: false,
            align: 'left',
            height: 'auto',
			prev    : {
				button  : "#slider-prev",
				key     : "left"
			},
			next    : {
				button  : "#slider-next",
				key     : "right"
			},
			scroll : {
				items     : 1,
				pauseOnHover: true
			},
			items   : {
				visible: Number(artfurniture_magnifier_vars.visible),
			},
			swipe : {
				onTouch:    true,
				onMouse:    true
			},
			mousewheel : {
				items: 1
			}
		},
		showTitle: false,
		zoomWidth: artfurniture_magnifier_vars.zoomWidth,
		zoomHeight: artfurniture_magnifier_vars.zoomHeight,
		position: artfurniture_magnifier_vars.position,
		lensOpacity: artfurniture_magnifier_vars.lensOpacity,
		softFocus: artfurniture_magnifier_vars.softFocus,
		adjustY: 0,
		disableRightClick: false,
		phoneBehavior: artfurniture_magnifier_vars.phoneBehavior,
		loadingLabel: artfurniture_magnifier_vars.loadingLabel,
	};