import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const EditTask = () => {
    const { id } = useParams();
    const [task, setTask] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data));
    }, [])
    const handleEditTask = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const details = e.target.details.value;
        const editTask = { name, details };

        //PUT data to server

        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editTask),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })
    }
    return (
        <div className='container p-2 '>
            <div className='w-50 mx-auto shadow-sm p-3 mb-5 bg-body rounded'>
                <h2 className='mb-4 text-center font-bold'>Edit Your Task</h2>
                <form className='d-flex flex-column' onSubmit={handleEditTask}>
                    <input className=' border border-success p-2 border-opacity-10' type="text" name="name" placeholder='Daily Task Title' required />
                    <textarea className=' border border-success p-2 border-opacity-10' name="details" id="" cols="20" rows="5" placeholder='description' required></textarea>
                    <input className='btn btn-success' type="submit" value="Edit Task" />
                </form>


            </div>
        </div>

    );
};

export default EditTask;