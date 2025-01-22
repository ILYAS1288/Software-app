import Footer from "./components/Footer";
import Header from "./components/Header";
import Order from "./components/Order";
import Sidebar from "./components/Sidebar";
import Tablelist from "./components/Tablelist";
import Tables from "./components/Tables";



export default function App() {
  return (
 <main>
  <Header/>
    <div className="relative min-h-screen flex">
      
    {/* Sidebar (Left) */}
    <Sidebar />
    
    {/* Main Content */}
    <div className="  ">
      {/* Other main content */}
      <Tablelist />
      <Tables />
      
      <Footer />
    </div>

    {/* Order (Right Sidebar) */}
    <Order />
  
  </div>
  
  </main>
  )
}
