
export default function create_map_pin(name, xy_coords) {
    const div = document.createElement('div');
    div.className = `${name} map-pin`;
    const marker = new mapboxgl.Marker(div).setLngLat(xy_coords)
    return marker
}
