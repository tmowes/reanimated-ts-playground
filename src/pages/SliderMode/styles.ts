import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    position: 'relative',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'orangered',
  },
  sliderContainer: {
    marginVertical: 24,
    width: '50%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    height: 56,
    overflow: 'hidden',
  },
  button: {
    position: 'absolute',
    top: -1,
    zIndex: 0,
    borderRadius: 8,
  },
  draggable: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: 'orangered',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
