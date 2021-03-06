import { configSelectors } from '../../selectors';
import { ConfigStoreApi, Device } from '../../types';

export const updateDevices = (devices: Device[]) => ({ getState, setState }: ConfigStoreApi): void => {
  const state = getState();

  const { getDevices } = configSelectors;

  if (getDevices(state) !== devices) {
    setState({
      ...state,
      devices
    });
  }
};
