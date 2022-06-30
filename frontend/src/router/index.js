import Vue from 'vue';
import store from "../store";
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import BottomBar from '../components/BottomBar.vue';
import TimeTable from '../views/TimeTable.vue';
import TicketView from '../views/TicketView.vue';
import ParkingView from '../views/ParkingView.vue';
import DigitalClock from '../components/DigitalClock.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/Rejestracja',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/BottomBar',
    name: 'BottomBar',
    component: BottomBar
  },
  {
    path: '/RozkladLotow',
    name: 'TimeTable',
    component: TimeTable
  },
  {
    path: '/TicketView/:id',
    name: 'TicketView',
    component: TicketView,
  },
  {
    path: '/ParkingView',
    name: 'ParkingView',
    component: ParkingView,
  },
  {
    path: '/DigitalClock',
    name: 'DigitalClock',
    component: DigitalClock,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/Login')
  } else {
    next()
  }
} )

export default router
