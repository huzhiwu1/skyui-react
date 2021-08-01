import sync from './sync.svg';
import poweroff from './poweroff.svg';
import close from './close.svg';

const SvgsMap = { sync, poweroff, close };

export type SvgTypes = keyof typeof SvgsMap;

export default SvgsMap;
