import { type FC, useState } from 'react';
import { ColorInput } from './components/ColorInput';
import { getContrastRatio } from './utils/colorManipulations';
export const ContrastChecker: FC = () => {
    const [foreground, setForeground] = useState('#ff0019');
    const [background, setBackGround] = useState('#ff0019');

    const handleChangeForeGround = (val: string) => {
        setForeground(val);
    };
    const handleChangeBackGround = (val: string) => {
        setBackGround(val);
    };

    const smallTextStyle = {
        background: background,
        color: foreground,
    };

    const bigTextStyle = {
        background: background,
        color: foreground,
    };

    const inputPlaceholderStyle = {
        background: background,
        color: foreground,
    };

    const contrastRatio = getContrastRatio(foreground, background);

    return (
        <div className="flex flex-col gap-10 shadow-md  rounded-lg w-full items-center justify-center p-4 ">
            <h1 className="m-auto text-xl">Contrast Checker</h1>
            <div className="flex flex-row items-center justify-center shadow-md  rounded-lg w-fit m-auto p-4 gap-6">
                <ColorInput label="Background" onChangeVal={handleChangeForeGround} defaultVal="#ff0019"></ColorInput>
                <ColorInput label="Foreground" onChangeVal={handleChangeBackGround} defaultVal="#ff0019"></ColorInput>
            </div>
            <div className="flex flex-col items-start justify-start shadow-md rounded-lg w-fit p-4 gap-6">
                <div className="w-3/4 p-2 rounded-lg" style={smallTextStyle}>
                    Small Text
                </div>
                <div className="w-3/4 p-2 rounded-lg" style={bigTextStyle}>
                    Big Text
                </div>
                <input className="w-3/4 p-2 rounded-lg" type="text" value="Input Text" style={inputPlaceholderStyle} />
                <div
                    className={
                        +contrastRatio >= 4.6
                            ? 'mt-4 border-2 border-green-500 border-solid p-2 rounded-lg'
                            : 'mt-4 border-2 border-red-500 border-solid p-2 rounded-lg'
                    }
                >
                    Contrast Ratio: {contrastRatio}
                </div>
            </div>
        </div>
    );
};
