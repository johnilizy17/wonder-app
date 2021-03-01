import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    send: false,
    selectedMail: '',
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.send = true;
    },
    closeSendMessage: (state) => {
      state.send = false;
    },
  },
});
export const { selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.send;
export const selectOpenMail = (state) => state.mail.selectedMail;
export default mailSlice.reducer;
