import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UiButton from '@ui/UiButton';

import s from './PeopleNavigation.module.css';


const PeopleNavigation=({
        getResponse,
        prevPage,
        nextPage,
        counterPage
    })=>{
        const handleChangeNext = () => getResponse(nextPage);
    const handleChangePrev = () => getResponse(prevPage);

    return(
        <div className={s.container}>
          
            <Link to={`/people/?page=${counterPage-1}`} className={s.buttons}>
                <UiButton
                    text="Previous"
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                />
                {/* <button 
                onClick={handleChangePrev}
                disabled={!prevPage}
                 className={s.buttons}>Previous
                 </button> */}
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className={s.buttons}>
                <UiButton
                    text="Next"
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
                {/* <button  
                onClick={handleChangeNext}
                disabled={!nextPage}
                 className={s.buttons}
                 >Next
                 </button> */}
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
        getResponse: PropTypes.func,
        prevPage: PropTypes.string,
        nextPage: PropTypes.string,
        counterPage: PropTypes.number,
    }

// const PeopleNavigation = ({
//     getResponse,
//     prevPage,
//     nextPage,
//     counterPage
// }) => {
//     const handleChangeNext = () => getResponse(nextPage);
//     const handleChangePrev = () => getResponse(prevPage);

//     return (


//         <div className={styles.container}>
//             <Link to={`/people/?page=${counterPage-1}`} className={styles.buttons}>
//                 <UiButton
//                     text="Previous"
//                     onClick={handleChangePrev}
//                     disabled={!prevPage}
//                 />
//             </Link>
//             <Link to={`/people/?page=${counterPage+1}`} className={styles.buttons}>
//                 <UiButton
//                     text="Next"
//                     onClick={handleChangeNext}
//                     disabled={!nextPage}
//                 />
//             </Link>
//         </div>
//     )
// }

// PeopleNavigation.propTypes = {
//     getResponse: PropTypes.func,
//     prevPage: PropTypes.string,
//     nextPage: PropTypes.string,
//     counterPage: PropTypes.number,
// }

export default PeopleNavigation;
