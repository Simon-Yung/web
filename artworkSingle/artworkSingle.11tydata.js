module.exports = {
	eleventyComputed: {
		title: data => `${data.pagination.items[0].title}`,
		description: data => `${data.pagination.items[0].description}`,
		image: data => `${data.pagination.items[0].image.small}`
	}
};