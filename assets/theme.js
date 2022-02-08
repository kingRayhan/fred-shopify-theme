"use strict";

Alpine.store("mobileMenu", {
  open: false,
  toggle: function toggle() {
    this.open = !this.open;
  }
});