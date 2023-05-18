import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

const Layout =()=>
{

  const [fonsLoaded]=useFonts({
    DMBold:require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular:require('../assets/fonts/DMSans-Regular.ttf'),
  })

const onLayoutRootView=useCallback(async()=>
{
  if(fonsLoaded)
  {
    await SplashScreen.hideAsync();
  }
},[fonsLoaded])
if(!fonsLoaded) return null;


  return <Stack onlayout={onLayoutRootView}/>;
}

export default Layout;
