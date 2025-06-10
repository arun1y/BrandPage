import React from 'react'

function Body() {
  return (
    <div>
          <section className='maincontainer'>
        <aside className='leftaside'>
          <div><p id='boldletter'>YOUR FEET DESERVE THE BEST</p></div>
          <div>
            <article>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</article>
            <div className='buttons'>
            <button id='shopnow'>Shop Now</button>
            <button>Category</button>
            </div>
            <p>Also Available on</p>
            <img src=".//images/flipkart.png" alt="flipkarlogo" />
            <img src=".//images/amazon.png" alt="amazonlogo" />
          </div>
        </aside>
        <aside className='rightaside'><img src=".//images/shoe_image.png" alt="shoe" /></aside>
      </section>
      </div>
  )
}

export default Body