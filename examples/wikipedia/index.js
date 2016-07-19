const Xray = require('x-ray');
const fs = require('fs');
const download = require('download');

const x = new Xray();

x('https://en.wikipedia.org/wiki/Pluto', 'img',
    [{
        img: '',
        src: '@src',
        width: '@width',
        height: '@height'
    }]
)
(function(err, results){
  // only return images wider than 400px
  results = results.filter(function(image){
    return image.width > 400;
  })
  // write the results to a json file
  fs.writeFile('./results.json', JSON.stringify(results, null, '\t'), (err) => {
    if (err) throw err;
    console.log(results.length + ' images found.');
    // download all of the images
    Promise.all(results.map(x => download(x.src, './images'))).then (() => {
      console.log(results.length + ' images downloaded.');
    });
  })
})
