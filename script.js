function setupEvidenceTraces() {
    document.querySelectorAll("[data-trace]").forEach((trace) => {
        const steps = [...trace.querySelectorAll(".trace-step")];
        const readout = trace.querySelector(".trace-readout");

        if (!steps.length || !readout) {
            return;
        }

        const selectStep = (selectedStep, moveFocus = false) => {
            const selectedIndex = steps.indexOf(selectedStep);

            steps.forEach((step, index) => {
                const isActive = step === selectedStep;
                step.classList.toggle("is-active", isActive);
                step.classList.toggle("is-complete", index < selectedIndex);
                step.setAttribute("aria-pressed", String(isActive));
                step.tabIndex = isActive ? 0 : -1;
            });

            readout.textContent = selectedStep.dataset.note || "";

            if (moveFocus) {
                selectedStep.focus();
            }
        };

        steps.forEach((step, index) => {
            step.addEventListener("click", () => selectStep(step));
            step.addEventListener("keydown", (event) => {
                const previousKeys = ["ArrowLeft", "ArrowUp"];
                const nextKeys = ["ArrowRight", "ArrowDown"];
                let nextIndex = index;

                if (previousKeys.includes(event.key)) {
                    nextIndex = (index - 1 + steps.length) % steps.length;
                } else if (nextKeys.includes(event.key)) {
                    nextIndex = (index + 1) % steps.length;
                } else if (event.key === "Home") {
                    nextIndex = 0;
                } else if (event.key === "End") {
                    nextIndex = steps.length - 1;
                } else {
                    return;
                }

                event.preventDefault();
                selectStep(steps[nextIndex], true);
            });
        });

        selectStep(steps.find((step) => step.classList.contains("is-active")) || steps[0]);
    });
}

function setupProjectReviews() {
    document.querySelectorAll(".project-review").forEach((review) => {
        const card = review.closest(".project-card");

        review.addEventListener("toggle", () => {
            card?.classList.toggle("is-expanded", review.open);
        });
    });
}

function setupMenu() {
    const nav = document.querySelector(".nav");
    const toggle = document.querySelector(".menu-toggle");
    const label = toggle?.querySelector(".menu-label");
    const links = document.getElementById("nav-links");

    if (!nav || !toggle || !label || !links) {
        return;
    }

    const setOpen = (isOpen, returnFocus = false) => {
        links.classList.toggle("is-open", isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
        label.textContent = isOpen ? "Close" : "Menu";
        document.documentElement.classList.toggle("nav-open", isOpen);

        if (returnFocus) {
            toggle.focus();
        }
    };

    toggle.addEventListener("click", () => {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    links.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
            setOpen(false, true);
        }
    });

    document.addEventListener("pointerdown", (event) => {
        if (toggle.getAttribute("aria-expanded") === "true" && !nav.contains(event.target)) {
            setOpen(false);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 820 && toggle.getAttribute("aria-expanded") === "true") {
            setOpen(false);
        }
    });
}

function setupNavigationState() {
    const links = [...document.querySelectorAll(".nav-links a[data-nav]")];
    const sections = [...document.querySelectorAll("[data-nav-section]")]
        .filter((section) => section.dataset.navSection);
    const header = document.querySelector(".site-header");
    let scheduled = false;

    if (!links.length || !sections.length) {
        return;
    }

    const update = () => {
        const marker = (header?.getBoundingClientRect().height || 0) + 40;
        let activeName = "";

        sections.forEach((section) => {
            if (section.getBoundingClientRect().top <= marker) {
                activeName = section.dataset.navSection;
            }
        });

        links.forEach((link) => {
            const isCurrent = link.dataset.nav === activeName;
            link.classList.toggle("is-current", isCurrent);

            if (isCurrent) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });

        scheduled = false;
    };

    const scheduleUpdate = () => {
        if (!scheduled) {
            scheduled = true;
            window.requestAnimationFrame(update);
        }
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    update();
}

function setYear() {
    const year = document.getElementById("year");

    if (year) {
        year.textContent = String(new Date().getFullYear());
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setupEvidenceTraces();
    setupProjectReviews();
    setupMenu();
    setupNavigationState();
    setYear();
});
