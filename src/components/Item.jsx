import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';

function Item({ ItemName, ItemPrice, btn }) {
    return (
        <div className='bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300'>
            <div className='flex items-center'>
                <div className='w-12 h-12   flex items-center justify-center mr-3'>
                    <img
                        src='./assets/hamburger.svg'
                        alt='Hamburger'
                        className='w-10 h-10'
                    />
                </div>
                <div>
                    <h3 className='font-medium'>{ItemName}</h3>
                    <p className='text-xs text-gray-400'>{ItemPrice}</p>
                </div>
            </div>
            {btn === 'Increment' ? <IncrementButton /> : <DecrementButton />}
        </div>
    );
}

export default Item;
