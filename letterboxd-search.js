const request = require('request-promise');
const cheerio = require('cheerio');
const numeral = require('numeral');

module.exports = { search };

function search(title) {
  return new Promise(function(resolve, reject) {
    const endpoint = title.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ /g,'-')
    request({
      uri: `https://letterboxd.com/film/${endpoint}`,
      transform(body) {
        return cheerio.load(body);
      }
    }).then($ => {
      const ratingsMap = {
        'half-★': 0.5,
        '★': 1.0,
        '★½': 1.5,
        '★★': 2.0,
        '★★½': 2.5,
        '★★★': 3.0,
        '★★★½': 3.5,
        '★★★★': 4.0,
        '★★★★½': 4.5,
        '★★★★★': 5.0
      };
      let obj = {
        title: $('meta[name="twitter:title"]').attr('content'),
        url: $('meta[property="og:url"]').attr('content'),
        year: numeral($('.film-poster').attr('data-film-release-year')).value(),
        director: $('meta[name="twitter:data1"]').attr('content'),
        runtimeMinutes: numeral($('.text-link').text().trim()).value(),
        tagline: $('.tagline').text(),
        synopsis: $('meta[property="og:description"]').attr('content'),
        cast: $('.cast-list').find('a').toArray().map(a => {
          return {
            actor: $(a).find('span').text(),
            role: a.attribs.title,
            url: `https://letterboxd.com${a.attribs.href}`
          }
        }),
        stats: {
            watched: numeral($('.filmstat-watches a').text()).value(),
            lists: numeral($('.filmstat-lists a').text()).value(),
            likes: numeral($('.filmstat-likes a').text()).value()
        },
        averageRating: numeral($('.display-rating').text()).value(),
        ratings: $('.rating-histogram-bar a').toArray().map(a => {
          let rating = a.children[0].data
          let re = /[0-9]\s+/g
          let index = re.exec(rating).index;
          let data = rating.split(' ')
          return {
            stars: ratingsMap[data[0].substring(index+2)],
            count: numeral(data[0].substring(0,index+1)).value(),
            percentage: numeral(data[2].substring(1,data[2].indexOf('%'))).value()
          }
        }),
        backdropImage: $('meta[property="og:image"]').attr('content'),
        posterImage: $('.film-poster img').attr('src'),
        relatedFilms: $('.poster-list li div').toArray().map(a => {
            return {
              name: $(a).find('img').attr('alt'),
              url: `https://letterboxd.com${a.attribs['data-film-slug']}`
            }
        })
      }
      resolve(obj);
    }).catch(err => {
      reject({
        name: err.name,
        statusCode: err.statusCode,
      });
    });
  });
}
