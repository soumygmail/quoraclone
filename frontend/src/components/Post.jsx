import React from 'react'
//import QuoraBox from './QuoraBox'
import {useState } from 'react'

import './css/Post.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import 'react-responsive-modal/styles.css';
import  { Modal} from 'react-responsive-modal';
import CloseIcon from '@mui/icons-material/Close';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Close = <CloseIcon />
  return (
    
    <div 
    style={{
        border: "1px solid lightgrey",
        marginTop: "10px",
        background: "white"
    }}className="post">
    <div
     style={{
        display: "flex",
        justifyContent:'space-between',
        marginBottom: "20px",
        paddingTop: "10px"
     
      }}  className="post_info">
        <img src="https://tse2.mm.bing.net/th?id=OIP.8aMeOSqbOiyc_AV3TZouSwAAAA&pid=Api&P=0">

        </img>
        <h4>User Name</h4>
        <small>Timestamp</small>
    </div>
      <div className="post_body">
      <div
      style={{
        display: "flex",
        justifyContent:'space-between'
      }} className="post__question">
        <p>This is test question</p>
        <button onClick={() => setIsModalOpen(true)} className='btn btn-success'>Answer</button>
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

    <div className='modal__question'>
      <h1>This is test Question</h1>
      <p>asked by {""}</p><span>Username</span>{" "}on{""}timestamp
    </div>
    <div className="modal__answer">
      <ReactQuill  placeholder="Enter your answer" />
    </div>
    <div className='modal__buttons'>
    <button className='cancel' onClick={()=>setIsModalOpen(false)}>
        Cancel
      </button>
      <button type='submit' className='add' >
       Add Question
      </button>
    </div>
  </Modal>
      </div>
      </div>
      <div 
      style={{
        display: "flex",
        margin: "10px"
      }}className="post__footer">
      <div className="post__footerAction">
      <ArrowUpwardIcon/>
      <ArrowDownwardIcon/>
    
      </div>
      <RepeatIcon />
      <ChatBubbleOutlineIcon />
      <div className='post__footerLeft'>
      <ShareIcon />
      <MoreHorizIcon />
      </div>
      </div>
      <p 
      style={{
        color: "rgba(0,0,0,0.5)",
        fontSize: "12px",
        fontWeight:"bold"
      }}>1 Answer</p>
      <div style={{
        margin:"5px 0px 0px ",
        padding: "5px 0px 0px 20px",
        borderTop: "1px solid lightgrey",
      }} className="post__answer">
        <div style={{
            display:"flex",
            flexDirection: "column",
            width:"100%",
            padding: "10px 5px",
            borderTop: "1px solid lightgray",

        }}className="post-answer-container">
            <div
            style={{
            display:"flex",
            alignItems: "center",
           marginBottom: "10px",
           fontSize: "12px",
           fontWeight: 600,
           color: "#888",
          
             }} className="post-answered">
            
              <img src="https://tse2.mm.bing.net/th?id=OIP.8aMeOSqbOiyc_AV3TZouSwAAAA&pid=Api&P=0"></img>
              <div
              style={{
                margin: "0px 10px",
                marginLeft: "7px"
              }}
               className="post-info">
                <p>Username</p>
                <span>Timestamp</span>
              </div>
            </div>
        </div>
        <div className="post-answer">
            This is test answer
        </div>
      </div>
    </div>
  )
}

export default Post
