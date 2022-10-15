import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { setAddress } from '../../Services/DataServices';

function Address() {
    const [addressObj, setAddressObj] = useState({Address: "", City: "", State: "", TypeID: 1})
    
    const takeAddress = (event) => {
        setAddressObj((prevState) => ({ ...prevState, Address: event.target.value }));
    };
    const takeCity = (event) => {
        setAddressObj((prevState) => ({ ...prevState, City: event.target.value }));
    };
    const takeState = (event) => {
        setAddressObj((prevState) => ({ ...prevState, State: event.target.value }));
    };

    const handleAddress = () =>{
        let response = setAddress(addressObj)
        console.log(response)
        alert("Address saved successfully.")
    }

    return (
        <>
            <h3>Customer Details</h3>
            <div style={{ display: "flex", gap: "20px" }}>
                <div><TextField label="Full Name" defaultValue="Ankita Kadam" InputProps={{ readOnly: true }} size="small" /></div>
                <div><TextField label="Mobile Number" defaultValue="9737235652" InputProps={{ readOnly: true }} size="small" /></div>
            </div>
            <div style={{width: "54%"}}>
                <TextField
                    id="outlined-textarea"
                    label="Address"
                    placeholder="Address"
                    multiline
                    size='small'
                    fullWidth
                    onChange={takeAddress}
                />
            </div>
            <div>
                <input type="checkbox" value="1" />
                <label class="text" for="hr">Home</label>
                <input type="checkbox" value="2" />
                <label class="text" for="hr">Office</label>
                <input type="checkbox"s value="3" />
                <label class="text" for="hr">Other</label>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
                <div><TextField label="City/Town" size="small" onChange={takeCity}/></div>
                <div><TextField label="State" size="small" onChange={takeState}/></div>
            </div>
            <div style={{alignSelf: "flex-end"}}>
            <Button variant="contained" onClick={handleAddress}>Continue</Button>
            </div>
        </>
    )
}

export default Address