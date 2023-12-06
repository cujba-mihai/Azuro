import i18n from "./index";
import { useRecoilState } from 'recoil';
import { languageState } from '../src/atoms/language';


const getTranslation = (name: 'string') => {
  const [ language ] = useRecoilState(languageState);

    return i18n.t(name, {locale: language});
};

export {getTranslation};