let map;

async function initMap() {
  const position = { lat: 54.32402729460852, lng: 10.452273490893967 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "Saitenatelier",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Saitenatelier",
  });
}

initMap();
