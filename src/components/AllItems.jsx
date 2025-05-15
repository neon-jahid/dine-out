import Item from './Item';
import Increment from '../assets/Icon/Increment';

function AllItems() {
    return (
        <div className='mb-4'>
            <label className='block text-sm font-medium mb-2'>Choose Items</label>
            <div className='items-container'>
                <Item
                    ItemName='Burger'
                    ItemPrice={100}
                />
                <Item
                    ItemName='Chicken Nuggets'
                    ItemPrice={300}
                    btn={<Increment />}
                />
                <Item
                    ItemName='Submarine Sandwich'
                    ItemPrice={300}
                    btn={<Increment />}
                />
                <Item
                    ItemName='Pizza Slices'
                    ItemPrice={300}
                />
            </div>
        </div>
    );
}

export default AllItems;
