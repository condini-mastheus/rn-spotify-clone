import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin * 2,
    marginHorizontal: metrics.baseMargin * 2,
    alignItems: 'center',
  },
  info: {
    flex: 1,
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
  play: {
    color: colors.regular,
  },
});

export default styles;
