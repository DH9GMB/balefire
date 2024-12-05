---
title: Throttling
description: 'Learn About Throttling.'
posted: 2024-09-21T21:00:00.000Z
---
### Throttling in Internet Censorship
**Throttling** refers to the intentional slowing down of internet speed for specific websites or services by an ISP or governing authority. This method is often used to make access to certain platforms frustrating or impractical without fully blocking them.

Signs of throttling include:
- Websites taking unusually long to load, despite sufficient overall internet speed.
- Media elements, such as videos, images, or streaming content, lagging or buffering excessively.
- Significant performance differences when accessing the same website or service through different networks or tools (e.g., VPN).

Throttling is often implemented using **Deep Packet Inspection (DPI) hardware**, which can identify and limit traffic for specific services based on data patterns, protocols, or domain names.

General manual way of checking for throttling from the ISP is as follows:
>
 - Find the URL to the resource which is slow to load, such as a video file
 - Open “Command Prompt” (Windows) / Terminal (Linux, macOS)
 - Type `curl -o output.bin -v https://example.com/video.mp4`, remember the download speed
 - Type `curl -o output.bin -v https://domain.name.of.the.website.com/video.mp4 -H ‘Host: example.com’`, check whether it’s faster than #3

Results interpretation:
>
 - If the request with replaced domain in #4 is faster than request #3, that means that throttling is applied using DPI hardware by checking the domain accessed.
 - If accessing different IP address using the same domain name restores the speed, that could mean that either the throttling is applied on IP level by IP address, or that the link between your ISP and destination host is just slow.

Circumvention solutions:
>
 - VPN/Proxy
 - (sometimes) DPI circumvention software: GoodbyeDPI, Zapret, ByeDPI, SpoofDPI, PowerTunnel

Regions:
- Russia
- Turkmenistan
- Kazakhstan
- Turkmenistan
- Iran
- China

