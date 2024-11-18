export default {
  data() {
    return {
      name: "",
      email: "",
      emailError: "",
      message: "",
      domain: "www.reformedtech.ca",
      success: "",
      errors: [],
      phone: "",
      budget: "",
      errorFields: [],
      nameCount: 0,
      commentCount: 0,
      emailCount: 0,
      serviceCount: 0,
      phoneCount: 0,
      budgetCount: 0,
      showErrorModal: false,
      errorMsg: "",
      showSuccessModal: false,
      loading: false,
      services: [],
      servicesList: [
        "Offshore Team",
        "UI/UX design",
        "eCommerce Solution",
        "Website development",
        "Devops solutions",
        "Mobile app development",
        "Digital marketing",
        "Other"
      ],
    }
  },
  computed: {
    textState() {
      return this.hasTextErrorMsg ? false : !this.text ? null : true;
    },
    websiteLinkState() {
      return this.hasWebsiteLinkErrorMsg ? false : !this.websiteLink ? null : true;
    },
    businessNameState() {
      return this.hasBusinessNameErrorMsg ? false : !this.businessName ? null : true;
    },
    phoneState() {
      return this.hasPhoneErrorMsg ? false : !this.phone ? null : true;
    },

    budgetState() {
      return this.hasBudgetErrorMsg ? false : !this.budget ? null : true;
    },

    nameState() {
      return this.hasNameErrorMsg ? false : !this.name && !this.nameCount ? null : this.name ? true : !this.nameCount ? true : false;
    },
    serviceState() {
      return this.hasServiceErrorMsg ? false : !this.service && !this.serviceCount ? null : this.service ? true : !this.serviceCount ? true : false;
    },
    commentState() {
      return this.hasMessageErrorMsg ? false : !this.message && !this.commentCount ? null : this.message ? true : !this.commentCount ? true : false;
    },
    checkFormValidationData() {
      return this.name && this.email && this.message ? true : false;
    },
    hasEmailErrorMsg() {
      return this.errors && this.errors.email;
    },
    hasPhoneErrorMsg() {
      return this.errors && this.errors.phone ? true : false;
    },
    hasBudgetErrorMsg() {
      return this.errors && this.errors.budget ? true : false;
    },
    hasBusinessNameErrorMsg() {
      return this.errors && this.errors.businessName;
    },
    hasNameErrorMsg() {
      return this.errors && this.errors.name;
    },
    hasHaveWebsiteErrorMsg() {
      return this.errors && this.errors.haveWebsite;
    },
    hasWebsiteLinkErrorMsg() {
      return this.errors && this.errors.websiteLink
    },
    hasServiceErrorMsg() {
      return this.errors && this.errors.service;
    },
    hasTextErrorMsg() {
      return this.errors && this.errors.text;
    },
    hasMessageErrorMsg() {
      return this.errors && this.errors.message;
    },
    emailState() {
      return !this.email && !this.emailCount ? null : this.hasEmailErrorMsg ? false :  this.checkEmail(this.email)
        ? true
        : !this.emailCount
          ? true
          : false;
    },
  },
  methods: {
    validateEmail() {
      if (this.email === "") {
        this.emailError = "Please enter an email";
      } else if (!this.checkEmail(this.email)) {
        this.emailError = "Please enter a valid email";
      } else {
        this.emailError = "";
      }
    },
    checkEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    onToggle() {
      this.showSuccessModal = !this.showSuccessModal;
  },
    nameEnter() {
      this.nameCount++;
    },
    commentEnter() {
      this.commentCount++;
    },
    saveData(e) {
      this.errors = [];
      e.preventDefault();
      fetch("https://ms-contact.myrft.xyz/send", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
          phone: this.phone,
          budget: this.budget,
          services: this.services,
          toEmail: "contact@reformedtech.ca"
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data && data.data) {
            this.showSuccessModal = true;
            setTimeout(() => {
              this.showSuccessModal = false;
            }, 1400);
            this.setFormDataEmpty();
          }
          if (data && data.errors) {
            this.setErrorMsg("Something went wrong");
            this.errors = { ...data.errors };
            this.nameCount++;
            this.commentCount++;
            this.emailCount++;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        }).finally(() => {
          this.loading = false;
        })
    },
    makeToast(variant = null, message = null) {
      this.$bvToast.toast(message, {
        variant: variant,
        solid: true,
        noCloseButton: true,
      });
    },
    setCountEmpty() {
      this.nameCount = 0;
      this.commentCount = 0;
      this.emailCount = 0;
      this.serviceCount = 0;
    },
    setFormDataEmpty() {
      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
    },
    emailEnter() {
      this.emailCount++;
    },
    nameEnter() {
      this.nameCount++;
    },
    commentEnter() {
      this.commentCount++;
    },
    setFormDataEmpty() {
      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
      this.budget = "";
    },
    emailEnter() {
      this.emailCount++;
    },
    phoneEnter() {
      this.phoneCount++;
    },
    budgetEnter() {
      this.budgetEnter++;
    },
    serviceEnter() {
      this.serviceCount++;
    },
    postData(e) {
      this.setCountEmpty();
      if (this.email === "") {
        this.emailError = "Please enter an email";
      }
      if (this.checkFormValidationData) {
        this.loading = true;
        this.errors = {};
        this.saveData(e);
      } else {
        this.setErrorMsg("Please fill all required fields");
        this.nameCount++;
        this.commentCount++;
        this.emailCount++;
      }

      // this.saveData(e);
    },
    setErrorMsg(msg) {
      this.errorMsg = msg;
      this.showErrorModal = true;
      setTimeout(() => {
        this.showErrorModal = false;
      }, 2000);

    }


  }

}