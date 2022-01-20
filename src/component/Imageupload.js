import React,{useState} from 'react'
import '@firebase/firestore';
import { db } from "../contexts/firebase"
import { Image } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext"


export default function Imageupload() {
    const [singleImage,setSingleImage]=useState("");
    const { currentUser} = useAuth()
function handleImage(e){
    e.preventDefault();
    let pickedFile;
    if(e.target.files && e.target.files.length>0){
        pickedFile=e.target.file[0];
        setSingleImage(pickedFile);
    }

    try{
        db.collection("users").doc(currentUser.uid ).set({
           profile:singleImage
         
        })
        }catch(err){
            console.erroe(err)
        }


}


    return (
        <div>
            
            <h3>Upload image</h3>
            <input type="file" name="jpg" onChange={handleImage}/>
            <img src={singleImage}/>
        </div>
    )
}
