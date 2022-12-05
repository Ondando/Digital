import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

interface IIconButton {
    evt: any;
    size: number;
}

export const TabButton = ({ size, evt }: IIconButton) => {
    return (
        <div onClick={evt}>
            <AiOutlineMenu size={size} />
        </div>
    );
};
