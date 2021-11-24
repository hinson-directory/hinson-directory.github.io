<template>
	<div class="app">
		<Header
			@generatePdf="generatePdf" />
		<div class="container">
			<ApiKey
				v-model="planningCenterApiKey" />
			<DirectoryConfig
			 	:config="directoryConfig "/>
			<DirectorySection
				v-for="(directorySection, index) in directorySections"
				:key="index"
				:section-id="index"
				:section="directorySection" />
		</div>
	</div>
</template>

<script>
import directorySections from '../static/DirectorySections.json';
import generatePdf from '~/plugins/GeneratePdf';

export default {
	data() {
		return {
			planningCenterApiKey: '',
			directoryConfig: {
				pageSize:	'Letter',
				margin: {
					top: 6,
					bottom: 6,
					left: 6,
					right: 6,
				},
				columnCount: 3,
				padding: {
					vertical: 8,
					gutter: 4,
					image: 2,
				},
				highlightOpacity: 0,
				font: {
					name: 'Arial Narrow',
					size: 9,
				},
				lineHeight: 4.25,
				rowHeight: 35,
			},
			directorySections: directorySections,
		};
	},
	methods: {
		generatePdf() {
			generatePdf.generate({
				config: this.directoryConfig,
				sections: this.directorySections
					.filter(section => section.includeSection)
			});
		}
	}
};
</script>
