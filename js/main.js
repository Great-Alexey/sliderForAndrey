//var elementCollection;
//var prev;
//var next;
//var container;
//var currentNumberSlide;
//var currentNumber;
//var count;
//var autoPlay;

//container = document.querySelector( 'ul.slides' );
//elementCollection = Array.prototype.slice.call( document.querySelectorAll( 'ul.slides > li' ) );
//elementCollection = document.querySelectorAll( 'ul.slides > li' );
//
//currentNumber = 0;
//
//currentNumberSlide = elementCollection[currentNumber];
//
//count = elementCollection.indexOf(currentNumberSlide);
//
//prev = document.querySelector( 'div.controls > button.prev' );
//next = document.querySelector( 'div.controls > button.next' );
//
//current();
//
//function current()
//{
//	currentNumberSlide.classList.add( 'current' );
//}
//
//function getClasses()
//{
//	var nextCurrent;
//	var prevCurrent;
//	
//	nextCurrent = elementCollection[currentNumber + 1];
//	prevCurrent = elementCollection[currentNumber - 1];
//	
//	//if ( elementCollection[currentNumber] === elementCollection[elementCollection.length - 1] )
//	//{
//	//	prevCurrent.classList.remove( 'current' );
//	//	elementCollection[0].classList.add( 'current' );
//	//	elementCollection[elementCollection.length - 1].classList.remove( 'current' );
//	//}
//	
//	//if ( elementCollection[currentNumber] === elementCollection[0] )
//	//{
//	//	nextCurrent.classList.remove( 'current' );
//	//	elementCollection[elementCollection.length - 1].classList.add( 'current' );
//	//	elementCollection[0].classList.remove( 'current' );
//	//}
//	
//	if ( elementCollection[currentNumber].classList.contains( 'current' ) )
//	{
//		nextCurrent.classList.remove( 'current' );
//		prevCurrent.classList.remove( 'current' );
//	}
//}
//
//function countNext()
//{
//	//if ( count < elementCollection.length -1 )
//	//{
//	//	count = count + 1;
//	//}
//	//else if ( count === elementCollection.length -1 )
//	//{
//	//	count = 1;
//	//}
//	//if ( currentNumber === 1 )
//	//{
//	//	elementCollection[elementCollection.length - 1].classList.remove( 'current' );
//	//}
//	count = count + 1;
//	
//	if ( count == elementCollection.length )
//	{
//		count = 0;
//	}
//	
//	currentNumber = count;
//	
//	elementCollection[currentNumber].classList.add( 'current' );
//	
//	getClasses();
//	
//	console.log(elementCollection.length -1);
//}
//
//function countPrev()
//{
//	//if ( count > 0 )
//	//{
//	//	count = count - 1;
//	//}
//	//else if ( count === 0 )
//	//{
//	//	count = 10;
//	//}
//	count = count - 1;
//	if ( count < 0 )
//	{
//		count = elementCollection[elementCollection.length - 1];
//	}
//	//if ( elementCollection[elementCollection.length - 1].classList.contains( 'current' ) )
//	//{
//	//	elementCollection[0].classList.remove( 'current' );
//	//}
//	
//	currentNumber = count;
//	
//	elementCollection[currentNumber].classList.add( 'current' );
//	
//	getClasses();
//	
//	console.log(currentNumber);
//}
//
//function play()
//{
//	autoPlay = setInterval(countNext, 5000);
//}
//
//function stop()
//{
//	clearInterval(autoPlay);
//}
//
//window.addEventListener( 'load',play );
//
//container.addEventListener( 'mouseover', stop );
//next.addEventListener( 'mouseover', stop );
//prev.addEventListener( 'mouseover', stop );
//
//container.addEventListener( 'mouseout', play );
//next.addEventListener( 'mouseout', play );
//prev.addEventListener( 'mouseout', play );
//
//next.addEventListener( 'click', countNext );
//prev.addEventListener( 'click', countPrev );

