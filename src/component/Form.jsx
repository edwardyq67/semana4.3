import React, { useEffect, useState } from 'react';

const Form = ({addUser,userEdit,selectUser,updateUser}) => {
    const [firstName ,setFirstName]=useState("");
    const [lastName ,setLastName]=useState("")
    const [email, setEmail]=useState("")
    const [birthday , setbirthday]=useState("")
    const [password,setPassword]=useState("")
    useEffect(()=>{
        if(userEdit){
            setFirstName(userEdit.first_name)
            setLastName(userEdit.last_name)
            setEmail(userEdit.email)
            setbirthday(userEdit.birthday)
            setPassword(userEdit.password)
        }else{
            setFirstName("")
            setLastName("")
            setEmail("")
            setbirthday("")
            setPassword("")
        }
    },[userEdit])
    const submit=e=>{
        e.preventDefault();
        const user={
            first_name:firstName,
            last_Name:lastName,
            email,
            password,
            birthday
            }
            if(userEdit){
                user.id= userEdit.id;
                updateUser(user);
                
            }else{
                addUser(user);
                
            }
        }
        
        
    return (
        <form onSubmit={submit}>
            <h1>New User</h1>
            <div className="input-container">
            <label htmlFor='firstName'></label>
            <input type="text"
            id="firstName" 
            onChange={e=>setFirstName(e.target.value)}
            value={firstName} placeholder="firs name"
            
            />
            </div> 
            <div className="input-container">
            <label htmlFor='lastName'></label>
            <input type="text"
            id="lastName" 
            onChange={e=>setLastName(e.target.value)}
            value={lastName}  placeholder="last name"
            />
            </div> 
            <div className="input-container">
            <label htmlFor='email'></label>
            <input type="email"
            id="email" 
            onChange={e=>setEmail(e.target.value)}
            value={email} placeholder="email"
            />
            </div> 
            <div className="input-container">
            <label htmlFor='password'></label>
            <input type="password"
            id="password" 
            onChange={e=>setPassword(e.target.value)}
            value={password} placeholder="password"
            />
            </div> 
            <div className="input-container">
            <label htmlFor='birthday'></label>
            <input type="date"
            id="birthday" 
            onChange={e=>setbirthday(e.target.value)}
            value={birthday}
            />
            </div> 
            <button>create</button>
            {userEdit &&<button type='button' onClick={()=>selectUser(null)}>actualizar</button>}
        </form>
    );
};

export default Form;