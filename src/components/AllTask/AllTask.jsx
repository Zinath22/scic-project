import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


function AllTask() {
  const {user} = useContext(AuthContext)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/task')
      .then(response => response.json())
      .then(data => {
        // Set the fetched data to the state
        setTasks(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const userTask = tasks.filter(item => item.email === user.email)

  return (
    <div className="w-full p-10 mx-auto ">
      <table className="table ">
        <thead className='bg-teal-200'>
          <tr>
            <th>Title</th>
            <th>Description</th>
            
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className='bg-gray-100'>
          {userTask.map(task => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              
              <td>{task.dueDate}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllTask;