import React,{Component} from "react";
import Card from "./CardUI";
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';

class Cards extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <div className='container-fluid d-flex justify-content-center'>
      <div className='row'>
        <div className='col-md-4'>
          <Card imgsrc={img1} title='Chitra'/>
        </div>
        <div className='col-md-4'>
        <Card imgsrc={img2} title='Het'/>
        </div>
        <div className='col-md-4'>
        <Card imgsrc={img1} title='kaushik'/>
      </div>
    </div>
  </div>

);
}
}
export default Cards;