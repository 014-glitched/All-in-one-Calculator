// import React from 'react';
// import { useState } from 'react';

// import img1 from '../src/assets/1.jpg'
// import img2 from '../src/assets/2.jpg'
// import img3 from '../src/assets/3.jpg'
// import img4 from '../src/assets/4.jpg'
// import img5 from '../src/assets/5.jpg'


// const Card = () => {

//     let [cards] = useState([
//         {
//           title: 'Financial Calculator',
//           image: img1,
//           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur."
//         },
//         {
//           title: 'Health & Fitness Calculator',
//           image: img2,
//           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur."
//         },
//         {
//           title: 'Conversion Calculator',
//           image: img3,
//           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur."
//         },
//         {
//           title: 'Geometry Calculator',
//           image: img4,
//           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur."
//         },
//         {
//           title: 'Math-Algebra Calculators',
//           image: img5,
//           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur."
//         },

//       ])
    

//   return (
//    <div>
//     <section>
//         <div className='compo'>
//           <div className='cards'>
//                 {
//                     cards.map((card, i) => (
//                         <div key={i} className="card">
//                             <img src= {card.image} />
//                         <h3> {card.title} </h3>
//                         <p> {card.description} </p>
//                         <button className='btn'>Click Here</button>
//                         </div>
//                     ))
//                 }
//           </div>
//         </div>
//       </section>
//    </div>
//   )
// }

// export default Card;
//*********************** */

// import React from 'react';
// import { Link } from 'react-router-dom';

// import img1 from '../src/assets/1.jpg';
// import img2 from '../src/assets/2.jpg';
// import img3 from '../src/assets/3.jpg';
// import img4 from '../src/assets/4.jpg';
// import img5 from '../src/assets/5.jpg';

// const Card = () => {
//   let cards = [
//     {
//       title: 'Financial Calculator',
//       image: img1,
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.',
//     },
//     {
//       title: 'Health & Fitness Calculator',
//       image: img2,
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.',
//     },
//     {
//       title: 'Conversion Calculator',
//       image: img3,
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.',
//     },
//     {
//       title: 'Geometry Calculator',
//       image: img4,
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.',
//     },
//     {
//       title: 'Math-Algebra Calculators',
//       image: img5,
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.',
//     },
//   ];

//   return (
//     <div>
//       <section>
//         <div className='compo'>
//           <div className='cards'>
//             {cards.map((card, i) => (
//               <div key={i} className='card'>
//                 <img src={card.image} alt={card.title} />
//                 <h3>{card.title}</h3>
//                 <p>{card.description}</p>
//                 {card.title === 'Financial Calculator' && (
//                   <Link to='/bmi-calculator' className='btn'>
//                     Click Here
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Card;
//????????????????????????????????
import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../src/assets/1.jpg';
import img2 from '../src/assets/2.jpg';
import img3 from '../src/assets/3.jpg';
import img4 from '../src/assets/4.jpg';
import img5 from '../src/assets/5.jpg';

const Card = () => {
  let cards = [
    {
      title: 'Financial Calculator',
      image: img1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.",
      link: '/financial' // Route for Financial Calculator
    },
    {
      title: 'Health & Fitness Calculator',
      image: img2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.",
      link: '/health-fitness' // Route for Health & Fitness Calculator
    },
    {
      title: 'Conversion Calculator',
      image: img3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.",
      link: '/conversion' // Route for Conversion Calculator
    },
    {
      title: 'Geometry Calculator',
      image: img4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.",
      link: '/geometry' // Route for Geometry Calculator
    },
    {
      title: 'Math-Algebra Calculators',
      image: img5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.",
      link: '/math-algebra' // Route for Math-Algebra Calculators
    },
  ];

  return (
    <div>
      <section>
        <div className='compo'>
          <div className='cards'>
            {cards.map((card, i) => (
              <div key={i} className="card">
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <NavLink to={card.link} className='btn'>Click Here</NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;


//************************* */
// return (
//     <div className='card'>
//         <img className='card-image' src="../src/assets/2.jpg" alt="calculator" />
//         <h2 className='card-title'>Abhyudai Srivastava</h2>
//         <p className='card-text'> Lorem ipsum dolor sit.</p>
//     </div> 
//   )
