class Test {
	data() {
		return {
			// title: "COULEURS ET EXPRESSIOINS",
			// description: "Etre libre et accepter les couleurs, les matières et les mouvements, leurs appels et, ainsi, pénétrer une autre dimension et lui donner corps et âme, voici ce qui me fonde...Les matières, les couleurs, les matières des couleurs, 'agissent' plus dans mon travail que le trait pour définir une forme, un mouvement, une expression...",
			layout: 'modal.njk',
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
		const newLineLimit = 290;
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
				<div
					class="gallery__line__item ${i + 1 == item.artworks.length && i != 0 && newLine == 0 ? 'gallery__line__item--last' : ''}"
					style="
						aspect-ratio:${item.artworks[i].image.ratio / 100};
						width:${item.artworks[i].image.ratio}px;
						flex:${item.artworks[i].image.ratio};
						flex-basis:${item.artworks[i].image.ratio}px;
						flex-grow:${item.artworks[i].image.ratio};
						flex-shrink:${item.artworks[i].image.ratio};">
					<img
						onclick="openModalGallery(${i});// fix this later"
						data-title="${item.artworks[i].title}"
						data-href="${data.website.url}/artwork/${this.slug(item.artworks[i].title)}-${item.artworks[i].hash}"
						data-src="${data.website.url}${item.artworks[i].image.large}"
						id="${i}"
						class="gallery__preview"
						src="${data.website.url}${item.artworks[i].image.small}">
				</div>`
		}

		return `
			<div class="galleryPage__introBox">
				<div class="galleryPage__introBox__background">
					${item.description}
				</div>
				<a class="gallery_button" href="#gallery">
				<!-- <p>Gallery</p> -->
				<div class="arrow_container">
					<div class="arrow"></div>
				</div>
			</a>
			</div>
			<div id="gallery" class="gallery"><!-- data-scaling-ratio="${0}" data-buy-text="${0}" data-request-text="${0}" -->
				<div class="gallery__line">
					${gallery}
				</div>
			</div>`;
	}
}

module.exports = Test;