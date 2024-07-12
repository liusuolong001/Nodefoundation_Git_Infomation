# Git
Github个人账号 yinhao12138
Github个人邮箱 2531134419@qq.com

查看 ssh key 命令 cat ~/.ssh/id_rsa.pub

github  git
{
  name:yinhao12138
  email:2531134419@qq.com
  password:252739582yh
}


###【0.】邂逅版本控制工具
版本控制工具在软件开发中可以帮助程序员进行代码的追踪\维护\控制....等一系列的操作

## 集中式版本控制
- 优点
- 1.单一的集中服务器,保存所有文件的修改版本
- 2.协同开发人员通过客户端连接到这台服务器,取出最新的文件或者提交更新

- 缺点
- 1.核心问题中央服务器不能出现故障 否则无法提价更新也就无法协同工作
- 2.如果中心数据库磁盘损坏有没有备份则会丢失所有数据

## 分布式版本控制 
[git属于分布式版本控制]
本质:客户端不只是提交最新的文件快照,而是吧代码仓库完成的镜像备份下来包括完成的历史记录,每一次克隆的操作就是对代码仓库的完整备份

## Bash - CMD -GUI的区别
【Bash】
1.Git-bash 就是一个shell 是Windows下的命令行工具可以执行Linux命令
2.Git-bash 基与CMD 在CMD的基础上添加了一些新的命令和功能
3.使用命令行工具的时候Bash更加方便
【Git CMD =  windows里面的cmd】
1.在Windows操作系统上的命令行解释工具
2.在Winddows上安装git并且习惯使用命令的时候,可以使用cmd来运行git命令
【Git GUI】
1.提供一个图形用户界面来运行git命令

## git的配置选项
- 每一次git提交都会使用这些信息会写入你的每一次提交中不可更改
- 使用--global选项那么该命令只需要执行一次 以后在此系统做任何操作git都会使用此信息
 【使用global选项配置命令】
{
    查看账号/邮箱/密码 git config user.name / user.email / user.password
    修改账号/邮箱/密码 git config --global user.name kaijie_yinhao / user.email hao.a.yin@capgemini.com / user.password 252739582yh
}
【检测当前配置信息】
git config --list

## 获取git仓库
Command + Shift + . 可以切换显示和隐藏文件和文件夹。
【git init 创建本地仓库】新项目 
【git clone】已有远程仓库

###【1.Git常用命令】

## 文件状态的划分
【未跟踪】Git仓库下的文件没有添加到Git仓库管理中,我们需要通过add命令来操作
【已跟踪】Git仓库管理的文件已经处于跟踪状态,Git可以进行各种跟踪管理
{
  staged:暂缓区中的文件状态
  unmodified:commit命令,可以将staged中文件提交到Git仓库中
  modified:修改了某个文件后,会处于Modified状态 修改状态
}

## Git操作命令 
[本地仓库]
【git status】检测文件状态  [-s 查看更简洁的信息]
【git log】查看文件提交日志 
【git reflog】查看指针历史版本记录
【git log --pretty=oneline】将提交日志显示为一行
【git log --pretty=oneline --graph】将提交日志显示为图结构
【git add .】将此项目中文件全部加入到git仓库中跟踪此文件 [.当前目录下所有文件]
【git commit -m ''】 将暂缓中的文件提交到分支上
【git commit -a -m ''】 快捷将此文件进行暂缓直接提交 将两步[add/暂缓 commit -m/提交]操作合为一步操作
【git restore --staged <文件名>】将某个文件移除暂缓区
【git reset】 版本回退
{
  git reset --hard HEAD^ 版本回退到上一个版本
  git reset --hard HEAD^^ 版本回退到上两个版本
  git reset --hard HEAD～1000 版本回退到上一千个版本
  git reset --hard c45ac778554c0f3463d3e1b8ea6201047612c37a 回退指定的commit版本
}

## Git忽略文件
自动生成的文件,比如日志文件,编译的临时文件,node_modules....不想使用git跟踪

[创建.gitignore文件 项目中自动生成]
{
  1.不需要提交的文件、文件夹 node_modules /dist
  2.本地的环境变量文件  .env.local
  3.日志文件
  4.编译器自动生成的文件
}

## Git的校验和
commit c45ac778554c0f3463d3e1b8ea6201047612c37a
{
  commit ID 唯一标识
  通过这ID可以作为索引找到修改的文件
}

## 远程仓库的验证
- 基于HTTP的凭证存储 管理员加权限 【账号密码】
{
  因为本身HTTP协议是无状态链接,所以每一次链接都需要账号密码
  Git拥有一个凭证系统来处理这个事情
}
- 基于SSH的密钥 【SSH】
{
  人工生成一对共钥于私钥
}

