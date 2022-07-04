
import { useParams } from 'react-router-dom';
import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiResourse } from '../../utils/network';
import { getPeopleImage } from '../../services/getPeopleData';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
//import PersonFilms from '../../components/PersonPage/PersonFilms/PersonFilms';
import UiLoading from '@ui/UiLoading';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';
import { API_PERSON } from '../../constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';

import Vlasov from '../../components/Vlasov';

import s from './PersonPage.module.css';
const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));



const PersonPage = (setErrorApi) => {

  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);


  const params = useParams();
  let id = params.id;
  useEffect(() => {

    (async () => {


      const res = await getApiResourse(`${API_PERSON}/${id}/`);
      //const res = await getApiResourse(`https://bymykel.github.io/CSGO-API/api/skins.json`)

      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
          { title: 'Hair Color', data: res.hair_color },
          { title: 'Skin Color', data: res.skin_color },
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Birth Year', data: res.birth_year },
          { title: 'Gender', data: res.gender },
        ]);



        setPersonName(res.name);
 res.films.length && setPersonFilms(res.films);

        setPersonPhoto(getPeopleImage(id))
        setErrorApi(false)
      } else {
        setErrorApi(true)
      }


    })()

  }, [])



  return (
    <>
    <PersonLinkBack/>
    {/* <Vlasov/> */}
      
      <div className={s.wrapper}>
        <span className={s.person__name}>{personName}</span>
        <div className={s.container}>
          <PersonPhoto
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />



          {/* {personInfo && (<PersonInfo personInfo={personInfo} />)}

          {personFilms && (
                         //<Suspense fallback={<UiLoading/>}>
                            <PersonFilms personFilms={personFilms} />
                         //</Suspense>
                    )} */}


        </div>

      </div>
    </>
  )
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage);

