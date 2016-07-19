const Xray = require('x-ray');

const x = new Xray();

x('https://news.ycombinator.com/', '.athing',
  [{
	  rank: '.rank',
	  title: 'td:nth-child(3) a',
	  link: 'td:nth-child(3) a@href'
  }]
)
  .paginate('a[rel="nofollow"]:last-child@href')
  .limit(3)
  .write('./results.json');
