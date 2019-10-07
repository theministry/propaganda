import { merge, cloneDeep } from 'lodash';
import { base as oldBase } from './base';

const base = cloneDeep(oldBase)

export const space = merge(base, {
    colors: {
        ...base.colors,
        background: 'rgba(0,0,0,0)',
        textbackground: base.colors.white,
        text: base.colors.night,
        highlight: base.colors.washed,
        primary: base.colors.blue
    },
    variants: {
        nav: {
            color: 'white'
        }
    }
})

export default space