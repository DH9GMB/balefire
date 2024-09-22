---
title: Software toolkits
description: Software for measuring censorship
posted: 2024-09-21T21:00:00.000Z
---

## Censored Planet Observatory (analyze-cp)
### Overview

analyze-cp is a software toolbox, created by the [Censored Planet team](https://data.censoredplanet.org/), which includes quack-v1, hyperquack-v1 to application-layer interference measuring and satellite-v1 to detect DNS interference.

[Learn more](https://github.com/censoredplanet/censoredplanet)

### Details
Type: Software toolkit
Probe locations:
>
 - Russia
 - Ukraine (+ Starlink)
 - UAE
 - Turkey
 - Iran
Action type: One-shot check, aggregator data provider
Probing methods:
>
 - Application-layer inference measuring
 - DNS inference detection

Testing on: Datacenter connections
Useful for:
>
 - Testing websites and web services
 - Testing IP-level censorship
 - Testing DNS spoofing

Skill required: Minor software configuring skills expected
Price: Payments for Data. [Google Storage Pricing](https://cloud.google.com/storage/pricing) is applied to the raw data hosted by Censored Planet.

## OONI Probe
### Overview  
Software toolkit using for measure the blocking of websites, instant messaging apps, and circumvention tools, and network performance.

[Learn more](https://ooni.org/support/ooni-probe-cli#get-started)

### Details
Type: Software toolkit
Probe location
Action type:  One-shot check, aggregator data provider
Probing methods:
>
- Application-layer inference measuring
- DNS inference detection

Testing on: Datacenter connections
Useful for:
>
 - Testing websites and web services
 - Testing IP-level censorship
 - Testing DNS spoofing
 - Testing messengers accessibility
 - Detects the presence of network interference technologies and middleboxes

Skill required: Minor software configuring skills expected
Price: Free

### Quick start
1. Install:
> Debian/Ubuntu:

- `sudo gpg --no-default-keyring --keyserver hkp://keyserver.ubuntu.com --keyring /etc/apt/keyrings/ooni-apt-keyring.gpg --recv-keys 'B>
- `echo "deb [signed-by=/etc/apt/keyrings/ooni-apt-keyring.gpg] https://deb.ooni.org/ unstable main" | sudo tee /etc/apt/sources.list.d>

> Mac:

- [Install Homebrew](https://brew.sh)
- `brew install ooniprobe`


2. Run test for specific website:
`ooniprobe run websites --input https://my.website/`

3. Run test for a websites list:
`ooniprobe run websites --input-file my-websites.txt`
