# web scraping

examples of web scraping using [x-ray](https://github.com/lapwinglabs/x-ray), [Nightmare](https://github.com/segmentio/nightmare), and [cheerio](https://github.com/cheeriojs/cheerio).

## tools

- x-ray (
- Nightmare (similar to Phantom.js, but faster. uses Electron.)
- Cheerio (wraps html2parser)

## `/examples`

- **dribbble** - grab image url's of items listed on [dribbble.com](dribbble.com)'s popular page
- **hacker news** - grab the top 100 posts and their urls
- **wikipedia** - grab all the images on the Pluto page that are wider than 400px
- **google** - grab all the links from the google homepage
- **weather** - grab the curent temperature and print it in the console
- **zacks** - grab some information about a stock
- **stubhub** - grab ticket sales information for a particular event

## how to use this

Open up terminal and navigate to an example
```sh
cd <project folder>/web-scraping
npm install
```

Go to an example you want to see
```sh
cd <some example>
```

Execute the code
```sh
node index.js
```
