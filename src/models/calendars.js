import HandleErrorMessage from '../lib/format-error-messages';
import initialState from '../store/calendar';
import { errorMessages, successMessages } from '../constants/messages';
import moment from "moment";

export default {
  namespace: 'calendars',

  /**
   *  Initial state
   */
  state: initialState,

  /**
   * Effects/Actions
   */
  effects: (dispatch) => ({
    /**
     * Save date to redux store
     * @param {obj} data
     * @returns {Promise[obj]}
     */
    async save(data) {
      try {
        if (Object.keys(data).length < 1) {
          throw new Error({ message: errorMessages.missingData });
        }

        // dispatch.calendar.replaceUserInput(data);
        return successMessages.defaultForm; // Message for the UI
      } catch (error) {
        throw HandleErrorMessage(error);
      }
    },
  }),

  /**
   * Reducers
   */
  reducers: {
    /**
     * Save form data
     * @param {obj} state
     * @param {obj} payload
     */
    replaceUserInput(state, payload) {
      return {
        ...state,
        userInput: payload,
      };
    },

    changeMonth(state, payload) {
      if(payload===0){
        state.selectedDate = new Date();
      }else {
        let d = new Date(state.selectedDate);
        d.setMonth(d.getMonth() + payload);
        state.selectedDate = d;
      }
      state.eventsNumberInMonth = state.savedData.filter(item=>((moment(item.date, "DD-MM-YYYY").format("MM-YYYY")+'')===(moment(state.selectedDate).format("MM-YYYY")+''))).length;
      return {
        ...state
      }
    },

    changeDateParam(state, payload) {
      if(payload){
        let index = -1;
        state.savedData.map((item,idx)=> {
          if(item.date === (moment(payload.date).format("DD-MM-YYYY") + '')){
            index= idx;
          }
        });
        if(index===-1){
          const d = moment(payload.date).format("DD-MM-YYYY");
          state.savedData.push({date:d, taskTime: "", taskName: "", taskDescription: ""});
        }else{
          if(payload["name"]){
            state.savedData[index][payload["name"]]=payload["val"];
          }
        }
      }
      state.eventsNumberInMonth = state.savedData.filter(item=>((moment(item.date, "DD-MM-YYYY").format("MM-YYYY")+'')===(moment(state.selectedDate).format("MM-YYYY")+''))).length;
      return {
        ...state
      }
    },

    removeTask(state, payload) {
      if(payload){
        let index = -1;
        state.savedData.map((item,idx)=> {
          if(item.date === (moment(payload.date).format("DD-MM-YYYY") + '')){
            index= idx;
          }
        });
        if(index!==-1) {
          state.savedData.splice(index, 1);
        }
        state.eventsNumberInMonth = state.savedData.length;
      }
      state.eventsNumberInMonth = state.savedData.filter(item=>((moment(item.date, "DD-MM-YYYY").format("MM-YYYY")+'')===(moment(state.selectedDate).format("MM-YYYY")+''))).length;
      return {
        ...state
      }
    },

    removeAllEvents(state, payload) {
      if(payload.remove) {
        state.savedData = [];
      }
      state.eventsNumberInMonth = state.savedData.filter(item=>((moment(item.date, "DD-MM-YYYY").format("MM-YYYY")+'')===(moment(state.selectedDate).format("MM-YYYY")+''))).length;
      return {
        ...state
      }
    },
  },
};
