
import initInstance from './command/init';

import UpgradeInstance from './command/upgrade';


export const init = () => {
  initInstance.run();
}


export const upgrade = () => {
  UpgradeInstance.run();
}
