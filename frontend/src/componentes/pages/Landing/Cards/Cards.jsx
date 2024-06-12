
import React from 'react';
import './css/Cards.css';
import img1 from './img/img_1.jpg';
import img2 from './img/img_2.jpg';
import img3 from './img/img_3.jpg';
import img4 from './img/img_4.jpg';


function App() {
  return (
    <div className="wrapper">
      <div className="container-card">
        <input type="radio" name="slide" id="c1" defaultChecked className='input-radio-card'/>
        <label htmlFor="c1" className="card" style={{backgroundImage: `url(${img1})`}}>
          <div className="row">
            <div className="icon">1</div>
            <div className="description">
            
            </div>
          </div>
         
        </label>
        <input type="radio" name="slide" id="c2" className='input-radio-card'/>
        <label htmlFor="c2" className="card" style={{backgroundImage: `url(${img2})`}}>
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
             
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" className='input-radio-card'/>
        <label htmlFor="c3" className="card" style={{backgroundImage: `url(${img3})`}}>
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
             
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" className='input-radio-card'/>
        <label htmlFor="c4" className="card" style={{backgroundImage: `url(${img4})`}}>
          <div className="row">
            <div className="icon">4</div>
            <div className="description">
            
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default App;
