import React, { Component } from 'react';
import img from '../images/lecture.jpg';
export default class FirstSection extends Component {
render() {
    return ( 
    <section id="video" class="section bg-light">
        <div class="container">
            <h3>The video lecture you shouldn't miss</h3>
            <p class="lead"> With one of the best content available online.And one of the best instructors it makes Being Geeky one of the best available learing platform available.he spread of computers and layout programmes thus made dummy text better known. While in earlier times several lines of the Lorem Ipsum text were repeated in the creation of dummy texts, today the full text of Cicero's 'De finibus' serves as the basis for many dummy text or Lorem Ipsum generators. Based on 'De finibus', these generators automatically create longer sections of the Lorem Ipsum text or various other filler texts.</p> 
            <a href="#" class="btn btn-secondary">Read More</a>
            <br/><br/> 
            <img style={{width: '90%', borderRadius: '5px'}}  src={img}alt="" />
        </div>
    </section>
        )
    }
}