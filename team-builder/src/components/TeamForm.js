import React, { useState } from "react";

const TeamForm = props => {
    const [form, setForm] = useState({ Name: "", Role: "", Email: ""});
    const changeHandler = event => {
        console.log(event.target.value);
        setForm({...form, [event.target.name]: event.target.value});
    }
    const submitForm = event => {
        event.preventDefault();
        const newForm = {
            ...form,
            id: Date.now()
        };
        props.addNewForm(newForm);
        setForm({name:"", role: "", email:""});
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                placeholder="name"
                value={form.name}
                onChange={changeHandler}
                />
            <label htmlFor="role">Role</label>
            <input
            type="text"
            placeholder="role"
            value={form.role}
            onChange={changeHandler}
            />
            <label htmlFor="email">Email</label>
            <input
            type="email"
            placeholder="email"
            value={form.role}
            onChange={changeHandler}
            />
            <button type="submit">Add Team Member</button>
        </form>
    )
}
export default TeamForm;