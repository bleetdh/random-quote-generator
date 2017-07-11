$(document).ready(function () {
  var $button = $('button')
  var $h2 = $('h2')
  $button.on('click', function () {
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=<required>', // The URL to the API. You can get this in the API page of the API you intend to consume
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success: function (data) {
        // console.dir((data.source))
        $h2.html(data.quote)
      },
      error: function (err) {
        alert(err)
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-Mashape-Authorization', 'mgl7sUmm66mshQJcomgAOWCDDj93p19i5kHjsnEWnpW8jWcUtM') // Enter here your Mashape key
      }
    })
  })
})
