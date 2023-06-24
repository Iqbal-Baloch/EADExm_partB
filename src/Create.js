import { useRef } from "react";

const Create = ()=>{
    const handleSubmit = (e) =>{
        e.preventDefault(); 

        fetch("localhost:5000/recepie/new 404 (N", {
            method: "POST", 
            body:JSON.stringify({
                name: nameRef.current.value,
                description: decRef.current.value,
                ingredients: ingRef.current.value, 
                instruction: insRef.current.value,
                image: imgRef.current.value,
            })
        }).then(res =>{
            return res.json(); 
        }).then(res => {
            console.log(res);
        }).catch(err=>{
            console.log(err) ;
        })

    }
    const nameRef = useRef()
    const decRef = useRef()
    const ingRef = useRef()
    const insRef = useRef()
    const imgRef = useRef()
    return (
        <form onSubmit={handleSubmit} >
            <label>
                Title: 
                <input required  type="text" ref={nameRef} name="title" placeholder="enter Title"/>
            </label> <br/>
            <label>
                Description:
                <input required  type="text" ref={decRef} name="description" placeholder="enter description"/>
            </label><br/>
            <label>
                ingredients:
                <input required  type="text" ref={ingRef} name="ingredients" placeholder="enter ingredients"/>
            </label><br/>
            
            <label>
                instruction:
                <input required  type="text" ref={insRef} name="instruction" placeholder="enter instruction"/>
            </label><br/>
            <label>
                image:
                <input required ref={imgRef} type="file" name="image"/>
            </label> <br/>
            <input type="submit" value="Save"></input>
           
        </form>
    );
}
export default Create