---
title: IP Blackhole/Redirection
description: 'Learn About IP Blackhole/Redirection.'
posted: 2024-09-21T21:00:00.000Z
---
The IP address of the website is completely blocked by the ISP. Due to the nature of this blocking method, blocking of a single IP address leads to inaccessibility of all the web sites and services hosted on the same IP address. The website is usually trying to load for a very long time (from tens of seconds up to several minutes of blank page) without any progress.

In the end you may receive the following browser error:
>
 - ERR_CONNECTION_TIMED_OUT

IP redirection is a similar method which rewrites all the data towards website IP to another IP, usually an informational block page.

This type of block could be detected by many censorship checking software and services, such as:
>
 - GlobalCheck
 - RIPE Atlas
 - OONI Probe

As well as manually:
>
 - Open “Command Prompt” (Windows) / Terminal (Linux, macOS)
 - Type “curl -v https://domain.name.of.the.website.com”

Results interpretation:
>
 - If the command hangs on: Trying ip.address:443… - This is an IP block
 - If you see the informational block page when accessing the website, follow the “DNS Hijacking” checking section. In case of no DNS hijacking but blocking page present, this may be IP redirection.


Circumvention solutions:
>
 - VPN/Proxy
