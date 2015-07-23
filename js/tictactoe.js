$(function() {
  var $squares = $('.square');
  var turn = 0;

  function isEmpty(el) {              // Check if element is empty
    return !$.trim(el.html());         // Ignore invisible elements
  }

  $squares.on('click', function() {   // Add event handler
    var $this = $(this);              // Store item clicked

    if (isEmpty($this)) {             // If the square is empty
      if (turn % 2 === 0) {           // If remainder of turn divided by 2 is 0
        $this.html('X');              // Mark with X
      } else {
        $this.html('O');              // Mark with O
      }
      turn += 1;                      // Add one to turn
    }

  });

});
