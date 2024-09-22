---
title: HTTPS SNI Filtering
description: 'Learn About HTTPS SNI Filtering.'
posted: 2024-09-21T21:00:00.000Z
---

## HTTPS SNI Filtering  
**SNI filtering** is a technique used to block access to specific websites, even if they are using HTTPS.

### What is SNI?

**Server Name Indication (SNI)** is part of the TLS (Transport Layer Security) protocol. When you visit a website over HTTPS, your browser sends the site's hostname (like `example.com`) in clear text before encrypting the connection. This helps the server determine which site you're trying to access when multiple sites are hosted on the same IP address.

### HTTPS SNI Filtering

**HTTPS SNI Filtering** involves inspecting the SNI field in HTTPS requests to block or redirect traffic to specific websites.

#### How It Works:
1. **Capturing Requests**: Network devices (like firewalls or ISP equipment) capture outgoing HTTPS requests.
2. **Inspecting SNI**: The device inspects the SNI field in these requests to see which website the user wants to visit.
3. **Blocking/Redirecting**: If the SNI matches a blocked site, the device either blocks the connection or redirects it to another page.

#### Simple Example:
- **Request**: You try to visit `https://blockedsite.com`.
- **Inspection**: The firewall detects `blockedsite.com` in the SNI field.
- **Action**: Access to `blockedsite.com` is blocked, and you might see an error message or be redirected.

### Purpose of HTTPS SNI Filtering:

- **Control Access**: Prevent users from accessing specific sites without decrypting the entire content.
- **Efficient Censorship**: Allows blocking based on domain names even for encrypted traffic.

### Limitations and Workarounds:

- **Encrypted SNI (ESNI)**: Some modern protocols aim to encrypt the SNI to prevent such filtering.
- **VPNs/Tor**: These can bypass SNI filtering by masking the destination site.

By inspecting just the SNI field, censors can effectively control access to undesirable websites while maintaining some level of performance and avoiding complete decryption of encrypted traffic.  

### Monitoring Tools
WIP
