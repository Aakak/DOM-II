
buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", function(e) {	    
        btn.addEventListener("mouseenter", function(e) {
        e.target.style.transform = "scale(1.2,1.2)";	        
        // e.target.style.transform = "scale(1.2,1.2)";
        TweenMax.to(btn, .2, {
            transform: "scale(1.2,1.2)"
        })
        e.target.textContent = "Click for adventure";	        
        e.target.textContent = "Click for adventure";
    });	
});