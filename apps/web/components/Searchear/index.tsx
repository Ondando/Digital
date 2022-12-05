'use client';

import L, { ELanguages } from './../../languages';
import { useState } from 'react';
import { TextInputDefault } from 'ui';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Searcher() {
    const [Value, setValue] = useState();
    console.log(Value);
    return (
        <div className=" m-1 flex flex-row rounded border border-solid border-black p-1">
            <TextInputDefault EvtOnChange={setValue} PlaceHolder={L(ELanguages.PT)['Search...']} />
            <AiOutlineSearch size={24} />
        </div>
    );
}
