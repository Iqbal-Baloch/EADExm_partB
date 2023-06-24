const Create = ()=>{
    return (
        <form action="/product/save" method="post" >
            <label>
                Product Name:
                <input  type="text" name="name" placeholder="enter product name"/>
            </label> <br/>
            <label>
                Product Price:
                <input  type="number" name="price" placeholder="enter product price"/>
            </label><br/>
            <label>
                Product Quantity:
                <input  type="number" name="qty" placeholder="enter product Quantity"/>
            </label><br/>
            
            <label>
                Product Manufacturer:
                <input  type="text" name="manufacturer" placeholder="enter product Manufacturer"/>
            </label>
            <input type="submit" value="Save"></input>
           
        </form>
    );
}
export default Create