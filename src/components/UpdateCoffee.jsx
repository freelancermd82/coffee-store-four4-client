import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updateCoffee);
        // send data to server 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div className='bg-[#F4F3F0] p-20'>
            <h3 className='text-center text-6xl font-extrabold text-purple-400 my-5'>Update a coffee</h3>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex gap-3' >
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee name</span>
                        </label>
                        <label>
                            <input type="text" name="name" defaultValue={name} placeholder='coffee name' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Quantity</span>
                        </label>
                        <label>
                            <input type="text" name="quantity" defaultValue={quantity} placeholder='quantity' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className='md:flex gap-3' >
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Supplier</span>
                        </label>
                        <label>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder='supplier name' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label>
                            <input type="text" name="taste" defaultValue={taste} placeholder='taste' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex gap-3' >
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Category</span>
                        </label>
                        <label>
                            <input type="text" name="category" defaultValue={category} placeholder='Category name' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label>
                            <input type="text" name="details" defaultValue={details} placeholder='details' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                {/* form photo row */}
                <div className='mb-6' >
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Photo</span>
                        </label>
                        <label>
                            <input type="text" name="photo" defaultValue={photo} placeholder='Photo url' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                <input className='btn btn-block bg-red-300' type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;