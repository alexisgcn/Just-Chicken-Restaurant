
;(function(){
	
	//sticky Navigation for Menu

	var sticky = false

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)


	$(window).scroll(function(){
		const inBottom = isInBottom()

		if(inBottom && !sticky){
			//show sticky navigation
			sticky = true
			stickNavigation()
		}
		if(!inBottom && sticky){
			//hide sticky navigation
			sticky = false
			unStickNavigation()
		}
	})

	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp("fast")
		$("#sticky-navigation").slideDown("fast")
	}

	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").slideDown("fast")
		$("#sticky-navigation").slideUp("fast")
	}

	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
	}

	//images gallery

	var currentPosition = 0
	const imageCounter = $("[data-name='image-counter']").attr("content")

	setInterval(function(){
		if(currentPosition < imageCounter){
			currentPosition++
		}else{
			currentPosition = 0
		}
		$("#gallery .inner").css({
			left: "-"+currentPosition*100+"%"
		})
	},3000)

	//function to send form via Ajax

	const email = "alexisgcn@gmail.com"

	$("#contact-form").on("submit",function(e){
		e.preventDefault()

		sendForm($(this))

		return false
	})

	function sendForm($form){
		
		$.ajax({
		    url: $form.attr("action"), 
		    method: "POST",
		    data: $form.formObject(),
		    dataType: "json",
		    success:function(){
		    	alert("Your message was sent successfully")
		    }
		})
	}
		
})()