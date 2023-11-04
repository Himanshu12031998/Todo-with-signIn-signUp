import { useEffect } from "react";
import "../styles/Todo.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const Todos = () => {
  //Task (todo list) state
  const [toDo, setToDo] = useState([
    // {"id":1, "title":"task 1", "status":false},
    // {"id":2, "title":"task 2", "status":false}
  ]);

  // temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpadateData] = useState("");

  // const saveDataToLocalStorage =(data)=>{
  //   localStorage.setItem('todos',JSON.stringify(data));
  // }
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setToDo(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDo));
  }, [toDo]);

  //add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      // saveDataToLocalStorage(toDo)
      setNewTask("");
    }
  };

  //delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    // saveDataToLocalStorage(toDo)
    setToDo(newTasks);
  };

  //mark task as done or complete
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  //cancel  update
  const cancelupdate = () => {
    setUpadateData("");
  };

  //change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpadateData(newEntry);
  };
  // update task

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData];
    setToDo(updateObject);
    // saveDataToLocalStorage(toDo)
    setUpadateData("");
  };

  return (
    <div className="container">
     
      <br />
      
      {/* update todos */}

      {updateData && updateData ? (
        <>
          <div className="row">
            <div className="col">
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button
                onClick={updateTask}
                className="btn btn-lg btn-success mr-20"
              >
                Update
              </button>
              <button onClick={cancelupdate} className="btn btn-lg btn-warning">
                Cancel
              </button>
            </div>
          </div>
          <br />
        </>
      ) : (
        <>
          {/* Add task */}

          <div className="row">
            <div className="col">
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-lg btn-success" onClick={addTask}>
                Add Task
              </button>
            </div>
          </div>

          <br />
        </>
      )}

      {/* Display todos */}
      {/* {newTask} */}
      {toDo && toDo.length ? "" : "No task..."}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskTask">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span
                      title="Completed / Not Completed"
                      onClick={(e) => markDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>

                    {task.status ? null : (
                      <span
                        title="Edit"
                        onClick={() =>
                          setUpadateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}

                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
};

export default Todos;
