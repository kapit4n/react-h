import {colors } from '../../constants'

export const styles = {
  mainActionsContainer: (props) => {
    return {
      backgroundColor: props.background || 'white',
      display: 'flex',
      justifyContent: 'flex-end',
      margin: '1rem'
    }
  },
  
  actionsContainer: (props) => {
    return {
      backgroundColor: props.background || 'white',
      display: 'flex',
      justifyContent: 'flex-end',
    }
  },

};
