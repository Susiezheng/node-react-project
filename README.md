#edsp-atp-ui
搭建环境手册：

		1.安装nodejs，下载nodejs的最新版本：https://nodejs.org/en/进行安装;
		  安装成功直接，查看node，npm版本：
			node -v:nodejs版本，v6.9.1；
			npm -v:npm版本：4.0.5

		2.设置npm的当前镜像为淘宝镜像：
		      在package.json目录下执行:npm config set registry https://registry.npm.taobao.org

		3.下载依赖库：
		     在package.json目录下执行:npm install

		4.生成本地环境：
		         在package.json目录下执行:
				 先执行：npm run dll
				 再执行：npm run dev

		5.打包生产环境：
				 在package.json目录下执行:
				 先执行：npm run dll
				 再执行：npm run dev
