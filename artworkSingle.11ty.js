class Test {
	data() {
		return {
			pagination: {
				data: "collections.artworks",
				size: 1
			},
			permalink: function (data) { return `/artwork/${this.slug(data.pagination.items[0].title)}-${data.pagination.items[0].hash}/` }
		};
	}

	render(data) {

		const item = data.pagination.items[0];

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
							<h2>${item.title.replace(/\n/g, '<br/>')}</h2>
							<hr/>
							<p>${item.description.replace(/\n/g, '<br/>')}</p>
							<span>${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(item.price)}</span>
						</div>
					</a>
					</div>
					<div id="gallery" class="gallery" data-scaling-ratio="${0}" data-buy-text="${0}" data-request-text="${0}">
						<div class="gallery__line">
							<a
								class="gallery__line__item"
								style="
									aspect-ratio:${item.image.ratio / 100};
									width:${item.image.ratio};
									flex:${item.image.ratio}px;
									flex-basis:${item.image.ratio}px;
									flex-grow:${item.image.ratio};
									flex-shrink:${item.image.ratio};
							">
								<!-- img
									onclick="openModalGallery(${0})"
									data-title="${item.title}"
									data-href="/artwork/${this.slug(item.title)}-${item.hash}"
									data-src="${data.website.url}${item.image.large}"
									id="${0}"
									class="gallery__preview" -->

								<img style="cursor:default;outline:none" class="gallery__preview"src="${data.website.url}${item.image.full}
								">
							</a>
						</div>
					</div>
					${data.componentsData.footer}
						<!-- {% include "components/footer.njk" %}-->
						${data.componentsData.modal} 
				</body>
			</html>`;
	}
}

module.exports = Test;