class Test {
	data() {
		return {
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
			<!doctype html>
			<html style="scroll-behavior: smooth;">
				<head>
					<link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
					<link rel="stylesheet" href="${data.website.url}/includes/assets/css/styles.css">
					<script src="${data.website.url}/includes/assets/js/dynamic_background.js" defer></script>
				</head>
				<body class="homePage">
					<!--<img class="background" src="{{website.url}}/includes/assets/images/HORIZON.jpg">-->
					<!-- HEADER -->
						<header id="header" class="header">
						<div class="header__inner">
						<a class="header__logo" href="${data.website.url}">LICHTA</a>
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
					<nav class="chapterList">
					${chapters}
					</nav>
					${data.componentsData.footer}
				</body>
			</html>`
	}
}


module.exports = Test;