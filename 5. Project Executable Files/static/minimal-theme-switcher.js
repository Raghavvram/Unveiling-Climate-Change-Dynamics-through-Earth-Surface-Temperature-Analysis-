/*!
 * Minimal theme switcher
 *
 * Pico.css - https://picocss.com
 * Copyright 2019-2024 - Licensed under MIT
 */

const themeSwitcher = {
    // Config
    _scheme: "auto",
    menuTarget: "details.dropdown",
    buttonsTarget: "a[data-theme-switcher]",
    buttonAttribute: "data-theme-switcher",
    rootAttribute: "class",
    localStorageKey: "preferredColorScheme",
    // Init
    init() {
        this.scheme = this.schemeFromLocalStorage;
        this.initSwitchers();
    },
    // Get color scheme from local storage
    get schemeFromLocalStorage() {
        return window.localStorage?.getItem(this.localStorageKey) ?? this._scheme;
    },
    // Preferred color scheme
    get preferredColorScheme() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    },
    // Init switchers
    initSwitchers() {
    const buttons = document.querySelectorAll(this.buttonsTarget);
    buttons.forEach((button) => {
        button.addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            // Set scheme
            this.scheme = button.getAttribute(this.buttonAttribute);
            // Close dropdown
                document.querySelector(this.menuTarget)?.removeAttribute("open");
            },
            false
        );
        });
    },
    // Set scheme
    set scheme(scheme) {
        if (scheme == "auto") {
            this._scheme = this.preferredColorScheme;
        } else if (scheme == "dark" || scheme == "light") {
            this._scheme = scheme;
        }
        this.applyScheme();
        this.schemeToLocalStorage();
    },
    // Get scheme
    get scheme() {
        return this._scheme;
    },
    // Apply scheme
    applyScheme() {
        const htmlElement = document.querySelector("html");
        if (htmlElement) {
            if (this._scheme === "dark") {
                htmlElement.classList.add("dark");
            } else { // this._scheme must be "light"
                htmlElement.classList.remove("dark");
            }
        }
    },
    // Store scheme to local storage
    schemeToLocalStorage() {
        window.localStorage?.setItem(this.localStorageKey, this.scheme);
    },
};

// Init
themeSwitcher.init();
