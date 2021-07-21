import sync from './sync.svg';
import poweroff from './poweroff.svg';

const SvgsMap = { sync, poweroff };

export type SvgTypes = keyof typeof SvgsMap;

export default SvgsMap;
