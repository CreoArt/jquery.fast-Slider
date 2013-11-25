jqeury.slider
=============

Jquery sample slider

[DEMO](http://miklesol.github.io/jqeury.slider/)

Example

HTML:
```html
<div id="slider">
    <a href="#" class="prev"></a>
    <ul>
        <li>
            <img src="/images/sl1.png" border="0">
        </li>
        <li>
            <img src="/images/sl2.png" border="0">
        </li>
        <li>
            <img src="/images/sl3.png" border="0">
        </li>
        <li>
            <img src="/images/sl4.png" border="0">
        </li>
        <li>
            <img src="/images/sl5.png" border="0">
        </li>
    </ul>
    <a href="#" class="next"></a>
</div>
```
Javascript:
```javascript
$('#slider').Slider({
	next_bt: '.next', // next button class
	prev_bt: '.prev', // prev button class
	bt_hide: false, // hide button if not object to scroll
    type: false // gallary - gallary mode
	hs: true, // set ul max height
	duration: 1000, // animation speed
	debug: false // debug mode
});
```