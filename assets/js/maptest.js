

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 55.99436810278571, lng: 11.969633027784207 },
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
}

const locations = [
    { lat: 55.99709525043145, lgn: 11.970390676145506 },
    { lat: 55.68117682345807, lgn: 12.577199142139685 },
    { lat: 55.66300284834, lgn: 12.589074539941048 },
    { lat: 55.68222589393442, lgn: 12.576619894236746 },
    { lat: 53.29834615774438, lgn: -6.178096102150207 },
    { lat: -17.821700445971388, lgn: 31.04967577367341 }
];