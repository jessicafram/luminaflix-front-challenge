const SETTINGS_STORAGE_KEY = "luminaflix-view-mode";

window.initSettings = function () {
    const settingsToggle = document.getElementById("settings-toggle");
    const settingsPanel = document.getElementById("settings-panel");
    const settingsClose = document.getElementById("settings-close");
    const settingsOptions = document.querySelectorAll(".settings-option");

    if (!settingsToggle || !settingsPanel) {
        return;
    }

    settingsToggle.addEventListener("click", function () {
        const isActive = settingsPanel.classList.toggle("active");
        settingsPanel.setAttribute("aria-hidden", String(!isActive));
    });

    if (settingsClose) {
        settingsClose.addEventListener("click", function () {
            settingsPanel.classList.remove("active");
            settingsPanel.setAttribute("aria-hidden", "true");
        });
    }

    settingsOptions.forEach((button) => {
        button.addEventListener("click", function () {
            const selectedView = this.dataset.view;

            if (!selectedView) return;

            window.applyViewMode(selectedView);
            localStorage.setItem(SETTINGS_STORAGE_KEY, selectedView);
            window.highlightSelectedView(selectedView);
        });
    });

    document.addEventListener("click", function (event) {
        const clickedInsidePanel = settingsPanel.contains(event.target);
        const clickedToggle = settingsToggle.contains(event.target);

        if (!clickedInsidePanel && !clickedToggle) {
            settingsPanel.classList.remove("active");
            settingsPanel.setAttribute("aria-hidden", "true");
        }
    });

    const savedView = localStorage.getItem(SETTINGS_STORAGE_KEY) || "default";
    window.applyViewMode(savedView);
    window.highlightSelectedView(savedView);
};

window.applyViewMode = function (mode) {
    document.body.classList.remove(
        "view-default",
        "view-compact",
        "view-cinematic"
    );

    if (mode === "compact") {
        document.body.classList.add("view-compact");
    } else if (mode === "cinematic") {
        document.body.classList.add("view-cinematic");
    } else {
        document.body.classList.add("view-default");
    }
};

window.highlightSelectedView = function (mode) {
    const settingsOptions = document.querySelectorAll(".settings-option");

    settingsOptions.forEach((button) => {
        button.classList.toggle("active", button.dataset.view === mode);
    });
};