---
title: IP Blackhole/Redirection
description: 'Learn About IP Blackhole/Redirection.'
posted: 2024-09-21T21:00:00.000Z
---
### IP Blackhole/Redirection in Internet Censorship
**IP blackholing** is a method of internet censorship where the IP address of a website is entirely blocked by the ISP. This method is particularly disruptive because a single IP address often hosts multiple websites and services (via shared hosting). As a result, blocking one IP address renders all websites and services hosted on it inaccessible.

When attempting to access a blackholed IP address, the website often takes a very long time to load, showing no progress for tens of seconds or even minutes. This delay is caused by the browser repeatedly trying to connect to the blocked IP before eventually giving up.

In the end, you may encounter the following browser error:
- **ERR_CONNECTION_TIMED_OUT**: This indicates that the connection attempt to the server has failed due to prolonged unresponsiveness.

**IP redirection** is a related method where all data intended for a blocked IP address is rewritten and redirected to another IP, often pointing to an informational block page. This page usually notifies the user that the requested website or service has been blocked, sometimes displaying a legal or policy-related justification.

This type of block could be detected by many censorship checking software and services, such as:
>
 - [GlobalCheck](/balefire/censorship/services/globalcheck/)
 - [RIPE Atlas](/balefire/censorship/services/ripe-atlas/)
 - [OONI Probe](/balefire/censorship/toolkits/ooni/)

As well as manually:
>
 - Open “Command Prompt” (Windows) / Terminal (Linux, macOS)
 - Type `curl -v https://domain.name.of.the.website.com`

Results interpretation:
>
 - If the command hangs on: Trying ip.address:443… - This is an IP block
 - If you see the informational block page when accessing the website, follow the “DNS Hijacking” checking section. In case of no DNS hijacking but blocking page present, this may be IP redirection.


Circumvention solutions:
>
 - VPN/Proxy

Regions:
- Russia
- China
- Iran
- Turkmenistan
