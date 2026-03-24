# Architecture Overview

## Migration Scenario

This project simulates a VM-to-container migration in OpenShift.

## Architecture Diagram

VM (legacy environment)
        ↓
Application extraction
        ↓
Containerization (Dockerfile)
        ↓
Container Image
        ↓
OpenShift Deployment
        ↓
Service
        ↓
Route (external access)

## Components

- **VM (source)**: legacy environment hosting the application
- **Dockerfile**: used to containerize the application
- **Container Image**: built and stored in a registry
- **OpenShift Deployment**: manages application pods
- **Service**: internal networking
- **Route**: external access to the application

## Design Decisions

- Stateless application containerized
- Kubernetes-native deployment model
- External exposure via OpenShift Route
- Separation of concerns between compute, networking, and storage
