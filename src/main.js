// Lightweight landing page interaction with Alpine.js
// Edit this section according to your template needs

document.addEventListener("alpine:init", () => {
  Alpine.data("mobileMenu", () => ({
    open: false,
    toggle() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    },
  }));

  Alpine.data("pricingToggle", () => ({
    monthly: true,
    toggle() {
      this.monthly = !this.monthly;
    },
  }));

  Alpine.data("faq", () => ({
    open: null,
    toggle(index) {
      this.open = this.open === index ? null : index;
    },
  }));

  Alpine.data("emailForm", () => ({
    submitting: false,
    status: null,
    async submit(e) {
      e.preventDefault();
      this.submitting = true;
      this.status = null;

      const form = e.target;
      const email = form.elements.email.value;

      // Example simulation of sending to backend. Replace with your email endpoint.
      await new Promise((resolve) => setTimeout(resolve, 1200));

      this.submitting = false;
      this.status = "success";
      form.reset();

      setTimeout(() => {
        this.status = null;
      }, 5000);
    },
  }));
});
