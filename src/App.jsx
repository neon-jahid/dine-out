import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <div className='text-white bg-background'>
                <div className='container mx-auto px-4 h-screen flex flex-col'>
                    <Navbar />
                    <Main />
                </div>
            </div>
        </>
    );
}

export default App;
