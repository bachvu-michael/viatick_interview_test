import * as React from 'react';

import { Text, TextProps } from './Themed';
import { TouchableOpacity, StyleSheet ,View} from 'react-native'

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
export const TouchableButton = (props:any) => (
    <TouchableOpacity style={TouchableButtonStyle.layout} {...props}>
      <Horizontal>
        {props.children}
      </Horizontal>
    </TouchableOpacity>
)


export const Touchable = (props:any) => (
    <TouchableOpacity style={TouchableButtonStyle.layoutNoBg} {...props}>
      {props.children}
    </TouchableOpacity>
)
export const Horizontal = (props:any) => (
  <View style={HorizontalStyle.layout} {...props}>
    {props.children}
  </View>
)
export const HorizontalStyle = StyleSheet.create({
  layout: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  }
})
export const spacings = {
  size2: 2,
  size4: 4,
  padding: 8,
  size8: 8,
  size20: 20,
  size16: 16,
  size24: 24,
  size32: 32,
}
export const  colors = {
  primary: '#12a89d',
  primaryGradientStart: '#4f44b6',
  primaryGradientEnd: '#4f44b6',
  secondaryGradientStart: '#FF1358',
  secondaryGradientEnd: '#FF1358',
  profileGradientStart: '#54CBF6',
  profileGradientEnd: '#49D2D0',
  secondary: '#FF1358',
  grey: '#acacac',
  gray: '#5f5f5f',
  grayDisable: '#d1d1d1',
  darkGray: '#4d4d4d',
  lightGray: '#9b9b9b',
  white: '#ffffff',
  blue: '#5A81F7',
  bluish: '#F1F1F7',
  black: '#000000',
  green: '#6DD0A3',
  yellow: '#ffc247',
  greyLine: '#d8d8d8',

}

export const TouchableButtonStyle = StyleSheet.create({
  layout: {
    backgroundColor: colors.primary,
    borderRadius: spacings.size8,
    paddingHorizontal: spacings.size8,
    paddingVertical: spacings.size8,
    marginRight:10
  },
  layoutNoBg: {
    borderRadius: spacings.size8,
    paddingHorizontal: spacings.size8,
    paddingVertical: spacings.size8
  },
  text: {
    borderRadius: spacings.size8,
  }
})
export const fonts = {
  primaryLight: 'Lato-Light',
  primaryRegular: 'Lato-Regular',
  primaryBold: 'Lato-Bold',
  primarySemiBold: 'Lato-SemiBold',
  sizes: {
    size16: 16,
    size18:18,
    size19: 19,
    size20: 20,
    size22: 22,
    size28: 28,
  }
}

export const Label = (props:any) => <Text style={LabelStyle.layout} {...props}>{props.children}</Text>

export const LabelStyle = StyleSheet.create({
    layout: {
        fontSize: fonts.sizes.size16,
        // fontFamily: fonts.Montserrat_Regular,
        paddingVertical: spacings.size8,
        paddingHorizontal: spacings.size24,
    },
    title: {
        fontSize: fonts.sizes.size28,
        fontWeight:"bold",
        color: colors.black,
        // fontFamily: fonts.Montserrat_Regular,
        paddingVertical: spacings.size8,
        paddingHorizontal: spacings.size16,
    },
    subtitle: {
        fontSize: fonts.sizes.size16,
        fontWeight: 'bold',
        // fontFamily: fonts.Montserrat_Regular,
        paddingVertical: spacings.size8,
        paddingHorizontal: spacings.size16,
    },
    touchable: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: fonts.sizes.size16,
        // fontFamily: fonts.Montserrat_Regular,
        paddingVertical: spacings.size8,
        paddingHorizontal: spacings.size24,
    },
    placeholder: {
        color: 'rgba(137,137,137,1)',
        fontSize: fonts.sizes.size16,
        // fontFamily: fonts.Montserrat_Regular,
        paddingVertical: spacings.size8,
        paddingHorizontal: spacings.size24,
    },
    text: {
        color: 'rgba(137,137,137,1)',
        fontSize: fonts.sizes.size16,
        // fontFamily: fonts.Montserrat_Regular,
    },
    textBtn: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: fonts.sizes.size16,
        // fontFamily: fonts.Montserrat_Regular,
    },
    button: {
        color: 'white',
        fontSize: fonts.sizes.size18,
        // fontFamily: fonts.Montserrat_Regular,
        paddingVertical: spacings.size8,
        paddingHorizontal: spacings.size24,
    },
    error: {
        color: 'red',
        fontSize: fonts.sizes.size16,
        // fontFamily: fonts.Montserrat_Regular,
    },
})

