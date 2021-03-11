<template>
  <div class="Login">
    <b-container>
      <b-card bg-variant="dark" text-variant="white" class="text-center" title="LOGIN">
        <b-row class="text-center">
          <b-col></b-col>
          <b-col class="8">
            <b-card-text>
              <b-form @submit.stop.prevent>
                <label for="text-password">Email</label>
                <b-form-input
                  type="email"
                  id="text-email"
                  aria-describedby="password-help-block"
                ></b-form-input>
              </b-form>
            </b-card-text>
          </b-col>
          <b-col></b-col>
        </b-row>
        <br>
        <b-row class="text-center">
          <b-col></b-col>
          <b-col class="8">
            <b-card-text>
              <b-form @submit.stop.prevent>
                <label for="text-password">Password</label>
                <b-form-input
                  type="password"
                  id="text-password"
                  aria-describedby="password-help-block"
                ></b-form-input>
              </b-form>
            </b-card-text>
          </b-col>
          <b-col></b-col>
        </b-row>
        <br >
        <b-button href="#" variant="info">Login</b-button>&nbsp;
        <router-link to="/register" class="btn btn-outline-primary">Sign in now</router-link>
      </b-card>
    </b-container>
  </div>
</template>