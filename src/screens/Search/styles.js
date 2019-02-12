import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  form: {
    borderBottomColor: colors.secundary,
    borderBottomWidth: 1,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin * 2,
    paddingBottom: metrics.basePadding,
  },
  searchInput: {
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    color: colors.white,
    height: 42,
    paddingHorizontal: metrics.basePadding / 2,
  },
});

export default styles;
