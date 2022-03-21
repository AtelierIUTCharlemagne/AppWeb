<template>
  <div class="container" style="margin-top: 3em;">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header" >
				<h3>Connexion</h3>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<input type="text" class="form-control" placeholder="username">	
					</div>
					<div class="input-group form-group">
						<input type="password" class="form-control" placeholder="password">
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox">Se souvenir
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn">
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<style scoped src="@/assets/styles/login.css">
</style>

