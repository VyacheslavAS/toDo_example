function supportsHtml5Storage() {
    try {
        return window && window.localStorage !== null;
    } catch (exception) {
        return false;
    }
}

export function setItem(key, value) {
    if (supportsHtml5Storage()) {
        localStorage.setItem(key, value);
        return true;
    } else {
        return false;
    }
}

export function getItem(key) {
    if (supportsHtml5Storage()) {
        return localStorage.getItem(key);
    } else {
        return false;
    }
}

export function removeItem(key) {
    if (supportsHtml5Storage()) {
        return localStorage.removeItem(key);
    } else {
        return false;
    }
}
