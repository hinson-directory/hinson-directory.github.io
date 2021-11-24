<template>
	<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mb-3">
		<div class="container d-flex justify-content-between">
			<h1 class="navbar-brand">
				Hinson Directory Generator
			</h1>
			<div role="group"
				class="btn-group">
				<button type="button"
					class="btn btn-primary"
					@click="generatePdf">
					Generate PDF
				</button>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	methods: {
		generatePdf() {
			this.$emit('generatePdf');
		},
	}
};
</script>
