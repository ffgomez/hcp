FROM centos:7.6

ENV repositorios
ENV ipa
ENV ntp

COPY repositorios
COPY rsa

RUN update upgrade
RUN yum install -y sshd ipa 

RUN borrar repos y paquetes

CMD sshd
CMD ipaclient

ENTRYPOINT bash
