$(function() {
  var $squares = $('.square');
  var turn = 0;
  var maxTurns = 9;

  var clearBoard = function() {
    $squares.each(function() {
      this.innerHTML = '';
      $(this).removeClass('x');
      $(this).removeClass('o');
    });
  }

  function isEmpty(el) {                // Check if element is empty
    return !$.trim(el.html());          // Ignore invisible elements
  }

  $squares.on('click', function() {     // Add event handler
    var $this = $(this);                // Store item clicked

    if (isEmpty($this)) {               // If the square is empty
      if (turn % 2 === 0) {             // If remainder of turn divided by 2 is 0
        $this.html('X');                // Mark with X
        $this.addClass('x');
      } else {
        $this.html('O');                // Mark with O
        $this.addClass('o');
      }
      turn += 1;                        // Add one to turn
      endGame();
    }
  });

  $('#reset').on('click', function() {  // When user clicks reset button
    clearBoard();
  });

  function endGame() {
    if ( winner() ) {
      setTimeout(function() {
        swal({
          title: "Victory!",
          text:  "You win.",
          type:  "success"
        });
      },1000);
    } else if (turn === maxTurns) {
      setTimeout(function() {
        swal({
          title: "Draw!",
          text:  "You\'ve tied.",
          type:  "warning"
        });
      },1000);
    }
  }

  function winner() {
    for (var i = 0; i < $squares.length; i += 3) {
      if ( $squares.eq(i).hasClass('x') && $squares.eq(i + 1).hasClass('x') && $squares.eq(i + 2).hasClass('x') ||
           $squares.eq(i).hasClass('o') && $squares.eq(i + 1).hasClass('o') && $squares.eq(i + 2).hasClass('o')  ) {
        return true;
      }
    }
    for (var i = 0; i < $squares.length; i++) {
      if ( $squares.eq(i).hasClass('x') && $squares.eq(i + 3).hasClass('x') && $squares.eq(i + 6).hasClass('x') ||
           $squares.eq(i).hasClass('o') && $squares.eq(i + 3).hasClass('o') && $squares.eq(i + 6).hasClass('o') ) {
        return true;
      }
    }
    for (var i = 0; i < 2; i += 2) {
      if ( $squares.eq(i).hasClass('x') && $squares.eq(i + 4).hasClass('x') && $squares.eq(i + 8).hasClass('x') ||
           $squares.eq(i).hasClass('o') && $squares.eq(i + 4).hasClass('o') && $squares.eq(i + 8).hasClass('o') ) {
        return true;
      } else if ( $squares.eq(i + 2).hasClass('x') && $squares.eq(i + 4).hasClass('x') && $squares.eq(i + 6).hasClass('x') ||
                  $squares.eq(i + 2).hasClass('o') && $squares.eq(i + 4).hasClass('o') && $squares.eq(i + 6).hasClass('o') ) {
        return true;
      }
    }
  };
});
