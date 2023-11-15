import { useState, type FC } from 'react';
import { ColorInput } from './components/ColorInput';
export const ContrastChecker: FC = () => {
    const [foreGround, setForeGround] = useState('#ff0019');
    const [backGround, setBackGround] = useState('#ff0019');

    const handleChangeForeGround = (val: string) => {
        setForeGround(val);
    };
    const handleChangeBackGround = (val: string) => {
        setBackGround(val);
    };

    return (
        <>
            <h1 className="m-auto text-xl">Contrast Checker</h1>
            <div className="flex flex-row items-center justify-center shadow-md  rounded-lg w-fit m-auto p-4 gap-6">
                <ColorInput label="Background" onChangeVal={handleChangeForeGround} defaultVal="#ff0019"></ColorInput>
                <ColorInput label="Foreground" onChangeVal={handleChangeBackGround} defaultVal="#ff0019"></ColorInput>
            </div>
        </>
    );
};