## 管理远程服务器
[远程remote仓库]
【git remote】查看远程仓库的名称列表,不包括详细信息
【git remote -v】 -v是-verbose的缩写 提供了详细的远程仓库信息，包括各个仓库的 URL 和访问类型（fetch 和 push）。
【git remote add <shortname> <name>】添加远程仓库:让本地仓库与远程服务器仓库建立连接
【git remote add origin https://github.com/liusuolong001/Nodefoundation_Git_Infomation.git】
【git remote rename origin glab】重命名远程仓库名称:如origin修改为glab
【git remote remove gitlab】删除一个叫gitlab的远程仓库
【git branch --set-upstream-to=origin/main main】本地分支跟踪远程分支将 [git init] 本地main与orgin main连接 1.git push 不需要指定远程origin/main分支 [git clone 自动跟踪]
【git push origin main】将本地数据提交/推送到远程分支 【解释】本地分支与远程分支没有进行跟踪的时候 推送代码需要指定远程origin/main分支 
【git fetch】从远程分支拉取代码 1.跟踪远程分支git fetch 【解释】2.未跟踪git fetch origin main
【git merge】将远程分支代码合并到本地仓库 1.跟踪远程分支git merge【解释】2.未跟踪git merge origin main
【git pull】= 【git fetch + git merge】将远程分支拉下来并且合并到本地分支
【git checkout master】切换分支
【git push -u origin main 】将本地main分支推送到main分支
【git tag v1.1.1】创建标签tag [重要阶段为项目打上tag]
【git tag -d v1.1.1】删除本地标签
【git push origin -d v1.1.1】删除远程标签上origin的Tag
【git checkout v1.1.1】检出tag
【git push origin v1.1.1】将本地tag push到远程origin分支
【git push origin --tags】 将所有本地标签push到远程分支
【git branch -a】 查看所有本地分支 -a查看本地分支 -r查看远程分支
【git branch <branch-name>】 创建一个新分支
【git branch -d <branch-name>】 删除一个新分支 -d删除分支 -m重新命名分支
【git push origin --d dev】[删除远程分支]
【git checkout -b <branch-name>】创建一个新分支并且切换过去
【git rebase main】当前分支的提交重新应用到另一个分支 比如将bugFix提交应用到main 需要切换到bugFix分支git rebase main应用到
【git checkout --track orgin/main】创建一个本地分支main与远程分支相同名称的分支并且自动与远程main分支以及上游分支 [跟踪远程分支]
【git push origin dev】将本地dev分支推送到远程dev分支 [需要建立上游分支 git branch --set-upstream-to=origin/dev] [推送分支到远程分支]


## git底层原理
[git每一次commit提交都是commit对象]
1.每一次commit提交都会提交一个commit对象中有一个属性tree属性 tree里面又有 blob文件(源文件生成的blob)
2.每一个源文件内容本身映射为blob对象,而源文件名称与文件路径映射成tree,SHA1(校验和)保证全局对象的唯一性
Objects对象
{
  git cat-file -p eb5c2b<文件夹名称+文件名> 【查看提交文件的二进制文件 blob】
  commit 保存版本库中提交时刻的快照(提交对象) [1.首次提交产生的提交对象没有父对象,普通提交操作产生的提交对象有一个父对象2.多个分支合并产生的对象有多个父对象] 【git log的时候查看的第一条数据是最后一次提交】
  tree 对应文件系统的目录结构，里面主要有：子目录 (tree)，文件列表 (blob)，文件类型以及一些数据文件权限模型等。
  blob 储存单个文件内容,一般为二进制数据文件
}



- [提交git本地仓库到远程仓库问题]
- 【方案一】
{
  1.首先git init 初始化仓库
  2.创建初始化提交git commit -a -m 'xxx'
  3.添加远程仓库git remote add origin https://github.com/liusuolong001/React_Information.git
  4.重命名当前分支为 main 的命令，并强制执行该重命名，即使存在名称冲突 git branch -M main
  5.将数据提交/推送到远程分支 git push -u origin main 
}
- 【方案二】 
{
  【创建git init时 远程分支名与本地分支名称不同】
  1.git init
  2.git remote add origin https://github.com/liusuolong001/React_Information.git
  3.git fetch origin/main 将远程main分支拉到本地
  4.git checkout --track orgin/main 创建一个本地分支main与远程分支相同名称的分支并且自动与远程main分支以及上游分支
}

- [拒绝合并并不相干的历史] 
合并分支时,拒绝合并不想干的历史 refusing to merge unrelated histories
【解决】
过去git merge 可以将两个没有共同基础的是分支进行合并,导致一个后果,新创建项目可能被一个毫不怀疑的维护者合并没有必要的历史到一个已经存在的项目中目前已经被纠正 但是还是可以通过allow-unrelated-histories 逃逸这个限制来合并两个项目
