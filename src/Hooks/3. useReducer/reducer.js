export const reducer = (state,action) =>{
    if(action.type === 'ADD'){
      const allBooks = [...state.books, action.payload]
      return {
        ...state,
        books : allBooks,
        isAdded: true,
        message : 'Book is added',
      }
    }
    else if (action.type === 'REMOVE'){
      const filterBooks = [...state.books].filter((book)=>
        book.id !== action.payload
      );
      return {
        ...state,
        books : filterBooks,
        isAdded : true,
        message : 'Book is removed'
      }
       
    }
  }