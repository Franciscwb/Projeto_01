$(function(){

    $('nav.mobile').click(function(){
        var listaMenu = $('nav.mobile ul');
    
        if(listaMenu.is(':hidden') == true){
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-bars');
            icone.addClass('fa-times');
            listaMenu.slideToggle();
        }
        else{
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-times');
            icone.addClass('fa-bars');
            listaMenu.slideToggle();
        }
    });


    if($('target').length > 0){
        var elemento = '#'+$('target').attr('target');
        var divScroll = $(elemento).offset().top;
        $('html,body').animate({scrollTop:divScroll},2000);
    }

    carregarDinamico();
    function carregarDinamico(){
        $('[realtime]').click(function(){
            var pagina = $(this).attr('realtime');
            $('.container-principal').hide();
            $('.container-principal').load(include_path+'pages/'+pagina+'.php');

            setTimeout(function(){
                initialize();
                addMarker(-25.441105,-49.276855,'',"Minha Localização!",undefined,false);
            },1000);

            $('.container-principal').fadeIn(1000);
            window.history.pushState('','',contato);

            return false;
        })
    }

})