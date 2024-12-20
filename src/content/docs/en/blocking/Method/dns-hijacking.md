---
title: DNS Hijacking
description: 'Learn About DNS Hijacking.'
posted: 2024-09-21T21:00:00.000Z
---
### DNS spoofing in Internet Censorship
**DNS spoofing** is one of the simple and affordable methods of restricting website access which is relatively easy to circumvent. The IP address of the website is intentionally replaced with a different one by the ISP to prevent the user from connecting to the real address and accessing the website.  

Typical errors you may encounter in a browser in case of DNS hijacking include:  
- **ERR_NAME_NOT_RESOLVED**: Indicates that the domain name could not be resolved to an IP address.  
- **ERR_DNS_TIMED_OUT**: Suggests that the DNS server is unresponsive or unreachable.  
- (sometimes) **HTTPS certificate error**: Occurs when the redirected page doesn’t match the certificate of the expected site.  
- (sometimes) **ERR_CONNECTION_REFUSED**: Implies that the user was redirected to an inaccessible or non-functional server.  

In most cases, the IP address is changed to point to a block page hosted by the ISP, which informs the user that the website is blocked. This makes DNS hijacking relatively easy to identify compared to other methods of censorship, such as deep packet inspection or IP blocking.  

DNS hijacking typically targets DNS resolvers provided by the ISP itself. However, **DNS spoofing**, a more intrusive subtype of DNS hijacking, occurs when the ISP manipulates DNS responses regardless of the resolver being used, including third-party resolvers such as Google Public DNS or Cloudflare.  

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
 - Type `nslookup example.com`
 - Check the IP address(es) returned by nslookup and by dns.google web service

Results interpretation:
>
 - If the IP addresses are different, this could be the case of DNS hijacking.
 - If you see the informational block page when accessing the website, try to open IP address you got with “nslookup” with the browser, in form of `http://123.456.67.8`
 - If you see the same block page, this is DNS hijacking.

Circumvention solutions:

Either:
>
 - Change DNS configuration to use third-party resolver, such as [Quad9](https://www.quad9.net/) or [another](https://en.wikipedia.org/wiki/Public_recursive_name_server#Notable_public_DNS_service_operators)
 - Enable DNS-over-HTTPS in the browser or on a device 
 - Enable Private DNS on Android/Private Relay on iOS

Regions:
- Russia
- Kazakhstan
- Turkey
- Iran
