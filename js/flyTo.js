
export default function flyTo(map) {
    map.flyTo({
        // These options control the ending camera position: centered at the target, at zoom level 9, and north up.
        center: [14.750297690342082, 58.112382521764154],
        zoom: 5,
        bearing: 0,
        // These options control the flight curve, making it move slowly and zoom out almost completely before starting to pan.
        speed: 0.2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
        // This can be any easing function: it takes a number between 0 and 1 and returns another number between 0 and 1.
        easing: function (t) {return t;},
        // this animation is considered essential with respect to prefers-reduced-motion
        essential: true
    });
}