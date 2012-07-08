<!doctype html>
<!--[if !IE]> 
  <html lang="pt-BR">    
<![endif]-->
<!--[if IE]> 
  <html class="ie" lang="pt-BR">    
<![endif]-->
<head>
    <title>Anderson Aguiar - Web Developer</title>
    <meta charset="iso-8859-1" />
    <meta name="author" content="Anderson Aguiar" />
    <meta name="keywords" content="anderson, anderson aguiar, freelance, freelancer, informatica, webdesign, programacao, senai, senai tubarão, tubarão, sistemas de informacao" />
    <meta name="description" content="Web Developer, HTML5, CSS3, SASS, jQuery, PHP 5.3+, ER, SEO, PostgreSQL. Cel: 55 48 9949-2907 | E-mail: andersonaguiarrr@gmail.com" />
    <!--[if IE]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>        
    <![endif]-->

    <?php
    /*
      <script type="text/javascript"> // <![CDATA[
      if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
      document.location = "http://m.andersonaguiar.com";
      } // ]]>
      </script>
     */
    ?>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="js/modernizr-1.6.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <link href="http://fonts.googleapis.com/css?family=Anton&subset=latin" rel="stylesheet" type="text/css">
</head>
<body>
    <div id="page" class="max">
        <header>
            <hgroup>
                <div class="info">
                    <h1 class="fecharProjetos">Anderson Aguiar</h1>
                    <h2 class="fecharProjetos">Web Developer</h2>
                </div>
                <div class="img-anderson">
                    <img src="img/andersonaguiar.jpg" width="100" alt="Anderson Aguiar - Web Developer"  class="fecharProjetos" />
                </div>
            </hgroup>
        </header>

        <aside id="social">
            <ul>
                <li><a class="social-facebook" target="_blank" href="http://www.facebook.com/andersonaguiarrr"><strong>Facebook</strong></a></li>
                <li><a class="social-twitter" target="_blank" href="http://twitter.com/andersonaguiar"><strong>Twitter</strong></a></li>
                <li><a class="social-github" target="_blank" href="http://github.com/andersonaguiar"><strong>Github</strong></a></li>
                <li><a class="social-skype" href="skype:and-aguiar?add"><strong>Skype: and-aguiar</strong></a></li>
                <?php /* <li><a class="social-gtalk" href="skype:and-aguiar?add"><strong>Skype: and-aguiar</strong></a></li> */ ?>
                <li><a class="social-msn" onlick="javascript:void(0);" href="MSN:and-aguiar@hotmail.com"><strong>and-aguiar@hotmail.com</strong></a></li> 
                <li><a class="social-slideshare" target="_blank" href="http://www.slideshare.net/andersonagr"><strong>Slideshare</strong></a></li>
                <li><a class="social-linkedin" target="_blank" href="http://www.linkedin.com/profile/view?id=58701821"><strong>Linkedin</strong></a></li>
                <li><a class="social-googleplus" target="_blank" href="https://plus.google.com/u/0/110862934856408781799"><strong>Google+</strong></a></li>

            </ul>
        </aside>

        <address>
            <p id="tel">+55 48 9949-2907</p>
            <p id="email" class="cinza-claro">andersonaguiarrr@gmail.com</p>
        </address>

        <nav>
            <h3 id="recent">trabalhos</h3>
            <ul id="projects">
                <li class="alpha-ie"><a <?php /* target="_blank" */ ?> href="">visualizar &lt;</a></li>
            </ul>
        </nav>

        <section class="about">
            <h3 id="aboutme">sobre</h3>
            <ul>
                <li>&gt; 23 anos</li>
                <li>&gt; nascido em Tubarão/SC</li>
                <li>&gt; <a target="_blank" href="http://www.admt.com.br">Web Developer at ADMT</a></li>
            </ul>
        </section>


        <footer></footer>

    </div>
    <section id="box-projetos" style="display: none;"></section>

    <!-- Salve a web, por favor -->
    <script defer src="http://sawpf.com/1.0.js"></script>

    <?php
    if ($_SERVER['HTTP_HOST'] != 'localhost') {
        ?>

        <script type="text/javascript">

            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-30717579-1']);
            _gaq.push(['_trackPageview']);

            (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();

        </script>    

        <?php
    }
    ?>
    <script type="text/javascript" src="js/default.js"></script>
    <script type="text/javascript" src="http://download.skype.com/share/skypebuttons/js/skypeCheck.js"></script>
</body>

</html>
