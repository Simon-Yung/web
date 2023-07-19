module.exports = {
	eleventyComputed: {
		title: data => `${data.pagination.items[0].title}`,
		description: data => `${data.pagination.items[0].description.substring(0, 200).replace(/<\S+\/?>/g, '')} [...]`,
		image: data => `${data.pagination.items[0].artworks[0].image.small}`
	}
};