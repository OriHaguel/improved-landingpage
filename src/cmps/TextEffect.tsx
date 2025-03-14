
interface StyledTextProps {
    text?: string;
    color?: string;
}

// Helper function to adjust a hex color's brightness.
// Positive 'amount' lightens the color, negative darkens it.
const adjustColor = (color: string, amount: number): string => {
    let usePound = false;
    if (color[0] === "#") {
        color = color.slice(1);
        usePound = true;
    }
    let num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    r = r > 255 ? 255 : r < 0 ? 0 : r;
    let g = ((num >> 8) & 0x00ff) + amount;
    g = g > 255 ? 255 : g < 0 ? 0 : g;
    let b = (num & 0x0000ff) + amount;
    b = b > 255 ? 255 : b < 0 ? 0 : b;
    return (usePound ? "#" : "") + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
};

const StyledText: React.FC<StyledTextProps> = ({
    text = "About Me",
    color = "#22c55e",
}) => {
    // Derive lighter and darker shades for the dots.
    const lighterColor = adjustColor(color, 40);
    const darkerColor = adjustColor(color, -40);

    return (
        <div className="flex items-center justify-center p-8 mt-8">
            <div className="relative">
                {/* Main text */}
                <h1 className="cards-text font-bold tracking-wide text-white">
                    {text}
                    {/* Underline effect with a gradient from white to the base color */}
                    <span
                        className="absolute -bottom-4 left-0 w-full h-1 rounded-full"
                        style={{ background: `linear-gradient(to right, white, ${color})` }}
                    ></span>
                </h1>

                {/* Decorative dots using derived color variations */}
                {/* <div className="absolute -right-4 -top-4 flex gap-1">
                    <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: lighterColor }}
                    ></span>
                    <span
                        className="w-2 h-2 rounded-full animate-pulse delay-100"
                        style={{ backgroundColor: color }}
                    ></span>
                    <span
                        className="w-2 h-2 rounded-full animate-pulse delay-200"
                        style={{ backgroundColor: darkerColor }}
                    ></span>
                </div> */}
            </div>
        </div>
    );
};

export default StyledText;
