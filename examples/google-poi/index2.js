const Nightmare = require('nightmare');
const fs = require('fs');

const nightmare = new Nightmare()

const url = 'http://www.google.com/';

console.time('getThings');

nightmare
  .goto(url)
  .type('input[title="Search"]', 'thailand points of interest')
  .click('input[value="Google Search"]')
  .wait('.rl_item')
  .evaluate(function(){
    var arr = Array.from(document.querySelectorAll('.title'));
    return arr.map(item => item.innerText)
  })
  .end()
  .then(function (results) {
    fs.writeFile('./results.json', JSON.stringify(results, null, '\t'), (err) => {
      if (err) throw err;
      console.log(results.length + ' places found.');
      console.timeEnd('getThings');
    });
  })
  .catch(function (error) {
    console.log(error)
  }); 


  // takes 3270ms to complete