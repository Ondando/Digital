import pt_pt from './pt_pt.json';
import en_us from './en_us.json';

const Pt = pt_pt;
const En = en_us;

export enum ELanguages {
  PT,
  EN,
}

export default function L(currentLanguage: ELanguages) {
  const l = currentLanguage === ELanguages.EN ? En : Pt;
  return l;
}
