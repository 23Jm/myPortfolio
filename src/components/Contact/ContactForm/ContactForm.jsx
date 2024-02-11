import React, { useState } from 'react'
import styles from "./ContactForm.module.css"

const ContactForm = () => {
   const [enteredName,setEnteredName]=useState("")
   const [enteredEmail,setEnteredEmail]=useState("")
   const [enteredMessage,setEnteredMessage]=useState("")
   const [touchedField,setTouchedFields]=useState([])

   const handleInputChange=(event)=>{
    const{name,value}=event.target;
    if (name === "name") {
      setEnteredName(value);
    } else if (name === "email") {
      setEnteredEmail(value);
    } else if (name === "message") {
      setEnteredMessage(value);
    }
   }

   const handleSubmit=(event)=>{
    setTouchedFields(["name","email","message"])
    event.preventDefault();
    if(enteredName.trim()===""||enteredEmail.trim()===""||enteredMessage.trim()===""){return;}

    const formData={
      name:enteredName,
      email:enteredEmail,
      message:enteredMessage
    }
    console.log(formData);

    setEnteredName('')
    setEnteredEmail('')
    setEnteredMessage('')
    setTouchedFields([])
   }
   const isFieldInvalid=(fieldName)=>{
    if(fieldName==="name"){return enteredName.trim()==="" && touchedField.includes(fieldName)}
    else if(fieldName==="email"){return (
      !enteredEmail.trim()||!enteredEmail.includes("@"))&& touchedField.includes(fieldName)}
    else if(fieldName==="message"){return enteredMessage.trim() === "" && touchedField.includes(fieldName);}
    return false;
   }

   const handleInputBlur=(event)=>{
        const {name}=event.target;
        if(!touchedField.includes("name")){
          setTouchedFields((prevField)=>[...prevField,name])
        }
   }
  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`${styles["form-control"]} ${
          isFieldInvalid("name") && styles.invalid
        }`}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={enteredName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoComplete="off"
        />
        {isFieldInvalid("name") && (
          <p className={styles.error}>Please enter your name</p>
        )}
      </div>
      <div
        className={`${styles["form-control"]} ${
          isFieldInvalid("email") && styles.invalid
        }`}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={enteredEmail}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoComplete="off"
        />
        {isFieldInvalid("email") && (
          <p className={styles.error}>Please enter a valid email address</p>
        )}
      </div>
      <div
        className={`${styles["form-control"]} ${
          isFieldInvalid("message") && styles.invalid
        }`}
      >
        <textarea
          name="message"
          placeholder="Message"
          className={styles.textarea}
          value={enteredMessage}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          autoComplete="off"
        ></textarea>
        {isFieldInvalid("message") && (
          <p className={styles.error}>Please enter your message</p>
        )}
      </div>
      <button className={styles.button}>Send Message</button>
    </form>
  );
}

export default ContactForm