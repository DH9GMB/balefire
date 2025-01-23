---
title: HTTPS SNI Filtering
description: 'Learn About HTTPS SNI Filtering.'
posted: 2024-09-21T21:00:00.000Z
---
### HTTPS SNI Filtering in Internet Censorship
**HTTPS SNI Filtering** is a method designed to restrict access to specific websites or web services based on their domain names. It operates by analyzing the Server Name Indication (SNI) field in the TLS handshake, where the client specifies the domain it wants to connect to. This filtering is implemented using specialized hardware with **Deep Packet Inspection (DPI)** functionality, which inspects network traffic at a granular level, even within encrypted HTTPS packets.

SNI filtering is effective because the SNI field in the TLS handshake is typically transmitted in plaintext, even in otherwise encrypted traffic. This allows the filtering system to identify the target domain and block the connection before the encryption is fully established.

Typical errors you may encounter in a browser in case of SNI filtering:
>
 - **ERR_CONNECTION_RESET**: This error indicates that the connection to the server was abruptly terminated. It often occurs due to network issues, firewall restrictions, or deliberate blocking by DPI or similar technologies.
 - **ERR_CONNECTION_CLOSED**: This means the connection to the server was successfully established but then closed, typically by the server or due to network interruptions.
 - **ERR_CONNECTION_REFUSED**: This error occurs when the server actively rejects the connection attempt, often because the server is offline, the IP is blocked, or a firewall is in place.
 - **ERR_SSL_DECRYPT_ERROR_ALERT**: This indicates an issue with decrypting SSL/TLS data during the connection. It may be caused by mismatched encryption algorithms, invalid certificates, or interference (e.g., DPI analyzing encrypted traffic).
 - **ERR_SSL_HANDSHAKE_NOT_COMPLETED**: This happens when the SSL/TLS handshake fails to complete. It could be due to protocol incompatibilities, certificate issues, or traffic interception by filtering systems.
 - (sometimes) **HTTPS certificate error**: his error points to issues with the HTTPS certificate, such as expiration, an untrusted certificate authority, or a mismatch between the domain and the certificate. It can also occur due to traffic interception altering the certificate.

This type of block could be detected by some of censorship checking software (see SOFTWARE TOOLKITS), such as:
 - [OONI Probe](/balefire/en/censorship/toolkits/ooni/)
 - [RIPE Atlas](/balefire/en/censorship/services/ripe-atlas/) with 2 measurements: one with the original domain name and another one with the different, connecting the the same IP address
 - [blockcheck.sh](https://github.com/bol-van/zapret/blob/master/blockcheck.sh) script from “zapret” application

As well as manually, by connecting to the same website using different domain name in HTTPS request:
>
 - Open “Command Prompt” (Windows) / Terminal (Linux, macOS)
 - Type `curl -v https://example.com`
 - Type `curl -v https://completely.different.website.com -k --connect-to ::domain.name.of.the.website.com`

Results interpretation
>
 - You’ve got HTTPS SNI filtering if the command #3 succeeded but #2 did not: step 3 has rewritten the domain name to “completely.different.website.com” while still connecting to the same IP address of the original website

Circumvention solutions:
>
 - VPN/Proxy
 - (sometimes) DPI circumvention software: [GoodbyeDPI](https://github.com/ValdikSS/GoodbyeDPI), [zapret](https://github.com/bol-van/zapret), [ByeDPI](https://github.com/hufrea/byedpi), [SpoofDPI](https://github.com/xvzc/SpoofDPI), [PowerTunnel](https://github.com/krlvm/PowerTunnel)

Regions:
- China
- Russia
- Turkmenistan
- Iran
