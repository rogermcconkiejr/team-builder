import React from "react";

const Form = props => {
    console.log(props);
    return (
        <div className="formList">
            {props.formList.map(form =>{
                return (
                    <div className="form" key ={form.id}>
                        <h2>{form.name}</h2>
                        <p>{form.email}</p>
                        <p>{form.role}</p>
                    </div>
                )
            })}
        </div>
    )

};
export default Form;