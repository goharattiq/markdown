const initialState = ''

export const textReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_TEXT':
        return action.payload
      default: 
        return state
  }
}