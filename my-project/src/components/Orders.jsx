import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Tablelist from './Tablelist'
import Footer from './Footer'
import Order from './Order'

const Orders = () => {
  return (
    <div className="flex flex-col min-h-screen">
    {/* Header */}
    <Header />

    {/* Main Content Layout */}
    <div className="flex flex-1">
      {/* Left Sidebar */}
      <Sidebar className="hidden md:block w-1/4 bg-gray-100 p-4" />



      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid lg:grid-cols-1 gap-6">
          {/* Tablelist Items */}
          <div>
            
            <Tablelist/>
          </div>

          {/* order */}
         
        </div>
        {/* Footer */}
        <Footer />
      </main>


      {/* Right Sidebar */}
      
      <Order className="hidden lg:block w-1/4 bg-gray-100 p-4" />
    </div>

    
   
  </div>
  )
}

export default Orders
