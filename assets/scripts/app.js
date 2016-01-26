(function(){

	function weather(place, time, forecast) {
		this.place = place;
		this.time = time;
		this.forecast = forecast;
	}

	weather.prototype.request = function(endpoint) {
		var config = {
			url: "http://api.aerisapi.com/",
			client_endpoint: endpoint + "&",
			client_id: "hd3whkrH2zRXxm20Kaozc",
			client_secret: "i660Z2TUimmzhWo6yktAUoXkdPLeKfpNjRE5WfvD"
		}

		var weatherRequest = new XMLHttpRequest();
		weatherRequest.onreadystatechange = function() {
			if (weatherRequest.readyState === 4 && weatherRequest.status === 200) {
				doWeatherRequest(weatherRequest);
			}
		}
		weatherRequest.open(
			"GET",
			config.url + config.client_endpoint + "client_id=" + config.client_id + "&client_secret=" + config.client_secret,
			true
		)
		weatherRequest.send();

		function doWeatherRequest(data) {
			weatherUI.create(data);
		}
	}

	var weatherUI = {

		utils: {
			insertAfter: function(newNode, referenceNode) {
    		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
			},

			addEvent: function(element, event_name, func) {
				if (element.addEventListener) {
					element.addEventListener(event_name, func, false);
				} else if (element.attachEvent)  {
					element.attachEvent("on"+event_name, func);
				}
			}
		},

		create: function(data) {
			var res = JSON.parse(data.responseText),
					tempElement = document.getElementById('temp-number'),
					weatherInfo = res.response[0].periods[0],
					locInfo = res.response[0].loc;

			console.log(data);

			tempElement.innerHTML = weatherInfo.avgTempC;
			if ( weatherInfo.feelsLikeC != weatherInfo.avgTempC ) {
				var feelsLikeElement = document.createElement('div'),
						feelsLikeText = "<p class='feels-like'>Feels like " + weatherInfo.feelsLikeC + "</p>";

				// ###### Working on this. ######
				// feelsLikeText.appendChild(feelsLikeElement);
				// this.utils.insertAfter(feelsLikeElement, tempElement);
			}

			console.log(locInfo.lat, locInfo.long);

			// var initMap = function() {
			// 	var mapEl = document.getElementById('map'),
			// 			map = new.google.maps.Map(mapEl, {
			// 				center: {"lat: " + locInfo.lat ", lng: " + locInfo.long},
			// 				zoom: 8
			// 			});
			// }();

			// for (var i = 0; i < data.response)
			// console.log(data[0].periods[0].avgTempC);
		},

		location: function() {
			var locationInput = document.getElementById('loc-input'),
					countrySelect = document.getElementById('country-input'),
					countryOption,
					countryPlaceholder = document.getElementById('country-input').childNodes[0],
					locationSubmit = document.getElementById('loc-submit'),
					locationVal = "";

			for (var i = 0; i < countrySelect.childNodes.length; i++) {
				countryOption = countrySelect.childNodes;
				if ( countryOption[i].className !== 'placeholder' ) {
					this.utils.addEvent(countryOption[i], "click", countryClick);
				}
			}

			function countryClick() {
				countryOption = countrySelect.childNodes;
				console.log(this, countryOption.length);

				for (var i = 0; i < countryOption.length; i++) {
					if (countryOption[i].className == 'active') { countryOption[i].removeAttribute('class'); }
				}
				this.className = 'active';
				countryOption = this;

				countrySelect.childNodes[0].innerHTML = this.getAttribute('name');
			}

			locationSubmit.onclick = function() {
				var cityTxt = locationInput.value.toLowerCase().replace(/\s+/g, '+'),
						countryTxt = countryOption.getAttribute('name').toLowerCase().replace(/\s+/g, '');

				// Sets the type of results will be returned (forecasts only)
				locationVal = "forecasts/";
				// If both city and country are specified, add them both to the URL.
				if ( cityTxt !== '' && countryTxt !== '') {
					locationVal += cityTxt + "," + countryTxt;
				// If city is specified but country isn't, add the city only.
				} else if (cityTxt !== '' && countrySelect === '') {
					locationVal += cityTxt;
				} else {
				// Otherwise, return a message to specify a location!
					return console.log("Please enter a location.");
				}
				// Extra options...
				locationVal += "?from=today&to=+1day&limit=2&filter=daynight";

				// Create new instance
				var newSearch = new weather(locationVal, this.time || null, this.forecast || null);
				newSearch.request(newSearch.place);
			}
		}
	}

	weatherUI.location();


})();
