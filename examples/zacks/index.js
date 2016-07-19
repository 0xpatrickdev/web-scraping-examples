const Xray = require('x-ray');

const x = new Xray();

x('https://www.zacks.com/stock/quote/GOOG?q=GOOG', '#quote_overview td',
  [{
	  test: ''
	  // title: 'td:nth-child(3) a',
	  // link: 'td:nth-child(3) a@href'
  }]
)
  .write('./results.json');
