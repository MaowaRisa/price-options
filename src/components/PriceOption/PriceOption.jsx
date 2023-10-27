import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-slate-500 flex flex-col rounded-lg p-6 text-yellow-50'>
            <div className='text-center'>
                <h2>
                    <span className='text-5xl'>{price}</span>
                    <span className='text-3xl'>/mon</span>
                </h2>
                <h3 className='text-2xl font-semibold text-red-800 mt-2 mb-2'>{name}</h3>
            </div>
            <ul className='flex-grow'>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </ul>
            <button className='p-4 w-full bg-green-500 text-xl font-bold rounded-lg hover:bg-green-600 mt-4'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;