function slideshow()
{
	var containerSlideshow;
	var elementCollection;
	var prev;
	var next;
	var prevNumberSlide;
	var currentNumberSlide;
	var nextNumberSlide;
	var bookmarksContainer;
	var bookmarksCollection;
	var bookmarks;
	var savedCurrentElement;
	var savedPrevElement;
	var savedNextElement;
	var savedBookmarkElement;
	var container;
	var resetClick;
	
	containerSlideshow = document.querySelector( 'div.slide-show' );
	prev = containerSlideshow.querySelector( 'div.controls > button.prev' );
	next = containerSlideshow.querySelector( 'div.controls > button.next' );
	elementCollection = Array.prototype.slice.call( containerSlideshow.querySelectorAll( 'ul.slides > li' ) );
	bookmarksContainer = containerSlideshow.querySelector( 'ul.bookmarks' );
	
	container = document.querySelector( 'ul.slides' );
	
	prevNumberSlide = elementCollection.length - 1;
	currentNumberSlide = 0;
	nextNumberSlide = 1;
	
	createBookmarks();
	
	bookmarksCollection = Array.prototype.slice.call( containerSlideshow.querySelectorAll( 'ul.bookmarks > li' ) );
	
	initSlideshow();
	
	next.addEventListener( 'click', nextSlide );
	prev.addEventListener( 'click', prevSlide );
	
	function initSlideshow()
	{
		savedCurrentElement = elementCollection[currentNumberSlide];
		savedCurrentElement.classList.add( 'current' );
		
		savedPrevElement = elementCollection[prevNumberSlide];
		savedPrevElement.classList.add( 'prev' );
		
		savedNextElement = elementCollection[nextNumberSlide];
		savedNextElement.classList.add( 'next' );
		
		savedBookmarkElement = bookmarksCollection[currentNumberSlide];
		savedBookmarkElement.classList.add( 'current' );
	}
	
	function nextSlide()
	{
		prevNumberSlide++;
		currentNumberSlide++;
		nextNumberSlide++;
		
		if ( prevNumberSlide == elementCollection.length )
		{
			prevNumberSlide = 0;
		}
		if ( currentNumberSlide == elementCollection.length )
		{
			currentNumberSlide = 0;
		}
		if ( nextNumberSlide == elementCollection.length )
		{
			nextNumberSlide = 0;
		}
		
		container.style.transition = 'left .3s';
		container.style.left = -1400 + 'px';
		
		setTimeout( function()
		{
			removeClassCurrent();
			container.style.left = -700 + 'px';
			container.style.transition = '';
			initSlideshow(); 
		},300 );
	}
	
	function prevSlide()
	{
		//resetClickButton();
		
		prevNumberSlide--;
		currentNumberSlide--;
		nextNumberSlide--;
		
		if ( prevNumberSlide < 0 )
		{
			prevNumberSlide = elementCollection.length - 1;
		}
		if ( currentNumberSlide < 0 )
		{
			currentNumberSlide = elementCollection.length - 1;
		}
		if ( nextNumberSlide < 0 )
		{
			nextNumberSlide = elementCollection.length - 1;
		}
		
		container.style.transition = 'left .3s';
		container.style.left = 0 + 'px';
		
		setTimeout( function()
		{
			removeClassCurrent();
			container.style.left = -700 + 'px';
			container.style.transition = '';
			initSlideshow();
		},300 );
		
	}
	
	function removeClassCurrent()
	{
		savedCurrentElement.classList.remove( 'current' );
		savedPrevElement.classList.remove( 'prev' );
		savedNextElement.classList.remove( 'next' );
		savedBookmarkElement.classList.remove( 'current' );
	}
	
	function createBookmarks()
	{
		Array.prototype.forEach.call(
			elementCollection,
			function()
			{
				bookmarks = document.createElement( 'li' );
				bookmarksContainer.appendChild( bookmarks );
			}
		);
	}
	
	//function resetClickButton( event )
	//{
	//	event.preventDefault();
	//}
	
	function clickBookmarks()
	{
		Array.prototype.forEach.call(
			elementCollection,
			function()
			{
				
			}
		);
	}
}

slideshow();