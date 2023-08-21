export const setBackground = (backgroundURL?: string) => {
    const root = document.getElementById("root") as HTMLElement;

    if (backgroundURL) {
        root.style.background = `url(${backgroundURL}) no-repeat center center fixed`;
        root.style.backgroundSize = `cover`;
    } else {
        root.classList.add("root--fallback-background");
    }
};

export default setBackground;
