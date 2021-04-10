window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition
            (position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                const api_key = "2f236a4f36f91aa98532c4cbbaae0785"

                const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`;
                fetch(api)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                    });
            });
      
    }
});