import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    // console.log(menu);
    const popular  = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const popularItem = data.filter(item =>item.category === "popular")
    //         setMenu(popularItem)
    //     })
    // },[])
    // console.log(menu);
    return (
        <div className="mb-12">
            <SectionTitle
                heading={"check it out"}
                subHeading={"From Our Menu"}
            ></SectionTitle>
           <div className="grid md:grid-cols-2 gap-4">
           {
             popular.map(item => <MenuItem
             key={item._id}
             item ={item}
             ></MenuItem>)   
            }
           </div>
        </div>
    );
};

export default PopularMenu;