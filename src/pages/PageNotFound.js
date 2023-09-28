import { useEffect } from "react"
import { Link } from "react-router-dom"


export const PageNotFound = () => {

  useEffect(()=>{
    document.title = `Page Not Found / Cinemate`;
  })


  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">

        <Link to="/">
            <button className="text-5xl text-gray-700 font-bold my-10 dark:text-white flex justify-center ">Back To Home</button>
        </Link>
         
          <h1>page not found</h1>

        </div>
        
      </section>
    </main>
  )
}
