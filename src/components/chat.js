import "./chat.css";
import userImage from "../components/images/hibty.jpg";
import b1 from "../components/images/b1.jpg";
import b2 from "../components/images/b2.avif";
import b3 from "../components/images/b3.avif";
import b4 from "../components/images/b4.avif";
import { useState } from "react";
const Chat = () => {
const [setting , showSetting] = useState ('settings-mobile');
const [image , setImage] = useState({
  bg : ''
})
  const handleSettings = () => {
    if(setting === 'settings-mobile'){
showSetting('settings-mobile active')
    }else{
showSetting('settings-mobile')
    }
  }
// dark light mode...
const handleMode =  () => {
  // let card = document.getElementById('card');
  // let global = document.getElementById('global');
  // card.classList.add("bg-dark")
  //   global.classList.add("bg-dark")
  //   document.body.classList.add('dark')
  }

  const handleBackground = (e) => {
    const chatArea = document.getElementById('messages');
    let background = document.getElementById('background')
let back = e.target.src;
chatArea.style.backgroundImage = background
background.classList ='message-image show'
setImage({
  bg : back
})
  }
  return (
    <div>
      <div className="container-lg mt-3 mb-3" id="global">
        <div className="card" id="card">
          <div className="card-header d-flex flex-row justify-content-between align-items-center">
            <div className="icon">
              <i class="far fa-comment-dots fs-1 text-primary"></i>
            </div>
            <div className="search-bar d-lg-flex d-md-flex flex-row d-none">
              <i class="fas fa-magnifying-glass me-3"></i>
              <input
                type="text"
                className="forme-controle"
                placeholder="Search..."
              />
            </div>
            <div className="options d-flex flex-row justify-content-around align-items-center">
              <span role="button" onClick={handleMode}>
                <i class="far fa-moon me-3 fs-5 text-transparent"></i>
              </span>
              <span role="button" className="d-flex d-lg-none" onClick={handleSettings}>
                <i class="fas fa-gear me-3 fs-5 text-transparent"></i>
              </span>
              <span className="user-icon">
                <img src={userImage} alt="img" className="user-image" />
              </span>
            </div>
          </div>
          <div className="card-body">
            <div className="row row-cols-1 row-cols-lg-2 " >
              <div className="active-users messages" >
              <img src={image.bg} alt="user" className="image-fluid message-image" id="background"/>
                <div className="messages bg-image"  id="messages">
                  
                  <div className="d-flex flex-row ">
                    <img
                      src={userImage}
                      alt="img"
                      className="user-image me-3"
                    />
                    <div>
                      <p className=" text-white usermssg p-1 mb-0">
                        Hi how are you ?
                      </p>
                      <p className="time">delivred 3 min ago</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row  justify-content-end align-items-end">
                    <div className="d-flex flex-row">
                      <img
                        src={userImage}
                        alt="img"
                        className="user-image me-3"
                      />
                      <div>
                        <p className="text-dark bg-white user p-1 mb-0">
                          I am good thank you
                        </p>
                        <p className="time">delivred 2 min ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row ">
                    <img
                      src={userImage}
                      alt="img"
                      className="user-image me-3"
                    />
                    <div>
                      <p className=" text-white usermssg p-1 mb-0">
                        Hi how are you ?
                      </p>
                      <p className="time">delivred 3 min ago</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row  justify-content-end align-items-end">
                    <div className="d-flex flex-row">
                      <img
                        src={userImage}
                        alt="img"
                        className="user-image me-3"
                      />
                      <div>
                        <p className="text-dark bg-white user p-1 mb-0">
                          I am good thank you
                        </p>
                        <p className="time">delivred 2 min ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row ">
                    <img
                      src={userImage}
                      alt="img"
                      className="user-image me-3"
                    />
                    <div>
                      <p className=" text-white usermssg p-1 mb-0">
                        Hi how are you ?
                      </p>
                      <p className="time">delivred 3 min ago</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row  justify-content-end align-items-end">
                    <div className="d-flex flex-row">
                      <img
                        src={userImage}
                        alt="img"
                        className="user-image me-3"
                      />
                      <div>
                        <p className="text-dark bg-white user p-1 mb-0">
                          I am good thank you
                        </p>
                        <p className="time">delivred 2 min ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row ">
                    <img
                      src={userImage}
                      alt="img"
                      className="user-image me-3"
                    />
                    <div>
                      <p className=" text-white usermssg p-1 mb-0">
                        Hi how are you ?
                      </p>
                      <p className="time">delivred 3 min ago</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row mb-5 justify-content-end align-items-end">
                    <div className="d-flex flex-row">
                      <img
                        src={userImage}
                        alt="img"
                        className="user-image me-3"
                      />
                      <div>
                        <p className="text-dark bg-white user p-1 mb-0">
                          I am good thank you
                        </p>
                        <p className="time">delivred 2 min ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="message-input d-flex flex-row justify-content-between align-items-center p-2 ">
                  <div className="tools">
                    
                    <i class="far fa-image me-3"></i>
                  </div>
                  <div className="d-flex flex-row justify-content-center align-items-center input">
                    <input type="text" placeholder="Type a word..." />
                    <button className="btn btn-outline-white text-dark">
                      <i class="far fa-paper-plane fs-6 text-info fw-bold"></i>
                    </button>
                  </div>
                  <div className="emojis">
                    <i class="far fa-face-grin ms-3"></i>
                  </div>
                </div>
              </div>
              <div className="settings d-none d-lg-grid  bg-light p-3 border-start ">
                <div className="d-flex flex-row justify-content-start">
                  <p className="me-5 fw-bold">Change color :</p>
                  <div className="colors d-flex flex-row">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <hr />
                <div className="d-flex flex-row justify-content-start">
                  <p className="me-5 fw-bold">Change emoji :</p>
                  <div>
                    <i class="fas fa-thumbs-up ms-4 fs-4"></i>
                  </div>
                </div>
                <hr />
                <div className="d-flex flex-column justify-content-start">
                  <p className="me-5 fw-bold">Change Background :</p>
                  <div className="row row-cols-4 backgrounds">
                    <img src={b1} className="img-fluid mb-2" alt="background" onClick={handleBackground}/>
                    <img src={b2} className="img-fluid mb-2" alt="background" onClick={handleBackground}/>
                    <img src={b3} className="img-fluid mb-2" alt="background" onClick={handleBackground}/>
                    <img src={b4} className="img-fluid mb-2" alt="background" onClick={handleBackground}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex flex-row justify-content-center align-items-center">
            <p className="text-dark fs-5 mt-3 me-3">
              2023 <i class="far fa-copyright"></i>  Tlailia Hamid :
            </p>
            <div className="socials d-flex flex-row">
              <i class="fab fa-facebook me-3  fs-4 text-primary"></i>
              <i class="fab fa-youtube me-3 fs-4 text-danger"></i>
            
            </div>
          </div>

          {/* Show settings in mobile versio */}
          <div className={setting}>
          <span className="bg-light position-absolute close" role="button" onClick={handleSettings}><i class="fas fa-xmark"></i></span>
<div className="d-flex flex-row justify-content-start">
  <p className='me-5 fw-bold'>Change color :</p>
  <div className="colors d-flex flex-row">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  
  </div>
</div>
<hr />
<div className="d-flex flex-row justify-content-start">
  <p className='me-5 fw-bold'>Change emoji :</p>
  <div>
  <i class="fas fa-thumbs-up ms-4 fs-4"></i>
  </div>
</div>
<hr />
<div className="d-flex flex-column justify-content-start">
  <p className='me-5 fw-bold'>Change Background :</p>
  <div className='row row-cols-4 backgrounds'>
  <img src={b1} className="img-fluid mb-2" alt="background" onClick={handleBackground}/>
                    <img src={b2} className="img-fluid mb-2" alt="background" onClick={handleBackground}/>
                    <img src={b3} className="img-fluid mb-2" alt="background" onClick={handleBackground}/>
                    <img src={b4} className="img-fluid mb-2" alt="background" onClick={handleBackground}/>

  </div>
</div>
  </div>

          {/* Mobile settings version */}
        </div>
      </div>
    </div>
  );
};

export default Chat;
