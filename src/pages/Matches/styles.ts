import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'orangered',
    paddingHorizontal: 16,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 72,
    height: 72,
    margin: 8,
    borderRadius: 36,
    borderWidth: 2,

    padding: 2,
    borderColor: 'orangered',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 12,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 36,
  },
})
