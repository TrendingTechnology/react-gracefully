import { GlobalStoreApi, WindowState } from '../../types';

export const updateWindow = (window: WindowState) => ({ getState, setState }: GlobalStoreApi): void => {
  const state = getState();

  // Update window state
  setState({
    ...state,
    window
  });
};
