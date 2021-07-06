
export function averageSelected(coords) {
    const xy_coords = coords;
    const div = document.createElement('div');
    div.className = 'averageSelected pin';
    const marker = new mapboxgl.Marker(div).setLngLat(xy_coords)
    return marker
}

export function averageALL() {
    const xy_coords = [15.636830766913004, 59.26063787090151];
    const div = document.createElement('div');
    div.style.display = "none";
    div.className = 'averageAll pin';
    const marker = new mapboxgl.Marker(div).setLngLat(xy_coords)
    return marker
}

export function centerPop() {
    const xy_coords = [15.436389, 58.895833];
    let centerPop_pin = document.createElement('div');
    centerPop_pin.style.display = "none";
    centerPop_pin.className = 'centerPop pin';
    const marker = new mapboxgl.Marker(centerPop_pin).setLngLat(xy_coords)
    return marker
}