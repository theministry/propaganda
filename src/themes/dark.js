import { merge, cloneDeep } from 'lodash';
import { base as oldBase } from './base';

const base = cloneDeep(oldBase);

export const dark = merge(base, {
    colors: {
        ...base.colors,
        background: base.colors.night,
        text: base.colors.washed,
        highlight: base.colors.green,
        primary: base.colors.blue
    }
})

export default dark