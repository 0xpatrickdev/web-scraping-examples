const Nightmare = require('nightmare');
const fs = require('fs');

const nightmare = new Nightmare()

const city = 'chicago';

const url = 'https://www.google.com/webhp?#q=' + city + '%20points%20of%20interest';

nightmare
  .goto(url)
  .wait( '._Ajf')
  .evaluate(function(){
    var items = Array.from(document.querySelectorAll('.rl_item._pkf'));
    return items.map(item => item.innerText)
    /*
    var result = items.map(function(item, index) { 
      return {
        'index': index,
        'title': item.querySelector('.title').innerText,
        'desc': (item.querySelector('._Ajf')) ? item.querySelector('._Ajf').innerText : 'n/a'
      }
    });
    return result */
  })
  .end()
  .then(function (results) {
    fs.writeFile('./results.json', JSON.stringify(results, null, '\t'), (err) => {
      if (err) throw err;
      console.log(results.length + ' places found.');
    });
  })
  .catch(function (error) {
    console.log(error)
}); 


// getting "Cannot read property of 'innerText' of null" for some reason on a lot of cities.
// consider using str.replace on '/n' 