import DetailsFeature from "../../../components/ui/DetailsFeature";

const PortfolioDetails = () =>{
    const isMERN = true;
    const data = {
        name: "Taskify",
        thumb:"https://framerusercontent.com/images/jayJcHLcEeRTohjvWzgW4oH3fbc.jpg?scale-down-to=2048",
        title: "On the road to innovation: Elevating the in-car experience for connected cars.",
        tech: "MERN",
        faced_problems: ["Norman & Co is a pioneering automotive company that combines cutting-edge technology with sustainable design principles to redefine the driving experience.", "Norman & Co is a pioneering automotive company that combines cutting-edge technology with sustainable design principles to redefine the driving experience.", "Norman & Co is a pioneering automotive company that combines cutting-edge technology with sustainable design principles to redefine the driving experience.", "Norman & Co is a pioneering automotive company that combines cutting-edge technology with sustainable design principles to redefine the driving experience."],
        project_features: {banner: "https://framerusercontent.com/images/F5dgtVR7QzpyfDuAOQD6IAlgDZ4.jpg?scale-down-to=2048",
        texts:["Norman & Co is a pioneering automotive company that combines cutting-edge technology with sustainable design principles to redefine the driving experience.", "Norman & Co is a pioneering automotive company that combines cutting-edge technology with sustainable design principles to redefine the driving experience.", "Norman & Co is a pioneering automotive company that combines cutting-edge technology with sustainable design principles to redefine the driving experience."]},
        links: {frontend_code: "djkdk", backend_code: "dkdk", live: "fdsjfkd",}
    }
    return (
        <div className="space-y-12 max-w-screen-xl mx-auto my-10">
            <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">Preview & code</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 Tausif —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Taskify</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
            <h3 className="text-8xl font-bold text-center tracking-tighter text-gray-800">{data.name}</h3>
            <img src="https://framerusercontent.com/images/jayJcHLcEeRTohjvWzgW4oH3fbc.jpg?scale-down-to=2048"
            className="rounded-lg" alt="" />
            <p className="text-6xl font-semibold tracking-tighter text-gray-800">{data.title}</p>
            {data.tech==="MERN" && (<div className="mx-auto">
                <img className="mx-auto" src="https://www.webhopers.com/wp-content/uploads/2021/05/MERN-Stack-Development-Company.png" alt="" />
            </div>)}
            <DetailsFeature/>

            <div className="space-y-10">
            <img src={data.project_features.banner} alt="" />
            <DetailsFeature/>
            </div>
        </div>
    )
}

export default PortfolioDetails;