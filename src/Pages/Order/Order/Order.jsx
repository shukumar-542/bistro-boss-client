import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import TabCart from '../TabCart/TabCart';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Cover img={orderCover} coverTitle={'Order Food'}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <TabCart items={salad}></TabCart>
                </TabPanel>
                <TabPanel>
                    <TabCart items={pizza}></TabCart>
                </TabPanel>
                <TabPanel>
                    <TabCart items={soup}></TabCart>
                </TabPanel>
                <TabPanel>
                    <TabCart items={dessert}></TabCart>
                </TabPanel>
                <TabPanel>
                    <TabCart items={drinks}></TabCart>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;