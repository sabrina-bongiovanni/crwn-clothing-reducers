import CategoryItem from '../CategoryItem/CategoryItem.component';
import './CategoriesDirectory.styles.scss';

const CategoriesDirectory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesDirectory;
