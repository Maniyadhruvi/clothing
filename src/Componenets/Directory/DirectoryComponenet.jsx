import Categoryitem from '../../Componenets/Category-item/Categoryitem.jsx';
import '../../Componenets/Directory/directory-item-style.scss';

const DirectoryComponenet = ({ categories }) => {
    return (
        <div className='directory-container'>
            {categories.map((category) => (
                <Categoryitem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default DirectoryComponenet;