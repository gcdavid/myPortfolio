import './contact.css'
import phone from '../../img/phone.png'
import email from '../../img/email.png'
import address from '../../img/address.png'
import emailjs from 'emailjs-com'
import { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../../context'
const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_861icjr', 'template_zia4weo', formRef.current, 'user_c1kTSYrOzA9fHg5ceKvVK')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return (
        <div className='c'>
            <div className="c-bg">
                <div className="c-wrapper">                  
                      <div className="c-left">
                            <h1 className="c-title">Let's discuss your project</h1>  
                            <div className="c-info">
                                <div className="c-info-item">
                                    <img src={phone} className="c-icon"></img>
                                    +977 - 9866317023
                                </div>

                                <div className="c-info-item">
                                    <img src={email} className="c-icon"></img>
                                    gcdavid17@gmail.com
                                </div>

                                <div className="c-info-item">
                                    <img src={address} className="c-icon"></img>
                                    Kadaghari, Kathmandu
                                </div>
                            </div>
                        </div> 

                        <div className="c-right">
                        <p className="c-desc">
                            <b>What’s your story?</b> Get in touch. Always available for
                            freelancing if the right project comes along. me.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}} type="text" placeholder='Name' name='user_name' />
                            <input style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}} type="text" placeholder='Subject' name='subject' />
                            <input style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}} type="text" placeholder='Email' name='user_email' />
                            <textarea style={{backgroundColor: darkMode && '#333' ,color: darkMode && 'white' }} rows='5' placeholder='Message' name='message'></textarea>
                            <button>Submit</button>
                            {done && <p className='success'>"Thank You.."</p>}
                        </form>
                        </div> 
                </div>
            </div>
        </div>
    )
}

export default Contact
