// Google Maps Location
navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  // Toon een kaart gecentreerd op latitude / longitude.
  map.innerHTML =
    '<iframe width="700" height="300" src="https://maps.google.com/maps?q=' +
    latitude +
    "," +
    longitude +
    '&amp;z=15&amp;output=embed"></iframe>';
});

// Watch voor gebruikerslocatie
const watchId = navigator.geolocation.watchPosition((position) => {
  const { latitude, longitude } = position.coords;
  // Toon een kaart gecentreerd op latitude / longitude.
  console.log("watchId - " + watchId);
});

// Data
var reqcount = 0;

navigator.geolocation.watchPosition(succesCallback, errCallback, options);

function succesCallback(position) {
  const { accuracy, latitude, longitude, altitude, heading, speed } =
    position.coords;
  // Toon een kaart gecentreerd op latitude / longitude.
  reqcount++;
  details.innerHTML = "Accuracy: " + accuracy + "<br>";
  details.innerHTML +=
    "Latitude: " + latitude + " | Longitude: " + longitude + "<br>";
  details.innerHTML += "Altitude: " + altitude + "<br>";
  details.innerHTML += "Heading " + heading + "<br>";
  details.innerHTML += "Speed: " + speed + "<br>";
  details.innerHTML += "Recount: " + reqcount;
}
function errCallback(error) {}

var options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};
