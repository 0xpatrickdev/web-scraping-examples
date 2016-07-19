const Nightmare = require('nightmare');
const fs = require('fs');
const nightmare = new Nightmare({show: false})

const evId = '9459051';
const loginUrl = 'https://www.stubhub.com/my/profile/';
const eventUrl = 'https://sell.stubhub.com/simweb/sim/services/priceanalysis?eventId=' + evId;

nightmare
  .goto(loginUrl)
  .wait('#signin-form')
  .type('input[name="email"]', email)
  .type('input[name="password"]', password)
  .click('button[class="auth-button sign-in"]')
  .wait('div #listingsSection')
  .goto(eventUrl)
  .wait(2900)
  .evaluate(function(){
    var arr = Array.from(document.querySelectorAll('td'));
    return arr.map(item => item.innerText)
  })
  .end()
  .then(function (results) {
    fs.writeFile('./results.json', JSON.stringify(results, null, '\t'), (err) => {
      if (err) throw err;
      console.log(results.length + ' rows found.');
    });
  })
  .catch(function (error) {
    console.log(error)
  });
