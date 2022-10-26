import {
  StyleSheet,
} from 'react-native';

import
  ExpoConstants
from 'expo-constants';

export const Colors = {
  AshGrey: '#C4C4C4',
  LighterGrey: '#D8D8D8',
  LightGrey: '#9B9B9B',
  LightestGrey: '#F4F4F4',
  AlmostWhite: '#FCFCFC',
  Grey: '#696969',
  AthensGray: '#E8E9F0',
  DarkGrey: '#5a5a5a',
  VeryDarkGrey: '#4a4a4a',
  ButtonGrey: '#CCCCCC',
  ButtonTextGrey: '#A6A6A6',
  TextGrey: '#999999',
  MoreBlack: '#1D1D1B',
  Black: '#333333',
  TrueBlack: '#000000',
  OffWhite: '#F1F1F1',
  White: '#FFFFFF',
  Red: '#E60000',
  DarkRed: '#BD0000',
  DarkerRed: '#990000',
  BrightRed: '#FF0000',
  VodaBucksDarkRed: '#8D0405',
  VodaBucksLightRed: '#E6212E',
  Blue: '#206A78',
  IrisBlue: '#00B0CA',
  LightBlue: '#1579FB',
  Aqua: '#00B0CA',
  Transparent: '#00000000',
  Green: '#18B703',
  CoolGreen: '#5CB35C',
  LighterGreen: '#008000',
  DarkGreen: '#009900',
  DarkerGreen: '#428600',
  Cream: '#FFFFDE',
  BottomTabBarGrey: '#EBEBEB',
  DashboardBackgroundWhite: '#EBEBEB',
  Purple: '#9C2AA0',
  NxtLvlDarkBackgroundColor: '#62206c',
  NxtLvlLightBackgroundColor: '#883489',
  SashDefault: '#E60000',
  SashRed: '#E60000',
  SashYellow: '#F9DA4A',
  SashOrange: '#DE9A36',
  SashGreen: '#9DAB01',
  SashBlue: '#007187',
  SashDarkBlue: '#007187',
  SashPurple: '#8E389C',
  SwitchBlue: '#007C92',
  OrangeYellow: '#FECB00',
  DarkOrange: '#F89300',
  SunshineYellow: '#FFFD37',
  SemiTransparentBlack: '#01010199',
  Teal: '#00A9C1',
  Maroon: '#BC0A38',
  VeryLightGrey: '#EBEBEB',
  BubblegumPink: '#EE4C80',
  BlueBlack: '#08081B',
};

export const HexOpacities = {
  '100': 'FF',
  '90': 'E6',
  '80': 'CC',
  '70': 'B3',
  '60': '99',
  '50': '80',
  '40': '66',
  '30': '4D',
  '20': '33',
  '10': '1A',
  '0': '00'
};

export const GraphColors = [
  '#9b30a3',
  '#099800',
  '#ffcb00',
  '#007b93',
  '#aab300',
  '#ed9800',
  '#ff1e01',
  '#5e2951',
  '#00afcb',
  '#ff4900',
];

export const AlertBackgroundColors = [
  '#4a4a4a',
  '#707070',
  '#a7a7a7'
];

export const GlobalStyles = StyleSheet.create({
  fill: {
    flex: 1,
    width: null,
    height: null,
  },
  fillAbsolute: {
    flex: 1,
    width:'100%',
    height:'100%',
    position:'absolute',
    justifyContent:'center',
    alignItems:'center'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCenterVH: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSpacedV: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'space-around',
  },
  bottomLinkContainer: {
    justifyContent: 'center',
    flexDirection : 'row',
    marginTop: 32
  },
  bottomLink: {
    color: Colors.Red,
    marginLeft: 8,
  },
  containerCenterV: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
  },
  containerCenterH: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
  },
  avoidNavHeader: {
    marginTop: 45,
  },
  avoidiOSTabPadding: {
    marginTop: ExpoConstants.statusBarHeight + 45
  },
  navHeader: {
    backgroundColor: Colors.Transparent,
    height: 45,
    borderBottomWidth: 0,
    elevation: 0,
  },
  navHeaderTitle: {
 //   fontFamily: 'VodafoneRg',
    fontSize: 22,
  },
  headerBackgroundImage: {
    width: '100%',
    height: 120
  },
  headerIcon: {
    width: 40,
    height: 40,
    marginTop: 35
  },
  headerTitle: {
    fontSize: 20,
    color: Colors.Red,
    marginTop: 0,
    textAlign: 'center'
  },
  headerStyle: {
    alignItems: 'center',
    height: 60,
    backgroundColor: Colors.Red
  },
  rowButton: {
    flex: 1,
    margin: 5
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  backgroundImage: {
    flex: 1,
    backgroundColor: Colors.Red,
  },
  buttonPrimary: {
    borderWidth: 1,
    borderColor: Colors.Red,
    backgroundColor: Colors.Red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonDisabled: {
    borderWidth: 1,
    borderColor: Colors.ButtonGrey,
    backgroundColor: Colors.ButtonGrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonSecondary: {
    borderWidth: 1,
    borderColor: Colors.Black,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonTextDisabled: {
  //  fontFamily: 'VodafoneRg',
    fontSize: 16,
    color: Colors.ButtonTextGrey,
    textAlign: 'center',
  },
  buttonTextSecondary: {
  //  fontFamily: 'VodafoneRg',
    fontSize: 16,
    color: Colors.Black,
    textAlign: 'center',
  },
  buttonTextPrimary: {
  //  fontFamily: 'VodafoneRg',
    fontSize: 16,
    color: Colors.White,
    textAlign: 'center',
  },
  bottomButton: {
    width: '100%',
    alignSelf:'flex-end',
  },
  switchContainer: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
  //  fontFamily: 'VodafoneRg',
    color: Colors.Grey,
  },
  formItem: {
    flex: 1,
  },
  tabIcon: {
    width: 32,
    height: 32,
  },
  popUpBackground: {
    alignItems:'center',
    backgroundColor: `${Colors.Black}${HexOpacities['90']}`,
    flex: 1,
    justifyContent: 'center',
    position:'absolute',
    width:'100%',
    height:'100%',
  },
  otpBlackText: {
    marginTop: 10,
 //   fontFamily: 'VodafoneRg',
    color: Colors.Grey,
    fontSize: 17,
    textAlign: 'center',
  },
  otpRedText: {
//    fontFamily: 'VodafoneRg',
    color: Colors.Red,
    fontSize: 17,
    textAlign: 'center',
  },
  subHeading: {
  //  fontFamily: 'VodafoneRg',
    textAlign: 'center',
    fontSize: 20,
    color: Colors.Grey,
  },
  dividerFull: {
    backgroundColor: Colors.LightestGrey,
    height: 1,
    width: '100%',
    alignSelf: 'center',
  },
  divider90: {
    backgroundColor: Colors.LightestGrey,
    height: 1,
    width: '90%',
    alignSelf: 'center'
  },
  fontVodafoneLt: {
 //   fontFamily: 'VodafoneLt',
  },
  fontVodafoneRg: {
 //   fontFamily: 'VodafoneRg',
  },
  fontVodafoneRgBd: {
//    fontFamily: 'VodafoneRgBd',
  },
  fontVodafoneExB: {
 //   fontFamily: 'VodafoneExB',
  },
});
