document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('last-modified').textContent = document.lastModified;
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {


        const lazyLoad = function() {
            if (active === false) {
                active = true;

                setTimeout(function() {
                    lazyImages.forEach(function(lazyImage) {
                        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.remove("lazy");

                            lazyImages = lazyImages.filter(function(image) {
                                return image !== lazyImage;
                            });

                            if (lazyImages.length === 0) {
                                document.removeEventListener("scroll", lazyLoad);
                                window.removeEventListener("resize", lazyLoad);
                                window.removeEventListener("orientationchange", lazyLoad);
                            }
                        }
                    });

                    active = false;
                }, 200);
            }
        };

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
    }
    const visitMessage = document.getElementById("visit-message");
    const currentVisit = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
        const daysBetweenVisits = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysBetweenVisits < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysBetweenVisits === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysBetweenVisits} days ago.`;
        }
    } else {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem("lastVisit", currentVisit);
});
