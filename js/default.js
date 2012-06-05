$(window).load(function(){
    $("#page").css('height',$(window).height()+"px");
//$('#projects li a').trigger('click');
});
  
$(window).resize(function(){
    $("#page").css('height',$(window).height()+"px");
    redimensionaProjetos();
});

function redimensionaProjetos(){
    $('#box-projetos').animate({
        width: ($(window).width()-300)+"px"
    }, 500, function(){
        redimensionaProjetos();
    }).fadeIn();
}

(function($) {
  
    $('.fecharProjetos').live('click',function(e){
        e.preventDefault();
        if ($('#page').attr('class') == 'max') {
            return false;
        }
    
        $('#box-projetos').fadeOut('fast',function(){
            $(this).html('');
            $('#page').animate({
            width: "100%"
            }, 500, function(){
                $('h1').animate({
                    fontSize: "66px",
                    opacity: 1
                }, tempo);

                $('h2').animate({
                    fontSize: "45px",
                    opacity: 1
                }, tempo);
                $('#page').attr('class','max');
                redimensionaProjetos();
                $('#projects').closest('nav').show();
            });
        });
    
    });
    
    var images = new Array();
    images[0] = {
        path: 'img/projects/conhecimentoamais.jpg', 
        nome: 'Conhecimento a mais'
    };
    images[1] = {
        path: 'img/projects/maiscompetitividade.jpg', 
        nome: 'SENAI + Competitividade'
    };
    images[2] = {
        path: 'img/projects/gestaoti.jpg', 
        nome: 'SENAI - Gestão TI'
    };
    images[3] = {
        path: 'img/projects/johnpetter.jpg', 
        nome: 'Johnpetter'
    };
    images[4] = {
        path: 'img/projects/tecmesul.jpg', 
        nome: 'Tecmesul'
    };
    images[5] = {
        path: 'img/projects/tecmesul-curriculo.jpg', 
        nome: 'Tecmesul - Sistema para cadastro de currículo online'
    };
    images[6] = {
        path: 'img/projects/ilhadotabuleiro.jpg', 
        nome: 'Ilha do Tabuleiro'
    };
    images[7] = {
        path: 'img/projects/anunes.jpg', 
        nome: 'Postos ANunes'
    };
    images[8] = {
        path: 'img/projects/imaginariumformaturas.jpg', 
        nome: 'Imaginarium Formaturas'
    };
    images[9] = {
        path: 'img/projects/senai-educacao-em-movimento.jpg', 
        nome: 'SENAI/SC - Educação em Movimento'
    };
    images[10] = {
        path: 'img/projects/a-escola-que-queremos.png', 
        nome: 'Blog - A escola que queremos'
    };
    
    

    var i = 1;
    var j = 1;
  
    var aboutSize = 5;
    var workSize = 14;
  
    var startDelay = 100;
    var tempo = 700;
  
    $('h2').animate({
        marginTop: "0px",
        opacity: 1
    }, 1000);
  
    $('img').animate({
        opacity: 1
    }, 5000);
  
    $('h1').animate({
        marginTop: "0px",
        opacity: 1
    }, 1000);
  
    $('#projects li a').live('click',function(e){
        e.preventDefault();
    
        $('h1').animate({
            fontSize: "32px",
            opacity: 1
        }, tempo);
    
        $('h2').animate({
            fontSize: "17px",
            opacity: 1
        }, tempo);

        $('hgroup div').animate({
            opacity: 1
        }, tempo);
    
        $('#page').animate({
            width: "290px"
        }, 100, function(){
            $('#page').attr('class','min');
            //redimensionaProjetos();
            $('#projects').closest('nav').hide();
            
            $('#box-projetos').append("<h3>trabalhos <a href=\"#\" title=\"Fechar trabalhos\" class=\"fecharProjetos\">[x]</a></h3>");
            
            var htmlProjeto = '';
        
            // loop through images
            $(images).each(function(index,projeto){
                
                htmlProjeto = '<div id="projeto'+index+'" class="projeto"><h4><span>'+projeto.nome+'</span></h4><div class="info"></div></div>';
                
                $('#box-projetos').append(htmlProjeto);
                var $divProjeto = $("div#projeto"+index);
                $divProjeto.addClass('loading');
               
                // new image
                var img = new Image();
                // load image
                $(img).load(function () {
                    $(this).css('display','none'); 
                    $divProjeto.removeClass('loading').append(this);
                    $(this).fadeIn();
                }).error(function () {
                    $divProjeto.remove();
                }).attr('src', projeto.path).css('width', '100%').attr('alt', projeto.nome);
            });

        });
    
        redimensionaProjetos();
       
    
    });
    
    $('.projeto img').live('click',function(e){
        $div = $(this).closest('div');
        var altura = ($div.height() < 300) ? $(this).height()+40 : 200;
        $div.stop(false,false).animate({
            height: (altura)+"px"
        }, 2000,function(){
            redimensionaProjetos();
        });
    });
  
    startAnim();
  
    function startAnim(){
    
        var timeSocial = 0;
        var velocidadeSocial = 0;
        $("#social ul li").each(function(){
            timeSocial          += 300;
            velocidadeSocial    += 150;
            $(this).delay(startDelay + velocidadeSocial).animate({
                opacity: 1
            }, timeSocial);
        });
    
        $('#tel').delay(startDelay + 450).animate({
            opacity: 1
        }, 300, function() {
      
            $('#email').animate({
                opacity: 1
            }, 300);
        });
    
        $('#aboutme').delay(startDelay + 2800).animate({
            opacity: 1
        }, 300, function() {
            aboutAnim();
        });
  
        $('#recent').delay(startDelay + 1000).animate({
            opacity: 1
        }, 300, function() {
            workAnim();
        });
    }
  
    function aboutAnim(){
    
        $('section ul li:nth-child(' + i + ')').animate({
            marginLeft: "30px",
            opacity: 1
        }, 250, function() {
            if (i != aboutSize) {
                i++;
                aboutAnim();
            }
        });

    }
  
    function workAnim(){
    
        $('nav ul li:nth-child(' + j + ')').animate({
            marginRight: "30px",
            opacity: 1
        }, 250, function() {
            if (j != workSize) {
                j++;
                workAnim();
            }
            else {
                onFinishWorkAnim();
            }

        });
    
    }
  
  
	
})(jQuery);

(function($) {
	
    $("#social ul li").hover(function() { // Mouse over
        $(this)
        .stop().fadeTo(500, 1)
        .siblings().stop().fadeTo(500, 0.2);
			
        $("a strong", this)
        .stop()
        .delay(200)
        .animate({
            opacity: 1,
            top: "-10px"
        }, 300);
		
    }, function() { // Mouse out
        $(this)
        .stop().fadeTo(500, 1)
        .siblings().stop().fadeTo(500, 1);
			
        $("a strong", this)
        .stop()
        .animate({
            opacity: 0,
            top: "-1px"
        }, 300);
    });
	
})(jQuery);