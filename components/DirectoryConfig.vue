<template>
<div class="directory-config card mb-3">
	<div class="card-header">
		<h2>Config</h2>
		<span class="disclaimer">
			Unit sizes are in millimeters (mm) and font sizes are
			in points (pt)
		</span>
	</div>
	<div class="card-body">
		<div class="row g-3 mb-3">
			<div class="col">
				<label>Page Size</label>
				<input type="text"
					class="form-control"
					v-model="config.pageSize" />
			</div>
			<div class="col">
				<label>Top Margin</label>
				<input type="text"
					class="form-control"
					v-model="config.margin.top" />
			</div>
			<div class="col">
				<label>Left Margin</label>
				<input type="text"
					class="form-control"
					v-model="config.margin.left" />
			</div>
			<div class="col">
				<label>Right Margin</label>
				<input type="text"
					class="form-control"
					v-model="config.margin.right" />
			</div>
			<div class="col">
				<label>Bottom Margin</label>
				<input type="text"
					class="form-control"
					v-model="config.margin.bottom" />
			</div>
		</div>

		<div class="row g-3 mb-3">
			<div class="col">
				<label># of Columns</label>
				<input type="text"
					class="form-control"
					v-model="config.columnCount" />
			</div>
			<div class="col">
				<label>Vertical Padding</label>
				<input type="text"
					class="form-control"
					v-model="config.padding.vertical" />
			</div>
			<div class="col">
				<label>Gutter</label>
				<input type="text"
					class="form-control"
					v-model="config.padding.gutter" />
			</div>
			<div class="col">
				<label>Image Padding</label>
				<input type="text"
					id="image_config.padding"
					v-model="config.padding.image" />
			</div>
			<div class="col">
				<label>Highlight Opacity</label>
				<input type="text"
					class="form-control"
					v-model="config.highlightOpacity" />
			</div>
		</div>

		<div class="row g-3 mb-3">
			<div class="col">
				<label>Font</label>
				<input type="text"
					class="form-control"
					v-model="config.font.name" />
			</div>
			<div class="col">
				<label>Font Size</label>
				<input type="text"
					class="form-control"
					v-model="config.font.size" />
			</div>
			<div class="col">
				<label>Line Height</label>
				<input type="text"
					class="form-control"
					v-model="config.lineHeight" />
			</div>
			<div class="col">
				<label>Row Height</label>
				<input type="text"
					class="form-control"
					v-model="config.rowHeight" />
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	props: {
		config: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
.disclaimer {
	color: gray;
	font-size: small;
	font-style: italic;
}
</style>
