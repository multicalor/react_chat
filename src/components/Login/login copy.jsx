import React, { Component, Fragment } from 'react';
import '../Login/style.css'
import {ctx} from '../../Store'
class Login extends Component {

    state = {
        userName: '',
        room: '',
        // login: false,
    }

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            userName: value,
        })
    }

    handlerSelectRoomChange = ({ target: { value } }) => {
        this.setState({
            room: value,
        })
    }

    handlerSubmitLogin = () => {
        const { userName } = this.state;
        const { loging } = this.props;
        console.log(userName)
        loging(userName)
        
    }

    render() {

        const { userName, room } = this.state;
        


        return (
            <div className="join-container">
                <header className="join-header">
                    <h1><i className="fas fa-smile"></i> ChatCord</h1>
                </header>
                <main className="join-main">
                    <form action="chat.html">
                        <div className="form-control">
                            <label for="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                // id="username"
                                placeholder="Enter username..."
                                required
                                value={userName}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-control">
                            <label for="room">Room</label>
                            <select name="room" id="room" defaultValue={room} onChange={this.handlerSelectRoomChange}>
                                <option value="JavaScript">JavaScript</option>
                                <option value="Python">Python</option>
                                <option value="PHP">PHP</option>
                                <option value="C#">C#</option>
                                <option value="Ruby">Ruby</option>
                                <option value="Java">Java</option>
                            </select>
                        </div>
                        <button type="submit" class="btn" onClick={this.handlerSubmitLogin}>Join Chat</button>
                    </form>
                </main>
            </div>
        )
    }
}

export default Login;