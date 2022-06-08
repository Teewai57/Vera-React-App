import Navbar from './navbar'
import Content from './content'
import Card from './card'
import Footer from './footer.js'
import './App.css'

function App() {
  return (
    // <div className='Container-fluid'>
      <div className='container'>
        <Navbar />
        <Content />
        <Card />
        <Footer />
      </div>
    // </div>
  );
}

export default App;
