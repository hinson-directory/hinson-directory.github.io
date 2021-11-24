import pdfMake from 'pdfmake/build/pdfmake';

export default {
	generate({ config, sections }) {
		console.log(`GENERATE - ${sections.length} sections`);
		console.log(config);
		console.log(sections);

		pdfMake.fonts = {
			Roboto: {
				normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
				bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
				italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
				bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
			},
		};

		const documentDefinition = {
			defaultStyle: {
				font: 'Roboto',
			},
			content: [
				'This is a first paragraph.',
				'This is a second paragraph.',
				'This is a third paragraph. This is a third paragraph. This is a third paragraph. This is a third paragraph. This is a third paragraph. This is a third paragraph. This is a third paragraph. This is a third paragraph. This is a third paragraph. ',
			],
		};

		pdfMake.createPdf(documentDefinition)
			.open();
	},
};
