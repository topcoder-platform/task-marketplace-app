import { useSelector, IState } from '..'

// get lookup from public state of redux store
export const useErrorStore = () => useSelector((state: IState) => state.error)
