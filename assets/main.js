/* Thouheeth Kabir — portfolio */
(function () {
  "use strict";

  /* Live local time, always shown in the timezone I work from. */
  var clock = document.getElementById("clock");

  if (clock) {
    var fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });

    var tick = function () {
      clock.textContent = fmt.format(new Date()) + " GMT+5:30";
    };

    tick();
    // Re-sync on the minute boundary so the display never lags behind.
    setTimeout(function () {
      tick();
      setInterval(tick, 60000);
    }, (60 - new Date().getSeconds()) * 1000);
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* Staggered fade-up as sections come into view. */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) return;

  function initReveal() {
    var targets = document.querySelectorAll(".band");

    Array.prototype.forEach.call(targets, function (el) {
      el.classList.add("reveal");
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        entry.target.style.animationDelay = i * 60 + "ms";
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

    Array.prototype.forEach.call(targets, function (el) {
      io.observe(el);
    });
  }

  /* A hidden document has a 0x0 viewport, so IntersectionObserver never
     reports an intersection. Hiding sections in that state would leave the
     page blank, so wait until there is something to observe against. */
  if (document.visibilityState === "visible") {
    initReveal();
  } else {
    document.addEventListener("visibilitychange", function onShow() {
      if (document.visibilityState !== "visible") return;
      document.removeEventListener("visibilitychange", onShow);
      initReveal();
    });
  }
})();
