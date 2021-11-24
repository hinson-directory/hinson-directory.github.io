<template>
	<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mb-3">
		<div class="container d-flex justify-content-between">
			<a class="navbar-brand"
				href="#">
				Hinson Directory Generator
			</a>
			<ul class="navbar-nav d-flex">
				<li class="nav-item">
					<a class="nav-link active"
						id="config-link-1"
						href="#config1">
						Config 1
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link"
						id="config-link-2"
						disabled>
						Config 2
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link"
						id="config-link-3"
						disabled>
						Config 3
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link"
						id="config-link-4"
						disabled>
						Config 4
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link"
						id="config-link-5"
						disabled>
						Config 5
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link"
						id="config-link-6"
						disabled>
						Config 6
					</a>
				</li>
			</ul>
			<div class="btn-group"
				role="group"
				id="overrides-link">
				<button type="button"
					class="btn btn-primary"
					disabled>
					Edit Overrides
				</button>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
};
</script>
