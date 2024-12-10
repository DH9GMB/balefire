---
title: OONI Probe
description: Software for measuring censorship
posted: 2024-09-21T21:00:00.000Z
---
### Overview  
**OONI Probe** is an open-source software toolkit designed to measure internet censorship and network interference. It enables users to test the blocking of websites, instant messaging apps, and circumvention tools while also assessing network performance. With its advanced capabilities, OONI Probe is a valuable tool for researchers, activists, and anyone interested in monitoring internet freedom.

[Learn more](https://ooni.org/support/ooni-probe-cli#get-started)

### Details
Type: Software toolkit

Probe location:
>
 - Russia
 - Ukraine (+ Starlink)
 - UAE
 - Turkey
 - Iran

Action type:  One-shot check, aggregator data provider

Probing methods:
>
- **Application-Layer Inference Measuring**: Identifies blocking at the application level, such as restrictions on specific websites or apps.
- **DNS Interference Detection**: Monitors DNS requests for signs of tampering, such as spoofing or hijacking.
- **Messenger Accessibility Testing**: Assesses the availability of instant messaging apps, such as WhatsApp, Telegram, and Signal.
- **Detection of Network Interference Technologies**: Identifies the presence of middleboxes, DPI (Deep Packet Inspection) hardware, or other technologies used to monitor or disrupt traffic.

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

Unique Features:
- Comprehensive Testing Across Platforms: Available for desktops, mobile devices, and command-line interfaces, making it accessible to a wide range of users.
- Community-Driven Data Sharing: Test results are shared anonymously with the OONI Explorer, creating a global database of internet censorship events.
- Customizable Testing: Users can tailor tests to focus on specific websites, apps, or regions of interest.

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
