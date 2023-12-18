navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  // Show a map centered at latitude / longitude.
  map.innerHTML =
    '<iframe width="700" heigt="300" src="https://maps.google.com/maps?q=' +
    latitude +
    "," +
    longitude +
    '&amp;z=15&amp;output=embed"></iframe>';
});
