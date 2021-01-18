import React, { Component, Fragment } from 'react';
import '../Login/style.css'
import { ctx } from '../../Store'

const Login = () => {

    const state = {
        username: '',
        room: '',
        // login: false,
    }

    const handleInputChange = ({ target: { value } }) => {
        this.setState({
            username: value,
        })
    }

    const handlerSelectRoomChange = ({ target: { value } }) => {
        this.setState({
            room: value,
        })
    }

    const handlerSubmitLogin = (e) => {
        const { username } = this.state;
        const { loging } = this.props;
        console.log(username)
        loging(username)

    }



    const { username, room } = state;

    const { userJoin } = React.useContext(ctx);
  

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
                            value={username}
                            onChange={(e) => this.handleInputChange}
                        />
                    </div>
                    <div className="form-control">
                        <label for="room">Room</label>
                        <select name="room" id="room" defaultValue={room} onChange={(e) => handlerSelectRoomChange(e.target.value)}>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                            <option value="PHP">PHP</option>
                            <option value="C#">C#</option>
                            <option value="Ruby">Ruby</option>
                            <option value="Java">Java</option>
                        </select>
                    </div>
                    {/* <button type="submit" class="btn" onClick={() => userJoin()}>Join Chat</button> */}
                </form>
            </main>
        </div>
    )
}


export default Login;