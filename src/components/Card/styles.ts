import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '92%',
    height: '72%',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    color: 'white',
  },
  overlay: {
    width: '100%',
    padding: 16,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: undefined,
    height: undefined,
    justifyContent: 'flex-end',
  },
})
