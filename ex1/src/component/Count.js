import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Add,Minus} from '../redux/actions/actions';

class Count extends Component{
    
    render(){
        if(!this.props.count){
            return <div>Loading.............</div>
        }
        else{
       
        
        return(
            <div className="container" style={{width:'80%', margin:'5%',justifyContent:'center',alignContent:'center',textAlign:'center'}}>
                <h5>COUNTER</h5>
                <div style={{backgroundColor:'gray', color:'white',display:'flex',textAlign:'center'}}>
                    <div style={{flexDirection:'row',width:'44%',textAlign:'center'}}><button id="buttonCounter" onClick={()=>this.props.increment(this.props.increment)} style={{margin:"2%"}}>+</button></div>
                    <div style={{flexDirection:'row',width:'44%',textAlign:'center'}}>{this.props.count}</div>
                    <div style={{flexDirection:'row',width:'44%',textAlign:'center'}}><button id="buttonCounter" onClick={()=>this.props.decrement(this.props.decrement)} style={{margin:"2%"}}>-</button></div>
                </div>
            </div>
        );
    }
}
};
// const ButtonHandler=()=>{
//     console.log('button clicked');
//     let btnStatus= Document.getElementById("buttonCounter").innerHTML;
//     if(btnStatus=='+'){
//         console.log('+');
//     }
//     else console.log('-');

// }
function mapStateToProps(state){
    return{
        count:state.count
    };
}

function mapDispatchToProps(dispatch){
   return { 
        increment:()=> dispatch({type:'PLUS'}),
        decrement:()=> dispatch({type:'MINUS'})
    }
    
}
function btnPlusHander(count){
    count = (this.state.count)+1;
    console.log(count);
}
function btnMinusHander(count){
    count = count -1;
    console.log(count);
};
export default connect(mapStateToProps,mapDispatchToProps)(Count)