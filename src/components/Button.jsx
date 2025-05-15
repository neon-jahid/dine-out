function Button(props) {
    return <button className='w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300'>{props.btn}</button>;
}

export default Button;
