var homeIndex = {

    toggle: function(target) {
        //$('.atributte .description').toggleSlide();
        $('[data-id="'+target+'"]').slideDown();
    },

    ready: function() {
        $('.box').click(function(e) {
            if($(this).attr('data-target')) {
                var target = $(this).attr('data-target');
                homeIndex.toggle(target);
            }
        });
    }
}

$(document).ready(homeIndex.ready)