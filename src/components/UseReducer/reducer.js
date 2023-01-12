const mock = [
  {id: 1, title: 'olma'},
  {id: 2, title: 'nok'},
  {id: 3, title: 'banan'},
  {id: 4, title: 'behi'},
]

export const reducer = (state, action) => {
  switch(action.type) {
    // DELETE
    case 'delete': {
      let res = state.data.filter((value) => value.id !== action.payload.id)
      return {...state, data: res}
    }
    // SEARCH
    case 'search': {
      let res = mock.filter((item) => item.title.toLowerCase().includes(action.payload.value.toLowerCase()))
      return {...state, data: res}
    }
    // ONCHANGE
    case 'onChange': {
      return {...state, title: action.payload.value}
    }
    // ADD
    case 'add': {
      let newItem = {id: state.data.length + 1, title: state.title}
      return {...state, data: [...state.data, newItem], title: ''}
    }
    // Update
    case 'update': {
      return {...state, seleted: action.payload.fruit}
    }
    // onUpdateChange
    case 'onUpdateChange': {
      return {...state, seleted: {...state.seleted, title: action.payload.value}}
    }
    // SAVE
    case 'save': {
      let saved = state.data.map((value) => value.id !== state.seleted.id ? value : state.seleted)
      return {...state, data: saved, seleted: {}}
    }
    default: 
      return state;
  }
}