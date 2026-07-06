# Smart Car Parking App

A mobile car parking application built with **React Native** that allows users to search, select, reserve, and pay for parking spaces directly from their mobile device. The system uses **MongoDB** as the database and was developed/tested using **Xcode** for iOS and **Android Studio** for Android.

## Overview

The Smart Car Parking App is designed to improve the parking experience by helping drivers find available parking spaces faster and pay conveniently through the app. Instead of waiting in long queues or driving around to find a parking spot, users can select a parking location in advance and complete payment by card.

This solution helps reduce parking congestion, saves time, and supports environmental sustainability by reducing unnecessary vehicle idling and CO2 emissions.

## Key Features

* User-friendly mobile parking interface
* Search and view available parking locations
* Select preferred parking area or slot
* Reserve parking directly from the mobile app
* Pay securely using card payment
* Store parking, user, and transaction data using MongoDB
* Cross-platform mobile development using React Native
* iOS development and testing using Xcode
* Android development and testing using Android Studio

## Problem Statement

In many urban areas, drivers spend a significant amount of time searching for parking or waiting in queues. This causes traffic congestion, wastes fuel, increases travel time, and contributes to higher CO2 emissions.

The Smart Car Parking App aims to solve this issue by allowing users to find and pay for parking in advance, helping reduce vehicle waiting time and improving parking management efficiency.

## Project Objectives

* Make parking easier and more convenient for users
* Reduce traffic congestion in parking areas
* Minimize vehicle idle time while waiting for parking
* Support cashless and card-based parking payments
* Improve the overall parking management process
* Help reduce CO2 emissions caused by vehicles searching or waiting for parking

## Technology Stack

### Mobile Application

* React Native
* JavaScript / TypeScript
* Xcode for iOS development
* Android Studio for Android development

### Backend and Database

* Node.js / Express.js
* MongoDB
* REST API

### Payment

* Card payment integration

### Development Tools

* Visual Studio Code
* Xcode
* Android Studio
* Git / GitHub
* Postman

## Main Modules

### User Module

Users can access the mobile app, browse available parking areas, select a parking space, and make a payment using their card.

### Parking Selection Module

This module allows users to view parking availability and choose a suitable parking location or slot based on their needs.

### Payment Module

The payment module allows users to pay for parking through card payment, making the process faster, more secure, and cashless.

### Database Module

MongoDB is used to store important application data such as user details, parking information, booking records, and payment transactions.

## Environmental Impact

The application contributes to sustainability by reducing the amount of time vehicles spend searching for parking or waiting in queues. Less idle time means lower fuel consumption and reduced CO2 emissions.

By improving parking efficiency, the system supports smarter urban mobility and helps create a cleaner and more organized city environment.

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm or yarn
* React Native CLI
* MongoDB
* Xcode for iOS
* Android Studio for Android
* Git

### Clone the Repository

```bash
git clone https://github.com/your-username/car-parking-app.git
cd car-parking-app
```

### Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

### Start the Metro Server

```bash
npm start
```

### Run on Android

```bash
npm run android
```

or

```bash
npx react-native run-android
```

### Run on iOS

```bash
npm run ios
```

or

```bash
npx react-native run-ios
```

## Environment Variables

Create a `.env` file in the root directory and configure the required environment variables.

```env
MONGODB_URI=your_mongodb_connection_string
API_BASE_URL=your_backend_api_url
PAYMENT_SECRET_KEY=your_payment_secret_key
```



## Future Enhancements

* Real-time parking slot availability
* QR code parking ticket generation
* Admin dashboard for parking operators
* Push notifications for booking confirmation
* Parking history and digital receipts
* Map-based parking search
* Dynamic pricing based on parking demand
* Vehicle plate number recognition
* Loyalty rewards for frequent users

## Project Benefits

* Reduces time spent searching for parking
* Improves parking area efficiency
* Supports secure cashless payments
* Helps reduce traffic congestion
* Minimizes fuel waste and CO2 emissions
* Provides a convenient experience for drivers
* Supports smart city and sustainable mobility goals

## Conclusion

The Smart Car Parking App provides a modern solution to common parking problems by combining mobile technology, digital payments, and database-driven parking management. By allowing users to select and pay for parking through the app, the system improves convenience, reduces congestion, and contributes to lower CO2 emissions.

## Author

Developed by **Ivan Ventura**

## License

This project is for educational and portfolio purposes.
