---
title: DNS Hijacking
description: 'Learn About DNS Hijacking.'
posted: 2024-09-21T21:00:00.000Z
---
DNS spoofing is one of the simple and affordable methods of restricting website access which is easy to circumvent.
The IP address of the website is intentionally replaced with a different one by ISP, to prevent the user from connecting to the real address and accessing the website.

Typical errors you may encounter in a browser in case of DNS hijacking:
>
 - ERR_NAME_NOT_RESOLVED
 - ERR_DNS_TIMED_OUT
 - (sometimes) HTTPS certificate error
 - (sometimes) ERR_CONNECTION_REFUSED

The IP is usually changed to the block page hosted by ISP, which tells the user that the website is blocked. That’s why this type of blocking could be usually clearly distinguished from any other.

DNS hijacking is usually applied only for the DNS resolvers provided by the ISP.
DNS spoofing is a subtype of DNS hijacking, in which ISP applies hijacking to any other DNS resolver (not only hosted by ISP itself).

This type of block could be detected by many censorship checking software and services, such as:
>
 - [GlobalCheck](/balefire/censorship/services/globalcheck/)
 - [RIPE Atlas](/balefire/censorship/services/ripe-atlas/)
 - [OONI Probe](/balefire/censorship/toolkits/ooni/)

As well as manually:
>
 - Go to [Google DNS](https://dns.google/)
 - Type in the domain name of the website you have trouble accessing
 - Open “Command Prompt” (Windows) / Terminal (Linux, macOS)
 - Type “nslookup domain.name.of.the.website.com”
 - Check the IP address(es) returned by nslookup and by dns.google web service

Results interpretation:
>
 - If the IP addresses are different, this could be the case of DNS hijacking.
 - If you see the informational block page when accessing the website, try to open IP address you got with “nslookup” with the browser, in form of http://ip.address.here
 - If you see the same block page, this is DNS hijacking.

Circumvention solutions:

Either:
>
 - Change DNS configuration to use third-party resolver, such as Google DNS or Quad9
 - Enable DNS-over-HTTPS in the browser
 - Enable Private DNS on Android, Private Relay on iOS
 - Use DNS-over-HTTPS
