import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countires/Countries'

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json());
function App() {

  return (
    <>
      <h1>React world on the go</h1>
      <Suspense fallback ={<p>The data is loading....</p>}>
         <Countries countriesPromise = {countriesPromise}></Countries>
      </Suspense>
              </>
  )
}

export default App
