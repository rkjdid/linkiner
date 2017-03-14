setInterval(function() {
  var connectBtns = document.getElementsByClassName("mn-person-card__person-btn-ext");
  if connectBtns.length < 10 {
    // scroll bottom to trigger ajax call filling the list
    window.scrollTo(0, document.body.scrollHeight);
  }
  for (var i = 0; i<connectBtns.length; i++) {
    console.log(connectBtns[i].parentNode.parentNode.getElementsByClassName("mn-person-info__name")[0].innerText);
    connectBtns[i].click();
  }
}, 1000);

