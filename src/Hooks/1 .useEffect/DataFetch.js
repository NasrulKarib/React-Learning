import useFetch from './customHooks/useFetch';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DataFetch = () => {
  const {data,loading, error} = useFetch('https://jsonplaceholder.typicode.com/todos');

  if(loading) return <h3 style={{color: 'green'}}>Data is Loading</h3>
  if(error) {
        toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    //return <h2 style = {{color:'red'}}>Error : {error.message}</h2>

  return (
    <div>
      <h1>Fetch Data</h1>
        {
        //Initially, data can be null as api takes time
            data && data.map((value,index) => 
                <p key = {value.id}>{index} : {value.title}</p>
            )
        }
        
                <ToastContainer/>
    </div>
  )
}

export default DataFetch
