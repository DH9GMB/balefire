---
title: IODA
description: 'Test website, web service, domain name or IP address.'
posted: 2024-09-21T21:00:00.000Z
---
### Overview
**IODA** is an operational prototype system that monitors the Internet in near-real-time, aiming to detect large-scale Internet outages that affect the edge of the network—such as Autonomous Systems (ASNs) or significant portions of a country. It is a powerful tool for identifying and analyzing network disruptions caused by technical failures, natural disasters, or government-imposed censorship.

[Learn more](https://ioda.inetintel.cc.gatech.edu/)

### Details
Type: Service

Probe location:
>
 - Russia
 - Ukraine
 - Iran
 - Saudi Arabia
 - China

Action type: One-shot check, Aggregated Data Provider

Probing methods:
>
- **Global Internet Routing (BGP)**: Tracks changes in the global Border Gateway Protocol (BGP) to detect disruptions in routing announcements, a common sign of outages or intentional filtering.
- **Internet Background Radiation (IBR)**: Monitors unsolicited traffic from unreachable IP addresses to infer potential outages.
- **ICMP Ping**: Conducts latency and connectivity checks to measure accessibility and identify unreachable networks.

Testing on: Datacenter connections, Residential connection

Useful for:
>
 - Websites and web services accessibility monitoring
 - Outages of ASNs/ISPs

Skill required: Available for everyone

Price: Free
