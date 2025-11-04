# --- STAGE 1: BUILDER (Next.js Static Export) ---
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code (including next.config.js and content.ts)
COPY . .

# Run the build. 'output: export' in next.config.js makes this generate the 'out' folder.
RUN npm run build


# --- STAGE 2: PRODUCTION SERVER (Nginx) ---
FROM nginx:alpine

# Create a directory for the content API file
RUN mkdir -p /etc/nginx/content

# CRITICAL STEP 1: Copy the static output 'out' directory from the builder
# This is the full, generated SPA (index.html, /contact, /projects, etc.)
COPY --from=builder /app/out /usr/share/nginx/html

# CRITICAL STEP 2: Copy the content.json file to the location Nginx will serve it from 
# (This simulates the API endpoint for your content)
COPY --from=builder /app/content.json /etc/nginx/content/content.json 

# CRITICAL STEP 3: Copy the Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (where Nginx listens inside the container)
EXPOSE 80

# The default Nginx command runs automatically
CMD ["nginx", "-g", "daemon off;"]
