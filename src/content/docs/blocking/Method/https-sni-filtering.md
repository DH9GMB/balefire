---
title: HTTPS SNI Filtering
description: 'Learn About HTTPS SNI Filtering.'
posted: 2024-09-21T21:00:00.000Z
---

## HTTPS domain name (SNI) filtering
This type of blocking is designed to limit access to the exact website / web service by its domain name. It is applied using special filtering hardware with Deep Packet Inspection (DPI) functionality, which analyzes the domain name inside HTTPS packets.

Typical errors you may encounter in a browser in case of SNI filtering:
>
 - ERR_CONNECTION_RESET
 - ERR_CONNECTION_CLOSED
 - ERR_CONNECTION_REFUSED
 - ERR_SSL_DECRYPT_ERROR_ALERT
 - ERR_SSL_HANDSHAKE_NOT_COMPLETED
 - (sometimes) HTTPS certificate error

This type of block could be detected by some of censorship checking software (see SOFTWARE TOOLKITS), such as:
 - OONI Probe
 - RIPE Atlas with 2 measurements: one with the original domain name and another one with the different, connecting the the same IP address
 - blockcheck.sh script from “zapret” application

As well as manually, by connecting to the same website using different domain name in HTTPS request:
>
 - Open “Command Prompt” (Windows) / Terminal (Linux, macOS)
 - Type “curl -v https://domain.name.of.the.website.com”
 - Type “curl -v https://completely.different.website.com -k --connect-to ::domain.name.of.the.website.com”

Results interpretation
>
 - You’ve got HTTPS SNI filtering if the command #3 succeeded but #2 did not: step 3 has rewritten the domain name to “completely.different.website.com” while still connecting to the same IP address of the original website

Circumvention solutions:
>
 - VPN/Proxy
 - DPI circumvention software: GoodbyeDPI, zapret, ByeDPI, SpoofDPI, PowerTunnel
