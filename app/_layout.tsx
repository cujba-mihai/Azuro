import React, { useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';
import { RecoilRoot } from 'recoil';
import { Slot } from 'expo-router';
import { LocalizedApp } from '../i18n';
import styled, { ThemeProvider, css } from 'styled-components/native'
import { SplashScreen as SplashScreenComponent } from 'components/SplashScreen'
import { Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { PaperProvider } from 'react-native-paper';
import theme from 'styles/theme'
import { View } from 'react-native-ui-lib';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  Font.useFonts({
    'Calibri': require('../src/assets/fonts/calibri.ttf'),
    'Calibri-Bold': require('../src/assets/fonts/calibrib.ttf'),
    'Calibri-Italic': require('../src/assets/fonts/calibrii.ttf'),
    'Comfortaa': Comfortaa_400Regular,
    'Inter': Inter_400Regular
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);

        // Artificially delay for two seconds to simulate a slow loading
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);



  if (!appIsReady) {
    return (
      <SplashScreenComponent />
    );
  }


  return (

    <RecoilRoot>

      <LocalizedApp />
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <SafeAreaView >
            <LayoutWrapper  >
              <Slot />
            </LayoutWrapper>
          </SafeAreaView>
        </PaperProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}


const LayoutWrapper = styled(View)`
  ${({ theme }) => css`
    flex-grow: 1;
    flex-direction: column;
    gap: 10px;
    padding: 0px ${theme.spacing.xxl}px;
    background-color: ${theme.colors.baseContent};
    min-height: 100%;
  `}
`



