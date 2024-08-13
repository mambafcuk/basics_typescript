import { useState } from "react";
interface IUserForm{
    name: string;
    age: number;
}

const defaultUserFormValue={
    name: "",
    age: 0
}

export function UserForm(){
    const[form, setForm] = useState<IUserForm>(defaultUserFormValue);

    const onChangeName=(event: any)=>{
       setForm({
        ...form,
        name: event.target.value,
       })}

    const onChangeAge=(event: any)=>{
        setForm({
         ...form,
         age: event.target.value,
        })}

    const onSubmitForm=(event: any)=>{
        event.preventDefault();
        console.log(form);
        
    }    

    return <>
    Username :
    <input 
    type="text" 
    value={form.name} 
    onChange={onChangeName}
    />
    <br></br>
    Age : 
    <input 
    type="number" 
    value={form.age} 
    onChange={onChangeAge}
    />
     
     <br></br>
    <button onClick={onSubmitForm}>
        Submit
    </button>
    </>
}