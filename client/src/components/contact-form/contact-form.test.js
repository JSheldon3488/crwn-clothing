import React from 'react';
import { shallow } from 'enzyme'
import ContactForm from './contact-form.component'


describe('ContactForm Component Tests', () => {
    const wrapper = shallow(<ContactForm />)

    it('should render and match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})