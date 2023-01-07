const mock = [
  {id: 1, title: 'olma'},
  {id: 2, title: 'nok'},
  {id: 3, title: 'banan'},
  {id: 4, title: 'behi'},
]
export const reducer = (state, action) => {
  switch(action.type) {
    case 'delete':
      let res = state.data.filter((value) => value.id !== action.payload.id)
      return {...state, data: res}
    case 'onChange':
      let searched = mock.filter(value => value.title.includes(action.payload.value))
      return {...state, data: searched}
    case 'onAddChange':
      return {...state, title: action.payload.value}
    case 'add':
      return {...state, data: [...state.data, {...action.payload.newItem, title: state.title}], title: ''}
    default: 
      return state
  }
}