    let lastScrollTop = 0; // Tracks the last scroll position

    function scrollFunction() {
        const header = document.getElementById("header");
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop < lastScrollTop) {
            // Scrolling up: Show header
            header.classList.add("visible");
        } else {
            // Scrolling down: Hide header
            header.classList.remove("visible");
        }

        // Update the last scroll position
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative values
    }

    // Attach the scroll event
    window.addEventListener("scroll", scrollFunction);