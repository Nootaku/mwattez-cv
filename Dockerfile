# Base image
FROM nginx:stable-alpine

# Labels
LABEL org.opencontainers.image.source https://github.com/nootaku/mwattez-cv

# Create new group and user (with UID = 1000)
# +---------------------------------------------------------------+
# |    Adduser / Addgroup options:                                |
# |        -S = Create system user or group                       |
# |        -D = Don't assign a password                           |
# |        -u = User ID of new account                            |
# |        -g = ID of group or user                               |
# |        -G = Add to group                                      |
# |                                                               |
# |    Chown options:                                             |
# |        -h = Work on symbolic link instead of reference file   |
# |        -R = Recursive                                         |
# |                                                               |
# |    Full commands:                                             |
# |        addgroup -S -g <groupid> <groupname>                   |
# |        useradd -S -D -u <userid> -G <groupname> <username>    |
# +---------------------------------------------------------------+

ARG USERNAME=www-data
ARG UID=1000

# set -eux; will stop the script if any error occurs
RUN set eux; \
    adduser -S -D -u ${UID} -G ${USERNAME} ${USERNAME}; \
    chown -hR ${USERNAME}:${USERNAME} /usr/share/nginx; \
    chown -hR ${USERNAME}:${USERNAME} /var/cache/nginx; \
    touch /var/run/nginx.pid; \
    chown -hR ${USERNAME}:${USERNAME} /var/run/nginx.pid

# Set working directory to nginx resources directory and remove default resources
WORKDIR /usr/share/nginx/html

# Copy the builded app to the image
COPY ./build .

USER www-data
