import React from 'react';
import { useState } from 'react';
import img1 from '../src/assets/1.jpg'
import img2 from '../src/assets/2.jpg'
import img3 from '../src/assets/3.jpg'
import img4 from '../src/assets/4.jpg'
import img5 from '../src/assets/5.jpg'


const Card = () => {

    let [cards] = useState([
        {
          title: 'Financial Calculator',
          image: img1,
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur."
        },
        {
          title: 'Health & Fitness Calculator',
          image: img2,
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur."
        },
        {
          title: 'Conversion Calculator',
          image: img3,
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur."
        },
        {
          title: 'Geometry Calculator',
          image: img4,
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur."
        },
        {
          title: 'Math-Algebra Calculators',
          image: img5,
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur."
        },

      ])
    

  return (
   <div>
    <section>
        <div className='compo'>
          <div className='cards'>
                {
                    cards.map((card, i) => (
                        <div key={i} className="card">
                            <img src= {card.image} />
                        <h3> {card.title} </h3>
                        <p> {card.description} </p>
                        <button className='btn'>Click Here</button>
                        </div>
                    ))
                }
          </div>
        </div>
      </section>
   </div>
  )
}

export default Card;




// return (
//     <div className='card'>
//         <img className='card-image' src="../src/assets/2.jpg" alt="calculator" />
//         <h2 className='card-title'>Abhyudai Srivastava</h2>
//         <p className='card-text'> Lorem ipsum dolor sit.</p>
//     </div> 
//   )
