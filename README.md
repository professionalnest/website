# Pronest
Company Website for ProNest - an AI tools subscription bundling service.

# Tech Stack
- React JS
- Next JS
- AWS SES via nodemailer
- Posthog (Analytics)

# Pre-Requisites
- Docker

# Dev Environment Setup

- Set Secrets
```sh
# AWS
export AWS_REGION=""
export AWS_ACESS_KEY_ID=""
export AWS_SECRET_ACESS_KEY=""
# POSTHOG
export NEXT_PUBLIC_POSTHOG_KEY=""
export NEXT_PUBLIC_POSTHOG_HOST=""
```

- Docker commands
```sh
# START node image
docker run -it --rm \
    --name pronestsite \
    -p 3000:3000 \
    -v ./:/app \
    -w /app \
    node:23 \
        /bin/bash

# Re-enter container
docker exec -it pronestsite /bin/bash
```

- In case you are re-using existing project
```sh
# INSTALL NODE DEPENDENCIES
npm install

# START NODE SERVER IN DEV MODE
npm run dev
```

# Build

```sh
# Fix ESLint issue
npm run lint

# Check if build is successful
npm run build

# Test app
npm run start
```

## Docker image
```sh
# Build Docker image
docker build -t pronestsite_image .

# Test app
docker run -d \
    --name pronestsite \
    -p 3000:3000 \
    pronestsite_image
```