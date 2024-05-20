# tun0-ip-address

Orginally a copy of:

[gnome-extension-lan-ip-address](https://github.com/Josholith/gnome-extension-lan-ip-address)

Merged with

https://github.com/AdamantisSpinae/gnome-extension-tun0-ip-address (No Longer Available)

because I wanted the tun0-ip functionality, but for use in the Gnome 45 extension format in the newer version of Kali Linux and these two projects became the one you see here. Simply for my use case of running Gnome Shell => 45 under Kali and not having the VPN to Hack The Box / TryHackMe visible anywhere easy to see when typing commands. 

## Installation

Copy these files into a folder called 'tun0-ip-address@tomruyter.com' under {your home folder}/.local/share/gnome-shell/extensions and it should appear in the extensions list.

## Requirements
moreutils package so *ifdata* command works.

**Debian**
```sh
sudo apt install moreutils
```

**Red Hat**
```sh
sudo yum install moreutils
```

**Arch**
```sh
sudo pacman -S moreutils
```
