import Vue from 'vue'
import Router from 'vue-router'



import HelloWorld from '@/components/HelloWorld'
import About from '@/components/about/about'
import ProjectCase from '@/components/projectCase/projectCase'
import Sewage from '@/components/projectCase/sewage'
import Dispose from '@/components/projectCase/dispose'
import Rebirth from '@/components/projectCase/rebirth'
//新闻资讯
import NewsList from '@/components/newslist/newslist'
import Indu from '@/components/newslist/indu'
import Envi from '@/components/newslist/envi'
import Rub from '@/components/newslist/rub'
//人才招聘
import Recruitment from '@/components/recruitment/recruitment'
import Contact from '@/components/contact/contact'
import Leave from '@/components/leave/leave'
import Details from '@/components/details/details'
import CaseDetail from '@/components/caseDetail/caseDetail'

//全局组件
//header
import Headers from '@/components/public/header'
Vue.component("headers",Headers);
import Banner from '@/components/public/banner'
Vue.component("banner",Banner);
import VaCarousel from '@/components/public/VaCarousel'
Vue.component("VaCar",VaCarousel);
//标题
import Titles from '@/components/public/titles'
Vue.component("titles",Titles);
//列表模块
import ListMoudel from '@/components/public/listMoudel'
Vue.component("listMoudel",ListMoudel);
//ioc
import ListIoc from '@/components/public/iocs'
Vue.component("iocs",ListIoc);
//资源列表
import Project from '@/components/public/project'
Vue.component("project",Project);
//按钮
import Btns from '@/components/public/btns'
Vue.component("btns",Btns);
//新闻资讯
import News from '@/components/public/news'
Vue.component("news",News);
//尾部
import Footers from '@/components/public/footer'
Vue.component("footers",Footers);
//导航
import UsTitle from '@/components/public/usTitle'
Vue.component("usTitle",UsTitle);
//优势
import Advantage from '@/components/public/advantage'
Vue.component("advantage",Advantage);
//头部图片
import HeadImg from '@/components/public/headImg'
Vue.component("headImg",HeadImg);
//分页器
import Pages from '@/components/public/page'
Vue.component("pages",Pages);
//招聘
import Lader from '@/components/public/lader'
Vue.component("lader",Lader);

//li
import Li from '@/components/public/li'
Vue.component("lis",Li);
//("listMoudel",ListMoudel);

//Vue.component("iocs",ListIoc);

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'HelloWorld',
      	component: HelloWorld
    },
    {
      	path: '/hellow',
      	name: 'HelloWorld',
      	component: HelloWorld
    },
    {
    	path:'/about',
    	name:'关于我们',
    	component: About
    },
    {
    	path:'/projectCase',
    	name:'工程案例',
    	component:ProjectCase,
    	children:[
    		{
    			path:'/',
    			name:'固废处理',
    			component:Dispose
    		},
    		{
    			path:'/projectCase/sewage',
    			name:'污水处理',
    			component:Sewage
    		},
    		{
    			path:'/projectCase/dispose',
    			name:'固废处理',
    			component:Dispose
    		},
    		{
    			path:'/projectCase/rebirth',
    			name:'再生资源',
    			component:Rebirth
    		}
    	]
    },
    {
    	path:'/newslist',
    	name:'新闻资讯',
    	component:NewsList,
    	children:[
    		{
    			path:'/',
    			name:'环境时报',
    			component:Envi
    		},
    		{
    			path:'/newslist/envi',
    			name:'环境时报',
    			component:Envi
    		},
    		{
    			path:'/newslist/indu',
    			name:'行业动态',
    			component:Indu
    		},
    		{
    			path:'/newslist/rub',
    			name:'废物处理',
    			component:Rub
    		}
    	]
    },
    {
    	path:'/recruitment',
    	name:'人才招聘',
    	component:Recruitment
    },
    {
    	path:'/contact',
    	name:'联系我们',
    	component:Contact
    },
    {
    	path:'/leave',
    	name:'在线留言',
    	component:Leave
    },
    {
    	path:'/details/:index/:lid',
    	name:'详情页',
    	component:Details
    },
    {
    	path:'/caseDetail/:i/:l',
    	name:'case详情页',
    	component:CaseDetail
    }
  ]
})
