import { useForm, Controller  } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormSection = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const takeData = {
          name: data.projectName,
          title: data.projectTitle,
          thumbImg: data.thumbImage,
          technology: data.projectTech,
          features: [data.projectFeature],
          feature_img: data.featureImage,
          faced_prob: [data.facedProblem],
          links: {
            frontend: "",
            backend: "",
            preview: "",
          }
        }
        fetch("http://localhost:3000/portfolio", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(takeData)
        })
        .then(res=>res.json())
        .then(data => {
          console.log(data)
          if(data.acknowledged){
            toast.success('🦄 Wow so easy!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          }
        })
    }


  return (
    <section className="bg-white dark:bg-gray-900">
      <ToastContainer />
    <div className="py-8 px-20 lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
      <form onSubmit={handleSubmit(onSubmit)} action="#">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name</label>
            <input {...register("projectName")} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write project name..." />
          </div>
          <div className="w-full">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input {...register("projectTitle")} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type project title..." />
          </div>
          <div className="w-full">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnile Image</label>
            <input {...register("thumbImage")} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste thumb image..." />
          </div>
          <div className="w-full">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Feature Image</label>
            <input {...register("featureImage")} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste feature image..." />
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Stack</label>
            <select {...register("projectTech")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option defaultValue="select category">Select stack</option>
              <option value="fullstack">Fullstack</option>
              <option value="MERN">MERN</option>
              <option value="FRONTEND">Frontend</option>
              <option value="STATIC">Static</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Faced Problems</label>
            <div className="space-y-2">
                <textarea {...register("facedProblem")} id="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type problems faced..." />
                <div className="p-4 bg-gray-200 hover:bg-sky-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Features</label>
            <div className="space-y-2">
                <textarea {...register("projectFeature")} id="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type problems faced..." />
                <div className="p-4 bg-gray-200 hover:bg-sky-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
            </div>
          </div>
        </div>
        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
          ADD PROJECT
        </button>
      </form>
    </div>
  </section>
  )
}

export default FormSection