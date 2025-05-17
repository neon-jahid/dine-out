import AllItems from './AllItems';
import CustomerName from './CustomerName';
import OrderReport from './OrderReport';
import OrderSummary from './OrderSummary';

function Main() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow'>
            <div className='bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]'>
                <h2 className='text-xl font-bold mb-1'>CREATE ORDER</h2>
                <p className='text-gray-400 text-sm mb-4'>Accurately fulfill customer orders based on a precise understanding of their requirements.</p>

                <CustomerName />
                <AllItems />

                <button className='w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer'>
                    Place Order (BDT 100)
                </button>
            </div>

            <div className='md:col-span-2 h-[calc(100vh_-_130px)]'>
                <OrderSummary />
                <OrderReport />
            </div>
        </div>
    );
}

export default Main;
