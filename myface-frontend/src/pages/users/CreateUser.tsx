
const handleFormSubmit= (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log(event)
}

function CreateUser() {

	return(<>
		<h1>Create User</h1>

		<form onSubmit={handleFormSubmit}>
			<input type="text" name="username" />
			<input type="text" name="email" />
            <button type="submit">Submit</button>
		</form>
	</>)
}

export default CreateUser;
