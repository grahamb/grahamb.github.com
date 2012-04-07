$('#images').cycle({
	fx: 'fade',
	timeout: 8000,
	speed: 3500,
	random: 1
});

var ride_date = new Date('June 16, 2012').getTime(),
	days_left = Math.ceil((ride_date - new Date().getTime())/86400000);
$('#days').html(days_left);

// var yql = "http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.conquercancer.ca%2Fsite%2FTR%3Fpx%3D1817895%26fr_id%3D1331%26pg%3Dpersonal%22%20AND%20xpath%3D%22%2F%2Fp%5B%40class%3D'Smaller'%5D%22&format=json&diagnostics=false&callback=?";	
//var yql = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.conquercancer.ca%2Fsite%2FTR%2FEvents%2FVancouver2011%3Fpx%3D1817895%26pg%3Dpersonal%26fr_id%3D1371%22%20and%20xpath%3D%22%2Fhtml%2Fbody%2Ftable%2Ftr%5B3%5D%2Ftd%5B4%5D%2Ftable%2Ftr%2Ftd%2Fdiv%2Ftable%2Ftr%2Ftd%2Ftable%2Ftr%5B2%5D%2Ftd%2Fdiv%2Fdiv%2Fp%5B3%5D%22&format=json&callback=?";
var yql = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.conquercancer.ca%2Fsite%2FTR%2FEvents%2FVancouver2012%3Fpx%3D1817895%26pg%3Dpersonal%26fr_id%3D1413%22%20and%20xpath%3D%22%2F%2Fp%5B%40class%3D'Smaller'%5D%22&format=json&diagnostics=true&callback=?";
$.ajax({type:'GET', url: yql, dataType:'jsonp', success: function(data, textStatus) {
    var amount = $.trim(data.query.results.p.content).substr(27),
		dollarsign = amount.substr(0, 1),
    	cents = amount.substr((amount.length)-2),
		dollars = amount.substr(1, amount.indexOf('.')-1),
		html = ['<span class="dollarsign">', dollarsign, '</span>', dollars, '<span class="cents">', cents, '</span>'].join('');
		$('#amount_raised').html(html);
}});
