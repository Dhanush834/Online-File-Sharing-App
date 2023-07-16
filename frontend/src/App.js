import { useEffect, useState } from 'react';
import './App.css';
import { FileUploader } from "react-drag-drop-files";

import ApiCall from './Apiservices/ApiCall';

const filetypes = ['jpeg', 'png' , 'docx' , 'mp4' , 'pdf'];

function App() {

  const [file , setFile] = useState(null);
  const [result , setResult] = useState('');

  useEffect(()=>{
    const upload = async() =>{
    if(file){
        const formData = new FormData();
        formData.append('name' , file.name)
        formData.append('file',file)
        const res =  await ApiCall(formData);
        setResult(res.path);
    }}
    upload();
  },[file])


  const onTypeError = (err) =>{
    alert(err)
  }

  return (
    <div className='fileuploader'>
      <FileUploader
      classes='custom'  
      name={file}  
      handleChange={ (file) => { setFile(file);  console.log(file)} }
      types={filetypes}
      onTypeError={onTypeError} 
      label='Click here to Upload or Drag File here'
      dropMessageStyle={{backgroundColor: 'red'}}
      hoverTitle='Drop Here'
      />

      
      
      <div className='link'>
        {result?<p>Copy and Share the link to DownladFile</p>:null}
        <a href={result}>{result}</a>
      </div>
      
      

    </div>
  );
}

export default App;
