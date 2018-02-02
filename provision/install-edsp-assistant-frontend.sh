#! /bin/sh

#
# 安装nginx
#
yum install -y nginx

# 更新配置
mkdir -p /data/www
ln -s /vagrant/deploy /data/www/ui

cp /vagrant/nginx.conf.example /etc/nginx/conf.d/default.conf

systemctl enable nginx
systemctl restart nginx

exit 0

