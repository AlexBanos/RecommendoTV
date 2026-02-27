import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import App from '../../app/App.vue';

describe('App', () => {
    it('renders shell layout with a single main region', () => {
        const wrapper = mount(App, {
            global: {
                stubs: {
                    AppHeader: true,
                    AppFooter: true,
                    RouterView: true,
                },
            },
        });

        expect(wrapper.findAll('main')).toHaveLength(1);
        expect(wrapper.find('router-view-stub').exists()).toBe(true);
    });
});
