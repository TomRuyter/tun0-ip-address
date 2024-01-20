import { panel } from 'resource:///org/gnome/shell/ui/main.js';
import { TunIPAddressIndicator } from './TunIPAddressIndicator.js';
import GObject from 'gi://GObject';


export default class LanIpAddressExtension {
    _indicator;

    enable() {
        this._indicator = new TunIPAddressIndicator();
        panel.addToStatusArea('tun0-ip-address-indicator', this._indicator);
    }

    disable() {
        this._indicator.stop();
        this._indicator.destroy();
        this._indicator = undefined;
    }
}

GObject.registerClass(
    {GTypeName: 'TunIPAddressIndicator'},
    TunIPAddressIndicator
);

