FROM node:11.9.0-alpine as builder
LABEL maintainer "Ibara Takanashi <ibara1454@gmail.com>"

# Set environment to development
ENV NODE_ENV development

# Add all files in current directory into container
ADD . / workspace/
WORKDIR /workspace

RUN npm install \
    && npm run build

FROM halverneus/static-file-server
COPY --from=builder /workspace/dist/ /web
EXPOSE 8080
