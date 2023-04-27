class Test {
	data() {
		return {
			layout: 'blank.njk',
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
			<div class="galleryPage__introBox">
				<div class="galleryPage__introBox__background">
					<h2>${item.title}</h2>
					<hr/>
					<p>${item.description.replace(/\n/g, '<br/>')}</p>
					<span>${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(item.price)}</span>
				</div>
			</a>
			</div>
			<div id="gallery" class="gallery"><!-- data-scaling-ratio="${0}" data-buy-text="${0}" data-request-text="${0}"-->
				<div class="gallery__line">
					<a
						class="gallery__line__item"
						style="
							aspect-ratio:${item.image.ratio / 100};
							width:${item.image.ratio}px;
							flex:${item.image.ratio}px;
							flex-basis:${item.image.ratio}px;
							flex-grow:${item.image.ratio};
							flex-shrink:${item.image.ratio};
					">
						<!-- img
							onclick="openModalGallery(${0});// fix later"
							data-title="${item.title}"
							data-href="${data.website.url}/artwork/${this.slug(item.title)}-${item.hash}"
							data-src="${data.website.url}${item.image.large}"
							id="${0}"
							class="gallery__preview" -->

						<img style="cursor:default;outline:none" class="gallery__preview"src="${data.website.url}${item.image.full}
						">
					</a>
				</div>
			</div>`;
	}
}

module.exports = Test;