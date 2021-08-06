# Base image
FROM nginx:stable-alpine

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

RUN adduser -S -D -u ${UID} -G ${USERNAME} ${USERNAME} && chown -hR ${USERNAME}:${USERNAME} /usr/share/nginx/*

# Set working directory to nginx resources directory and remove default resources
WORKDIR /usr/share/nginx/html

# Copy the builded app to the image
COPY ./build .
