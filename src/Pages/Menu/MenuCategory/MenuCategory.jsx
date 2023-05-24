import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items,menuImg,title}) => {
    return (
        <div>
            {title && <Cover  img={menuImg} coverTitle={title}></Cover>}

             <div className="grid md:grid-cols-2 gap-4 my-16">
           {
             items.map(item => <MenuItem
             key={item._id}
             item ={item}
             ></MenuItem>)   
            }
           </div>
        </div>
    );
};

export default MenuCategory;