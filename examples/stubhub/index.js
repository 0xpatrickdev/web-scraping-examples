const Nightmare = require('nightmare');
const fs = require('fs');
const nightmare = new Nightmare({show: false})

const evId = '9459051';
const loginUrl = 'https://www.stubhub.com/my/profile/';
const eventUrl = 'https://sell.stubhub.com/simweb/sim/services/priceanalysis?eventId=' + evId;

const email = 'YOUR_EMAIL';
const password = 'YOUR_PASSWORD';

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

/* To Do:
 * (1) set up separate functions for Sold & Unsold that are both called in `.evaluate`
 * (2) paginate through results for Unsold tickets
 * (3) record date & time that data was pulled + timestap json file
 * (4) take an array of events (& don't login twice)
 *     *nightmare is designed to have a single que running against a single Electron instance*
 */