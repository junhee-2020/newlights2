import CreateListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';
import GalleryView from '../views/GalleryView.vue';
import MainView from '../views/MainView.vue';
import MobileMainView from '../views/MobileMainView.vue';
import MenuPopupView from '../components/MenuPopupView.vue';

const routes= [
    {
      path: '/',
      redirect: '/MainView'
    },    
    {
        path: '/MenuPopupView',
        name: 'MenuPopupView',
        component: MenuPopupView
    },
    {
        path: '/MobileMainView',
        name: 'MobileMainView',
        component: MobileMainView,
        beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', 'NewLightNewsView')
                .then(() => {
                    next();
                })
                .catch(err => {
                    console.error(err);
                });
          }
    },
    {
        path: '/MainView',
        name: 'MainView',
        component: MainView,
        beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', 'NewLightNewsView')
                .then(() => {
                    next();
                })
                .catch(err => {
                    console.error(err);
                });
          }
    },
    {
        path: '/GalleryView',
        name: 'GalleryView',
        component: GalleryView
    },
    {
        path: '/AboutChurchView',
        name: 'AboutChurchView',
        component: CreateListView('AboutChurchView'),
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
              .then(() => {
                  next();
              })
              .catch(err => {
                  console.error(err);
              });
        }
    },
    {
        path: '/NewLightNewsView',
        name: 'NewLightNewsView',
        component: CreateListView('NewLightNewsView'),
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
              .then(() => {
                  next();
              })
              .catch(err => {
                  console.error(err);
              });
        }
    },
    {
        path: '/WorshipGuideView',
        name: 'WorshipGuideView',
        component: CreateListView('WorshipGuideView'),
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
              .then(() => {
                  next();
              })
              .catch(err => {
                  console.error(err);
              });
        }
    },
    {
        path: '/WayToComeView',
        name: 'WayToComeView',
        component: CreateListView('WayToComeView'),
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
              .then(() => {
                  next();
              })
              .catch(err => {
                  console.error(err);
              });
        }
    }
  ];

  export {
      routes
  }