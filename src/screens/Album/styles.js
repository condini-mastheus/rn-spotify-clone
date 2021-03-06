import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  thumbnail: {
    width: '100%',
    height: 120,
  },
  thumbnailContent: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 18,
    color: colors.whiteTransparent,
    marginTop: metrics.baseMargin / 2,
  },
});

export default styles;
