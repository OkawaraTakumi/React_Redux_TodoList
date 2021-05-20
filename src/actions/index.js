export const ADDTASK = 'addTask'
export const DELETETASK = 'deleteTask'

export const addTask = (task) => ({
    type:ADDTASK,
    task:task
})

export const deleteTask = (index) => ({
    type:DELETETASK,
    index:index
})

