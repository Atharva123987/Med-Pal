import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import "./searchsidebar.css";
import axios from "axios";

const Sidebar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState('');
    const [results, setResults] = useState(null)
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(1000);
    const [value, setValue] = useState(null);
    const [flag, setFlag] = useState(0);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.get(`https://random-data-api.com/api/v2/users?size=5`);
            setResults(response.data)
        }
        catch(err){
            console.log(err)
        }
        // !!!POST REQUEST HERE
    };



    return (
        <>
        <div className="sidebar">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="searchQuery"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e)=>setSearchQuery(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <label htmlFor="distanceSlider">Distance (in miles): {value}</label>
                    <Form.Control
                        type="range"
                        name="distanceSlider"
                        min={min}
                        max={max}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <label>Category:</label>
                    <select name="category" value={filters.category} onChange={(e)=>setFilters(e.target.value)}>
                        <option value="cardiologist">Cardiologist</option>
                        <option value="rheumatologist">Rheumatologist</option>
                        <option value="pediatrician">Pediatrician</option>
                        <option value="general_physician">General Physician</option>
                    </select>
                </Form.Group>

                <Button type="submit">Submit</Button>
            </Form>

            
        </div>
        <div>
        {results && results.map((elem)=>{
            return(
                <ul>
                <li style={{marginLeft:"50vw"}}><img style={{height:"100px"}} src={elem.avatar}/></li>
                <li style={{marginLeft:"50vw"}}>{elem.first_name}</li>
                <li style={{marginLeft:"50vw"}}>{elem.last_name}</li>
                </ul>
            )
        })}
    </div>
    </>
    );
};

export default Sidebar;
