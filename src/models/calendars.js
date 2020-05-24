import HandleErrorMessage from '../lib/format-error-messages';
import initialState from '../store/calendar';
import { errorMessages, successMessages } from '../constants/messages';

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
      return {
        ...state
      }
    }
  },
};
