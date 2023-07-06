import { createSlice } from "@reduxjs/toolkit";

export const postJobSlice = createSlice({
  name: "postJobDetails",
  initialState: {
    jobTitle: "",
    shortDesciption: "",
    jobDescription: "",
    primarySkill: [],
    AdditionalSkills: "",
    location: "",
    onsiteLocation: "",
    slackChannelId: "",
    slackChannelInfo: "",
    closeRequisition: false,
  },
  reducers: {
    updatePostJobDetails: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePostJobDetails } = postJobSlice.actions;

export default postJobSlice.reducer;
