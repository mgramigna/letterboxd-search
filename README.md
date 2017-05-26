# letterboxd-search

Search for data about a film using Letterboxd. Scrapes the Letterboxd site for the data and returns it as JSON.

``` bash
$ npm install --save letterboxd-search
```

Search by film title.

**IMPORTANT**: Letterboxd might have multiple pages for the same named films. If you are getting the wrong movie title, try including the year (e.g. 'Whiplash 2014'):

``` JavaScript
const lb = require('letterboxd-search')

lb.search('Before Sunrise', res => {
    console.log(res)
    /*
    { title: 'Before Sunrise',
  url: 'https://letterboxd.com/film/before-sunrise',
  year: 1995,
  director: 'Richard Linklater',
  runtimeMinutes: 105,
  tagline: 'Can the greatest romance of your life last only one night?',
  synopsis: 'A dialogue marathon of a film, this fairytale love story of an American boy and French girl.
  During a day and a night together in Vienna their two hearts collide.',
  cast: 
   [ 'Ethan Hawke',
     'Julie Delpy',
     'Andrea Eckert',
     'Hanno Pöschl',
     'Karl Bruckschwaiger',
     'Tex Rubinowitz',
     'Erni Mangold',
     'Dominik Castell',
     'Haymon Maria Buttinger',
     'Harold Waiglein',
     'Bilge Jeschim',
     'Kurti',
     'Hans Weingartner',
     'Liese Lyon',
     'Peter Ily Huemer',
     'Otto Reiter',
     'Hubert Fabian Kulterer',
     'Branko Andric',
     'Constanze Schweiger',
     'John Sloss',
     'Alexandra Seibel',
     'Georg Schöllhammer',
     'Christian Ankowitsch',
     'Wilbirg Reiter',
     'Barbara Klebel',
     'Wolfgang Staribacher',
     'Wolfgang Glüxam' ],
  stats: { watched: '38k', lists: '8.7k', likes: '13k' },
  averageRating: 4.2,
  starRatings: 
   [ '58 half-★ ratings (0%)',
     '82 ★ ratings (0%)',
     '61 ★½ ratings (0%)',
     '256 ★★ ratings (1%)',
     '347 ★★½ ratings (2%)',
     '1,383 ★★★ ratings (6%)',
     '2,294 ★★★½ ratings (10%)',
     '6,081 ★★★★ ratings (28%)',
     '4,598 ★★★★½ ratings (21%)',
     '6,778 ★★★★★ ratings (31%)' ],
  backdropImage: 'https://a.ltrbxd.com/resized/sm/upload/jr/x9/lb/om/before-sunrise-1200-1200-675-675-crop-000000.jpg?k=533134e640',
  posterImage: 'https://a.ltrbxd.com/resized/sm/upload/ip/ra/q5/we/9NBjDNPHA6SkThIweOs8iCfsA8a-0-230-0-345-crop.jpg?k=71947838b2',
  relatedFilms: [ 'Before Midnight', 'Before Sunset' ] }*/
})
```

