import pdfMake from 'pdfmake/build/pdfmake';

export default {
	generate({ config, sections }) {
		console.log(`GENERATE - ${sections.length} sections`);
		console.log(config);
		console.log(sections);
	},
};
