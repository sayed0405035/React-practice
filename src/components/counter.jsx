import React, { Component } from 'react';

class Counter extends Component {
   
    render() { 
        
        return <div>

            <span className={this.getbadgeclasses()}>{this.formatcount()}</span>
            <button 
                
                onClick={()=> this.props.onIncrement(this.props.counter)} 
                className='btn btn-secondary btn-sm'
                >
                    Increment
            </button>

            <button onClick={()=> this.props.onDelete(this.props.counter.id)}
            className='btn btn-danger btn-sm m-2'
            >
                Delete

            </button>

            


            </div>;
        
    }
    getbadgeclasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value == 0) ? "warning" : "primary";
        return classes;
    }
    
    formatcount(){
        const {value}=this.props.counter;
        //return count==0 ? "Zero":count;
        return value==0 ? <h1>Zero</h1>:value;
    }
   
}
 
export default Counter;