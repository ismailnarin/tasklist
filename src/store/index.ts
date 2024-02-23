import { GetterTree, createStore } from "vuex";
import axios from "axios";

interface State {
  tasks: Task[] | null;
}
interface Task {
  occurrence: string; 
  id:any;
}
interface TaskWithoutId {
  occurrence: string; 
}


export interface Getters extends GetterTree<State, State> {
  dailyTasks(state: State):any[] | undefined;
  weeklyTasks(state: State):any[] | undefined;
  monthlyTasks(state:State):any[] | undefined;
}

const getters: Getters = {
  dailyTasks(state: State): TaskWithoutId[] | undefined {
    const filtered=state.tasks?.filter(task => task.occurrence === "daily");
    const filteredWithoutIds = filtered?.map(({ id, ...rest }) => rest);
    return filteredWithoutIds;
  },
  weeklyTasks(state: State): TaskWithoutId[] | undefined {
    const filtered=state.tasks?.filter(task => task.occurrence === "weekly");
    const filteredWithoutIds = filtered?.map(({ id, ...rest }) => rest);
    return filteredWithoutIds;
  },
  monthlyTasks(state: State): TaskWithoutId[] | undefined {
    const filtered=state.tasks?.filter(task => task.occurrence === "monthly");
    const filteredWithoutIds = filtered?.map(({ id, ...rest }) => rest);
    return filteredWithoutIds;
  } 
};

export default createStore({
  state: { tasks: null },
  getters,
  mutations: {
    SET_TASKS(state: State,response:[]) {
      state.tasks=response;
    },
  },
  actions: {
    async fetchTasks({ commit }: { commit: Function }) {
      await axios.get('/dummy_data.json')
        .then(response => {
          console.log(response);
          commit("SET_TASKS",response.data.data)
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  modules: {},
});