import React from 'react';
import './css/cards.css';
import Img_1 from './img/img_1.jpg';
import Img_2 from './img/img_2.jpg';
import Img_3 from './img/img_3.jpg';

function Cards() {
  return (
    <>
    <div className='card-main-box'>

    <div className="card">
    <div className="face front">
        <img src={Img_1} alt=""/>
        <h3>Japan</h3>
    </div>
    <div className="face back">
        <h3>Japan</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
        <div className="link">
            <a href="#">Details</a>
        </div>
    </div>
</div>

<div className="card">
    <div className="face front">
        <img src="img/img2.jpeg" alt=""/>
        <h3>Spain</h3>
    </div>
    <div className="face back">
        <h3>Spain</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
        <div className="link">
            <a href="#">Details</a>
        </div>
    </div>
</div>

<div className="card">
    <div className="face front">
        <img src="img/img3.jpeg" alt=""/>
        <h3>Perú</h3>
    </div>
    <div className="face back">
        <h3>Perú</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
        <div className="link">
            <a href="#">Details</a>
        </div>
    </div>
</div>

    </div>
</>
  );
}

export default Cards;
