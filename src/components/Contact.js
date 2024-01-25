import {useRef} from "react";
import emailjs from '@emailjs/browser'

const Contact = () =>{
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yp5rqhf', 'template_8se9s58', form.current, '0kLGRDYhu6Kj9Mm1T')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return(
        <section>
            <div className="container">
                <h2 className="--text-center">Contact us</h2>
                <form ref={form} onSubmit={sendEmail} className="--form-control--card --flex-center --dir-column">
                    <input type="text" placeholder="full name" name="user_name" required/>
                    <input type="text" placeholder="email" name="user_email" required/>
                    <input type="text" placeholder="Subject" name="subject" required/>
                    <textarea name="message" cols="30" rows="10"></textarea>
                    <button type="submit" className="--btn --btn-primary">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact