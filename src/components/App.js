import '../App.css';
import React from "react";
import { connect } from 'react-redux';
import { addTask , deleteTask } from '../actions';
// import PropTypes from 'prop-types';



const App = (props) => {
  // const [taskList,setTask] = useState([])
  //この辺の関数をreducersに移植
  // const addTask = (e) => {
  //     let adding = e.target.previousElementSibling.value
  //     if(adding === ""){return}
  //     if(taskList.length === 0){
  //       setTask([adding]);
  //     }else {
  //       setTask([...taskList,adding])
  //     }
  // }

  // const deleteTask = (index) => {
  //   let newTask = [...taskList];
  //   newTask.splice(index,1);
  //   setTask(newTask)
  // }


  return (
    <React.Fragment>
      <h1>Todoリスト</h1>
      <input type="text" placeholder="入力してください"/>
      <button type="button" onClick={(e) => props.addTask(e.target.previousElementSibling.value)}>追加</button>
         {  
            props.taskList.map( (task,index) =>{
                return (
                <div key={index}>{task}
                    <button type="button" onClick={(index) => props.deleteTask(index)}>削除</button>
                </div>     
                )
          })
        }
    </React.Fragment>
  )
}


const mapStateToProps = state => ({
  taskList:state.todo.taskList
})

const mapDispatchToProps = dispatch => ({
  addTask:(task) => dispatch(addTask(task)),
  deleteTask:(index) => dispatch(deleteTask(index))
})

export default connect (mapStateToProps,mapDispatchToProps)(App)
// e.target.previousElementSibling.value