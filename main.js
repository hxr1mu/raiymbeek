$(document).ready(function() {

    $('.accordion-header').click(function() {

        var content = $(this).next('.accordion-content');
        var innerContent = content.find('.accordion-content-inner');
        

        $('.accordion-content').not(content).each(function() {
            $(this).css('height', '0');
        });
        

        if (content.height() === 0) {

            content.css('height', 'auto');
            var fullHeight = content.height();
            content.css('height', '0');
            
            // Анимируем до полной высоты
            content.css('height', fullHeight + 'px');
            

            setTimeout(function() {
                content.css('height', 'auto');
            }, 300);
        } else {

            content.css('height', content.height() + 'px');

            content.css('height', '0');
        }
        

        $(this).toggleClass('active');
    });
    

    $('.open-popup-btn').click(function() {
        $('.popup-overlay').fadeIn();
    });
    

    $('.close-popup').click(function() {
        $('.popup-overlay').fadeOut();
    });
    

    $('.popup-overlay').click(function(e) {
        if ($(e.target).hasClass('popup-overlay')) {
            $('.popup-overlay').fadeOut();
        }
    });
    

    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $('.popup-overlay').fadeOut();
        }
    });
});