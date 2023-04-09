// document.getElementsByClassName('grid')[0].onwheel = function(event) {
//     console.log(event.deltaY)
//     document.getElementsByClassName('no-scrollbar')[0].scrollTop +=  event.deltaY;
//   }


  $(function() {
    var $target = $('#fun');
    $(".grid").mousewheel(function(event, delta) {
      console.log(delta)
      $target.scrollTop($target.scrollTop() - (delta * 300));
      event.preventDefault();
   });
});

