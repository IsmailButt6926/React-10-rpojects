import './App.css'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactUs from './components/ContactUs/ContactUs'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      {/* <div className="h-screen w-3/4 mx-auto flex flex-col justify-center">
        <ContactHeader />
        <ContactUs />
      </div> */}
      <div className="w-full sm:w-3/4 mx-auto flex flex-col px-2 sm:px-0 justify-start sm:justify-center mt-12">
        <ContactHeader />
        <ContactUs />
      </div>
    </div>
  );
}

export default App
