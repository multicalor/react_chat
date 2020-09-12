import React, { Component, Fragment } from 'react';


class Messages extends Component {

    render() {
        return (<Fragment>

            {[{name: 'Dimka'}].map((chat, i) => {
                return (
                    <div class="message">
                        <p class="meta">{chat.name} <span>9:12pm</span></p>
                        <p class="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                            repudiandae.
                </p>
                    </div>
                )
            })}


        </Fragment>)
    }
}

export default Messages;