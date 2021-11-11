import React, { Component } from 'react';


class Counter extends React.Component {
    state = {
        count: 0,
        imageUrl: 'https:picsum.photos/200'
    };

    render() { 


        return (
            <div className="m-4" >
                <img src={ this.state.imageUrl }/>
                <span style= {{fontSize: 20}} className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button className="btn btn-secondary" >CLICK</button>
            </div>
            );
    }
    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += this.state.count === 0 ? "warning": "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}


export default Counter;