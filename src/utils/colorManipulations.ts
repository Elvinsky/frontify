export function getContrastRatio(foreground: string, background: string) {
    const lumA = getRelativeLuminance(background);
    const lumB = getRelativeLuminance(foreground);

    const contrastRatio = lumA > lumB ? (lumA + 0.05) / (lumB + 0.05) : (lumB + 0.05) / (lumA + 0.05);

    return contrastRatio.toFixed(2);
}

function getRelativeLuminance(color: string) {
    const rgba = hexToRgb(color);
    const [r, g, b] = rgba.map((val) => {
        val /= 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function hexToRgb(hex: string): number[] {
    hex = hex.replace(/^#/, '');

    const bigint = parseInt(hex, 16);

    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
}
