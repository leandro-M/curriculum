var homeIndex = {

    openMenu: function() {
       $('.right').toggleClass('off');

       $('.overlay').toggleClass('off');
    },

    closeMenu: function() {
       homeIndex.openMenu();
    },

    ready: function() {
        $(".open-menu").click(homeIndex.openMenu);

        $('.overlay').click(homeIndex.closeMenu);
    }
}

$(document).ready(homeIndex.ready)