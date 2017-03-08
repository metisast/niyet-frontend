// Advanced collapse script

    $(function () {

        var collapseTrigger = $('.collapse-trigger');

        collapseTrigger.click(function () {
            var elId = $(this).data('collapse');
            var collapseOpen = $(this).data('collapse-open');

            if(collapseOpen){
                $(elId).slideUp('slow');
                $(this).data('collapse-open', false);
                $(this).find('svg').velocity({
                    rotateZ: '+=180'
                }, { duration: 'fast', easing: "linear"});

            }else{
                $(elId).slideDown('slow');
                $(this).data('collapse-open', true);
                $(this).find('svg').velocity({
                    rotateZ: '-=180'
                }, { duration: 'fast', easing: "linear"});
            }
        });

    });