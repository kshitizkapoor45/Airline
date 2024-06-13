import { createContext, useContext } from "react";

export const TodoContext = createContext({

    todos: [
        {
            id: 1,
            todo: "todo completed",
            completed: false,
        }

    ],

    addtodo: (todo) => {},
    updatetodo: (id, todo) => {},
    deletetodo: (id) => {},
    toggletodo: (id) => {},

})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}

