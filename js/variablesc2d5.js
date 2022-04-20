  
		var artfurniture_testipause = 3000,
			artfurniture_testianimate = 2000;
		var artfurniture_testiscroll = false;
							artfurniture_testiscroll = true;
					var artfurniture_catenumber = 6,
			artfurniture_catescrollnumber = 2,
			artfurniture_catepause = 3000,
			artfurniture_cateanimate = 700;
		var artfurniture_catescroll = false;
					var artfurniture_menu_number = 9;
		var artfurniture_sticky_header = false;
							artfurniture_sticky_header = true;
					jQuery(document).ready(function(){
			jQuery("#ws").focus(function(){
				if(jQuery(this).val()=="Search product..."){
					jQuery(this).val("");
				}
			});
			jQuery("#ws").focusout(function(){
				if(jQuery(this).val()==""){
					jQuery(this).val("Search product...");
				}
			});
			jQuery("#wsearchsubmit").on('click',function(){
				if(jQuery("#ws").val()=="Search product..." || jQuery("#ws").val()==""){
					jQuery("#ws").focus();
					return false;
				}
			});
			jQuery("#search_input").focus(function(){
				if(jQuery(this).val()=="Search..."){
					jQuery(this).val("");
				}
			});
			jQuery("#search_input").focusout(function(){
				if(jQuery(this).val()==""){
					jQuery(this).val("Search...");
				}
			});
			jQuery("#blogsearchsubmit").on('click',function(){
				if(jQuery("#search_input").val()=="Search..." || jQuery("#search_input").val()==""){
					jQuery("#search_input").focus();
					return false;
				}
			});
		});
		