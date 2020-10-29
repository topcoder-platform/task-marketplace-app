import { useSelector, IState } from '..'

// get lookup from public state of redux store
export const useAuthStore = () => useSelector((state: IState) => state.auth)
