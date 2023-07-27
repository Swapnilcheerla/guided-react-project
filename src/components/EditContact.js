import React from 'react';

import { withRouter } from './withRouter';

class EditContact extends React.Component {
    constructor(props) {
        super(props)
        // console.log("harsha dannnen   ..............ops")
        // // console.log(this.props.state)

        // // const { id, name, email } = props
        // const { state } = this.props
        // console.log(state)
        // // this.state = {
        //     id,
        //     name,
        //     email,
        // };
    }


    // update = (e) => {
    //     e.preventDefault();
    //     if (this.state.name === "" || this.state.email === "") {
    //         alert("all the fields are mandatory!");
    //         return
    //     }
    //     this.props.updateContactHandler(this.state);
    //     this.setState({ name: "", email: "" });
    //     console.log(this.state);
    //     this.props.navigate("/");



    // };

    render() {
        console.log("harsha dannnen   ..............ops")
        // console.log(this.props.state)

        // const { id, name, email } = props
        const { state } = this.props
        console.log(state)
        // this.state = {
        return (
            <div>
                harsha
            </div>
            // <div className='ui main'>
            //     <h2>Edit Contact</h2>
            //     <form className='ui form' onSubmit={this.update}>
            //         <div className='field'>
            //             <label>Name

            //             </label>
            //             <input type='text' name='name' placeholder='Name'
            //                 value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input>

            //         </div>
            //         <div className='field'>
            //             <label>Email

            //             </label>
            //             <input type='email' name='email' placeholder='Email'
            //                 value={this.state.email}
            //                 onChange={(e) => this.setState({ email: e.target.value })}></input>

            //         </div>

            //         <button className='ui button blue'>update</button>

            //     </form>

            // </div>
        )
    }
}

export default withRouter(EditContact);