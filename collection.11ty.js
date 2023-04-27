class Test {
	data() {
		return {
			pagination: {
				data: "collections.artworksCollections",
				size: 1
			},
			permalink: function (data) { return `/collection/${this.slug(data.pagination.items[0].title)}/` }
		};
	}

	render(data) {
		const item = data.pagination.items[0];
		let gallery = '';
		let newLine = 0;
		const newLineLimit = 320;
		const iteration = item.artworks ? item.artworks.length : -1;
		for (let i = 0; i < iteration; i++) {
			newLine += item.artworks[i].image.ratio;
			if (newLine > newLineLimit) {
				newLine = 0;
				gallery += `
					</div>
					<div class="gallery__line" > `;
			}
			gallery += `
				<a
					class="gallery__line__item"
					h-ref="/artwork/${this.slug(item.artworks[0].title)}-${item.artworks[0].hash}"
					style="
						${i + 1 == iteration ? 'max-width:50%;' : ''}
						aspect-ratio:${item.artworks[0].image.ratio / 100};
						width:${item.artworks[0].image.ratio};
						flex:${item.artworks[0].image.ratio}px;
						flex-basis:${item.artworks[0].image.ratio}px;
						flex-grow:${item.artworks[0].image.ratio};
						flex-shrink:${item.artworks[0].image.ratio};
				">
					<img
						onclick="openModalGallery(${i})"
						data-title="${item.artworks[i].title}"
						data-href="/artwork/${this.slug(item.artworks[i].title)}-${item.artworks[i].hash}"
						data-src="${data.website.url}${item.artworks[i].image.large}"
						id="${i}"
						class="gallery__preview"
						src="${data.website.url}${item.artworks[i].image.small}
					">
				</a>`
		}

		return `
			<!doctype html>
			<html style="scroll-behavior: smooth;">
				<head>
				<meta charset="utf-8">
					<link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
					<link rel="stylesheet" href="${data.website.url}/includes/assets/css/styles.css">
					<script src="${data.website.url}/includes/assets/js/modal_gallery.js" defer></script>
				</head>
				<body class="galleryPage">
				<!-- HEADER -->
					<header id="header" class="header">
					<div class="header__inner">
					<a class="header__logo" href="/">LICHTA</a>
					<nav class="navbar">
						<a class="navbar__bigItem" href="${data.website.url}/bio">PEINTRE&nbsp;CONTEMPORAIN</a>
						<span class="navbar__separator">/</span>
						<a class="navbar__bigItem" href="${data.website.url}/collection">COLLECTIONS</a>
					</nav>
					</div>
					</header>
					<div class="header__underBlock">
					<p class="header__underBlock__text"><a target="_blank" href="https://linktr.ee/">linktr.ee/lichta</a></p>
					</div>
				<!-- / HEADER -->
					<div class="galleryPage__introBox">
						<div class="galleryPage__introBox__background">
							<p>${item.description.replace(/\n/g, '<br/>')}</p>
						</div>
						<a class="gallery_button" href="#gallery">
						<!-- <p>Gallery</p> -->
						<div class="arrow_container">
							<div class="arrow"></div>
						</div>
					</a>
					</div>
					<div id="gallery" class="gallery" data-scaling-ratio="${0}" data-buy-text="${0}" data-request-text="${0}">
						<div class="gallery__line">
							${gallery}
						</div>
					</div>
						<!-- {% include "components/footer.njk" %}-->
						${data.componentsData.modal} 
				</body>
			</html>`;
	}
}

module.exports = Test;