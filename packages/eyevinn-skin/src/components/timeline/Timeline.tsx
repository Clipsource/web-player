import { h } from 'preact';
import style from './timeline.module.css';

function formatPlayerTime(sec: number) {
	let h = Math.floor(sec / 3600) % 24;
	let m = Math.floor(sec / 60) % 60;
	let s = Math.floor(sec % 60);
	return [h, m, s]
		.map((v) => (v < 10 ? '0' + v : v))
		.filter((v, i) => v !== '00' || i > 0)
		.join(':');
}

export default function Timeline({ currentTime = 0, duration = 0 }) {
	const percentage = (currentTime / duration) * 100 || 0;
	return (
		<div class={style.container}>
			<span class={style.time}>{formatPlayerTime(currentTime)}</span>
			<div class={style.progressbarContainer}>
				<div class={style.progress} style={{ width: `${percentage}%` }}>
					<div class={style.indicator}></div>
				</div>
			</div>
			<span class={style.time}>{formatPlayerTime(duration)}</span>
		</div>
	);
}
