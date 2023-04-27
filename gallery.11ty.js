class Test {
	data() {
		return {
			layout: 'home.njk',
			permalink: function (data) { return `/collection/` }
		};
	}

	render(data) {
		let chapters = '';
		for (let i = 0; i < data.collections.artworksCollections.length; i++) {
			chapters += `
			<img
				id="BG_${i}"
				class="backgroundImage"
				src="${data.website.url}${data.collections.artworksCollections[i].background}"
			>
			<a
				data-bg-id="BG_${i}"
				href="${data.website.url}/collection/${this.slug(data.collections.artworksCollections[i].title)}/" 
				class="chapterList__chapter"
			> 
				${data.collections.artworksCollections[i].title}
			</a>`;
		}
		return `
			<nav class="chapterList">
			${chapters}
			</nav>`
	}
}


module.exports = Test;