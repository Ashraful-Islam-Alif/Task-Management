
import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const DailyTask = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='w-50 mx-auto'>
            <h2 className='mb-4'>Daily Task</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Task Title' className='mb-4' {...register("title", { required: true, maxLength: 20 })} />
                <textarea placeholder='Details' className='mb-2' {...register("details")} />
                <input className='btn btn-success' type="submit" value="Add Task" />
            </form>


        </div>
    );
};

export default DailyTask;