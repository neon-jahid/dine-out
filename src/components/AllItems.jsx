import Item from './Item';

function AllItems() {
    return (
        <div className='mb-4'>
            <label className='block text-sm font-medium mb-2'>Choose Items</label>
            <div className='items-container'>
                <Item
                    ItemName='Burger'
                    ItemPrice={100}
                    btn='Increment'
                />
                <Item
                    ItemName='Chicken Nuggets'
                    ItemPrice={300}
                />
                <Item
                    ItemName='Submarine Sandwich'
                    ItemPrice={300}
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
