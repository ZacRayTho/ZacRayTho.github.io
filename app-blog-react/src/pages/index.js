import Script from 'next/script';
import Nav from '../components/Nav';
import SideContact from '../components/SideContact';
import Landing from './Landing';

function HomePage() {
  return (
    <div className='h-[80vh] grid grid-cols-9'>
      <Script src="https://code.jquery.com/jquery-3.6.4.min.js"
        integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
        crossorigin="anonymous" />
      <Script src='https://cdn.tutorialjinni.com/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js' />
      <Script src='./stuff.js' />
      <SideContact />
      <Landing />

    </div>
  )
}

export default HomePage