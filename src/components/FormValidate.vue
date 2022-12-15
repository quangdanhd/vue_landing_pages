<template>
  <div>
    <vue-top-progress ref="topProgress"></vue-top-progress>
    <div class="m-auto mt-3 bg-white rounded p-3 box-shadow form-validate">
      <div class="text-center fw-bold fs-2 mb-4">Form Validate Demo</div>
      <form class="row g-3">
        <div class="col-md-12">
          <label class="form-label">First Name</label>
          <input v-model="firstName" type="text" class="form-control" />
          <div
            class="small text-muted mt-1 form-validate-message"
            :class="{ active: !!firstNameMsg }"
          >
            {{ firstNameMsg }}
          </div>
        </div>
        <div class="col-md-12">
          <label class="form-label">Last Name</label>
          <input v-model="lastName" type="text" class="form-control" />
          <div
            class="small text-muted mt-1 form-validate-message"
            :class="{ active: !!lastNameMsg }"
          >
            {{ lastNameMsg }}
          </div>
        </div>
        <div class="col-md-12">
          <label class="form-label">Email</label>
          <input v-model="email" type="email" class="form-control" />
          <div
            class="small text-muted mt-1 form-validate-message"
            :class="{ active: !!emailMsg }"
          >
            {{ emailMsg }}
          </div>
        </div>
        <div class="col-md-12">
          <label class="form-label">Phone</label>
          <input type="email" class="form-control" />
        </div>
        <div class="col-md-12">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" autocomplete />
        </div>
        <div class="col-md-12">
          <label class="form-label">Confirm password</label>
          <input type="password" class="form-control" autocomplete />
        </div>
        <div class="col-12 text-center mt-4">
          <button type="submit" class="btn btn-primary w-50">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import VueTopProgress from "vue-top-progress/src/top-progress.vue";

export default {
  name: "AboutPage",
  components: {
    VueTopProgress,
  },
  data() {
    return {
      firstName: null,
      firstNameMsg: null,
      lastName: null,
      lastNameMsg: null,
      email: null,
      emailMsg: null,
    };
  },
  mounted() {
    this.$refs.topProgress.start();
    // // Use setTimeout for demo
    setTimeout(() => {
      this.$refs.topProgress.done();
    }, 500);
  },
  watch: {
    firstName() {
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
    lastName() {
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
    email() {
      if (!this.email) {
        this.emailMsg = null;
        return;
      }
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  },
};
</script>
