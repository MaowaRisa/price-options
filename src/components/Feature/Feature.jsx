import PropTypes from 'prop-types';
import { BsArrowRightCircleFill } from "react-icons/bs";
const Feature = ({feature}) => {
    return (
        <>
            <div className='flex gap-2 items-center'>
                <BsArrowRightCircleFill className='text-green-600 font-semibold'></BsArrowRightCircleFill>
                <li>{feature}</li>
            </div>
        </>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;