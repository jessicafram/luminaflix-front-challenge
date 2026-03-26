function initSplash(onFinish) {
    const splash = document.getElementById("splash-screen");
    const brandEl = document.getElementById("splash-brand-text");
    const cursorEl = document.getElementById("splash-cursor");

    if (!splash || !brandEl) {
        onFinish();
        return;
    }

    let visibleLetters = 0;
    const name = BRAND_NAME;

    function typeNext() {
        if (visibleLetters < name.length) {
            visibleLetters++;
            brandEl.textContent = name.slice(0, visibleLetters);
            setTimeout(typeNext, 140);
        } else {
            setTimeout(() => {
                if (cursorEl) cursorEl.style.display = "none";
                splash.classList.add("fade-out");
                setTimeout(onFinish, 800);
            }, 1200);
        }
    }

    typeNext();
}
