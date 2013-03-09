
jQuery().ready(function () {

    $('#contenido').hide();

    $("#avril_lavigne_player").jPlayer({
        ready: function (event) {
            $(this).jPlayer("setMedia", {
                mp3: "/Content/Music/avril_lavigne.mp3"
            });
        },
        swfPath: "/Content/Music",
        supplied: "mp3",
        ended: function () { $(this).jPlayer("play"); }
    });

    $("#david_guetta_player").jPlayer({
        ready: function (event) {
            $(this).jPlayer("setMedia", {
                mp3: "/Content/Music/david_guetta.mp3"
            }).jPlayer("play");
        },
        swfPath: "/Content/Music",
        supplied: "mp3",
        ended: function () { $(this).jPlayer("play"); }
    });

    $("#dj_tiesto_player").jPlayer({
        ready: function (event) {
            $(this).jPlayer("setMedia", {
                mp3: "/Content/Music/dj_tiesto.mp3"
            });
        },
        swfPath: "/Content/Music",
        supplied: "mp3",
        ended: function () { $(this).jPlayer("play"); }
    });

    $("#hoobastank_player").jPlayer({
        ready: function (event) {
            $(this).jPlayer("setMedia", {
                mp3: "/Content/Music/hoobastank.mp3"
            });
        },
        swfPath: "/Content/Music",
        supplied: "mp3",
        ended: function () { $(this).jPlayer("play"); }
    });

    $('#eventos_sociales').click(function () {
        $("#avril_lavigne_player").jPlayer("play");
        $("#hoobastank_player").jPlayer("pause");
        $("#dj_tiesto_player").jPlayer("pause");
        $("#david_guetta_player").jPlayer("pause");

    });

    $('#eventos_infantiles').click(function () {
        $("#avril_lavigne_player").jPlayer("pause");
        $("#hoobastank_player").jPlayer("play");
        $("#dj_tiesto_player").jPlayer("pause");
        $("#david_guetta_player").jPlayer("pause");
    });

    $('#eventos_corporativos').click(function () {
        $("#avril_lavigne_player").jPlayer("pause");
        $("#hoobastank_player").jPlayer("pause");
        $("#dj_tiesto_player").jPlayer("play");
        $("#david_guetta_player").jPlayer("pause");
    });

    $('#servicios').click(function () {
        $("#avril_lavigne_player").jPlayer("pause");
        $("#hoobastank_player").jPlayer("pause");
        $("#dj_tiesto_player").jPlayer("pause");
        $("#david_guetta_player").jPlayer("play");
    });


    $('#productos').click(function () {
        $("#avril_lavigne_player").jPlayer("pause");
        $("#hoobastank_player").jPlayer("pause");
        $("#dj_tiesto_player").jPlayer("pause");
        $("#david_guetta_player").jPlayer("play");
    });


    $('#inicio').click(function () {
        $('#inicio').hide();
        $('#contenido').show();

        $('#flipbox').hide();
        $('#sliderCasamiento').nivoSlider({ animSpeed: 800, pauseTime: 5000 });
        $('#slider15años').nivoSlider({ animSpeed: 800, pauseTime: 5000 });
        $('#sliderMitzva').nivoSlider({ animSpeed: 800, pauseTime: 5000 });
        $('#sliderCumpleaños').nivoSlider({ animSpeed: 800, pauseTime: 5000 });
        $('#sliderBabyShower').nivoSlider({ animSpeed: 800, pauseTime: 5000 });
        $('#sliderInauguraciones').nivoSlider({ animSpeed: 800, pauseTime: 5000 });
        $('#sliderDespedidas').nivoSlider({ animSpeed: 800, pauseTime: 5000 });
        $('#sliderAniversarios').nivoSlider({ animSpeed: 800, pauseTime: 5000 });
        $('#sliderLetter').nivoSlider({ animSpeed: 800, pauseTime: 5000 });

        resetSliders();
        $('.nivo-controlNav').hide();

    });

    // second simple accordion with special markup
    jQuery('#navigation').accordion({
        active: false,
        header: '.text_menu_head',
        navigation: true,
        event: 'click'
    });



    $('#header_box_right').click(function () {

        $('#flipbox').hide();
        resetSliders();
        $('#sliderLetter').show(300);
    });



    $('#15años').click(function () {

        resetSliders();

        $('#slider15años').show(300);
        $('#slider15años').data('nivoslider').start();
        $('#flipbox').show();

        if ($.browser.msie && $.browser.version < "9.0") {
            $('#flipbox .flipContent').remove();
            $('#flipbox').load("/Content/flipbox/15años.html");
        }
        else {
            $("#flipbox").flip({
                direction: 'rl',
                content: $("<div>").load("/Content/flipbox/15años.html")
            });
        }

    });

    $('#casamientos').click(function () {

        resetSliders();

        $('#sliderCasamiento').show(300);
        $('#sliderCasamiento').data('nivoslider').start();
        $('#flipbox').show();

        if ($.browser.msie && $.browser.version < "9.0") {
            $('#flipbox .flipContent').remove();
            $('#flipbox').load("/Content/flipbox/Casamientos.html");
        }
        else {
            $("#flipbox").flip({
                direction: 'rl',
                content: $("<div>").load("/Content/flipbox/Casamientos.html")
            });
        }
    });

    $('#mitzva').click(function () {

        resetSliders();

        $('#sliderMitzva').show(300);
        $('#sliderMitzva').data('nivoslider').start();
        $('#flipbox').show();

        if ($.browser.msie && $.browser.version < "9.0") {
            $('#flipbox .flipContent').remove();
            $('#flipbox').load("/Content/flipbox/Mitzva.html");
        }
        else {
            $("#flipbox").flip({
                direction: 'lr',
                content: $("<div>").load("/Content/flipbox/Mitzva.html")
            });
        }

    });

    $('#cumpleaños').click(function () {

        resetSliders();

        $('#sliderCumpleaños').show(300);
        $('#sliderCumpleaños').data('nivoslider').start();
        $('#flipbox').show();
        if ($.browser.msie && $.browser.version < "9.0") {
            $('#flipbox .flipContent').remove();
            $('#flipbox').load("/Content/flipbox/Cumpleaños.html");
        }
        else {
            $("#flipbox").flip({
                direction: 'rl',
                content: $("<div>").load("/Content/flipbox/Cumpleaños.html")
            });
        }
    });

    $('#babyshower').click(function () {

        resetSliders();
        $('#sliderBabyShower').show(300);
        $('#sliderBabyShower').data('nivoslider').start();
        $('#flipbox').show();

        if ($.browser.msie && $.browser.version < "9.0") {
            $('#flipbox .flipContent').remove();
            $('#flipbox').load("/Content/flipbox/BabyShower.html");
        }
        else {
            $("#flipbox").flip({
                direction: 'rl',
                content: $("<div>").load("/Content/flipbox/BabyShower.html")
            });
        }
    });

    $('#inauguraciones').click(function () {

        resetSliders();
        $('#sliderInauguraciones').show(300);
        $('#sliderInauguraciones').data('nivoslider').start();
        $('#flipbox').show();

        if ($.browser.msie && $.browser.version < "9.0") {
            $('#flipbox .flipContent').remove();
            $('#flipbox').load("/Content/flipbox/Inauguraciones.html");
        }
        else {
            $("#flipbox").flip({
                direction: 'rl',
                content: $("<div>").load("/Content/flipbox/Inauguraciones.html")
            });
        }
    });

    $('#aniversarios').click(function () {

        resetSliders();
        $('#sliderAniversarios').show(300);
        $('#sliderAniversarios').data('nivoslider').start();
        $('#flipbox').show();

        if ($.browser.msie && $.browser.version < "9.0") {
            $('#flipbox .flipContent').remove();
            $('#flipbox').load("/Content/flipbox/Aniversarios.html");
        }
        else {
            $("#flipbox").flip({
                direction: 'rl',
                content: $("<div>").load("/Content/flipbox/Aniversarios.html")
            });
        }
    });


    $('#despedidas').click(function () {

        resetSliders();
        $('#sliderDespedidas').show(300);
        $('#sliderDespedidas').data('nivoslider').start();
        $('#flipbox').show();

        if ($.browser.msie && $.browser.version < "9.0") {
            $('#flipbox .flipContent').remove();
            $('#flipbox').load("/Content/flipbox/Despedidas.html");
        }
        else {
            $("#flipbox").flip({
                direction: 'rl',
                content: $("<div>").load("/Content/flipbox/Despedidas.html")
            });
        }
    });


    $('#servicios').click(function () {

        resetSliders();
        $('#flipbox').show();

        if ($.browser.msie && $.browser.version < "9.0") {
            $('#flipbox .flipContent').remove();
            $('#flipbox').load("/Content/flipbox/Servicios.html");
        }
        else {
            $('#flipbox').show();
            $("#flipbox").flip({
                direction: 'rl',
                content: $("<div>").load("/Content/flipbox/Servicios.html")
            });
        }
    });

    $('#productos').click(function () {

        resetSliders();
        $('#flipbox').show();

        if ($.browser.msie && $.browser.version < "9.0") {
            $('#flipbox .flipContent').remove();
            $('#flipbox').load("/Content/flipbox/Productos.html");
        }
        else {
            $("#flipbox").flip({
                direction: 'rl',
                content: $("<div>").load("/Content/flipbox/Productos.html")
            });
        }
    });

    function resetSliders() {

        $('#sliderCasamiento').hide();
        $('#sliderCasamiento').data('nivoslider').stop();
        $('#slider15años').hide();
        $('#slider15años').data('nivoslider').stop();
        $('#sliderMitzva').data('nivoslider').stop();
        $('#sliderMitzva').hide();
        $('#sliderCumpleaños').data('nivoslider').stop();
        $('#sliderCumpleaños').hide();
        $('#sliderBabyShower').data('nivoslider').stop();
        $('#sliderBabyShower').hide();
        $('#sliderInauguraciones').data('nivoslider').stop();
        $('#sliderInauguraciones').hide();
        $('#sliderDespedidas').data('nivoslider').stop();
        $('#sliderDespedidas').hide();
        $('#sliderAniversarios').data('nivoslider').stop();
        $('#sliderAniversarios').hide();
        $('#sliderLetter').data('nivoslider').stop();
        $('#sliderLetter').hide();
    }




});