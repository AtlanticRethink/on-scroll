

var $findme = $('.container');

function Scrolled() {
    $findme.each(function() {
        var $section = $(this),
            findmeOffset = $section.offset(),
            findmeTop = findmeOffset.top,
            findmeBottom = $section.height() + findmeTop,
            scrollTop = $(document).scrollTop(),
            visibleBottom = window.innerHeight,
            prevVisible = $section.prop('_visible');

        if ((findmeTop > scrollTop + visibleBottom) ||
            findmeBottom < scrollTop) {
            visible = false;
        } else visible = true;

        if (!prevVisible && visible) {
            $findme.shuffleLetters();
        }
        $section.prop('_visible', visible);
    });
}

function Setup() {
    var $top = $('#top'),
        $bottom = $('#bottom');

    $top.height(500);
    $bottom.height(500);

    $(window).scroll(function() {
        Scrolled();
    });
}

$(document).ready(function() {
    Setup();

});
