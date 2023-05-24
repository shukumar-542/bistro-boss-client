import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../assets/menu/pizza-bg.jpg'
import saladimg from '../../assets/menu/salad-bg.jpg'
import soupimg from '../../assets/menu/soup-bg.jpg'
 
const Menu = () => {
    const [menu] = useMenu()
    const dessert  = menu.filter(item => item.category === 'dessert')
    const pizza  = menu.filter(item => item.category === 'pizza')
    const salad  = menu.filter(item => item.category === 'salad')
    const offered  = menu.filter(item => item.category === 'offered')
    const soup  = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet><title>Bistro-Boss | Menu </title></Helmet>
            <Cover  img={menuImg} coverTitle={'our menu'}></Cover>
            <SectionTitle subHeading="Don't miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="dessert" menuImg={dessertBg}></MenuCategory>
            {/* pizza menu item */}
            <MenuCategory items={pizza} title="Pizza" menuImg={pizzaimg}></MenuCategory>
            <MenuCategory items={salad} title="salad" menuImg={saladimg}></MenuCategory>
            <MenuCategory items={soup} title="soup" menuImg={soupimg}></MenuCategory>
           
        </div>
    );
};

export default Menu;