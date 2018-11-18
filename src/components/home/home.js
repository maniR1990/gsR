import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     count:0
        // }
    }

    // onIncrement = () => {this.setState({...this.state, count:++this.state.count})}
    // onDecrement = () => {this.setState({count: this.state.count-1})};
    render() {
        return (
            <div className="reduxSampleCounter" >
            <p>counter count: <span>{this.props.count}</span></p>
                <div>
                     <button className="counter" onClick={this.props.onIncrement}>+</button>
                     <button className="counter" onClick={this.props.onDecrement}>-</button>
                </div>
                <div>
          <ul>
            {this.props.history.map(el => (
              <li 
                className="historyItem" 
                key={el.id}
                onClick={() => this.props.onDelEntry(el.id)}>
                {el.count}
              </li>
            ))}
          </ul>
        </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.count,
        history: state.history
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type:'INCREMENT', value: 1}),
        onDecrement: () => dispatch({type:'DECREMENT', value: 1}),
        onDelEntry: (id) => dispatch({ type: "DEL_ENTRY", id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
