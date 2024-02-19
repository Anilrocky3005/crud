import React, { useEffect ,useState} from "react";
import Table from "./Table";
import { getData,deleteData,postData } from "./axios";
import Form from "./Form";

const App = () => {
  let [products,updatedproducts]=useState([])
  let[showform,closeform]=useState(false)
  let[formdata,updatedform]=useState(
    {
      "name":"a",
      "age":""
    }
  )
  useEffect(
    ()=>{
      getProducts()
    },[]
  )

  let getProducts=async ()=>{
   let res=await getData()
   updatedproducts(res.data)
  }
  let deleteddata=async (id)=>{
  await deleteData(id)
  getProducts()

  }
  let newdatas=async (data)=>{
    await postData(data)
    getProducts()
  }
  let close=()=>{
    closeform(false);

  }
  let open=()=>{
    closeform(true)
  }
  return (
    <>
      <div>
        <h1 className="text-primary">These is crud operation</h1>
        <button
          className="btn btn-secondary"
          onClick={() => {
            closeform(open);
          }}
        >
          Add data
        </button>
        <Table products={products} delete={deleteddata} />
        {showform && <Form news={newdatas} datas={formdata} closes={close}></Form>}
      </div>
    </>
  );
};

export default App;
