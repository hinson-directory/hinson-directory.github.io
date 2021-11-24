<template>
	<div class="app">
		<Header />

		<div class="container">
			<DirectoryConfig
			 	:config="directoryConfig "/>
			<DirectorySection
				v-for="sectionId in sectionIds"
				:key="sectionId"
				:section-id="sectionId" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sectionIds: [...Array(9).keys()],
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
		};
	},
};
</script>
