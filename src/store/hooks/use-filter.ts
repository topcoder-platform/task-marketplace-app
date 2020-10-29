import { useSelector, IState } from '..'

// get lookup from public state of redux store
export const useFilterStore = () => useSelector((state: IState) => state.filter)
