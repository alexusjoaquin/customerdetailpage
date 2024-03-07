import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/CustomerFormStyles.css'; 
import logo from '../../assets/carconnect_logo.png';
import { postCustomerDetails } from '../../api/api';

function CustomerForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await postCustomerDetails(data); 
      toast.success('Customer details submitted successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to submit customer details');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto w-full">
        <ToastContainer />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <img src={logo} alt="Logo" className="mx-auto mt-4" />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input {...register('firstName', { required: "First name is required" })} className="form-input" placeholder="John" />
            {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input {...register('lastName', { required: "Last name is required" })} className="form-input" placeholder="Doe" />
            {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input {...register('email', { required: "Email is required", pattern: /^\S+@\S+$/i })} className="form-input" placeholder="john.doe@example.com" />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input {...register('phoneNumber', { required: "Phone number is required" })} className="form-input" placeholder="123-456-7890" />
            {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber.message}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postcode">
              Postcode
            </label>
            <input {...register('postcode', { required: "Postcode is required" })} className="form-input" placeholder="12345" />
            {errors.postcode && <p className="text-red-500 text-xs italic">{errors.postcode.message}</p>}
          </div>
          
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerForm;
