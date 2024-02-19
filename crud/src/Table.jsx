import React from "react";

const Table = (props) => {
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id </th>
              <th>Name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>
                    <button className="btn btn-primary">EDIT</button>
                  </td>{" "}
                  <td>
                    <button className="btn btn-danger" onClick={()=>{
                        props.delete(data.id)
                    }} >DELETE</button>
                  </td>{" "}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
