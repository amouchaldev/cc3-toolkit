import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  stagiaires: [
    { id: 1, nom: "sama", prenom: "samir", filier: "DDWFS", age: 22 },
    { id: 2, nom: "senpai", prenom: "jamal", filier: "DDAM", age: 19 },
  ],
};
const stagiaireSlice = createSlice({
  name: "stagiaire",
  initialState,
  reducers: {
    ADD_STAGIAIRE: (state, action) => {
      return {
        ...state,
        stagiaires: [...state.stagiaires, action.payload],
      };
    },

    DELETE_STAGIAIRE: (state, action) => {
      return {
        ...state,
        stagiaires: state.stagiaires.filter(stg => stg.id != action.payload),
      };
    },
    SET_TO_UPDATE: (state, action) => {
      return {
        ...state,
        updating: state.stagiaires.find(stg => stg.id == action.payload),
      };
    },
    UPDATE_STAGIAIRE: (state, action) => {
      return {
        stagiaires: state.stagiaires.map(stg => {
          return stg.id == action.payload.id ? action.payload : stg;
        }),
      };
    },
  },
});
export const {
  ADD_STAGIAIRE,
  DELETE_STAGIAIRE,
  SET_TO_UPDATE,
  UPDATE_STAGIAIRE,
} = stagiaireSlice.actions;
export default stagiaireSlice.reducer;
