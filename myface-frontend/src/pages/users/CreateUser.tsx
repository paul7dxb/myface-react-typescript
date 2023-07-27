import { useState } from 'react'


function CreateUser() {
    const [data, setData] = useState({});
	const [emailIsValid, setEmailIsValid] = useState<boolean>();

    const updateData = (e : React.SyntheticEvent) => {
		const target = e.target as HTMLInputElement;

        setData({
            ...data,
            [target.name]: target.value
        })
    }

	const emailChangeHandler = (e : React.SyntheticEvent) => {
		updateData(e);
		const target = e.target as HTMLInputElement;
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    	if ( re.test(target.value) ) {
			setEmailIsValid(true);
    	}
		else {
			setEmailIsValid(false);
   		}
	}

    const handleFormSubmit = (e : React.SyntheticEvent) => {
        e.preventDefault();
        console.log(data);
    }

    return(<>
		<h1>Create User</h1>

		<form onSubmit={handleFormSubmit}>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" onChange={updateData} required />
			<label htmlFor="username">User Name</label>
			<input type="text" name="username" onChange={updateData} required />
			<label htmlFor="email">Email</label>
			<input className={`input-field ${emailIsValid ? "" :"invalid-input"}`} type="email" name="email" onChange={emailChangeHandler} required/>
			<label htmlFor="coverImageUrl">Cover Image</label>
			<input type="text" name="coverImageUrl" onChange={updateData} required/>
			<label htmlFor="profileImageUrl">Profile Image</label>
			<input type="text" name="profileImageUrl" onChange={updateData} required/>

            <button type="submit">Submit</button>
		</form>

	</>)
}

export default CreateUser;
