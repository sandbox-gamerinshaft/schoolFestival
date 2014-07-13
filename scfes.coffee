class window.Lovelive
  constructor: ->
    @buttons =
      b9 : $('b9'),
      b8 : $('b8'),
      b7 : $('b7'),
      b6 : $('b6'),
      b5 : $('b5'),
      b4 : $('b4'),
      b3 : $('b3'),
      b2 : $('b2'),
      b1 : $('b1')

  pushonkey: (inputkey)->
    switch inputkey
    when '65'
      b1.addClass 'bg-red'



