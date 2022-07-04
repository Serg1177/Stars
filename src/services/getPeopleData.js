import {
    HTTPS, SWAPI_ROOT, SWAPI_PEOPLE,
    GUIDE_IMG_EXTENSION, URL_IMG_PERSON, SWAPI_PARAM_PAGE
} from '@constants/api';




export const getPeoplePageId = url => {
    // console.log(url)
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);

    


    return Number(id);
}

const getId = (url, category) => {
    // const protocol = checkProtocol(url);

    const id = url
        .replace(HTTPS + SWAPI_ROOT + category, '')
        .replace(/\//g, '')

    return id;
}




export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

 export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;


//export const getPeopleImage = id => `https://starwars-visualguide.com/assets/img/characters/4.jpg `
//export const getPeopleImage = id => `https://raw.githubusercontent.com/SteamDatabase/GameTracking-CSGO/master/csgo/pak01_dir/resource/flash/econ/characters/customplayer_tm_leet_variantg.png `