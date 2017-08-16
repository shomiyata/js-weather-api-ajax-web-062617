function getFahrenheits(result){
	let degrees = result.hourly_forecast.map(hour => hour.temp.english)
	return degrees
}

function getHours(result){
	let hours = result.hourly_forecast.map(hour => hour.FCTTIME.hour)
	return hours
}

function generateDataSet(labels, data) {
	let allData = 
	{
    labels: labels,
    datasets: [{
    	label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
	    data: data
    }]
  }
  return allData
}

function makeAjaxRequest(endpoint, success) {
	$.ajax({
		url: endpoint,
		dataType: 'jsonp',
		success: success
	})

	// let request = fetch(endpoint)
	// .then(function(data){
 //     return data.json()})
	// .then(function(data){
	//  success(data)})
}