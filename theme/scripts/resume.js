resume = function() {
};

resume.prototype.init = function() {

    var topMenu = $(".navigation"),
        topMenuHeight = topMenu.outerHeight()+15,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    $(window).scroll(function(){
        var fromTop = $(this).scrollTop()+topMenuHeight;

        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });

        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#"+id+"]").parent().addClass("active");
    });

    $('.navigation li a').on('click', function(e){

        e.preventDefault(); // prevent link click if necessary?

        var $thisLi = $(this).parent('li');
        var $ul = $thisLi.parent('ul');

        if (!$thisLi.hasClass('active'))
        {
            $ul.find('li.active').removeClass('active');
            $thisLi.addClass('active');
            var $title = $(this).attr('href');
            $(document).scrollTop( $($title).offset().top );
        }

    })
};