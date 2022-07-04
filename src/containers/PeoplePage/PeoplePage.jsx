import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import { getApiResourse, changeHTTP } from '@utils/network';
import { getPeopleImage, getPeopleId,  getPeoplePageId} from '@services/getPeopleData';
import { API_People, SWAPI_PARAM_PAGE } from '@constants/api'
import { useQueryParams } from '@hooks/useQueryParams';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation'


import s from './PeoplePage.module.css';


const PeoplePage = ({ setErrorApi }) => {

  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);
  //const [errorApi, setErrorApi] = useState(false);


  const query = useQueryParams();
  const queryPage = query.get('page');
  // console.log(prevPage, nextPage);

  const getResponse = async (url) => {
    const res = await getApiResourse(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {

        const id = getPeopleId(url);
        const img = getPeopleImage(id)



        return {
          id,
          name,
          img
        }
      })

      
      setPeople(peopleList);
      setNextPage(changeHTTP(res.next));
      setPrevPage(changeHTTP(res.previous));
      setCounterPage(getPeoplePageId(url))
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResponse(API_People + queryPage)
    //getResponse('https://bymykel.github.io/CSGO-API/api/agents.json')
  }, [])

  return (
    <>

     
      {/* <PeopleNavigation
      // getResponse={getResponse}
      getResponse={getResponse}
      prevPage={prevPage}
      nextPage={nextPage}
      counterPage={counterPage}
        
      /> */}
      {people && <PeopleList people={people} />}



    </>
  )
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage);




