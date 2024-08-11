FROM node:18-alpine

WORKDIR /

COPY run.sh /

RUN chmod +x run.sh

RUN ls -lrth

ENTRYPOINT [ "sh", "/run.sh" ]