# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:debian
WORKDIR /app

# install dependencies into temp directory
# this will cache them and speed up future builds
RUN apt update && apt install -y build-essential python3
RUN mkdir -p /app
COPY ./* /app
RUN cd /app && bun install

USER bun
EXPOSE 4001/tcp
ENTRYPOINT [ "bun", "exec", "tinacms", "dev" ]
