import React from 'react';
import './SideBar.css';

class SideBar extends React.Component{
    render(){
        const about = "This app lets you create a list of tasks that you would like to do. It enhances productivity. It lets you add the tasks, delete the tasks when they are completed and edit tasks if you would like.";
        const step1 = "To add a new task, click on the text field in the right, enter the task name and click on Add Task Button.";
        const step2 = "To delete a completed task, click on the checkbox in the right end of box with task name.";
        const step3 = "To edit a task from the list, click on the task name, and you can edit the name of the the task."
        const step4 = "To clear all tasks from the list, hit Clear All Tasks button";
        return(
            <div className="sidebar">
                <div id="sidebar-content">
                    <p><span className="heading">Do it Today:</span> <br/>{about}</p>
                    <p><span className="heading">Add a task:</span> <br/> {step1}</p>
                    <p><span className="heading">Delete a task:</span> <br/> {step2}</p>
                    <p><span className="heading">Edit a task:</span> <br/> {step3}</p>
                    <p><span className="heading">Clear all tasks:</span> <br/> {step4}</p>
                </div>
            </div>
        );
    }
}

export default SideBar;