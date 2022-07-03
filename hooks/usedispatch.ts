import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

/**
 * A Custom hook for dispatch redux action
 */
const useAppDispatch = () => {
    const dispatch = useDispatch<Dispatch<AnyAction>>();
    return dispatch
}
export default useAppDispatch;