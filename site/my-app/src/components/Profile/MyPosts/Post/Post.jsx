import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://i.pinimg.com/564x/77/21/8d/77218d20be9fab8d895f62dcd8b8b5e2.jpg" alt="Bratz"/>
			{ props.message };
			<div>
				<span>like</span> { props.likesCount}
			</div>
		</div>
	);
};

export default Post;
