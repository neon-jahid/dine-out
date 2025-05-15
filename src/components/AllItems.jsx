import Item from './Item';
import Hamburger from '../assets/hamburger.svg';
import ChickenNuggets from '../assets/chicken.svg';
import Submarine from '../assets/submarine.svg';
import Pizza from '../assets/pizza.svg';

function AllItems() {
    return (
        <div className='mb-4'>
            <label className='block text-sm font-medium mb-2'>Choose Items</label>
            <div className='items-container'>
                <Item
                    ItemName='Burger'
                    ItemPrice={100}
                    btn='Increment'
                    img={Hamburger}
                />
                <Item
                    ItemName='Chicken Nuggets'
                    ItemPrice={300}
                    btn='Increment'
                    img={Submarine}
                />
                <Item
                    ItemName='Submarine Sandwich'
                    ItemPrice={300}
                    img={Pizza}
                />
                <Item
                    ItemName='Pizza Slices'
                    ItemPrice={300}
                    btn='Increment'
                    img={ChickenNuggets}
                />
            </div>
        </div>
    );
}

export default AllItems;
