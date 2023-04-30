import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { TypeAppDispatch, TypeRootState } from '../store/store'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
export const useTypedDispatch = () => useDispatch<TypeAppDispatch>()
