/* eslint-disable react-hooks/exhaustive-deps */
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
	// const posts = [
	// 	{
	// 		id: "123",
	// 		username: "ifeayo",
	// 		userImg: "https://links.papareact.com/3ke",
	// 		img: "https://links.papareact.com/3ke",
	// 		caption: "This is dope",
	// 	},
	// 	{
	// 		id: "123",
	// 		username: "ifeayo",
	// 		userImg: "https://links.papareact.com/3ke",
	// 		img: "https://links.papareact.com/3ke",
	// 		caption: "This is dope",
	// 	},
	// 	{
	// 		id: "123",
	// 		username: "ifeayo",
	// 		userImg: "https://links.papareact.com/3ke",
	// 		img: "https://links.papareact.com/3ke",
	// 		caption: "This is dope",
	// 	},
	// 	{
	// 		id: "123",
	// 		username: "ifeayo",
	// 		userImg: "https://links.papareact.com/3ke",
	// 		img: "https://links.papareact.com/3ke",
	// 		caption: "This is dope",
	// 	},
	// ];

	const [posts, setPosts] = useState([]);

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, "posts"), orderBy("timestamp", "desc")),
				(snapshot) => {
					setPosts(snapshot.docs);
				}
			),
		[db]
	);

	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.data().username}
					userImg={post.data().profileImage}
					img={post.data().image}
					caption={post.data().caption}
				/>
			))}
		</div>
	);
}

export default Posts;
