import { merge, cloneDeep } from 'lodash';
import { base as oldBase } from './base';

const base = cloneDeep(oldBase);

export const terminal = merge(base, {
    colors: {
        background: "#016619",
        text: "#00C215",
        highlight: "#00C215",
        primary: base.colors.muted,
        gray: "#00C215",
    },

    fonts: {
        body: '"IBM Plex Mono", Menlo, monospace',
        heading: '"IBM Plex Mono", Menlo, monospace',
        monospace: '"IBM Plex Mono", Menlo, monospace',
    }
})

export default terminal