      <script type="text/javascript" src="js/default.js"></script>
      <script src="js/adapt/adapt.min.js"></script>
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