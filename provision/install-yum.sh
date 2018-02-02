#! /bin/sh

# 配置公司内部DNS
cat > /etc/resolv.conf <<EOF
nameserver 10.22.50.5
nameserver 114.114.114.114
EOF

# 对接内网yum源
rm -f /etc/yum.repos.d/*.repo
curl -L http://proxy.yfb.sunline.cn/repos/Centos-Base.repo > /etc/yum.repos.d/Centos-Base.repo
curl -L http://proxy.yfb.sunline.cn/repos/epel.repo > /etc/yum.repos.d/epel.repo
curl -L http://proxy.yfb.sunline.cn/repos/docker.repo > /etc/yum.repos.d/docker.repo
curl -L http://proxy.yfb.sunline.cn/repos/elasticstack.repo > /etc/yum.repos.d/elasticstack.repo
curl -L http://proxy.yfb.sunline.cn/repos/elrepo.repo > /etc/yum.repos.d/elrepo.repo

exit 0

