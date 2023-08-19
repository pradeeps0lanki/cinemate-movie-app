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
         
          <img className="rounded" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&ga=GA1.2.1175487634.1692272762&semt=ais" alt="page not found" />

        </div>
        
      </section>
    </main>
  )
}
