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
function EditStock() {

    const ID =useRef()
    const date=useRef()
    const Source=useRef()
    const Product=useRef()


    return(<Wrapper>
        <div style={{marginLeft:150}}><h2 >Edit Stock</h2></div>
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
                  <input ref={Source}placeholder="Change Source " />

             </div>
               <div className="field">
               <label> Change Product</label>
                  <input ref={Product}placeholder="Change  Product" />

             </div>

            <button  className="ui primary button"
            onClick={()=>{

               event.preventDefault()
               if(Source.current.value&&ID.current.value!=null){
              client.mutate({
                 mutation:gql`
                mutation editStock($editStockInput: EditStock){
                  editStock(editStockInput: $editStockInput){
                     id,


                  }



                 }




                 `
                 ,variables:{editStockInput:{
                     id:ID.current.value,
                     date:date.current.value,
                     source:Source.current.value,
                     products:Product.current.value,




                 }}
              }).then((res)=>{console.log(res)



               window.location.href='/stock'

            })

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
export default EditStock
