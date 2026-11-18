/* ==========================================================================
   Siva Sanjay — portfolio scripts
   Vanilla JS, no dependencies, no tracking.
   ========================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --------------------------- Mobile navigation -------------------------- */
  var nav = document.querySelector(".nav");
  var navToggle = document.querySelector(".nav-toggle");

  if (nav && navToggle) {
    var setNav = function (open) {
      nav.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    navToggle.addEventListener("click", function () {
      setNav(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () { setNav(false); });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setNav(false);
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target)) setNav(false);
    });
  }

  /* ----------------------------- Header shadow ---------------------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* --------------------------- Reveal on scroll --------------------------- */
  var revealables = document.querySelectorAll("[data-reveal]");

  if (revealables.length) {
    if ("IntersectionObserver" in window && !reduceMotion) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

      revealables.forEach(function (element, index) {
        element.style.transitionDelay = (index % 3) * 70 + "ms";
        revealObserver.observe(element);
      });
    } else {
      revealables.forEach(function (element) {
        element.classList.add("is-visible");
      });
    }
  }

  /* ---------------------------- Active nav link --------------------------- */
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));

  if (navAnchors.length && "IntersectionObserver" in window) {
    var watched = navAnchors
      .map(function (anchor) {
        var target = document.querySelector(anchor.getAttribute("href"));
        return target ? { anchor: anchor, section: target } : null;
      })
      .filter(Boolean);

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        watched.forEach(function (pair) {
          pair.anchor.classList.toggle("is-active", pair.section === entry.target);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    watched.forEach(function (pair) { sectionObserver.observe(pair.section); });
  }

  /* ------------------------- Hero background video ------------------------ */
  var heroVideo = document.querySelector("[data-hero-video]");

  if (heroVideo) {
    if (reduceMotion) {
      heroVideo.remove();
    } else {
      var playHero = function () {
        var attempt = heroVideo.play();
        if (attempt && typeof attempt.catch === "function") {
          attempt.catch(function () { heroVideo.style.display = "none"; });
        }
      };
      playHero();
      window.addEventListener("load", playHero, { once: true });
    }
  }

  /* -------------------------- Click-to-play demos ------------------------- */
  document.querySelectorAll("[data-video-frame]").forEach(function (frame) {
    var video = frame.querySelector("video");
    var button = frame.querySelector(".play-button");
    if (!video || !button) return;

    var start = function () {
      frame.classList.add("is-playing");
      video.controls = true;
      var attempt = video.play();
      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(function () { /* native controls stay available */ });
      }
    };

    button.addEventListener("click", start);
    video.addEventListener("click", function () {
      if (video.paused) start();
    });
    video.addEventListener("ended", function () {
      frame.classList.remove("is-playing");
      video.controls = false;
    });
  });

  /* ------------------------------ Copy email ------------------------------ */
  document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.addEventListener("click", function () {
      var value = button.getAttribute("data-copy");
      var label = button.querySelector("[data-copy-label]") || button;
      var original = label.textContent;

      var done = function () {
        label.textContent = "Copied";
        button.classList.add("is-copied");
        setTimeout(function () {
          label.textContent = original;
          button.classList.remove("is-copied");
        }, 1800);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(value).then(done).catch(done);
      } else {
        var helper = document.createElement("textarea");
        helper.value = value;
        helper.setAttribute("readonly", "");
        helper.style.position = "absolute";
        helper.style.left = "-9999px";
        document.body.appendChild(helper);
        helper.select();
        try { document.execCommand("copy"); } catch (error) { /* ignore */ }
        document.body.removeChild(helper);
        done();
      }
    });
  });

  /* -------------------------------- Forms --------------------------------- */
  document.querySelectorAll("form[data-ajax]").forEach(function (form) {
    var status = form.querySelector("[data-form-status]");
    var submit = form.querySelector('button[type="submit"]') || form.querySelector("button");
    var submitLabel = submit ? submit.textContent : "";

    var say = function (message, state) {
      if (!status) return;
      status.textContent = message;
      status.setAttribute("data-state", state || "info");
    };

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (submit) {
        submit.disabled = true;
        submit.textContent = "Sending…";
      }
      say("Sending…", "info");

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Request failed");
          form.reset();
          say("Thanks — message sent. I usually reply within a day.", "success");
        })
        .catch(function () {
          say("That didn't go through. Email me at tsivasanjay@gmail.com instead.", "error");
        })
        .finally(function () {
          if (submit) {
            submit.disabled = false;
            submit.textContent = submitLabel;
          }
        });
    });
  });

  /* ------------------------------- Footer year ---------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });
})();
