var data = {
	"ebooks": [
		{
			"title": "PLANILHA",
			"subtitle": "Cálculos Modais",
			"text": "Garanta um melhor aproveitamento dos espaços para uma boa eficiência acústica!",
			"image": "https://d335luupugsy2.cloudfront.net/landing_page_templates/thank-you-page-kit/ebook.png",
			"textButton": "Acessar a planilha",
			"linkButton": "https://materiais.sonorizacaodeambientes.com.br/calculos-modais"
		},
		{
			"title": "GUIA",
			"subtitle": "Instalação de Som Ambiente",
			"text": "Confira dicas para executar seu projeto de sonorização de ambientes com maior eficiência e qualidade.",
			"image": "https://d335luupugsy2.cloudfront.net/landing_page_templates/thank-you-page-kit/template.png",
			"textButton": "Acessar o infográfico",
			"linkButton": "https://materiais.sonorizacaodeambientes.com.br/instalacao-som-ambiente"
		},
		{
			"title": "PLANILHA",
			"subtitle": "Instalação Acústica",
			"text": "Acesse gratuitamente esta planilha e crie uma acústica perfeita nos seus projetos de sonorização de ambientes.",
			"image": "https://d335luupugsy2.cloudfront.net/landing_page_templates/thank-you-page-kit/planilha.png",
			"textButton": "Acessar a planilha",
			"linkButton": "https://materiais.sonorizacaodeambientes.com.br/planilha-instalacao-acustica"
		}
	]
};

function init() {
	displayData(shuffle(data.ebooks));
}

var shuffle = function (array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

function displayData(suffledArray) {
	var $columns = Array.from(document.getElementsByClassName('col-sm'));

	for (ebook = 0; ebook < suffledArray.length; i++) {
		$columns.forEach(function(column, ind) {
			Array.from(column.children).forEach(function (tag, id) {
				if (id === 0) { tag.src = ebook[].image; }
				if (id === 1) { tag.innerHTML = ebook.title; }
				if (id === 2) { tag.innerHTML = ebook.subtitle; }
				if (id === 3) { tag.innerHTML = ebook.text; }
				if (id === 4) { console.log(tag); }
				return;
			});
			return;
		});
	}
}