import React from 'react'
import { useForm } from 'react-hook-form';
const Form = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    async function dothis(params) {
        //api simulate to see button disable and enable
        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log("submitting",params) 
        
    }
  return (
    <>
    <div>Form</div>
    <form onSubmit={handleSubmit(dothis)}>
        <div>
            <label>FirstName : </label>
            <input {...register("name", { required: true,minLength:{value:3,message:"minimum 3 char"},maxLength:{value:15,message:"max 15 char"}})} />
            {errors.name && <p>{errors.name.message}</p>}
        </div>

        
        <input {...register("email", { required: true, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "regex of email" } })} />
        {errors.email && <p>{errors.email.message}</p>}

        {/* button tag mai value={isSubmitting?"Submitting":"Submit"} kaam nhi kar raha */}
        {/* <button type="submit" disabled={isSubmitting} value={isSubmitting?"Submitting":"Submit"}>
          Submit
        </button> */}
        {/* yoh input ka use kar raha hu */}
        <input type="submit" value={isSubmitting?"Submitting":"Submit"} disabled={isSubmitting} />
    </form>

    </>
  )
}

export default Form