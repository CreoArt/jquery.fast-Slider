(function($) {
    $.fn.Slider = function(s) {
        var s = $.extend({
                next_bt: '.next',
                prev_bt: '.prev',
                bt_hide: false,
                hs: true,
                duration: 1000,
                obj: 3,
                pos: 0,
                animating: false
            }, s),
            windowLoaded = false,
            ul = $('ul:first',this),
            li = $('li', ul),
            lif = $('li:first', ul),
            next_bt = $(s.next_bt, this),
            prev_bt = $(s.prev_bt, this)
            hh = 0, ulw = 0;


        console.log('id: '+$(this).attr('id'));

        var make = function() {
            if (s.bt_hide)
                prev_bt.hide();
            var setup = function() {
                windowLoaded = true;
                console.log('--- Slider setup ---');
                console.log('--- Settings ---');
                console.log(s);
                console.log('li.length: '+li.length);
                console.log('ul setup css');
                ul.css({
                    'position': 'relative',
                    'float': 'left',
                    'width': '9999px'
                });
                console.log('li setup css and max height');
                li.each(function() {
                    if (hh < $(this).outerHeight(true))
                        hh = $(this).outerHeight(true);
                    $(this).css({
                        'position': 'relative',
                        'float': 'left'
                    });
                });
                console.log('li max height: '+hh);
                if(s.hs)
                    $(this).height(hh);
            };
            var next = function() {
                if (s.animating || !windowLoaded) {
                    return;
                }
                s.animating = true;
                var stop = 0;
                var st = "$(this)";
                var end = ".animate({left: '-'+twh+'px'}, s.duration, function() { $(this).css('left','');});"
                li.each(function(index) {
                    var twh = 0;
                    if ($(this).css('display') != 'none' && index != li.length-1 && stop == 0) {
                        if (index == (li.length - s.obj - 1 + s.pos) && s.bt_hide) {
                            next_bt.hide();
                        }
                        if (index == li.length - s.obj + s.pos) {
                            s.animating = false;
                            return false;
                        }
                        for (var i = 0; i < s.obj; i++) {
                            st += ".next()";
                            // console.log(st+'.html()');
                            // console.log(eval(st+'.html()'));
                            if(!eval(st+'.html()') && i < s.obj-1) {
                                s.animating = false;
                                return false;
                            }
                        }
                        twh = $(this).outerWidth(true);
                        $(this).animate({left: '-'+twh+'px'}, s.duration, function() {
                            $(this).hide();
                            s.animating = false;
                        });
                        st = "$(this)";
                        for (var i = 0; i < s.obj; i++) {
                            st += ".next()";
                            eval(st+end);
                        }
                        stop = 1;
                        if(s.bt_hide)
                            prev_bt.show();
                    }
                });
                return false;
            };
            var prev = function() {
                if (s.animating || !windowLoaded) {
                    return;
                }
                s.animating = true;
                var lihl = $('li:hidden:last', ul),
                    linhf = $('li:not(:hidden):first', ul);
                if($('li:hidden', ul).length == 0 && !s.bt_hide) {
                    s.animating = false;
                    return false;
                }
                var twh = lihl.outerWidth(true);
                lihl.show();
                lihl.animate({left: '0px'}, 1000, function() {
                    $(this).css('left','');
                    s.animating = false;
                });
                var st = "linhf";
                var end = ".css('left','-'+twh+'px').animate({left: '0px'}, 1000, function() {$(this).css('left','');});"
                for (var i = 0; i < s.obj; i++) {
                    if(i != 0)
                        st += ".next()";
                    // console.log(st+end);
                    eval(st+end);
                }
                if($('li:hidden', ul).length == 0 && s.bt_hide)
                    prev_bt.hide();
                if(s.bt_hide)
                    next_bt.show();
                return false;
            };
            next_bt.click(next);
            prev_bt.click(prev);

            $(window).load(function() { setup(); });
        };
        return this.each(make);
    };
})(jQuery);