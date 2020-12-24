import React , {useState} from 'react'
import Card from './Cardcomponents/Card';
// import './Cardcomponents/Cardcomponent.css'
import  './aboutus.css'
function Aboutus() {

  const Ujjawal = { 
    Persons:[{
    id: 1,
    name: "Ujjawal Kumar",
    imgURL:"./images/ujjwal.png",
    phone: "7903350715",
    email: "ujjwal18498@gmail.com",
    quali: "qualification:- NSEC Certified trader and appearing for CFA Programme"
  }]
  }

  const Bipul= { 
    Persons:[{
    id: 2,
    name: "Bipul Kumar",
    imgURL:"./images/bipul.jpeg",
    phone: "9060048489",
    email: "bharat.ece17@nituk.ac.in",
    quali: "qualificatiion :- B.tech, Nit Patna and NSEC certified"
  }]
  }
  const Manish = { 
    Persons:[{
    id: 3,
    name: "Manish Kumar",
    imgURL:"./images/manish.jpeg",
    phone: "9122693349",
    email: "mansih@gmail.com",
    quali: "qualification :- _ B.tech, NIT Uttrakhand full stack Developer at Brose"
  }]
  }

  const [Persons1,setPersons1] = useState(Ujjawal.Persons);
  const [Persons2,setPersons2] = useState(Bipul.Persons);
  const [Persons3,setPersons3]=useState(Manish.Persons);
  return (
    <div>
      <div className='ujjawal'>
        <div>
            {Persons1.map(person => (
            <Card
              key={person.id}
              name={person.name}
              img={person.imgURL}
              tel={person.phone}
              email={person.email}
              quali={person.quali}
            />
              ))}
          </div>
          <div className='detail_text'>
            <p style={{color: "black", marginTop: "50px", marginLeft:"20px",fontSize :"20px",alignText:"center"}}>Ujjwal was very passionate about stock market since teenage and that Burning desire Brought him in stock market in end 2017. Since then he started full time carreer in stock market.
His trading experience ranges from Stocks, Futures, Options, Commodities & International FX pairs.
His Risk management system and Stock selection is well appreciated by Clients & other Traders.
As of now He manages Around half Crore capital, including Clients & His own funds.</p>
          </div>
      </div>
        
      <div className='bipul'>
        <div>
            {Persons2.map(person => (
            <Card
              key={person.id}
              name={person.name}
              img={person.imgURL}
              tel={person.phone}
              email={person.email}
              quali={person.quali}
            />
              ))}
          </div>
          <div className='detail_text'>
            <p style={{color: "black", marginTop: "50px", marginLeft:"20px",fontSize :"20px",alignText:"center"}}>  Bipul being a close friend to Ujjwal had started to show 
              interest since the start of the company. He was The first Investor and 
              advisor in key decision making.
Since, he is a IT graduate from NIT, PATNA. He had given a considerable contribution in IT & Marketing. 
He is also a key advisor in this organisation.</p>
          </div>
      </div>
      <div className='manish'>
        <div>
            {Persons3.map(person => (
            <Card
              key={person.id}
              name={person.name}
              img={person.imgURL}
              tel={person.phone}
              email={person.email}
              quali={person.quali}
             />
              ))}
          </div>
          <div className='detail_text'>
            <p style={{color: "black", marginTop: "50px", marginLeft:"20px",fontSize :"20px",alignText:"center"}}>
            Bipul being a close friend to Ujjwal had started to show interest since the start
             of the company. He was The first Investor and advisor in key decision making. 
             Since, he is a IT graduate from NIT, PATNA. He had given a considerable 
             contribution in IT & Marketing. He is also a key advisor in this organisation.
            </p>
          </div>
      </div>

    </div>

  )
}

export default Aboutus
