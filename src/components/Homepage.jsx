import React, { useState } from 'react';
import { Cards } from '../dataStore/cardContent';
import { Navbar } from './Navbar.component';
import Modal from 'react-modal';
const uuidv1 = require('uuid/v1');

Modal.setAppElement('#root');
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

const Card = ({ heading, content, handleCardClick }) => {
	return (
		<div className="flex justify-center mx-8 ls:mx-autor">
			<div
				onClick={() => handleCardClick(heading, content)}
				className=" p-1 mt-4 ls:w-9/12 text-justify border rounded cursor-pointer"
			>
				<div className="font-semibold text-center">{heading}</div>
				<hr />
				<div>{content}</div>
			</div>
		</div>
	);
};

const Homepage = () => {
	const [ cardModalStatus, setCardModelStatus ] = useState(false);
	const [ cardHeading, setCardHeading ] = useState(null);
	const [ cardContent, setCardContent ] = useState(null);

	const closeModal = () => {
		setCardModelStatus(false);
	};

	const handleCardClick = (heading, content) => {
		setCardHeading(heading);
		setCardContent(content);
		setCardModelStatus(true);
	};

	return (
		<div style={{ filter: 'blur(2p)' }}>
			<header>
				<Navbar />
				<hr />
			</header>
			<main className="max-w-screen-xl m-auto mt-4 ">
				{Cards.map((card) => {
					return (
						<Card
							key={uuidv1()}
							heading={card.heading}
							content={card.content}
							handleCardClick={handleCardClick}
						/>
					);
				})}
			</main>

			<Modal
				isOpen={cardModalStatus}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<div className="flex w-screen85 h-screen73 max-w-screen-lg justify-center text-center rounded mt-2">
					<div className="w-full">
						<div className="flex h-10/12 border m-1">
							<div className="w-full px-2 ">
								<div>{cardHeading}</div>
								<hr />
								<div className="text-justify">{cardContent}</div>
							</div>
							<div className="border w-2/12">Media Icons</div>
						</div>
						<div className="border m-1 flex h-2/12 justify-center items-center">
							<p>Timeline</p>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Homepage;
