import React, { useState } from "react";

const AddMember = props => {
    const [member, setMember] = useState({ Name: "", Role: "", Email: ""});
    const changeHandler = event => {
        console.log(event.target.value);
        setMember({...member, [event.target.name]: event.target.value});
    }
    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
        setMember({name:"", role: "", email:""});
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                placeholder="name"
                value={member.name}
                onChange={changeHandler}
                />
            <label htmlFor="role">Role</label>
            <input
            type="text"
            name="role"
            placeholder="role"
            value={member.role}
            onChange={changeHandler}
            />
            <label htmlFor="email">Email</label>
            <input
            type="email"
            name="email"
            placeholder="email"
            value={member.email}
            onChange={changeHandler}
            />
            <button type="submit">Add Team Member</button>
        </form>
    )
}
export default AddMember;