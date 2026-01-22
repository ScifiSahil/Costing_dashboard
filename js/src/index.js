import {Registry} from 'cs-web-components-base';
import {prefixNS} from './helpers';
import reducer from './reducers/reducers';
import MainComponent from './containers/MainComponent';
import './output.css';
import Entryform from './containers/Entryform';
import PlantMaster from './containers/PlantMaster';

Registry.registerComponent(prefixNS('Entryform'), Entryform);
Registry.registerComponent(prefixNS('MainComponent'), MainComponent);
Registry.registerComponent(prefixNS('PlantMaster'), PlantMaster);
Registry.registerReducer(prefixNS('reducer'), reducer);

export default {
    MainComponent,
    Entryform,
    PlantMaster
};
