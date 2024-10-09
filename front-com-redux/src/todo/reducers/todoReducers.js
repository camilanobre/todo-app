const INITIAL_STATE = {
  description: "Ler livro",
  list: [
    {
      _id: 1,
      description: "tarefa 1",
      done: true,
    },
    {
      _id: 2,
      description: "tarefa 2",
      done: false,
    },
    {
      _id: 3,
      description: "tarefa 3",
      done: false,
    },
  ],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCH':
          // return { ...state, list: action.payload.data }
          return { ...state, list: action.payload }
        default:
            return state
    }
}
