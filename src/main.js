// Landing page interaksi ringan dengan Alpine.js
// Edit bagian ini sesuai kebutuhan template Anda

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

      // Contoh simulasi kirim ke backend. Ganti dengan endpoint email Anda.
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
