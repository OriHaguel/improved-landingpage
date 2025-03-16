export const isMobile = () => {
    return window.matchMedia("(max-width: 768px)").matches;
};
export function numberToHover() {
    const breakpoints = [
        { width: 1000, value: 0 },
        { width: 1200, value: 90 },
        { width: 1400, value: 180 },
        { width: 1700, value: 320 },
        { width: 1920, value: 450 }
    ];

    return breakpoints.find(bp => window.matchMedia(`(max-width: ${bp.width}px)`).matches)?.value ?? 0;
}
export const getCSSVariable = (name: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export function extractNumbersAsString(rgb: string): string {
    const matches = rgb.match(/\d+/g);
    return matches ? matches.join(", ") : "";
}