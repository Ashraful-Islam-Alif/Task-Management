
import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const DailyTask = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const handleAddTask = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const details = e.target.details.value;
        const user = { name, details };

        //POST data to server
        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })
    }
    return (
        <div className='container p-2'>
            <div className='w-50 mx-auto shadow-sm p-3 mb-5 bg-body rounded'>
                <h2 className='mb-4 text-center font-bold'>Daily Task</h2>
                <form className='d-flex flex-column' onSubmit={handleAddTask}>
                    <input className=' border border-success p-2 border-opacity-10' type="text" name="name" placeholder='Daily Task Title' required />
                    <textarea className=' border border-success p-2 border-opacity-10' name="details" id="" cols="20" rows="5" placeholder='description' required></textarea>
                    <input className='btn btn-success' type="submit" value="Add Task" />
                </form>
            </div>
        </div>
    );
};

export default DailyTask;