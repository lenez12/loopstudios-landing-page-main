const hamburgerMenu = document.getElementById("hamburger-menu");
const closeIcon = document.getElementById("close-icon");
const navbarMenu = document.getElementById("menu-content");

hamburgerMenu.addEventListener("click", () => {
	navbarMenu.classList.toggle("active");
});
closeIcon.addEventListener("click", () => {
	navbarMenu.classList.toggle("active");
});

var width = screen.width;

var ro = new ResizeObserver((entries) => {
	for (let entry of entries) {
		const cr = entry.contentRect;
		console.log("Element:", entry.target);
		console.log(`Element size: ${cr.width}px x ${cr.height}px`);
		console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
	}
});

function onresize() {
	var w = window.outerWidth;
	let isMobile = w <= 767;
	let dir = isMobile ? "../images/mobile/" : "../images/desktop/";
	const Gallery = [
		{
			path: dir + "image-deep-earth.jpg",
			caption: "Deep Earth",
		},
		{
			path: dir + "image-night-arcade.jpg",
			caption: "Night Arcade",
		},
		{
			path: dir + "image-soccer-team.jpg",
			caption: "Soccer Team VR",
		},
		{
			path: dir + "image-grid.jpg",
			caption: "The Grid",
		},
		{
			path: dir + "image-from-above.jpg",
			caption: "From Up Above VR",
		},
		{
			path: dir + "image-pocket-borealis.jpg",
			caption: "Pocket Borealis",
		},
		{
			path: dir + "image-curiosity.jpg",
			caption: "The curiosity",
		},
		{
			path: dir + "image-fisheye.jpg",
			caption: "Make it fisheye",
		},
	];

	const gallery = document.getElementById("gallery");

	Gallery.forEach((item) => {
		gallery.innerHTML += `
     <figure id="gallery-figure">
                <img src="${item.path}" alt="">
                <figcaption>${item.caption}</figcaption>
            </figure>
    `;
	});
}

onresize();
