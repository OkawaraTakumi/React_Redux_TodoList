import { ADDTASK, DELETETASK } from "../actions"


const initialState = {taskList:[]}

export default(state = initialState, action) => {
    let task = action.task;
    switch(action.type){
        case ADDTASK:
            if(task === ""){
                return state
            }
            if(state.taskList.length === 0){
                return {taskList: [task]}
            }else {
                const newTaskList = [...state.taskList,task];
                return {taskList: newTaskList}
            }

        case DELETETASK:
            const newTaskList = [...state.taskList];
            newTaskList.splice(action.index,1)
            return {taskList: newTaskList}
        default:
            return state
    }
}
