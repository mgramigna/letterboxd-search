const scraperjs = require('scraperjs')
module.exports.search = (title, cb) => {
    const endpoint = title.toLowerCase().replace(/ /g,'-')
    scraperjs.StaticScraper.create(`https://letterboxd.com/film/${endpoint}`).scrape($ => {
        return {
            title: title,
            url: `https://letterboxd.com/film/${endpoint}`,
            year: parseInt($('#featured-film-header p small a').text()),
            director: $('#featured-film-header p a span').text(),
            tagline: $('.tagline').text(),
            synopsis: $('.truncate p').text(),
            cast: $('.cast-list p a span').toArray().map(a => {
                return a.children[0].data
            }),
            stats: {
                watched: $('.filmstat-watches a').text(),
                lists: $('.filmstat-lists a').text(),
                likes: $('.filmstat-likes a').text()
            },
            averageRating: parseFloat($('.display-rating').text()),
            starRatings: $('.rating-histogram-bar a').toArray().map(a => {
                return a.children[0].data
            }),
            backdropImage: $('#backdrop').attr('data-backdrop'),
            posterImage: $('.film-poster img').attr('src'),
            relatedFilms: $('.poster-list li div img').toArray().map(a => {
                return a.attribs.alt
            })
        }
    }).then(res => {
        cb(res);
    })
}
