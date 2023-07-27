import { FormEvent, useState } from 'react'
import './CreateUser.scss'


function CreateUser() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [coverImageUrl, setCoverImageUrl] = useState('');
    const [profileImageUrl, setProfileImageUrl] = useState('');

    const [formSubmittedWasValid , setFormSubmittedWasValid] = useState(false)
    const [formSubmitted , setFormSubmitted] = useState(false)

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault()
        setFormSubmitted(true)
        if ((event.target as HTMLFormElement).checkValidity()) {
          fetch("http://localhost:3001/users/create", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name,
              username,
              email,
              coverImageUrl,
              profileImageUrl,
            })
          }).then((response) => {
            if (response.ok) {
              setFormSubmittedWasValid(true)
              setName('')
              setUsername('')
              setEmail('')
              setCoverImageUrl('')
              setProfileImageUrl('')
            } else {
              setFormSubmittedWasValid(false)
            }
          }).catch(() => {
            setFormSubmittedWasValid(false)
          })
        } else {
          setFormSubmittedWasValid(false)
        }
      }

    return(<>
		<h1 className='title-create-user'>Create User</h1>

        {/* <form onSubmit={tryCreateUser} noValidate className={`CreateUser ${formSubmitted && !formSubmittedWasValid ? "CreateUser--submitted" : ""}`}> */}

		<form className={`form-user ${formSubmitted && !formSubmittedWasValid ? "form-user--submitted" : ""}`} noValidate onSubmit={handleFormSubmit}>
            <div className='form-user__field'>
                <label htmlFor="name">Name</label>
                <input type="text" className='form-user__input' name="name" onChange={(event) => {setName(event.target.value)}} required />
                <p className='form-user__caption'>Please enter a valid name</p>
            </div>
            <div className='form-user__field'>
                <label htmlFor="username">User Name</label>
                <input type="text" className='form-user__input' id='username' name="username" onChange={(event) => {setUsername(event.target.value)}} required />
                <p className='form-user__caption'>Please enter a valid user name</p>
            </div>
            <div className='form-user__field'>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-user__input' id='email' name="email" onChange={(event) => {setEmail(event.target.value)}} required/>
                <p className='form-user__caption'>Please enter a valid email address</p>

            </div>
            <div className='form-user__field'>
                <label htmlFor="coverImageUrl">Cover Image</label>
                <input type="url" className='form-user__input' id='coverImageUrl' name="coverImageUrl" onChange={(event) => {setCoverImageUrl(event.target.value)}} required/>
                <p className='form-user__caption'>Please enter a valid URL</p>

            </div>
            <div className='form-user__field'>
                <label htmlFor="profileImageUrl">Profile Image</label>
                <input type="url" className='form-user__input' id='profileImageUrl' name="profileImageUrl" onChange={(event) => {setProfileImageUrl(event.target.value)}} required/>
                <p className='form-user__caption'>Please enter a valid URL</p>
            </div>

            <button className='form-user__button' type="submit">Submit</button>
            {formSubmitted && formSubmittedWasValid && <p className="form-user__result form-user__result--valid">User created!</p>}
            {formSubmitted && !formSubmittedWasValid && <p className="form-user__result form-user__result--invalid">Please review any issues</p>}
        </form>

	</>)
}

export default CreateUser;
