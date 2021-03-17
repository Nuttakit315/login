<template>
  <form action="/action_page.php" class="container">
    <h1>Login</h1>
    <b-form @submit.stop.prevent>
                <label for="text-password">Email</label>
                 <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="envelope"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="email"
                  id="text-email"
                  aria-describedby="password-help-block"
                ></b-form-input>
                 </b-input-group>
              </b-form>
              <b-form @submit.stop.prevent>
                <label for="text-password">Password</label>
                 <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="key"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="password"
                  id="text-password"
                  aria-describedby="password-help-block"
                ></b-form-input>
                  </b-input-group>
              </b-form>
              <br />
    <b-button variant="outline-danger" @click="login"><b-icon icon="google"></b-icon> Login with Google+</b-button
        >&nbsp;
        <!-- <button type="submit" class="btn btn-primary">Login</button>&nbsp; -->
        <router-link to="/register" class="btn btn-outline-primary">Sign in now</router-link>
  </form>
</template>

<script>
import firebase from "firebase/app";
export const auth = firebase.auth();
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  computed: {
    showErrors() {
      return this.errors;
    },
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;
          const token = credential.accessToken;
          console.log(token);
          const user = result.user;
          console.log("User = " + user);
          this.$router.replace("/Product");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log('Sign-out successful')
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        })
    },
  },
};
</script>