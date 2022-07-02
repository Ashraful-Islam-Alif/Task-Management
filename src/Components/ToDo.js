import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ToDo = () => {
    const [tasks, setTask] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/user';
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])
    return (

        <div class="container overflow-x-auto w-full">
            <table class="table">

                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Title</th>
                        <th>Task Details</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task =>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div>
                                            <div class="font-bold">{task.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {task.details}
                                </td>

                                <th>
                                    <Link to={`/user/${task._id}`}><button class="btn btn-success btn-xs">Edit Task</button></Link>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Task Details</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default ToDo;