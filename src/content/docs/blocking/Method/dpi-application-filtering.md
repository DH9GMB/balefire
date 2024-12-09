---
title: DPI Application Filtering
description: 'Learn About DPI Application Filtering.'
posted: 2024-09-21T21:00:00.000Z
---
Deep Packet Inspection hardware is capable of detecting distinct particularities of certain software, its network or encryption libraries, and block it. This could lead to website or service access only from the browser but not from the app, or vice versa.

This kind of block is difficult to detect and analyze. There’s no fully automatic utilities for such tests.

Selected application filtering test is supported in:
>
 - [OONI Probe](/balefire/censorship/toolkits/ooni/)

General manual steps are as follows:
>
 - Capture the network traffic of different software accessing the same web site/service: from different browsers, from the app
 - On PC you can use WireShark, on Android use PCAPDroid or similar capturing application
 - Make sure that both the apps and the browser access the same domain names and IP addresses
 - Look for DNS requests in the traffic dump, HTTP and TLS ClientHello packets
 - Open the traffic dump in Wireshark, look for difference in requests from different software
 - One of the typical flag for the block is that TCP flows from filtered software are hang or tore down after the exact filtered packet, while the flows from other applications are not.
 - When the filtered packet is detected, you may want to replay it to ensure that you’ve found the correct one. This could be done manually with the help of the tools such as nping, or with the aid of [TraceVis](https://github.com/wikicensorship/tracevis)
 - If you want to go further and detect exact pattern triggering the block, replace random parts of the packet with 00 or FF, and replay the packet to the net.

Circumvention solutions:
>
 - VPN/Proxy
 - (sometimes) DPI circumvention software: [GoodbyeDPI](https://github.com/ValdikSS/GoodbyeDPI), [zapret](https://github.com/bol-van/zapret), [ByeDPI](https://github.com/hufrea/byedpi), [SpoofDPI](https://github.com/xvzc/SpoofDPI), [PowerTunnel](https://github.com/krlvm/PowerTunnel)
