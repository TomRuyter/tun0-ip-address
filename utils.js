import GLib from 'gi://GLib';

export const getTunIp = () => {       
    var command_output_bytes = GLib.spawn_command_line_sync('ifdata -pa tun0')[1]; 
    var tun0IpAddress = String(command_output_bytes);

    tun0IpAddress = tun0IpAddress.trim();
     
    return tun0IpAddress;
}
