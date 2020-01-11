import ShopActionTypes from './shop.types';

import {
  firestore,
  convertCollectionsSnapshortToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then(snapShort => {
      const collectionMap = convertCollectionsSnapshortToMap(snapShort);
      dispatch(fetchCollectionsSuccess(collectionMap));
    })
    .catch(error => dispatch(fetchCollectionsFailure(error.message)));
};
