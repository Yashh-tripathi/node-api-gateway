# Node API Gateway

A production-style API Gateway built using Node.js and Express to handle centralized authentication, role-based access control, rate limiting, and request routing for microservices architecture.

This project simulates how real-world systems manage secure communication between clients and internal services using a single entry point.

## Overview

In a microservices architecture, exposing every service directly to the client leads to security risks, duplication of logic, and poor scalability.

This API Gateway acts as a unified entry layer that:

- Authenticates incoming requests using JWT
- Applies Redis-based rate limiting
- Enforces role-based access control (RBAC)
- Routes requests to appropriate backend services
- Hides internal service structure from clients

Instead of clients calling services directly, all requests pass through the gateway.

## Architecture

Client → API Gateway → Auth Check → Rate Limit Check → Role Check → Route → Service

The gateway is responsible for security and routing while services focus only on business logic.

## Features

- Centralized JWT Authentication
- Redis-based Rate Limiting
- Role-Based Access Control (RBAC)
- Reverse Proxy Routing using http-proxy-middleware
- Microservice-ready routing structure

## Tech Stack

- Node.js
- Express.js
- Redis
- JWT
- http-proxy-middleware

## How It Works

1. Client sends request to gateway.
2. Gateway verifies JWT token.
3. Gateway checks request frequency using Redis.
4. Gateway verifies user role permissions.
5. Gateway forwards request to the correct service.

Example routing:

/users → User Service  
/auth → Auth Service  
/admin → Admin Service

Services themselves do not handle authentication or rate limiting.

## Use Case

This project demonstrates how modern systems:

- Secure backend services
- Prevent API abuse
- Centralize access control
- Simplify microservice communication

It reflects real-world infrastructure patterns used in distributed systems.

## Future Enhancements

- Request Logging
- Response Caching
- Circuit Breaker
- Load Balancing