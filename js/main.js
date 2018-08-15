// Reall Simple Weather Plug-In Details (http://a12k.io/reallysimpleweather)

reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: 'Rehoboth, MA', //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
    html = '<div class="weather-grid">';
    html += '<ul>';
    html += '<li><div class="cv"><h1>'+weather.city+', '+weather.region+'</h1><p class="weather-temp">'+weather.temp+'</p><i class="icon icon-'+weather.forecast[0].code+'"></i></div></li>';
    html += '<li><div class="cv"><h4>'+weather.forecast[1].day+'</h4><i class="icon icon-'+weather.forecast[1].code+'"></i></div></li>';
    html += '<li><div class="cv"><h4>'+weather.forecast[2].day+'</h4><i class="icon icon-'+weather.forecast[2].code+'"></i></div></li>';
    html += '<li><div class="cv"><h4>'+weather.forecast[3].day+'</h4><i class="icon icon-'+weather.forecast[3].code+'"></i></div></li>';
    html += '<li><div class="cv"><h4>'+weather.forecast[4].day+'</h4><i class="icon icon-'+weather.forecast[4].code+'"></i></div></li>';
    html += '<li><div class="cv"><h4>'+weather.forecast[5].day+'</h4><i class="icon icon-'+weather.forecast[5].code+'"></i></div></li>';
    html += '<li><div class="cv"><h4>'+weather.forecast[6].day+'</h4><i class="icon icon-'+weather.forecast[6].code+'"></i></div></li>';
    html += '</ul>';
    
    html += '</div>';
	  document.getElementById('weather').innerHTML = html;
  },
  error: function(error) {
	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});

