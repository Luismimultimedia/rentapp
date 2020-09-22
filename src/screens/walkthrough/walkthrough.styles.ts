import {StyleSheet} from 'react-native';

import {FONT_SIZE, COLORS, FONT_FAMILY} from '../../libs/constants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 82,
    paddingBottom: 40,
  },
  title: {
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZE.title,
    color: COLORS.dark,
  },
  containerImage: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },
  containerText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.regular_font,
  },
  loginButton: {
    padding: 11,
    borderRadius: 50,
    backgroundColor: COLORS.salmon,
  },
  signButton: {
    padding: 11,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.salmon,
    backgroundColor: COLORS.transparent,
  },
  loginTitle: {
    color: COLORS.white,
    fontSize: FONT_SIZE.medium_font_button,
    fontFamily: FONT_FAMILY.regular,
  },
  signTitle: {
    color: COLORS.salmon,
    fontSize: FONT_SIZE.medium_font_button,
    fontFamily: FONT_FAMILY.regular,
  },
});
