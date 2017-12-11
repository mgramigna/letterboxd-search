# letterboxd-search

Search for data about a film using Letterboxd. Scrapes the Letterboxd site for the data and returns it as JSON.

``` bash
$ npm install --save letterboxd-search
```

### Search by film title

**IMPORTANT**: Letterboxd might have multiple pages for the same named films. If you are getting the wrong movie title, try including the year (e.g. 'Whiplash 2014'):

``` JavaScript
const lb = require('letterboxd-search');

lb.search('Before Sunrise')
  .then(film => {
    console.log(film);
  })
  .catch(err => {
    console.error(err);
  });
```

### Example Response
```JavaScript
{ title: 'Before Sunrise (1995)',
  url: 'https://letterboxd.com/film/before-sunrise/',
  year: 1995,
  director: 'Richard Linklater',
  runtimeMinutes: 105,
  tagline: 'Can the greatest romance of your life last only one night?',
  synopsis: 'A dialogue marathon of a film, this fairytale love story of an American boy and French girl. During a day and a night together in Vienna their two hearts collide.',
  cast:
   [ { actor: 'Ethan Hawke',
       role: 'Jesse',
       url: 'https://letterboxd.com/actor/ethan-hawke/' },
     { actor: 'Julie Delpy',
       role: 'Céline',
       url: 'https://letterboxd.com/actor/julie-delpy/' },
     { actor: 'Andrea Eckert',
       role: 'Wife on Train',
       url: 'https://letterboxd.com/actor/andrea-eckert/' },
     { actor: 'Hanno Pöschl',
       role: 'Husband on Train',
       url: 'https://letterboxd.com/actor/hanno-poschl/' },
     { actor: 'Karl Bruckschwaiger',
       role: 'Guy on Bridge',
       url: 'https://letterboxd.com/actor/karl-bruckschwaiger/' },
     { actor: 'Tex Rubinowitz',
       role: 'Guy on Bridge',
       url: 'https://letterboxd.com/actor/tex-rubinowitz/' },
     { actor: 'Erni Mangold',
       role: 'Palm Reader',
       url: 'https://letterboxd.com/actor/erni-mangold/' },
     { actor: 'Dominik Castell',
       role: 'Street Poet',
       url: 'https://letterboxd.com/actor/dominik-castell/' },
     { actor: 'Haymon Maria Buttinger',
       role: 'Bartender',
       url: 'https://letterboxd.com/actor/haymon-maria-buttinger/' },
     { actor: 'Harold Waiglein',
       role: 'Guitar Player in Club',
       url: 'https://letterboxd.com/actor/harold-waiglein/' },
     { actor: 'Bilge Jeschim',
       role: 'Belly Dancer',
       url: 'https://letterboxd.com/actor/bilge-jeschim/' },
     { actor: 'Kurti',
       role: 'Percussionist',
       url: 'https://letterboxd.com/actor/kurti/' },
     { actor: 'Hans Weingartner',
       role: 'Cafe Patron',
       url: 'https://letterboxd.com/actor/hans-weingartner/' },
     { actor: 'Liese Lyon',
       role: 'Cafe Patron',
       url: 'https://letterboxd.com/actor/liese-lyon/' },
     { actor: 'Peter Ily Huemer',
       role: 'Cafe Patron',
       url: 'https://letterboxd.com/actor/peter-ily-huemer/' },
     { actor: 'Otto Reiter',
       role: 'Cafe Patron',
       url: 'https://letterboxd.com/actor/otto-reiter/' },
     { actor: 'Hubert Fabian Kulterer',
       role: 'Cafe Patron',
       url: 'https://letterboxd.com/actor/hubert-fabian-kulterer/' },
     { actor: 'Branko Andric',
       role: 'Cafe Patron',
       url: 'https://letterboxd.com/actor/branko-andric/' },
     { actor: 'Constanze Schweiger',
       role: 'Cafe Patron',
       url: 'https://letterboxd.com/actor/constanze-schweiger/' },
     { actor: 'John Sloss',
       role: 'Cafe Patron',
       url: 'https://letterboxd.com/actor/john-sloss/' },
     { actor: 'Alexandra Seibel',
       role: 'Cafe Patron',
       url: 'https://letterboxd.com/actor/alexandra-seibel/' },
     { actor: 'Georg Schöllhammer',
       role: 'Cafe Patron',
       url: 'https://letterboxd.com/actor/georg-schollhammer/' },
     { actor: 'Christian Ankowitsch',
       role: 'Cafe Patron',
       url: 'https://letterboxd.com/actor/christian-ankowitsch/' },
     { actor: 'Wilbirg Reiter',
       role: 'Cafe Patron',
       url: 'https://letterboxd.com/actor/wilbirg-reiter/' },
     { actor: 'Barbara Klebel',
       role: 'Musician on Boat',
       url: 'https://letterboxd.com/actor/barbara-klebel/' },
     { actor: 'Wolfgang Staribacher',
       role: 'Musician on Boat',
       url: 'https://letterboxd.com/actor/wolfgang-staribacher/' },
     { actor: 'Wolfgang Glüxam',
       role: 'Harpsichord Player',
       url: 'https://letterboxd.com/actor/wolfgang-gluxam/' } ],
  stats: { watched: 48000, lists: 13000, likes: 16000 },
  averageRating: 4.2,
  ratings:
   [ { stars: 0.5, count: 66, percentage: 0 },
     { stars: 1, count: 110, percentage: 0 },
     { stars: 1.5, count: 81, percentage: 0 },
     { stars: 2, count: 319, percentage: 1 },
     { stars: 2.5, count: 442, percentage: 2 },
     { stars: 3, count: 1753, percentage: 6 },
     { stars: 3.5, count: 2854, percentage: 10 },
     { stars: 4, count: 7651, percentage: 28 },
     { stars: 4.5, count: 5711, percentage: 21 },
     { stars: 5, count: 8672, percentage: 31 } ],
  backdropImage: 'https://a.ltrbxd.com/resized/sm/upload/jr/x9/lb/om/before-sunrise-1200-1200-675-675-crop-000000.jpg?k=533134e640',
  posterImage: 'https://a.ltrbxd.com/resized/sm/upload/ip/ra/q5/we/9NBjDNPHA6SkThIweOs8iCfsA8a-0-230-0-345-crop.jpg?k=71947838b2',
  relatedFilms:
   [ { name: 'Before Midnight',
       url: 'https://letterboxd.com/film/before-midnight/' },
     { name: 'Before Sunset',
       url: 'https://letterboxd.com/film/before-sunset/' } ] }
```
