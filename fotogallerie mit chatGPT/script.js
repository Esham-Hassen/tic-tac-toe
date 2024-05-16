let images = [
    '/img/astronomy-1866822_1280.jpg',
    '/img/constellations-2609647_1280.jpg',
    '/img/godafoss-1840758_1280.jpg',
    '/img/milky-way-4526277_1280.jpg',
    '/img/mountains-190055_1280.jpg',
    '/img/nature-3082832_1280.jpg',
    '/img/northern-lights-6862969_1280.jpg',
    '/img/tree-736885_1280.jpg',
];


function render() {
    const container = document.getElementById('container');
    let html = ''; // Erzeuge eine leere HTML-Variable

    for (let i = 0; i < images.length; i++) {
        html += '<img class="image" src=' + images[i] + '>';
    }

    container.innerHTML = html; // Setze den HTML-Inhalt des Containers

}