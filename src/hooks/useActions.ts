import { bindActionCreators } from 'redux'
import { rootAction } from '../store/store'
import { useMemo } from 'react'
import { useTypedDispatch } from './redux'
import { useDispatch } from 'react-redux'

export function useActions(deps: any) {
  const dispatch = useDispatch()
  return useMemo(
    () => {
      if (Array.isArray(rootAction)) {
        return rootAction.map(a => bindActionCreators(a, dispatch))
      }
      return bindActionCreators(rootAction, dispatch)
    },
    deps ? [dispatch, ...deps] : [dispatch]
  )
}
