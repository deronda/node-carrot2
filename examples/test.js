var carrot2 = require('../lib/carrot2');

var dcs = new carrot2.DocumentClusteringServer( {debug:true} );

var sr = new carrot2.SearchResult( {query:'seattle'} );
sr.addDocument("City of Seattle", "http://www.seattle.gov/", "Official site featuring a guide to living in Seattle and information on doing business, city services, and visitor's resources.");
sr.addDocument("Seattle's Convention and Visitors Bureau", "http://www.seeseattle.org/", "Includes a visitors guide to Seattle, calendar of events, map, hotel reservations, and other tourism resources.");
sr.addDocument("The Seattle Times", "http://www.seattletimes.com/", "Daily newspaper presenting local and worldwide news headlines, entertainment, sports, and business coverage.");
sr.addDocument("Seattle Weekly", "http://www.seattleweekly.com/", "In-depth news, innovative arts coverage, comprehensive entertainment listings, and searchable classifieds.");
sr.addDocument("Visiting Seattle", "http://www.cityofseattle.net/html/visitor", "Official guide from the City of Seattle. Includes a virtual tour, points of interest, photos, directions, and local resources like hotels and restaurants.");
sr.addDocument("Metroblogging Seattle", "http://seattle.metblogs.com/", "Hyper-local look at what's going on in the city. Regional bloggers give a perspective on daily life.");
sr.addDocument("Seattle SuperSonics", "http://www.nba.com/sonics", "Official site of the Sonics, featuring news, schedule and scores, players, stats, ticket information, and more.");

dcs.cluster(sr, {algorithm:'lingo'}, [ 
        {key:"LingoClusteringAlgorithm.desiredClusterCountBase", value:10},
        {key:"LingoClusteringAlgorithm.phraseLabelBoost", value:1.0}
], function(err, sr) {
    if (err) console.log(err);
    var cluster = sr.clusters;
});

dcs.externalCall('seattle', {algorithm:'stc'}, [ 
        {key:"LingoClusteringAlgorithm.desiredClusterCountBase", value:10},
        {key:"LingoClusteringAlgorithm.phraseLabelBoost", value:1.0}
], function(err, sr) {
    if (err) console.log(err);
	var cluster = sr.clusters;
});