import { useSelector, IState } from '..'

// get lookup from public state of redux store
export const useTasksStore = () => useSelector((state: IState) => state.tasks)
