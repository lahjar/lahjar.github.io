import React, { useState } from 'react';
import { LoginControl } from './LoginControl.component';

export const Navbar = () => {
	const [ dialogStatus, setDialogStatus ] = useState(false);

	const createSignInModel = () => {
		setDialogStatus(true);
	};

	return (
		<nav className="max-w-screen-xl my-2 m-auto">
			<div className="flex flex-nowrap justify-between">
				<div className="ml-1 btn border">Logo</div>
				<div className="flex-none justify-around flex-nowrap">
					<div className="mr-4 btn border">Language</div>
					<div onClick={createSignInModel} className="mr-1 btn border">
						Login
					</div>
				</div>
			</div>
			<LoginControl dialogStatus={dialogStatus} setDialogStatus={setDialogStatus} />
		</nav>
	);
};
