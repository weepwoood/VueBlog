(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{526:function(v,r,_){"use strict";_.r(r);var e=_(19),t=Object(e.a)({},(function(){var v=this,r=v.$createElement,_=v._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"什么是-docker"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-docker"}},[v._v("#")]),v._v(" 什么是 Docker")]),v._v(" "),_("p",[v._v("微服务虽然具备各种各样的优势，但服务的拆分通用给部署带来了很大的麻烦。")]),v._v(" "),_("ul",[_("li",[v._v("分布式系统中，依赖的组件非常多，不同组件之间部署时往往会产生一些冲突。")]),v._v(" "),_("li",[v._v("在数百上千台服务中重复部署，环境不一定一致，会遇到各种问题")])]),v._v(" "),_("h3",{attrs:{id:"应用部署的环境问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用部署的环境问题"}},[v._v("#")]),v._v(" 应用部署的环境问题")]),v._v(" "),_("p",[v._v("大型项目组件较多，运行环境也较为复杂，部署时会碰到一些问题：")]),v._v(" "),_("ul",[_("li",[v._v("依赖关系复杂，容易出现兼容性问题")]),v._v(" "),_("li",[v._v("开发、测试、生产环境有差异")])]),v._v(" "),_("p",[v._v("例如一个项目中，部署时需要依赖于 node.js、Redis、RabbitMQ、MySQL 等，这些服务部署时所需要的函数库、依赖项各不相同，甚至会有冲突。给部署带来了极大的困难。")]),v._v(" "),_("h3",{attrs:{id:"docker-解决依赖兼容问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-解决依赖兼容问题"}},[v._v("#")]),v._v(" Docker 解决依赖兼容问题")]),v._v(" "),_("p",[v._v("而 Docker 确巧妙的解决了这些问题，Docker 是如何实现的呢？\n​")]),v._v(" "),_("p",[v._v("Docker 为了解决依赖的兼容问题的，采用了两个手段：")]),v._v(" "),_("ul",[_("li",[v._v("将应用的 Libs（函数库）、Deps（依赖）、配置与应用一起打包")]),v._v(" "),_("li",[v._v("将每个应用放到一个隔离"),_("strong",[v._v("容器")]),v._v("去运行，避免互相干扰")])]),v._v(" "),_("p",[v._v("这样打包好的应用包中，既包含应用本身，也保护应用所需要的 Libs、Deps，无需再操作系统上安装这些，自然就不存在不同应用之间的兼容问题了。")]),v._v(" "),_("p",[v._v("虽然解决了不同应用的兼容问题，但是开发、测试等环境会存在差异，操作系统版本也会有差异，怎么解决这些问题呢？")]),v._v(" "),_("h3",{attrs:{id:"docker-解决操作系统环境差异"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-解决操作系统环境差异"}},[v._v("#")]),v._v(" Docker 解决操作系统环境差异")]),v._v(" "),_("p",[v._v("要解决不同操作系统环境差异问题，必须先了解操作系统结构。计算机系统结构如下：")]),v._v(" "),_("ul",[_("li",[v._v("计算机硬件：例如 CPU、内存、磁盘等")]),v._v(" "),_("li",[v._v("系统内核：所有 Linux 发行版的内核都是 Linux，例如 CentOS、Ubuntu、Fedora 等。内核可以与计算机硬件交互，对外提供内核指令，用于操作计算机硬件。")]),v._v(" "),_("li",[v._v("系统应用：操作系统本身提供的应用、函数库。这些函数库是对内核指令的封装，使用更加方便。")])]),v._v(" "),_("p",[v._v("应用于计算机交互的流程如下：")]),v._v(" "),_("ul",[_("li",[v._v("应用调用操作系统应用（函数库），实现各种功能")]),v._v(" "),_("li",[v._v("系统函数库是对内核指令集的封装，会调用内核指令")]),v._v(" "),_("li",[v._v("内核指令操作计算机硬件")])]),v._v(" "),_("p",[v._v("Ubuntu 和 CentOS 都是基于 Linux 内核，无非是系统应用不同，提供的函数库有差异。此时，如果将一个 Ubuntu 版本的 MySQL 应用安装到 CentOS 系统，MySQL 在调用 Ubuntu 函数库时，会发现找不到或者不匹配，就会报错了。")]),v._v(" "),_("p",[v._v("Docker 如何解决不同系统环境的问题？")]),v._v(" "),_("ul",[_("li",[v._v("Docker 将用户程序与所需要调用的系统（比如 Ubuntu）函数库一起打包")]),v._v(" "),_("li",[v._v("Docker 运行到不同操作系统时，直接基于打包的函数库，借助于操作系统的 Linux 内核来运行")])]),v._v(" "),_("h3",{attrs:{id:"什么是-docker-小结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-docker-小结"}},[v._v("#")]),v._v(" 什么是 Docker 小结")]),v._v(" "),_("p",[v._v("Docker 如何解决大型项目依赖关系复杂，不同组件依赖的兼容性问题？")]),v._v(" "),_("ul",[_("li",[v._v("Docker 允许开发中将应用、依赖、函数库、配置一起"),_("strong",[v._v("打包")]),v._v("，形成可移植镜像")]),v._v(" "),_("li",[v._v("Docker 应用运行在容器中，使用沙箱机制，相互"),_("strong",[v._v("隔离")])])]),v._v(" "),_("p",[v._v("Docker如何解决开发、测试、生产环境有差异的问题？")]),v._v(" "),_("ul",[_("li",[v._v("Docker 镜像中包含完整运行环境，包括系统函数库，仅依赖系统的 Linux 内核，因此可以在任意 Linux 操作系统上运行")])]),v._v(" "),_("p",[v._v("Docker 是一个快速交付应用、运行应用的技术，具备下列优势：")]),v._v(" "),_("ul",[_("li",[v._v("可以将程序及其依赖、运行环境一起打包为一个镜像，可以迁移到任意 Linux 操作系统")]),v._v(" "),_("li",[v._v("运行时利用沙箱机制形成隔离容器，各个应用互不干扰")]),v._v(" "),_("li",[v._v("启动、移除都可以通过一行命令完成，方便快捷")])]),v._v(" "),_("h2",{attrs:{id:"docker-和虚拟机的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-和虚拟机的区别"}},[v._v("#")]),v._v(" Docker 和虚拟机的区别")]),v._v(" "),_("p",[v._v("Docker 可以让一个应用在任何操作系统中非常方便的运行。而以前我们接触的虚拟机，也能在一个操作系统中，运行另外一个操作系统，保护系统中的任何应用。")]),v._v(" "),_("p",[v._v("虚拟机（virtual machine）是在操作系统中模拟硬件设备，然后运行另一个操作系统，比如在 Windows 系统里面运行 Ubuntu 系统，这样就可以运行任意的 Ubuntu 应用了。")]),v._v(" "),_("p",[v._v("Docker 仅仅是封装函数库，并没有模拟完整的操作系统")]),v._v(" "),_("p",[v._v("两者有什么差异呢？")]),v._v(" "),_("ul",[_("li",[v._v("Docker 是一个系统进程；虚拟机是在操作系统中的操作系统")]),v._v(" "),_("li",[v._v("Docker 体积小、启动速度快、性能好；虚拟机体积大、启动速度慢、性能一般")])]),v._v(" "),_("h2",{attrs:{id:"docker-基本知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-基本知识"}},[v._v("#")]),v._v(" Docker 基本知识")]),v._v(" "),_("h3",{attrs:{id:"镜像和容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#镜像和容器"}},[v._v("#")]),v._v(" 镜像和容器")]),v._v(" "),_("p",[v._v("Docker 中有几个重要的概念：")]),v._v(" "),_("ul",[_("li",[v._v("镜像（Image）：Docker 将应用程序及其所需的依赖、函数库、环境、配置等文件打包在一起，称为镜像。")]),v._v(" "),_("li",[v._v("容器（Container）：镜像中的应用程序运行后形成的进程就是"),_("strong",[v._v("容器")]),v._v("，只是 Docker 会给容器进程做隔离，对外不可见。")])]),v._v(" "),_("p",[v._v("一切应用最终都是代码组成，都是硬盘中的一个个的字节形成的"),_("strong",[v._v("文件")]),v._v("。只有运行时，才会加载到内存，形成进程。")]),v._v(" "),_("ul",[_("li",[v._v("镜像，就是把一个应用在硬盘上的文件、及其运行环境、部分系统函数库文件一起打包形成的文件包。这个文件包是只读的。")]),v._v(" "),_("li",[v._v("容器，就是将这些文件中编写的程序、函数加载到内存中允许，形成进程，只不过要隔离起来。")])]),v._v(" "),_("p",[v._v("因此一个镜像可以启动多次，形成多个容器进程。")]),v._v(" "),_("h3",{attrs:{id:"dockerhub"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dockerhub"}},[v._v("#")]),v._v(" DockerHub")]),v._v(" "),_("p",[v._v("开源应用程序非常多，打包这些应用往往是重复的劳动。为了避免这些重复劳动，人们就会将自己打包的应用镜像，例如 Redis、MySQL 镜像放到网络上，共享使用，就像 GitHub 的代码共享一样。")]),v._v(" "),_("ul",[_("li",[v._v("DockerHub ：DockerHub 是一个官方的 Docker 镜像的托管平台。这样的平台称为 Docker Registry。")]),v._v(" "),_("li",[v._v("国内也有类似于 DockerHub 的公开服务，比如 "),_("a",{attrs:{href:"https://c.163yun.com/hub",target:"_blank",rel:"noopener noreferrer"}},[v._v("网易云镜像服务"),_("OutboundLink")],1),v._v("、"),_("a",{attrs:{href:"https://cr.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("阿里云镜像库"),_("OutboundLink")],1),v._v(" 等。")])]),v._v(" "),_("h3",{attrs:{id:"docker-架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-架构"}},[v._v("#")]),v._v(" Docker 架构")]),v._v(" "),_("p",[v._v("我们要使用 Docker 来操作镜像、容器，就必须要安装 Docker。")]),v._v(" "),_("p",[v._v("Docker 是一个 CS 架构的程序，由两部分组成：")]),v._v(" "),_("ul",[_("li",[v._v("服务端（server）：Docker 守护进程，负责处理 Docker 指令，管理镜像、容器等")]),v._v(" "),_("li",[v._v("客户端（client）：通过命令或 RestAPI 向 Docker 服务端发送指令。可以在本地或远程向服务端发送指令。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/halo-blog/cdn-blog-img-e@master/Docker%E6%9E%B6%E6%9E%84.4alzm4dto2g0.svg#id=zqh79&originHeight=456&originWidth=1167&originalType=binary&ratio=1&status=done&style=none",alt:""}})])])}),[],!1,null,null,null);r.default=t.exports}}]);