const listeners = new Set();
let currentPage = 'home';

export function navigateTo(pageId) {
    currentPage = pageId;
    listeners.forEach(fn => fn(pageId));
}

export function getCurrentPage() {
    return currentPage;
}

export function onNavigate(handler) {
    listeners.add(handler);
    return () => listeners.delete(handler);
}