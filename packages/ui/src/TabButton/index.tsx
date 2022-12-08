import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

interface IIconButton {
    size: number;
}

export const TabButton = ({ size }: IIconButton) => {
    return (
        <div>
            <AiOutlineMenu size={size} />
        </div>
    );
};
