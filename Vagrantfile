# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "centos72-2.0.22"
  
  config.vm.box_check_update = false
  config.ssh.insert_key = false
  
  config.vm.define "assistant-frontend.example.com" do |node|
      node.vm.hostname = "assistant-frontend.example.com"
      node.vm.network "private_network", ip: "172.20.20.60"

      config.vm.provider "virtualbox" do |vb|
        # Use VBoxManage to customize the VM. 
        vb.customize ["modifyvm", :id, "--memory", "512"]
      end
      
      node.vm.provision "shell", path: "provision/install-yum.sh"
      node.vm.provision "shell", path: "provision/install-edsp-assistant-frontend.sh"
  end  

end

