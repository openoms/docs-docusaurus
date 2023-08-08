---
description: >-
  GaloyMoney is an open source banking platform enabling any organization to
  launch a community bank on top of Bitcoin and Lightning.
---

# GaloyMoney Dev Docs

## Overview of GaloyMoney

The GaloyMoney core banking platform includes the parts necessary to launch a community bank on Bitcoin:

#### Backend

* **Backend API** – interacts with the bitcoin and accounting layers to enable sending, receiving and holding balances
* **Dealer** – service for implementing fiat hedging strategies via supported exchanges; enables the provision of synthetic USD to provide dollar-like stability without stablecoins

#### End-user and merchant experiences

* **Mobile wallet and web wallet** – simple end user experience enables send/receive onchain and Lighting. Mobile wallet includes educational onboarding quiz & merchant map
* **Tipping pages** – web application end users can share online or display in person to receive payments to their account

#### Administrator experiences

* **Dashboard** – enables monitoring usage and performance of the instance
* **Admin panel** – web application which lets a support team manage users and transactions on their galoy instance.

## Getting Started
[getting-started](/docs/getting-started/)
[staging-environment.md](/docs/staging-environment)

## API Reference
Dive a little deeper and start exploring our API reference to get an idea of everything that's possible with the API:
[core-api-reference.md](/docs/reference/core-api-reference.md)
[admin-api-reference.md](/docs/reference/admin-api-reference)
