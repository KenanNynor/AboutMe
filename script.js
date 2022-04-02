  // todo: make transition

  // ? On Header-click, open the description

  function change_css1() {
      document.getElementById('expand1').setAttribute("class", "opened");
  }

  function change_css2() {
      document.getElementById('expand2').setAttribute("class", "opened");
  }

  function change_css3() {
      document.getElementById('expand3').setAttribute("class", "opened");
  }

  function change_css4() {
      document.getElementById('expand4').setAttribute("class", "opened");
  }

  function change_css5() {
      document.getElementById('expand5').setAttribute("class", "opened");
  }

  function change_css6() {
      document.getElementById('expand6').setAttribute("class", "opened");
  }

  function change_css7() {
      document.getElementById('expand7').setAttribute("class", "opened");
  }

  function change_css8() {
      document.getElementById('expand8').setAttribute("class", "opened");
  }

  function change_css9() {
      document.getElementById('expand9').setAttribute("class", "opened");
  }

  // ? On Description-click, close the description

  function css_change1() {
      document.getElementById('expand1').setAttribute("class", "closed");
  }

  function css_change2() {
      document.getElementById('expand2').setAttribute("class", "closed");
  }

  function css_change3() {
      document.getElementById('expand3').setAttribute("class", "closed");
  }

  function css_change4() {
      document.getElementById('expand4').setAttribute("class", "closed");
  }

  function css_change5() {
      document.getElementById('expand5').setAttribute("class", "closed");
  }

  function css_change6() {
      document.getElementById('expand6').setAttribute("class", "closed");
  }

  function css_change7() {
      document.getElementById('expand7').setAttribute("class", "closed");
  }

  function css_change8() {
      document.getElementById('expand8').setAttribute("class", "closed");
  }

  function css_change9() {

      document.getElementById('expand9').setAttribute("class", "closed");
  }

  // ? Dark/White Mode Switch

  // bug: fix that images get inverted

  // todo: fix bug


  function darkMode() {
      document.getElementById('html').setAttribute("class", "darkmode");
      document.getElementsByClassName('whitemodeImg').setAttribute("class", "darkmode");
  }

  function whiteMode() {
      document.getElementById('html').setAttribute("class", "whitemode");
      document.getElementsByClassName('whitemodeImg').setAttribute("class", "darkmode");
  }