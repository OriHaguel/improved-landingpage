export const isMobile = () => {
    return window.matchMedia("(max-width: 768px)").matches;
};

export const getCSSVariable = (name: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export function extractNumbersAsString(rgb: string): string {
    const matches = rgb.match(/\d+/g);
    return matches ? matches.join(", ") : "";
}