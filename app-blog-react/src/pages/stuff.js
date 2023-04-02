document.getElementsByClassName('grid')[0].onwheel = function(event) {
    console.log("working")
    document.getElementsByClassName('no-scrollbar')[0].scrollTop += 10 * event.deltaY;
  }