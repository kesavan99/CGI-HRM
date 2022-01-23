import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import SendIcon from '@mui/icons-material/Send';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import Sidebar from '../Sidebar'
import Appbar from '../Appbar'
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import { Input } from '@mui/material';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import  input  from '@mui/material/Input';

class Announcementdb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      content: this.state.editorState.getCurrentContent().getPlainText()
    };

        console.log(this.state.editorState.getCurrentContent().getPlainText())

    this.setState({editorState: EditorState.createEmpty()})
  }
  render() {
    return (
      <div>
        <div className="container">
  <div className="row align-items-start">
<Appbar/>
  </div>
    <div   className="row ">
    
      <Sidebar/>
<div  style={{paddingLeft:'15%',paddingTop:'5%'}}>  

        <h5>Announcement</h5>  
           Code No: <input/>
           <div style={{paddingTop:'1%',paddingBottom:'1%'}}>  
           Type:
           <select className="form-select" style={{width:'25%'}} >
  <option selected> Announcement Type</option>
  <option value="1">By Employee</option>
  <option value="2">By Department</option>
  <option value="3">By Job position</option>
</select>
</div>
<div style={{paddingBottom:'1%'}}>
      <span> Title:</span>
<input type="text" style={{width:'70%'}} class="form-control" placeholder="Title of Announcement"  aria-describedby="basic-addon2"/>
</div>
      
          <Editor
        
            editorState={this.state.editorState}
            wrapperClassName="wrapper"
            editorClassName="editor"
            onEditorStateChange={this.onEditorStateChange}
          />
          <Button onClick={this.handleSubmit}    variant="contained" style={{color:"white", background:"#2196f3"}} startIcon={<SendIcon/>} >Submit </Button>      
      </div>
      </div>   </div>   </div>
    );
  }
}

export default Announcementdb;