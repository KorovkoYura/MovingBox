(function(){

	// jQuery
	$(document).ready(function() {
		var boxHolder = $('.box-holder'),
			fieldWidth = boxHolder.width(),
			fieldHeight = boxHolder.height();

		var box = $('.box'),
			boxPosition = box.position(),
			boxTop = boxPosition.top,
			boxLeft = boxPosition.left,
			boxWidth = box.width(),
			boxHeight = box.height();

		var currentTop,
			currentLeft;

		var Xinner,
			Yinner;

		$(document).on('keydown', function(e){
			var charCode = e.keyCode;

			if(charCode == 39){
				moveRight();
			} else if(charCode == 40){
				moveDown();
			} else if(charCode == 37){
				moveLeft();
			}else if(charCode == 38){
				moveTop();
			}else{
				alert('Please use arrows to move a box.');
			}
		});

		boxHolder.mousemove(function(e){
		    var pos = $(this).offset(),
		    	elem_left = pos.left,
		    	elem_top = pos.top;
		    Xinner = e.pageX - elem_left;
		    Yinner = e.pageY - elem_top;
		    currentLeft = Xinner;
		    currentTop = Yinner;
		});

		boxHolder.on('click', function(){
			$(this).find('.box').css('left', currentLeft);
			$(this).find('.box').css('top', currentTop);
		});

		init();

		function init(){
			currentLeft = (fieldWidth / 2) - boxWidth;
			currentTop = (fieldHeight / 2) - boxHeight;
			box.css('left', currentLeft );
			box.css('top', currentTop );
		}

		function moveRight(){
			currentLeft += boxWidth;
			box.css('background','url(./images/right.gif)');
			box.css('left', currentLeft );
			checkCurrentPosition();
		}

		function moveDown(){
			currentTop += boxHeight;
			box.css('background','url(./images/bottom.gif)');
			box.css('top', currentTop );
			checkCurrentPosition();
		}

		function moveLeft(){
			currentLeft -= boxWidth;
			box.css('background','url(./images/left.gif)');
			box.css('left', currentLeft );
			checkCurrentPosition();
		}

		function moveTop(){
			currentTop -= boxHeight;
			box.css('background','url(./images/top.gif)');
			box.css('top', currentTop );
			checkCurrentPosition();
		}

		function checkCurrentPosition(){
			if(currentLeft <= 0){
				currentLeft = 0;
				box.css('left', currentLeft );
			}
			if(currentTop <= 0){
				currentTop = 0;
				box.css('top', currentTop );
			}
			if(currentLeft > fieldWidth - boxWidth){
				currentLeft = fieldWidth;
				box.css('left', currentLeft - boxWidth);
			}
			if(currentTop > fieldHeight - boxHeight){
				currentTop = fieldHeight;
				box.css('top', currentTop - boxHeight);
			}
		}
	});
		
})();