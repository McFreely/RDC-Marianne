var Movie = DS.Model.extend({
	title:   DS.attr('string'),
	total_count: DS.attr('number'),
	stat_pos: DS.attr('number'),
	stat_neg: DS.attr('number'),
	release_date:    DS.attr('number'),
	poster:  DS.attr('string'),
	trailer: DS.attr('string'),
	runtime: DS.attr('number'),
	director: DS.attr('string'),
	plot: DS.attr('string')

});

Movie.FIXTURES = [{
	id: 1,
	title:   "Intouchables",
	release_date: 2012,
	poster:  'http://www.cinetransat.ch/2013/wp-content/uploads/intouchables2.jpg',
	total_count: 12330,
	stat_pos: 95,
	stat_neg: 22,
	trailer: 'https://www.youtube.com/embed/WzV6mXIOVl4',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL. Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL. Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},{
	id: 2,
	title:   "Thor 2",
	release_date: 2013,
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
	release_date: 2012,
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
	release_date: 2013,
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
	release_date: 2013,
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
	release_date: 2013,
	poster:  'http://www.digitaltrends.com/wp-content/uploads/2013/06/this-is-the-end.jpg',
	total_count: 12330,
	stat_pos: 30,
	stat_neg: 22,
	trailer: 'youtube',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},{	id: 7,
	title:   "Intouchables",
	release_date: 2012,
	poster:  'http://www.cinetransat.ch/2013/wp-content/uploads/intouchables2.jpg',
	total_count: 12330,
	stat_pos: 95,
	stat_neg: 22,
	trailer: 'www.youtube.com/embed/dvdJ--DV0Uo"',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},{
	id: 8,
	title:   "Thor 2",
	release_date: 2013,
	poster:  'http://static4.businessinsider.com/image/51fefc05ecad04034500001e-960/thor%20the%20dark%20world%20poster.jpg',
	total_count: 12330,
	stat_pos: 70,
	stat_neg: 22,
	trailer: 'youtube',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},{
	id: 9,
	title:   "Oblivion",
	release_date: 2012,
	poster:  'http://www.impawards.com/2013/posters/oblivion_ver2_xlg.jpg',
	total_count: 12330,
	stat_pos: 45,
	stat_neg: 22,
	trailer: 'youtube',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},{
	id: 10,
	title:   "La Vénus à la fourrure",
	release_date: 2013,
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
	id: 11,
	title:   "Inside Llewyn Davis",
	release_date: 2013,
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
	id: 12,
	title:   "This is the end",
	release_date: 2013,
	poster:  'http://www.digitaltrends.com/wp-content/uploads/2013/06/this-is-the-end.jpg',
	total_count: 12330,
	stat_pos: 30,
	stat_neg: 22,
	trailer: 'youtube',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},{	id: 13,
	title:   "Intouchables",
	release_date: 2012,
	poster:  'http://www.cinetransat.ch/2013/wp-content/uploads/intouchables2.jpg',
	total_count: 12330,
	stat_pos: 95,
	stat_neg: 22,
	trailer: 'www.youtube.com/embed/dvdJ--DV0Uo"',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},{
	id: 14,
	title:   "Thor 2",
	release_date: 2013,
	poster:  'http://static4.businessinsider.com/image/51fefc05ecad04034500001e-960/thor%20the%20dark%20world%20poster.jpg',
	total_count: 12330,
	stat_pos: 70,
	stat_neg: 22,
	trailer: 'youtube',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},{
	id: 15,
	title:   "Oblivion",
	release_date: 2012,
	poster:  'http://www.impawards.com/2013/posters/oblivion_ver2_xlg.jpg',
	total_count: 12330,
	stat_pos: 45,
	stat_neg: 22,
	trailer: 'youtube',
	runtime: 120,
	director: "Peter Pan",
	plot: "Un homme en fauteuil roulant se fait pousser par un petit délinquant reconverti en aide à la personne. LOL"
},{
	id: 16,
	title:   "La Vénus à la fourrure",
	release_date: 2013,
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
	id: 17,
	title:   "Inside Llewyn Davis",
	release_date: 2013,
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
	id: 18,
	title:   "This is the end",
	release_date: 2013,
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

