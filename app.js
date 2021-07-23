function resolveIP() {
    const apiKey = 'at_YFWN4YaQeI225Wc586DQtSfCQxvlq';
    const ipAddress = document.getElementById('ip-address').value;
    const url = 'https://geo.ipify.org/api/v1?apiKey=at_YFWN4YaQeI225Wc586DQtSfCQxvlq&ipAddress=' + ipAddress;

    console.log(ipAddress);
    console.log(url);
    console.log(apiKey);

    fetch(url)
        .then((res) => res.json())
        .then(function (result) {
            console.log(typeof result);
            console.log(result);
            const ip = result.ip;
            const location = result.location.city + ', ' + result.location.country + ' ' + result.location.postalCode;
            const timezone = result.location.timezone;
            const isp = result.isp;
            const longitude = result.location.lng;
            const latitude = result.location.lat;

            document.getElementById("current-ip").innerText = ip;
            document.getElementById("current-town").innerText = location;
            document.getElementById("current-zone").innerText = timezone;
            document.getElementById("current-isp").innerText = isp;

            console.log(longitude, latitude);

            const mapsACCESS_TOKEN = "pk.eyJ1IjoiamFzcmFqcyIsImEiOiJja3JncWc2eWMwMWt1MzFwZXdtNG01MnVlIn0.oVLjr-De4Av6_Q6pHQGtmQ";


            let mymap = L.map('mapId').setView([latitude, longitude], 13);

            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapsACCESS_TOKEN, {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'your.mapbox.access.token'
            }).addTo(mymap);

            let circle = L.circle([latitude, longitude], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 500
            }).addTo(mymap);

        })
}
