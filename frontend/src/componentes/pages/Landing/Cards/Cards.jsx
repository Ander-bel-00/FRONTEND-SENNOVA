
import React from 'react';
import './css/Cards.css';

function App() {
  return (
    <div className="wrapper">
      <div className="container-card">
        <input type="radio" name="slide" id="c1" defaultChecked className='input-radio-card'/>
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="icon">1</div>
            <div className="description">
              <h4>Sistema</h4>
              <p>Sistema|TEINNOVA</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" className='input-radio-card'/>
        <label htmlFor="c2" className="card">
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4>Grupos</h4>
              <p>Grupos|TEINNOVA</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" className='input-radio-card'/>
        <label htmlFor="c3" className="card">
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
              <h4>Semilleros</h4>
              <p>Semilleros|TEINNOVA</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" className='input-radio-card'/>
        <label htmlFor="c4" className="card">
          <div className="row">
            <div className="icon">4</div>
            <div className="description">
              <h4>SENNOVA</h4>
              <p>TEINNOVA|SENNOVA</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default App;
