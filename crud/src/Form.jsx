import React from "react";
import { useState } from "react";

const Form = (props) => {
 let [newproducts, newupdatedproducts] = useState(props.datas);
let forminput=(event)=>{
 let {name,value} =  event.target
 newupdatedproducts({...newproducts,[name]:value})
}
  return (
    <div className="form-overlay">
      <form className="forms">
        <div className="form-group">
          <div className="form-control w-100">
            <label>Enter name:</label>
            <input
              type="name"
              name="name"
              value={newproducts.name}
              onChange={
                forminput
              }
              placeholder="enter name"
            ></input>
          </div>
          <div className="form-group">
            <div className="form-control w-150">
              <label>Enter age:</label>
              <input
              name="age"
              onChange={
                forminput}
                type="number"
                value={newproducts.age}
                placeholder="enter age"
              ></input>
            </div>
          </div>

          <div className="form-control w-150">
            <button
              className="btn btn-success float-end "
              onClick={(e) => {
                e.preventDefault();
                props.news(newproducts);
              }}
            >
              Sumbit
            </button>
            <button
              className="btn btn-danger float-end"
              onClick={(e) => {
                e.preventDefault();
                props.closes();
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
