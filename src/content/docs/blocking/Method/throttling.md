---
title: Throttling
description: 'Learn About Throttling.'
posted: 2024-09-21T21:00:00.000Z
---

## Throttling
The deliberate slowing of internet speed of certain websites and services. If the website is slow to load, or some elements (such as videos or other media) are not working as fast as they should despite sufficient internet speed, this could be the case of throttling.

This type of block could NOT usually be detected by censorship checking software, however general DPI circumvention tools might restore the speed.
Try to run anti-DPI software first and check if it helps.

General manual way of checking for throttling from the ISP is as follows:
>
 - Find the URL to the resource which is slow to load, such as a video file
 - Open “Command Prompt” (Windows) / Terminal (Linux, macOS)
 - Type “curl -o output.bin -v https://example.com/video.mp4”, remember the download speed
 - Type “curl -o output.bin -v https://domain.name.of.the.website.com/video.mp4 -H ‘Host: example.com’”, check whether it’s faster than #3

Results interpretation:
>
 - If the request with replaced domain in #4 is faster than request #3, that means that throttling is applied using DPI hardware by checking the domain accessed.
 - If accessing different IP address using the same domain name restores the speed, that could mean that either the throttling is applied on IP level by IP address, or that the link between your ISP and destination host is just slow.

Circumvention solutions:
>
 - VPN/Proxy
 - (sometimes) DPI circumvention software: GoodbyeDPI, zapret, ByeDPI, SpoofDPI, PowerTunnel

