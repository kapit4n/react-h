import {colors } from '../../constants'

export const styles = {
  actionsContainer: (props) => {
    return {
      backgroundColor: props.background || colors.secondary.ligth,
      display: 'flex',
      justifyContent: 'center',
    }
  }
};
