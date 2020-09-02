import WkButton from './Button';
import WkInput from './Input';
import WkHeader from './Header';
import WkSearch from './Search';
import WkList from './List';
import WkMask from './Mark';
import WkVideo from './Video';
import WkToast from './Toast';

const components = [
    WkButton,
    WkHeader,
    WkSearch,
    WkList,
    WkMask,
    WkVideo,
    WkToast
]

const install = (Vue) => {
    for (let key in components) {
        Vue.component(components[key].name, components[key])
    }
}

export default {
    install,
    WkButton,
    WkInput,
    WkHeader,
    WkSearch,
    WkList,
    WkMask,
    WkVideo,
    WkToast,
}