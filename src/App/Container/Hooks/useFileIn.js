import {useState} from 'react';
export default ()=>{
  const [fileText,setFileText] = useState('');
  return [fileText,setFileText];
}