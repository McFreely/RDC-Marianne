var Movie = DS.Model.extend({
	title:  DS.attr('string'),
	year:   DS.attr('string'),
	poster: DS.attr('string')
});

Movie.FIXTURES = [{
	id: 1,
	title:   "Intouchable",
	year:    '2012',
	poster:  'http://www.cinetransat.ch/2013/wp-content/uploads/intouchables2.jpg'
},{
	id: 2,
	title:   "Thor 2",
	year:    '2013',
	poster:  'http://static4.businessinsider.com/image/51fefc05ecad04034500001e-960/thor%20the%20dark%20world%20poster.jpg'
},{
	id: 3,
	title:   "Oblivion",
	year:    '2012',
	poster:  'http://www.impawards.com/2013/posters/oblivion_ver2_xlg.jpg'
},{
	id: 4,
	title:   "La venus à la fourrure",
	year:    '2013',
	poster:  'http://www.leblogducinema.com/wp-content/uploads//2013/09/Affiche-du-film-LA-VENUS-A-LA-FOURRURE.jpg'
},
]

module.exports = Movie;

