import React, {Component} from 'react';
import { Container, Col } from 'reactstrap';
import '../App.css';



class PlayerProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
      playerFirstData:props.playerFirstData,
      playerLastData:props.playerLastData
    }
  }

  render(){
    console.log(this.props.playerFirstData);
    return (
      <div >
      <Container  >

            <Col >
                <img className="profile" src={require('./fakePlayer.jpg')} height="250" width="250" />
            </Col>

            <br />

            <Col >
                <h5><strong> First Name :</strong> {this.props.playerFirstData[0]} </h5>
                <h5><strong> Last Name : </strong> {this.props.playerLastData[0]} </h5>
            </Col>
      </Container>
      </div>
    )
  }
}

//exporting class to use in other files
export default PlayerProfile;