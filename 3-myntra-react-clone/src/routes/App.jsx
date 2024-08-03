import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './index.css'
import FetchItems from '../components/Fetchitems'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'

function App() {

const FetchStatus = useSelector(store => store.fetchStatus)

  return <>
  <Header/>
  <FetchItems/>
{FetchStatus.currentlyFetching ? <LoadingSpinner/>: <Outlet/>}
    <Footer/> 


</>
}

export default App
