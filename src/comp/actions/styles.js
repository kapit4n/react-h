import {colors } from '../../constants'

export const styles = {
  mainActionsContainer: (props) => {
    return {
      backgroundColor: props.background || 'white',
      display: 'flex',
      justifyContent: 'space-between',
      margin: '1rem'
    }
  },
  
  actionsContainer: (props) => {
    return {
      backgroundColor: props.background || 'white',
      display: 'flex',
      justifyContent: 'space-between',
    }
  },

};
