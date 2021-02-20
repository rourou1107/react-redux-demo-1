import {Component} from 'react'
class App extends Component {
    add() {
        this.props.add()
    }
    add2() {
        this.props.add2()
    }
    addOdd() {
        this.props.addOdd()
    }
    addAsync() {
        this.props.addAsync()
    }
    render() {
        return (
            <div className="App">
                点击了：{this.props.value}次
                <div>
                    <button onClick={this.add.bind(this)}>+1</button>
                    <button onClick={this.add2.bind(this)}>+2</button>
                    <button onClick={this.addAsync.bind(this)}>异步+1</button>
                    <button onClick={this.addOdd.bind(this)}>奇数+1</button>
                </div>
            </div>
        )
    }
}

export default App;
