<template>
	<div class="app">
		<Header />

		<div class="container">
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
export default {
	data() {
		return {
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
			directorySections: [],
		};
	},
	async mounted() {
		this.directorySections = await this.$axios.$get('/DirectorySections.json');
	},
};
</script>
