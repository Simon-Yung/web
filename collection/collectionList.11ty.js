class Test {
    data() {
		return {
			title: "ARTISTE PEINTRE CONTEMPORAIN",
			description: "Artiste français contemporain, peintre moderne et abstrait. Il sait restituer ses expériences et rencontres passées qui l'ont inspiré. Les couleurs et les matières qui constituent son travail sont l'humeur de ses moments.",
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
			<img
				id="BG_${-1}"
				class="backgroundImage"
				src="${data.website.url}/includes/assets/images/lichta.jpg"
			>
			<a
				style="margin-bottom:0.75rem;"
				data-bg-id="BG_${-1}"
				href="${data.website.url}/bio/" 
				class="chapterList__chapter"
			>
			ARTISTE PEINTRE CONTEMPORAIN
			</a>
			<hr>
			${chapters}
			<hr style="margin-top:1.25rem">
			</nav>`
	}
}


module.exports = Test;