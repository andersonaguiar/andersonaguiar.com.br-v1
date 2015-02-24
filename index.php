<?php
  $urlBase = 'http://localhost/projetos/Pessoal/andersonaguiar.com.br/';
?>
<!DOCTYPE html>
<!--[if !IE]> 
<html lang="pt-BR">    
<![endif]-->
<!--[if IE]> 
<html class="ie" lang="pt-BR">    
<![endif]-->
  <head>
    <?php
        include('pages/_tiles/head.php');
    ?>
  </head>
  <body>
    <div id="overlay"></div>
    <div id="page" class="container_12">
      <?php
        switch ($_GET['page']) {
          case 'capa':
            include('pages/capa.php');
          break;
        }
      ?>
    </div>

      <?php
        include('pages/_tiles/rodape.php');
      ?>

  </body>
</html>
