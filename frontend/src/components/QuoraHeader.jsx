import React from 'react'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import './QuoraHeader.css'
import  { Modal} from 'react-responsive-modal';
import CloseIcon from '@mui/icons-material/Close';
import 'react-responsive-modal/styles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
 import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'; 
 //import Input from '@mui/icons-material/EditOutlined';
 import axios from 'axios'





function QuoraHeader() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("")
  const [question, setQuestion] = useState("")
  
  const Close = <CloseIcon />
  const handleSubmit  = async() => {
    if(question !== ""){

      const config = {
        headers: {
          "Content-Type":"application/json"
        }
      }
      const body ={
        questionName:question,
        questionUrl:inputUrl
      }
    await axios
    .post('/api/questions', body, config)
    .then((res)=>{
      console.log(res.data)
      alert(res.data.message)
    }).catch((e) =>{
     console.log(e.toJSON().message)
    alert('Question error in adding')
    })
    }
    
  }
  return (
    <div className='qHeader'>
     <div className="qHeader-content">
       <div className="qHeader-logo">
            <img src= "https://tse1.mm.bing.net/th?id=OIP.7ew874nXju3UDahfUp0DzgAAAA&pid=Api&P=0 " alt="logo"></img>
            </div>
            <div className='qheader__icons'>
            <div className='qheader__icon'><HomeIcon /></div>
            <div className='qheader__icon'><FeaturedPlayListIcon /></div>
            <div className='qheader__icon'><AssignmentTurnedInOutlinedIcon /></div>
            <div className='qheader__icon'><PeopleAltOutlinedIcon /></div>
            <div className='qheader__icon'><NotificationsNoneIcon /></div>
            
           
       </div>
       </div>
       <div className='qHeader__input'>
         <SearchIcon />
         <input type="text" placeholder="search questions" />
       </div>
      
  <div className='btn btn-success' onClick={()=> setIsModalOpen(true)}>Add Question</div>
  <Modal open = {isModalOpen}
  closeIcon={Close} 
  onClose={()=>setIsModalOpen(false)}
  closeOnEsc
  center
  closeOnOverlayClick={false}
  styles={{
    overlay:{
      height: "auto",
    }
  }}
  >
    <div className="modal__title">
    <h5>Add Question</h5>
    <h5>Share Link</h5>
    <div className="modal__info">
     <AccountCircleIcon className='avatar' />
     <div className="modal__scope">
      <PeopleAltOutlinedIcon />
      <p>Public</p>
      <ExpandMoreOutlinedIcon />
     </div>
    </div>
    </div>
    <div className="modal__Feild">
     <input
     value = {question}
     onChange={(e)=> setQuestion(e.target.value)}
      type="text" placeholder="start your question with what, How, wHY, etc"/>
     <div style={{
      display:"flex",
      flexDirection:"column"
     }}><input type="text" 
     value = {inputUrl}
     onChange = {(e)=> setInputUrl(e.target.value)}
     styles={{
      margin: "5px 0",
      border: "1px solid lightgrey",
      padding: "10px",
      outline: "2px solid black"
     }}
     placeholder="Optional include link that gives context" />
{
  inputUrl !== ""  && <img src={inputUrl} alt = 'displayimage'/>
}
   {/* <img src={inputUrl} alt = 'displayimage'/> */}
     </div>
    </div>
    <div className='modal__buttons'>
      <button className='cancel' onClick={()=>setIsModalOpen(false)}>
        Cancel
      </button>
      <button onClick={handleSubmit} type='submit' className='add' >
       Add Question
      </button>
    </div>
  </Modal>

     </div>

 
  )
}

export default QuoraHeader
