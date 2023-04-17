import Script from 'next/script';
import Nav from '../components/Nav';
import SideContact from '../components/SideContact';
import Landing from '../components/Landing';


function HomePage() {
  return (
    <div className='flex mx-auto justify-center '>

      <SideContact />

      <Landing className="" />

      
    </div>
  )
}

export default HomePage