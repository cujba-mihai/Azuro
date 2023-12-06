import * as Localization from 'expo-localization';
import { I18n } from "i18n-js";
import en from "./locale/en.json";
import ro from "./locale/ro.json";
import ru from "./locale/ru.json";
import { useRecoilValue } from 'recoil';
import { languageState } from '../src/atoms/language'; // Adjust the import path as needed

const i18n = new I18n({
    en,
    ro,
    ru
});

// Component to update the locale based on the Recoil state
export const LocalizedApp = () => {
  const currentLanguage = useRecoilValue(languageState);
  i18n.locale = currentLanguage || Localization.locale;

  return null; // This component does not render anything
};

export default i18n;
