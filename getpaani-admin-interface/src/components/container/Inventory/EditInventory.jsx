import React,{useRef} from 'react';
import styled from 'styled-components';
import {client} from '@components/container/Apollo/ApolloClientProvider';
import {gql}from 'apollo-boost';

const Wrapper = styled.div`
background-color:#fafafa;
display:flex;
align-item:center;
justify-content:center;
height:100vh;
`
function EditInventory() {

    const ID =useRef()
    const date=useRef()
    const CheckedBy=useRef()
    const Product=useRef()


    return(<Wrapper>
        <div style={{marginLeft:150}}><h2> Edit Inventory</h2></div>
        <div className="FormsEdit">
            <form className="ui form">
            <div className="field">
                 <label>Stock ID</label>
                    <input ref={ID}
                    placeholder="Stock ID" />
                </div>

               <div className="field">

                  <label> Change date</label>
                  <input ref={date}placeholder="Change date " />
               </div>
               <div className="field">
               <label> Change Source</label>
                  <input ref={CheckedBy}placeholder="CheckedBy " />

             </div>
               <div className="field">
               <label> Change Product</label>
                  <input ref={Product}placeholder="Change  Product" />

             </div>

            <button  className="ui primary button"
            onClick={()=>{

               event.preventDefault()
               if(CheckedBy.current.value&&ID.current.value!=null){
              client.mutate({
                 mutation:gql`
                mutation editInventoryItems($editInventoryInput: EditInventoryItem){
                    editInventoryItem(editInventoryInput: $editInventoryInput){
                     id,


                  }



                 }




                 `
                 ,variables:{editInventoryInput:{
                     id:ID.current.value,
                     date:date.current.value,
                     checkedBy:CheckedBy.current.value,
                     products:Product.current.value,




                 }}
              }).then((res)=>{console.log(res)
              window.location.href='/inventory'}


              )

            }
           else{
              alert('please fill input fields')
           }

         }




             }

            >Submit</button>
          </form>
        </div>
        </Wrapper>
    )
}
export default EditInventory
