import { merge, cloneDeep } from 'lodash';
import { base as oldBase } from './base';

const base = cloneDeep(oldBase);

export const light = merge(base, {
    colors: {
        background: base.colors.washed,
        text: base.colors.night,
        highlight: base.colors.orange
    }
})

export default light