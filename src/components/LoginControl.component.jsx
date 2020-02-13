import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		boxShadow: '0px 0px 100px -70px green, 0px 0px 100px -70px green',
		border: '2px solid rgba(0,100,0, 0.6) '
	},
	overlay: {
		backgroundColor: 'rgba(0,50,0, 0.2)'
	}
};

Modal.setAppElement('#root');

export const LoginControl = ({ dialogStatus, setDialogStatus }) => {
	const [ modalIsOpen, setModelIsOpen ] = useState(dialogStatus);
	const [ register, setRegister ] = useState(false);
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	useEffect(
		() => {
			setModelIsOpen(dialogStatus);
		},
		[ dialogStatus ]
	);

	const closeModal = () => {
		setFirstName('');
		setLastName('');
		setPhone('');
		setEmail('');
		setPassword('');
		setDialogStatus(false);
		setModelIsOpen(false);
		setRegister(false);
	};

	const handleSignIn = (event) => {
		event.preventDefault();
		closeModal();
		alert(`Welcome ! ${email}`);
	};

	const handleRegisterClick = () => {
		setModelIsOpen(false);
		setRegister(true);
	};

	const handleSignUp = (event) => {
		event.preventDefault();
		closeModal();
		alert(
			`Congratulation ${firstName} ${lastName} ! your have successfully registered with email: ${email} phone: ${phone} and password: ${password}`
		);
	};

	return (
		<div>
			<Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
				<div className="w-72 h-72 md:w-104 rounded mt-2">
					<form className="flex items-center flex-col mx-1">
						<input
							className="w-full my-3 border rounded text-center focus:outline-none focus:border-green-500 "
							type="email"
							placeholder="Email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
						<input
							className="w-full my-3 border rounded text-center focus:outline-none focus:border-green-500 "
							type="password"
							placeholder="Password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
						<input
							className="w-1/3 my-3 border rounded cursor-pointer bg-green-500 text-gray-100"
							type="submit"
							value="SignIn"
							onClick={(event) => handleSignIn(event)}
						/>
						<input
							className="w-1/2 mt-8 mb-3 border rounded cursor-pointer bg-green-500 text-gray-100 "
							type="button"
							value="Register"
							onClick={handleRegisterClick}
						/>
					</form>
				</div>
			</Modal>

			{/* Register Model */}

			<Modal isOpen={register} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
				<div className="w-72 h-72 md:w-104 rounded mt-2">
					<form className="flex items-center flex-col mx-1">
						<input
							className="w-full my-3 border rounded text-center focus:outline-none focus:border-green-500 "
							type="text"
							placeholder="First Name"
							value={firstName}
							onChange={(event) => setFirstName(event.target.value)}
							required
						/>

						<input
							className="w-full my-3 border rounded text-center focus:outline-none focus:border-green-500 "
							type="text"
							placeholder="Last Name"
							value={lastName}
							onChange={(event) => setLastName(event.target.value)}
						/>

						<input
							className="w-full my-3 border rounded text-center focus:outline-none focus:border-green-500 "
							type="email"
							placeholder="Email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							required
						/>

						<input
							className="w-full my-3 border rounded text-center focus:outline-none focus:border-green-500 "
							type="phone"
							placeholder="Phone Number"
							value={phone}
							onChange={(event) => setPhone(event.target.value)}
							required
						/>

						<input
							className="w-full my-3 border rounded text-center focus:outline-none focus:border-green-500 "
							type="password"
							placeholder="Password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							required
						/>

						<input
							className="w-1/3 my-3 border rounded cursor-pointer bg-green-500 text-gray-100"
							type="submit"
							value="Register"
							onClick={(event) => handleSignUp(event)}
						/>
					</form>
				</div>
			</Modal>
		</div>
	);
};
