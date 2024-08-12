function moveLift(floor) {
    const lift = document.getElementById ('lift');
    const floorHeight = 118.3;
    lift.style.bottom = floor * floorHeight + 'px'
}