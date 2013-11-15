var Movie = DS.Model.extend({
	title:   DS.attr('string'),
	total_count: DS.attr('number'),
	stat_pos: DS.attr('number'),
	stat_neg: DS.attr('number'),
	release:    DS.attr('date'),
	poster:  DS.attr('string'),
	trailer: DS.attr('string'),
	runtime: DS.attr('number'),
	director: DS.attr('string'),
	plot: DS.attr('string')

});

Movie.FIXTURES = [{
	id: 1,
	title:   "Intouchables",
	release:    '2012',
	poster:  'http://www.cinetransat.ch/2013/wp-content/uploads/intouchables2.jpg',
	total_count: 12330,
	stat_pos: 95,
	stat_neg: 22,
	trailer: 'www.youtube.com/embed/dvdJ--DV0Uo"',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},{
	id: 2,
	title:   "Thor 2",
	release:    '2013',
	poster:  'http://static4.businessinsider.com/image/51fefc05ecad04034500001e-960/thor%20the%20dark%20world%20poster.jpg',
	total_count: 12330,
	stat_pos: 70,
	stat_neg: 22,
	trailer: 'youtube',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},{
	id: 3,
	title:   "Oblivion",
	release:    '2012',
	poster:  'http://www.impawards.com/2013/posters/oblivion_ver2_xlg.jpg',
	total_count: 12330,
	stat_pos: 45,
	stat_neg: 22,
	trailer: 'youtube',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},{
	id: 4,
	title:   "La Vénus à la fourrure",
	release:    '2013',
	poster:  'http://www.leblogducinema.com/wp-content/uploads//2013/09/Affiche-du-film-LA-VENUS-A-LA-FOURRURE.jpg',
	total_count: 12330,
	stat_pos: 78,
	stat_neg: 22,
	trailer: 'youtube',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},
{
	id: 5,
	title:   "Inside Llewyn Davis",
	release:    '2013',
	poster:  'http://upload.wikimedia.org/wikipedia/en/thumb/d/df/Inside_Llewyn_Davis_Poster.jpg/220px-Inside_Llewyn_Davis_Poster.jpg',
	total_count: 12330,
	stat_pos: 65,
	stat_neg: 22,
	trailer: 'youtube',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},
{
	id: 6,
	title:   "This is the end",
	release:    '2013',
	poster:  'http://www.digitaltrends.com/wp-content/uploads/2013/06/this-is-the-end.jpg',
	total_count: 12330,
	stat_pos: 30,
	stat_neg: 22,
	trailer: 'youtube',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
}
]

module.exports = Movie;

