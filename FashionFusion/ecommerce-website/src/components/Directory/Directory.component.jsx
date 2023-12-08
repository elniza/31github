import "./directory.styles.css";
import CategoryItem from "../categoryItem/CategoryItem.component";

const Directory = ({ categoryItems }) => {
	return (
		<div className="directory-container">
			{categoryItems.map((categoryItem) => {
				return (
					<CategoryItem key={categoryItem.id} categoryItem={categoryItem} />
				);
			})}
		</div>
	);
};

export default Directory;
