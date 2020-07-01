import React from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import TextArea from 'antd/lib/input/TextArea';
import { useForm } from 'react-hook-form';

let Forms = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="container">
            <h2 style={{ marginTop: 10 }}>Contact</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Name</label>
                <input type="text" placeholder="Enter your name" name="name" ref={register({
                    required: "Lütfen Adınızı Girin",
                    minLength: { value: 3, message: "En az 3 karakter giriniz.." }
                })} />
                {errors.name && <div className="eror">{errors.name.message}</div>}

                <label>E-Mail</label>
                <input type="email" placeholder="Enter your e-mail" name="email" ref={register({
                    required: "Lütfen E-mail Girin"
                })} />
                {errors.email && <div className="eror">{errors.email.message}</div>}

                <label>Subject</label>
                <input type="text" placeholder="Enter your subject" name="subject" ref={register({
                    required: "Lütfen Konu Girin",
                    minLength: { value: 6, message: "Lütfen en az 6 karakter giriniz.." }
                })} />
                {errors.subject && <div className="eror">{errors.subject.message}</div>}

                <label>Message</label>
                <textarea rows="4" type="text" placeholder="Enter your message" name="message" ref={register({
                    required: "Lütfen Mesaj Girin",
                    minLength: { value: 10, message: "Lütfen an az 10 karakterlik mesaj giriniz.." }
                })} />
                {errors.message && <div className="eror">{errors.message.message}</div>}

                <button type="submit">Send Message</button>

            </form>
        </div>
    );

}

export default Forms;