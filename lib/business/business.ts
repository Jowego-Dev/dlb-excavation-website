export const BUSINESS = {
  name: "DLB Excavation",

  contact: {
    phone: "(819) 111-2222",
    email: "info@dlbexcavation.com",

    get phoneHref() {
      return `tel:+1${this.phone.replace(/\D/g, "")}`;
    },

    get emailHref() {
      return `mailto:${this.email}`;
    },
  },

  address: {
    street: "123 rue Principale",
    city: "Gatineau",
    province: "QC",
    postalCode: "J9H XXX",
    country: "Canada",

    get full() {
      return `${this.street}, ${this.city}, ${this.province} ${this.postalCode}, ${this.country}`;
    },

    get partial() {
      return `${this.city}, ${this.province} ${this.postalCode}, ${this.country}`;
    },
  },
};
