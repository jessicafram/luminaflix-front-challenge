function qs(selector, scope = document) {
    return scope.querySelector(selector);
}

function qsa(selector, scope = document) {
    return Array.from(scope.querySelectorAll(selector));
}

function createElement(tag, className = "", content = "") {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (content) {
        element.innerHTML = content;
    }

    return element;
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key, fallback = []) {
    const stored = localStorage.getItem(key);

    if (!stored) {
        return fallback;
    }

    try {
        return JSON.parse(stored);
    } catch (error) {
        return fallback;
    }
}