import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secundary,
    flexDirection: 'row',
    paddingHorizontal: metrics.basePadding,
    height: 60,
    alignItems: 'center',
  },

  currentSong: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: colors.white,
  },
  author: {
    fontSize: 12,
    color: colors.dark,
    marginTop: metrics.baseMargin / 5,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  play: {
    marginHorizontal: metrics.baseMargin,
  },
  controlIcon: {
    color: colors.white,
  },
});

export default styles;
