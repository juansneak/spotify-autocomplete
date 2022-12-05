import { helper } from '@ember/component/helper';

function msToMinutes(args) {
    let [ms] = args;
    const date = new Date(ms);
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${minutes}:${seconds}`;
}

export default helper(msToMinutes);
