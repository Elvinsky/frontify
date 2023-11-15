import { FC, useCallback, useState } from 'react';
import { IColorInputProps } from '../types/types';

export const ColorInput: FC<IColorInputProps> = ({ defaultVal, label, onChangeVal }) => {
    const [color, setColor] = useState<string>(defaultVal);
    const handleColorChange = useCallback(
        (event: any) => {
            const target = event.target as HTMLInputElement;
            setColor(target.value);
            onChangeVal(target.value);
        },
        [onChangeVal],
    );

    return (
        <div className="flex flex-col p-4 rounded-md items-center justify-center w-full border border-black border-solid">
            <h1 className="text-lg">{label}</h1>
            <div className="flex flex-row items-center gap-4">
                <input
                    type="text"
                    value={color}
                    name="colorname"
                    id="colorname"
                    onChange={handleColorChange}
                    className="w-fit border border-black border-solid p-1"
                />
                <input
                    type="color"
                    value={color}
                    name="colorpick"
                    id="colorpick"
                    onChange={handleColorChange}
                    className="bg-transparent cursor-pointer"
                ></input>
            </div>
        </div>
    );
};
