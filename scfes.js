// Generated by CoffeeScript 1.7.1
(function() {
  window.Lovelive = (function() {
    function Lovelive() {
      this.buttons = {
        b9: $('b9'),
        b8: $('b8'),
        b7: $('b7'),
        b6: $('b6'),
        b5: $('b5'),
        b4: $('b4'),
        b3: $('b3'),
        b2: $('b2'),
        b1: $('b1')
      };
    }

    Lovelive.prototype.pushonkey = function() {
      if (e.keyCode === '65') {
        return b1.addClass('bg-red');
      }
    };

    return Lovelive;

  })();

}).call(this);
