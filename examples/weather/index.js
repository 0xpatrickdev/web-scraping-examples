const Nightmare = require('nightmare');

const nightmare = new Nightmare()

nightmare
  .goto('http://weather.com')
  .wait('.temperature')
  .evaluate(function(){
    return document.querySelector('.temperature').innerText;
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.log(error)
  }); 