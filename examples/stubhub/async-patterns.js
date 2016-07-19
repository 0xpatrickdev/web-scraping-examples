// Example of sequential operations with Nightmare:
// https://github.com/rosshinkley/nightmare-examples/blob/master/docs/common-pitfalls/async-operations-loops.md

// loads two browsers (not good)
nightmare.goto('http://example.com')
    .title()
    .then(function(title){
        console.log(title);
    });

nightmare.goto('http://example2.com')
    .title()
    .then(function(title){
        console.log(title
    });

// only uses one browser (good)
nightmare.goto('http://example.com')
  .title()
  .then(function(title) {
    console.log(title);
    nightmare.goto('http://google.com')
      .title()
      .then(function(title) {
        console.log(title);
      });
  });

nightmare.goto('http://example.com')
  .title()
  .then(function(title) {
    console.log(title);
    nightmare.goto('http://google.com')
      .title()
      .then(function(title) {
        console.log(title);
      });
  });

// loops (bad -> executing multiple queues against the same instance)
var urls = ['http://example.com', 'http://example2.com', 'http://example3.com'];

var results = [];
urls.forEach(function(url) {
  nightmare.goto(url)
    .wait('body')
    .title()
    .then(function(result) {
      results.push(result);
    });
});
console.dir(results)

// good (visit multiple url in sequence using Array.reduce )
// - .end() is not getting called, so the nightmare instance never ends
var urls = ['http://example1.com', 'http://example2.com', 'http://example3.com'];
urls.reduce(function(accumulator, url) {
  return accumulator.then(function(results) {
    return nightmare.goto(url)
      .wait('body')
      .title()
      .then(function(result){
        results.push(result);
        return results;
      });
  });
}, Promise.resolve([])).then(function(results){
    console.dir(results);
});
