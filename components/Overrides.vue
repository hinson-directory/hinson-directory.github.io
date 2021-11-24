<template>
	<div class="overrides container">
		<div class="mb-3">
			<h1>Overrides</h1>
			<p>
				(Delete by leaving the First Name, Last Name, and
				Birthday blank)
			</p>
			<div class="btn-group" role="group">
				<div class="btn-group" role="group">
					<button type="button"
						id="save-overrides-btn"
						class="btn btn-success"
						disabled>
						Save
					</button>
				</div>
				<div class="btn-group" role="group">
					<button type="button"
						id="add-overrides-btn"
						class="btn btn-primary">
						Add Override
					</button>
				</div>
			</div>
		</div>

		<div class="overrides">
			<div class="card override mb-3" id="override-0">
				<div class="card-body">
					<div class="row g-3 mb-3">
						<label for="key_first_name"
							class="col-sm-2 col-form-label">
							First Name
						</label>
						<div class="col-sm-10">
							<input type="text"
								id="key_first_name"
								class="form-control"
								placeholder="e.g. john"
								required>
						</div>
					</div>
					<div class="row g-3 mb-3">
						<label for="key_last_name"
							class="col-sm-2 col-form-label">
							Last Name
						</label>
						<div class="col-sm-10">
							<input type="text"
								id="key_last_name"
								class="form-control"
								placeholder="e.g. doe"
								required>
						</div>
					</div>
					<div class="row g-3 mb-3">
						<label for="key_birthday"
							class="col-sm-2 col-form-label">
							Birthday
						</label>
						<div class="col-sm-10">
							<input type="text"
								id="key_birthday"
								class="form-control"
								placeholder="e.g. 1980-01-02"
								pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">
						</div>
					</div>

					<div class="row g-3 mb-3">
						<div class="col-auto">
							<div class="form-check">
								<label for="show"
									class="form-check-label">
									Show?
								</label>
								<input type="checkbox"
									id="show"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="show_household"
									class="form-check-label">
									Show Household?
								</label>
								<input type="checkbox"
									id="show_household"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="show_children"
									class="form-check-label">
									Show Children?
								</label>
								<input type="checkbox"
									id="show_children"
									class="form-check-input"
									checked />
							</div>
						</div>
					</div>

					<div class="row g-3 mb-3">
						<div class="col-auto">
							<div class="form-check">
								<label for="job_title"
									class="form-check-label">
									Job Title?
								</label>
								<input type="checkbox"
									id="job_title"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="employer"
									class="form-check-label">
									Employer?
								</label>
								<input type="checkbox"
									id="employer"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="school"
									class="form-check-label">
									School?
								</label>
								<input type="checkbox"
									id="school"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="occupation"
									class="form-check-label">
									Occupation?
								</label>
								<input type="checkbox"
									id="occupation"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="children"
									class="form-check-label">
									Children?
								</label>
								<input type="checkbox"
									id="children"
									class="form-check-input" />
							</div>
						</div>
					</div>

					<div class="row g-3 mb-3">
						<div class="col-auto">
							<div class="form-check">
								<label for="phones"
									class="form-check-label">
									Phone #?
								</label>
								<input type="checkbox"
									id="phones"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="email"
									class="form-check-label">
									Email Address?
								</label>
								<input type="checkbox"
									id="email"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="address"
									class="form-check-label">
									Address?
								</label>
								<input type="checkbox"
									id="address"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="city"
									class="form-check-label">
									City?
								</label>
								<input type="checkbox"
									id="city"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="state"
									class="form-check-label">
									State?
								</label>
								<input type="checkbox"
									id="state"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="postal_code"
									class="form-check-label">
									Postal Code?
								</label>
								<input type="checkbox"
									id="postal_code"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="country"
									class="form-check-label">
									Country?
								</label>
								<input type="checkbox"
									id="country"
									class="form-check-input"
									checked />
							</div>
						</div>
					</div>

					<div class="row g-3 mb-3">
						<div class="col-auto">
							<div class="form-check">
								<label for="birthday"
									class="form-check-label">
									Birthday?
								</label>
								<input type="checkbox"
									id="birthday"
									class="form-check-input"
									checked />
							</div>
						</div>
						<div class="col-auto">
							<div class="form-check">
								<label for="date_joined"
									class="form-check-label">
									Date Joined?
								</label>
								<input type="checkbox"
									id="date_joined"
									class="form-check-input"
									checked />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
