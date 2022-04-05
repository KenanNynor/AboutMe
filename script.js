  // // todo: make transition

  // ? On Header-click, open/close the description

  $(document).ready(function() {
      $("#expand1H").click(function() {
          $("#expand1P").toggle(400);
      });

      $("#expand2H").click(function() {
          $("#expand2P").toggle(400);
      });

      $("#expand3H").click(function() {
          $("#expand3P").toggle(400);
      });

      $("#expand4H").click(function() {
          $("#expand4P").toggle(400);
      });

      $("#expand5H").click(function() {
          $("#expand5P").toggle(400);
      });

      $("#expand6H").click(function() {
          $("#expand6P").toggle(400);
      });

      $("#expand7H").click(function() {
          $("#expand7P").toggle(400);
      });

      $("#expand8H").click(function() {
          $("#expand8P").toggle(400);
      });

      $("#expand9H").click(function() {
          $("#expand9P").toggle(400);
      });
  });



  // ? Dark/White Mode Switch

  // // bug: fix that images get inverted
  // // todo: fix bug

  function darkMode() {
      document.getElementById('html').setAttribute("class", "darkmode");
      document.getElementById('invertedImg1').setAttribute("class", "darkmode");
      document.getElementById('invertedImg2').setAttribute("class", "darkmode");
      document.getElementById('invertedImg3').setAttribute("class", "darkmode");
      document.getElementById('invertedImg4').setAttribute("class", "darkmode");
      document.getElementById('invertedImg5').setAttribute("class", "darkmode");
      document.getElementById('invertedImg6').setAttribute("class", "darkmode");
      document.getElementById('invertedImg7').setAttribute("class", "darkmode");
      document.getElementById('invertedImg8').setAttribute("class", "darkmode");
      document.getElementById('invertedImg9').setAttribute("class", "darkmode");
      document.getElementById('invertedImg10').setAttribute("class", "darkmode");
  }

  function whiteMode() {
      document.getElementById('html').setAttribute("class", "whitemode");
      document.getElementById('invertedImg1').setAttribute("class", "whitemode");
      document.getElementById('invertedImg2').setAttribute("class", "whitemode");
      document.getElementById('invertedImg3').setAttribute("class", "whitemode");
      document.getElementById('invertedImg4').setAttribute("class", "whitemode");
      document.getElementById('invertedImg5').setAttribute("class", "whitemode");
      document.getElementById('invertedImg6').setAttribute("class", "whitemode");
      document.getElementById('invertedImg7').setAttribute("class", "whitemode");
      document.getElementById('invertedImg8').setAttribute("class", "whitemode");
      document.getElementById('invertedImg9').setAttribute("class", "whitemode");
      document.getElementById('invertedImg10').setAttribute("class", "whitemode");
  }