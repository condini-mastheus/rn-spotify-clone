import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin * 2,
  },
  thumbnail: {
    borderRadius: metrics.baseRadius * 9,
    height: 56,
    width: 56,
  },
  info: {
    flex: 1,
    marginLeft: metrics.baseMargin * 2,
  },
  title: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  author: {
    color: colors.dark,
    fontSize: 14,
    marginTop: metrics.baseMargin / 5,
  },

  more: {
    color: colors.regular,
  },
});

export default styles;
