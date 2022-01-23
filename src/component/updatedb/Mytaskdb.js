import React, { useState } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import Buttons from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { ButtonBase, tableBodyClasses } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../Sidebar'
import Appbar from '../Appbar'
import DeleteIcon from '@mui/icons-material/Delete';
import ReactDateInputs from 'react-date-inputs';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const Mytaskdb = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };




  const [cvalue, csetValue] = React.useState(new Date('20-08-18T21:11:54'));

  const chandleChange = (newValue) => {
    csetValue(newValue);
    
    console.log(cvalue)
  };







  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );



  
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const [svalue, ssetValue] = useState(new Date());
    const [dvalue, dsetValue] = useState(new Date());
    const [formValues, setFormValues] = useState([{ taskname: "", status : "",statusper:"",languageused:""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { taskname: "",status: "" ,statusper:"",languageused:""}])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(formValues));
        console.log(svalue,dvalue)
    
      }

    return (
        
<div className="container">
  <div className="row align-items-start">
<Appbar/>
  </div>
    <div   className="row ">
    
      <Sidebar/>
<div  style={{paddingLeft:'15%',paddingTop:'5%'}}>  
<Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        severity="success"
        message="sucessfully Submitted"
        action={action}
      ></Snackbar>
        <Card>
             <Card.Body>
             <h2 className="text-center mb-4">Update Task Detail</h2>
             {error && <Alert variant="danger">{error}</Alert>}
             <Form onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Task Name</label>
            
              <input type="text" name="taskname" className="w-100  d-flex justify-content-around"  value={element.taskname || ""} onChange={e => handleChange(index, e)} />
              <label>Language Used</label>
            
            <input type="text" name="languageused" placeholder="python,c,java" className="w-100  d-flex justify-content-around"  value={element.languageused || ""} onChange={e => handleChange(index, e)} />
      
              <label>Status of Task</label>
              <input type="text" name="status" placeholder="active or finished"className="w-100  d-flex justify-content-around"  value={element.status || ""} onChange={e => handleChange(index, e)} />
         <div className="w-100  d-flex justify-content-start" style={{paddingTop:'1%'}}>  
          <label style={{paddingRight:'1%'}}>Starting Date</label>
              
          <ReactDateInputs value={svalue} onChange={ssetValue}  />
          </div>
          <div className="w-100  d-flex justify-content-start" style={{paddingTop:'1%'}}>
               <label style={{paddingRight:'1%'}}>Dead Line Date</label>
               <ReactDateInputs value={dvalue} onChange={dsetValue} />
              
              


              
               </div>
                                          <label>Project Current Status in %</label>
              <input type="text" name="statusper"className="w-100  d-flex justify-content-around"   value={element.statusper || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
            <div>  <br></br>    <Buttons type="button" variant="contained" style={{color:"white", background:"#b71c1c"}} className="button remove" startIcon={<DeleteIcon />} onClick={() => removeFormFields(index)}>Remove</Buttons> 
               </div> : null
              }
             <br></br>
            </div>
          ))}
          <div className="button-section">
            <br></br>
              <Buttons className="button add"  variant="contained" style={{color:"white", background:"#2196f3"}} type="button" startIcon={<AddIcon/>} onClick={() => addFormFields()}>Add</Buttons>
           <span><span> </span> </span> <Buttons  className="button submit"  onClick={handleClick} variant="contained" style={{color:"white", background:"#2196f3"}} startIcon={<SaveIcon/>} type="submit">Submit</Buttons>
          </div>
         
          </Form>
      </Card.Body>

      </Card>

     
      </div></div>
      </div>
      )
}

export default Mytaskdb