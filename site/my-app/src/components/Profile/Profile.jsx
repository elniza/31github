import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div>
			<div>
				<img src="https://i.pinimg.com/564x/87/3a/67/873a67710fef478574d0963973541aae.jpg" />
			</div>
			<div>ava + description</div>
			<MyPosts />
		</div>
	);
};

export default Profile;
