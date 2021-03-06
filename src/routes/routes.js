import CreateListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';
// import GalleryView from '../views/GalleryView.vue';
import NewLightNewsView from '../views/NewLightNewsView.vue';
// import MobileGalleryView from '../views/MobileGalleryView.vue';
import MainView from '../views/MainView.vue';
import PictureView from '../views/PictureView.vue';
import MobileMainView from '../views/MobileMainView.vue';
import MenuPopupView from '../components/MenuPopupView.vue';
import WayToComeView from '../views/WayToComeView.vue';

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
        component: MainView
    },
    {
        path: '/PictureView/:id',
        name: 'PictureView',
        component: PictureView
    },
    // {
    //     path: '/GalleryView',
    //     name: 'GalleryView',
    //     component: GalleryView,
    //     beforeEnter: (to, from, next) => {
    //         bus.$emit('start:spinner');
    //         next();            
    //       }
    // },
    // {
    //     path: '/MobileGalleryView',
    //     name: 'MobileGalleryView',
    //     component: MobileGalleryView,
    //     beforeEnter: (to, from, next) => {
    //         bus.$emit('start:spinner');
    //         next();            
    //       }
    // },
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
    // {
    //     path: '/NewLightNewsView',
    //     name: 'NewLightNewsView',
    //     component: CreateListView('NewLightNewsView'),
    //     beforeEnter: (to, from, next) => {
    //       bus.$emit('start:spinner');
    //       store.dispatch('FETCH_LIST', to.name)
    //           .then(() => {
    //               next();
    //           })
    //           .catch(err => {
    //               console.error(err);
    //           });
    //     }
    // },
    {
        path: '/NewLightNewsView',
        name: 'NewLightNewsView',
        component: NewLightNewsView
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
        component: WayToComeView,
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', 'WayToComeView')
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