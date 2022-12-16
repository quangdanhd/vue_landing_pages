<template>
  <div>
    <vue-top-progress ref="topProgress"></vue-top-progress>
    <div
      class="m-auto mt-3 bg-white rounded p-3 box-shadow form-validate-container"
    >
      <div class="text-center fw-bold fs-2 mb-4">Form Validate Demo</div>
      <form class="row g-3" :class="{ 'is-submit': isSubmit }">
        <div class="col-md-12">
          <label class="form-label">First Name</label>
          <input
            v-model="firstName"
            @focus="firstNameFlag = true"
            @blur="firstNameFlag = false"
            type="text"
            class="form-control"
          />
          <div
            class="small mt-1 form-validate-message"
            :class="{ active: (firstNameFlag || isSubmit) && !!firstNameMsg }"
          >
            {{ firstNameMsg }}
          </div>
        </div>
        <div class="col-md-12">
          <label class="form-label">Last Name</label>
          <input
            v-model="lastName"
            @focus="lastNameFlag = true"
            @blur="lastNameFlag = false"
            type="text"
            class="form-control"
          />
          <div
            class="small mt-1 form-validate-message"
            :class="{ active: (lastNameFlag || isSubmit) && !!lastNameMsg }"
          >
            {{ lastNameMsg }}
          </div>
        </div>
        <div class="col-md-12">
          <label class="form-label">Email</label>
          <input
            v-model="email"
            @focus="emailFlag = true"
            @blur="emailFlag = false"
            type="email"
            class="form-control"
          />
          <div
            class="small mt-1 form-validate-message"
            :class="{ active: (emailFlag || isSubmit) && !!emailMsg }"
          >
            {{ emailMsg }}
          </div>
        </div>
        <div class="col-md-12">
          <label class="form-label">Phone</label>
          <input
            v-model="phone"
            @focus="phoneFlag = true"
            @blur="phoneFlag = false"
            type="email"
            class="form-control"
            maxlength="10"
          />
          <div
            class="small mt-1 form-validate-message"
            :class="{ active: (phoneFlag || isSubmit) && !!phoneMsg }"
          >
            {{ phoneMsg }}
          </div>
        </div>
        <div class="col-md-12">
          <label class="form-label">Password</label>
          <input
            v-model="password"
            @focus="passwordFlag = true"
            @blur="passwordFlag = false"
            type="text"
            class="form-control"
          />
          <div
            class="small mt-1 form-validate-message"
            :class="{ active: (passwordFlag || isSubmit) && !!passwordMsg }"
          >
            {{ passwordMsg }}
          </div>
        </div>
        <div class="col-md-12">
          <label class="form-label">Confirm password</label>
          <input
            v-model="confirmPassword"
            @focus="confirmPasswordFlag = true"
            @blur="confirmPasswordFlag = false"
            type="text"
            class="form-control"
          />
          <div
            class="small mt-1 form-validate-message"
            :class="{
              active: (confirmPasswordFlag || isSubmit) && !!confirmPasswordMsg,
            }"
          >
            {{ confirmPasswordMsg }}
          </div>
        </div>
        <div class="col-12 text-center mt-4">
          <button
            @click="submit($event)"
            type="submit"
            class="btn btn-primary w-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Message</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Validate passed!</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTopProgress from "vue-top-progress/src/top-progress.vue";
import { Modal } from "bootstrap";

