<template>
  <div class="register">
    <b-container>
      <b-card bg-variant="dark" class="text-center" text-variant="white" title="Register">
        <b-form @submit="onSubmit" v-if="show">
          <b-row>
            <b-col cols="6">
              <b-form-group label="Email address" label-for="input-1">
                <b-form-input v-model="email" type="email" placeholder="Enter email" required></b-form-input>
              </b-form-group>
            </b-col>
            <b-col class="6">
              <b-form-group label="Password" label-for="input-1">
                <b-form-input v-model="pass" type="password" placeholder="Enter password" required></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="6">
              <b-form-group id="input-group-2" label="Name" label-for="input-2">
                <b-form-input v-model="name" placeholder="Enter name" required></b-form-input>
              </b-form-group>
            </b-col>
            <b-col class="6">
              <b-form-group label="Surname" label-for="input-2">
                <b-form-input v-model="surname" placeholder="Enter surname" required></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="3">
              <b-form-group label="Phone" label-for="input-3">
                <b-form-input v-model="phone" placeholder="Enter phone number" type="tel" required></b-form-input>
              </b-form-group>
            </b-col>
            <b-col class="3">
              <b-form-group label="Gender" label-for="input-3">
                <select class="form-control" v-model="gender" ><option>Male</option><option>Female</option><option>Other</option></select>
              </b-form-group>
            </b-col>
          </b-row>
          <br>
          <b-button variant="success" @click="addData()"> Submit </b-button>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export const db = firebase.firestore();
import firebase from "firebase/app";
export default {
  data () {
    return {
      data:[],
      show: true,
    };
  },
  methods: {
    addData() {
      const data = {
        Email: this.email,
        First_Name: this.name,
        Last_Name: this.surname,
        Password: this.pass,
        Phone: this.phone,
        Gender: this.gender,
      };
      db.collection('User')
        .doc('infouser')
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> User');
        })
        .catch(function (error) {
          console.error('Error writing document: ', error);
        });
      const dataText = {
        Email: this.email,
        First_Name: this.name,
        Last_Name: this.surname,
        Password: this.pass,
        Phone: this.phone,
        Gender: this.gender,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection('MyText')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyText');
        })
        .catch(function (error) {
          console.error('Error writing document: ', error);
        });
    },
    reset() {},
  },
};
</script>