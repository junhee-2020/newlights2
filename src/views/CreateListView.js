import ListView from '../views/ListView.vue';

export default function createListView(pageName) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어가는 자리
        name: pageName,
        render(createElement) {
            return createElement(ListView);
        }
    }
}