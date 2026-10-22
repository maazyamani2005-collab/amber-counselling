// Amber Coaching & Counselling Services - small site scripts
(function () {
  "use strict";

  // ----- Mobile menu -----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  // ----- Gentle fade-in as sections scroll into view -----
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("visible"); });
  }

  // ----- Footer year -----
  var yr = document.getElementById("year");
  if (yr) { yr.textContent = new Date().getFullYear(); }

  // ----- Service request form: opens the visitor's email app with the request filled in -----
  // Every field's "name" attribute becomes a line in the email, so new fields
  // can be added in contact.html without changing this script.
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var lines = [];
      var message = "";
      Array.prototype.forEach.call(form.elements, function (el) {
        if (!el.name) { return; }
        var value = (el.value || "").trim();
        if (el.name === "Message") { message = value; return; }
        lines.push(el.name + ": " + (value || "not provided"));
      });

      var who = form.elements["Name"] ? form.elements["Name"].value.trim() : "";
      var subject = "Service request" + (who ? " from " + who : "");
      var body = lines.join("\n") + "\n\n" + message;

      window.location.href =
        "mailto:" + form.dataset.to +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      var ok = document.getElementById("form-ok");
      if (ok) { ok.hidden = false; }
    });
  }
})();
