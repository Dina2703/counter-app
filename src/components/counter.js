import React, { Component } from 'react';


class Counter extends React.Component {
    state = {
        count: 0,
        imageUrl: 'https:picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
    }

    render() { 


        return (
            <div className="m-4" >
                <img src={ this.state.imageUrl } alt="random pic"/>
                <span style= {{fontSize: 20}} className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button className="btn btn-secondary" >add</button>
                <div>
                    {this.state.tags.length === 0 && "Please create a new tag!" || "my list"}
                    { this.renderTags()}
                </div>
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