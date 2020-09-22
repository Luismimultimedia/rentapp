import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE, FONT_FAMILY} from '../../libs/constants';

export const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    padding: 17,
  },
  main_text: {
    textAlign: 'center',
    backgroundColor: COLORS.white,
    fontSize: FONT_SIZE.main_description,
    fontFamily: FONT_FAMILY.regular,
  },
  loginButton: {
    padding: 11,
    borderRadius: 50,
    backgroundColor: COLORS.salmon,
  },
  loginTitle: {
    color: COLORS.white,
    fontSize: FONT_SIZE.medium_font_button,
    fontFamily: FONT_FAMILY.regular,
  },
  signButton: {
    padding: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.salmon,
    backgroundColor: COLORS.transparent,
  },
  signTitle: {
    color: COLORS.salmon,
    fontSize: FONT_SIZE.small_font_button,
    fontFamily: FONT_FAMILY.regular,
  },
  backButton: {
    padding: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.dark,
    backgroundColor: COLORS.transparent,
  },
  backTitle: {
    color: COLORS.dark,
    fontSize: FONT_SIZE.small_font_button,
    fontFamily: FONT_FAMILY.regular,
  },
  input: {
    height: 42,
    borderColor: COLORS.grey_light,
    borderWidth: 1,
    paddingHorizontal: 5,
    backgroundColor: COLORS.white,
    marginBottom: 5,
  },
  error: {
    color: 'red',
    fontSize: FONT_SIZE.small_font_button,
    fontFamily: FONT_FAMILY.regular,
  },
});
