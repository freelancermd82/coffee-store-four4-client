
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CardCoffee from './components/CardCoffee';

function App() {

  const coffees = useLoaderData();

  return (
    <>

      <h1 className='text-6xl text-purple-500'>Hot cold coffee: {coffees.length}</h1>
      <div>
        {
          coffees.map(coffee => <CardCoffee
          key={coffee._id}
          coffee={coffee}
          ></CardCoffee>)
        }
      </div>

    </>
  )
}

export default App