export default {
  name: "FormValidate",
  components: {
    VueTopProgress,
  },
  data() {
    return {
      modal: null,
      // first name
      firstName: null,
      firstNameMsg: null,
      firstNameFlag: false,
      // last name
      lastName: null,
      lastNameMsg: null,
      lastNameFlag: false,
      // email
      email: null,
      emailMsg: null,
      emailFlag: false,
      // phone
      phone: null,
      phoneMsg: null,
      phoneFlag: false,
      // password
      password: null,
      passwordMsg: null,
      passwordFlag: false,
      // password
      confirmPassword: null,
      confirmPasswordMsg: null,
      confirmPasswordFlag: false,
      // submit
      isSubmit: false,
    };
  },
  mounted() {
    this.$refs.topProgress.start();
    // Use setTimeout for demo
    setTimeout(() => {
      this.$refs.topProgress.done();
    }, 500);
    this.modal = new Modal(document.getElementById("staticBackdrop"));
    // this.modal.hide()
  },
  methods: {
    firstNameValid() {
      if (!this.firstName) {
        this.firstNameMsg = null;
        return;
      }
      if (this.firstName.length < 3) {
        this.firstNameMsg = "First name must be at least 3 characters.";
        return;
      }
      this.firstNameMsg = null;
    },
    lastNameValid() {
      if (!this.lastName) {
        this.lastNameMsg = null;
        return;
      }
      if (this.lastName.length < 3) {
        this.lastNameMsg = "Last name must be at least 3 characters.";
        return;
      }
      this.lastNameMsg = null;
    },
    emailValid() {
      if (!this.email) {
        this.emailMsg = null;
        return;
      }
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(this.email)) {
        this.emailMsg = "Email address is incorrect.";
        return;
      }
      const emailEndRegex = /@demo.com$/;
      if (!emailEndRegex.test(this.email)) {
        this.emailMsg = 'Email addresses must end with "@demo.com".';
        return;
      }
      this.emailMsg = null;
    },
    phoneValid() {
      if (!this.phone) {
        this.phoneMsg = null;
        return;
      }
      if (!/\d+/.test(this.phone)) {
        this.phoneMsg = "Phone numbers include numbers only.";
        return;
      }
      if (this.phone.length !== 10) {
        this.phoneMsg = "Phone number must have 10 digits.";
        return;
      }
      if (!/^084/.test(this.phone)) {
        this.phoneMsg = 'Phone number must start with "084".';
        return;
      }
      this.phoneMsg = null;
    },
    passwordValid() {
      if (!this.password) {
        this.passwordMsg = null;
        return;
      }
      if (this.password.length < 8) {
        this.passwordMsg = "Password must be at least 10 characters.";
        return;
      }
      if (!/[a-z]/.test(this.password)) {
        this.passwordMsg = "Password must contain at least 1 lowercase letter.";
        return;
      }
      if (!/[0-9]/.test(this.password)) {
        this.passwordMsg = "Password must have at least 1 digit.";
        return;
      }
      if (!/[A-Z]/.test(this.password)) {
        this.passwordMsg = "Password must have at least 1 uppercase letter.";
        return;
      }
      if (!/[!@#$%^&*]/.test(this.password)) {
        this.passwordMsg =
          "Password must contain at least 1 special character.";
        return;
      }
      this.passwordMsg = null;
    },
    confirmPasswordValid() {
      if (!this.confirmPassword) {
        this.confirmPasswordMsg = null;
        return;
      }
      if (this.confirmPassword !== this.password) {
        this.confirmPasswordMsg = "Confirm password does not match.";
        return;
      }
      this.confirmPasswordMsg = null;
    },
    submit(e) {
      e.preventDefault();
      this.isSubmit = true;
      if (!this.firstName) {
        this.firstNameMsg = "First name cannot be empty.";
      }
      // if (!this.lastName) {
      // }
      if (!this.email) {
        this.emailMsg = "Email cannot be empty.";
      }
      // if (!this.phone) {
      // }
      if (!this.password) {
        this.passwordMsg = "Password cannot be empty.";
      } else {
        if (!this.confirmPassword) {
          this.confirmPasswordMsg = "Confirm password cannot be empty.";
        }
      }
      let valid = true;
      if (this.firstNameMsg) {
        valid = false;
      }
      if (this.lastNameMsg) {
        valid = false;
      }
      if (this.emailMsg) {
        valid = false;
      }
      if (this.phoneMsg) {
        valid = false;
      }
      if (this.passwordMsg) {
        valid = false;
      }
      if (this.confirmPasswordMsg) {
        valid = false;
      }
      if (valid) {
        this.modal.show();
      }
    },
  },
  watch: {
    firstName() {
      this.firstNameValid();
    },
    lastName() {
      this.lastNameValid();
    },
    email() {
      this.emailValid();
    },
    phone() {
      this.phoneValid();
    },
    password() {
      this.passwordValid();
    },
    confirmPassword() {
      this.confirmPasswordValid();
    },
  },
};
</script>
