var Xray = require('x-ray');
var x = Xray(); // var xray = new Xray();

x('http://google.com', 'a',
  [{
    a: '',
    href: '@href',
    css: '@class'
  }]
  )
  .write('results.json')
