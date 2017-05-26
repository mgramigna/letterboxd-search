const scraperjs = require('scraperjs')
module.exports.search = (title, cb) => {
    const endpoint = title.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ /g,'-')
    scraperjs.StaticScraper.create(`https://letterboxd.com/film/${endpoint}`).scrape($ => {
        const rt = $('.text-link').text().trim()
        return {
            title: title,
            url: `https://letterboxd.com/film/${endpoint}`,
            year: parseInt($('#featured-film-header p small a').text()),
            director: $('#featured-film-header p a span').text(),
            runtimeMinutes: parseInt(rt.substring(0,rt.indexOf('mins')-1)),
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
