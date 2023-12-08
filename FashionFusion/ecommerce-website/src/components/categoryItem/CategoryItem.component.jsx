import "./categoryItem.styles.css";

const CategoryItem = ({ categoryItem }) => {
	const { title, imageUrl } = categoryItem;

	return (
		<div className="category-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>

			<div className="category-body-container"><h2>{title}</h2><p></p></div>
		</div>
	);
};

export default CategoryItem;
