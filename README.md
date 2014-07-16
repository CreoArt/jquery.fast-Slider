jQeury.Slider
=============

Jquery sample slider

# Install
Insert this code before tag `</head>`
```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="/jqeury.fast-Slider/jquery.fast-Slider.js"></script>
```
Create slider stylesheet
```
#demo {
	width: 400px;
	height: 200px;
	padding: 0 30px;
}
#demo ul, #demo li {
	margin: 0;
	padding: 0;
}
#demo img {
	margin: 0;
	padding: 0;
	border: 0;
}
// Next buttom
.next {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	width: 30px;
	cursor: pointer;
	background: url(/images/slider-next.png) no-repeat center #fff;
	z-index: 1;
}
// Prev buttom
.prev {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 30px;
	cursor: pointer;
	background: url(/images/slider-prev.png) no-repeat center #fff;
	z-index: 1;
}
```
Then, you need to create your slider
```
<div id="demo">
	<a href="#" class="next"></a>
	<a href="#" class="prev"></a>
	<ul>
		<li><img src="http://lorempixel.com/200/100/" border="0"></li>
		<li><img src="http://lorempixel.com/200/100/" border="0"></li>
		<li><img src="http://lorempixel.com/200/100/" border="0"></li>
		<li><img src="http://lorempixel.com/200/100/" border="0"></li>
		<li><img src="http://lorempixel.com/200/100/" border="0"></li>
		<li><img src="http://lorempixel.com/200/100/" border="0"></li>
	</ul>
</div>
```
### Configuration
```
$(document).ready(function() {
	$('#demo').Slider({
		next_bt: '.next', // next buttom class
		prev_bt: '.prev', // prev buttom class
		bt_hide: false, // hide buttom on no list
		type: false, // Slider type: false = only slider, gallary = slider & gallary
		hs: false, // Set height to box on max height element
		duration: 1000, // Slider animation speed on mc
		debug: false, // Debug mode
		circle: false // Circle mode
	});
});
```
[Demo](http://creoart.github.io/jquery.fast-Slider)
