interface IDefault {
    PlaceHolder: string;
    EvtOnChange: any;
}
export const TextInputDefault = ({ EvtOnChange, PlaceHolder }: IDefault) => {
    return <input placeholder={PlaceHolder} onChange={EvtOnChange} className="h-full w-full" />;
};
