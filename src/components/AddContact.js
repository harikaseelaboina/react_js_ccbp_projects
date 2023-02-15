import React from "react";
import { Component } from "react";

class AddContact extends Component {
    state = { name: "", email: "" }

    add = (event) => {
        event.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("fill all details");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" })
        console.log(this.state);
    }

    render() {
        return (
            <div className="container2">
                <h1 className="head2">Add contact</h1>
                <form onSubmit={this.add}>
                    <div className="formcontainer">
                        <label >Name</label>
                        <input value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} className="inputbox" type="text" name="name" placeholder="name"></input>
                    </div>
                    <div className="formcontainer">
                        <label>Email</label>
                        <input value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} className="inputbox" type="text" name="email" placeholder="email"></input>
                    </div>
                    <button className="btn1 btn-primary">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;