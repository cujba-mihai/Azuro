import { StatusBar } from 'expo-status-bar';
import * as S from './styles';
import { useRecoilState } from 'recoil';
import { languageState } from '../../atoms/language';
import i18n from '../../../i18n';
import { BottomNavbar } from '../BottomNavbar';
import assets from 'assets/index';

const languages = ['en', 'ro', 'ru'];

export default function App() {

  const [language, setLanguage] = useRecoilState(languageState);

  return (
    <S.Wrapper>
      <StatusBar style="light" />

      <S.Title>Azuro - Your Insurance Companion</S.Title>

      <S.Text>{i18n.t('greet')}, John!</S.Text>
      <S.Text>Manage all your insurance needs with ease.</S.Text>

      <S.Image source={assets.icon} width={50} height={50} />
      <S.Text>Recoil language: ${language}</S.Text>
      <S.Button onPress={() => {
        const languageIndex = languages.indexOf(language);

        setLanguage(languages[languageIndex + 1] || languages[0])
      }} title='Get Started' />

      <BottomNavbar />
    </S.Wrapper>
  );
}
