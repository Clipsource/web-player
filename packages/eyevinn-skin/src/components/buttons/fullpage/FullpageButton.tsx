import { h } from 'preact';
import style from './fullpage.module.css';

function ExitFullpage() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h40v-480h-40v480Zm120 0h400v-480H280v480Zm480 0h40v-480h-40v480ZM280-720v480-480Z" /></svg>
	);
}

function EnterFullpage() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h40v-480h-40v480Zm120 0h400v-480H280v480Zm480 0h40v-480h-40v480ZM280-720v480-480Z" /></svg>
	);
}

export default function FullPageButton({ isFullPage: isFullPage, onClick }) {
	return (
		<div class={style.container} onClick={onClick}>
			{isFullPage ? <ExitFullpage /> : <EnterFullpage />}
		</div>
	);
}
