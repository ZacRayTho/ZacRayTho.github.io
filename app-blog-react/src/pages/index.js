import Nav from '../components/Nav';
import SideContact from '../components/SideContact';
import Landing from './Landing';

function HomePage() {
  return (
    <div className='h-[80vh] grid grid-cols-9'>
      <SideContact />
      <Landing />
      
    </div>
  )
}

export default HomePage