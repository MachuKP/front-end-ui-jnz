import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ControllerState {
  modeState: string;
  scaleState: string;
  dataSetState: string;
}

const initialState: ControllerState = {
  modeState: "data",
  scaleState: "Daily",
  dataSetState: "Like",
};

export const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    setModeState: (state, action: PayloadAction<string>) => {
      state.modeState = action.payload;
    },
    setScaleState: (state, action: PayloadAction<string>) => {
      state.scaleState = action.payload;
    },
    setDataSetState: (state, action: PayloadAction<string>) => {
      state.dataSetState = action.payload;
    }
  },
});

export const { setModeState, setScaleState, setDataSetState } = controllerSlice.actions;

export default controllerSlice.reducer;
