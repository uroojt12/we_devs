import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"

export default function FaqBlock(props) {
	const { heading, text } = props
	const [active, setActive] = useState(false)
	const activeHandle = () => {
		setActive(!active)
	}
	return (
		<>
			<div className={`${style.faq_blk} ${active ? style.active : ""}`}>
				<h4 onClick={activeHandle}>{heading}</h4>
				<div className={style.text}>
					<p>{text}</p>
				</div>
			</div>
		</>
	)
}
