import React from 'react';
import { shallow } from 'enzyme';
import CartDropdown from './cart-dropdown.component';

describe('CartDropdown Component Tests', () => {
    let wrapper;
    let mockToggleCartHidden;

    beforeEach(() => {
        mockToggleCartHidden = jest.fn();
        
        const mockProps = {
            cartItems: [],
            history:  [],
            toggleCartHidden: mockToggleCartHidden
        }

        wrapper = shallow(<CartDropdown {...mockProps}/>)
    })

    it('should render and match CardDropdown snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should call toggleCartHidden when checkout button is clicked', () => {
        expect.assertions(2);
        wrapper.find('CartDropdownButtonStyles').simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalled();
        expect(wrapper.find('CartDropdownButtonStyles').text()).toBe('GO TO CHECKOUT');
    })

    it('should render empty cart message', () => {
        const nested = wrapper.find('CartItemsStyles').first().dive();
        const emptyMessage = wrapper.find('EmptyMessageStyles');
        expect(nested.text()).toBe(emptyMessage.text());
    })

    it('should render cart items', () => {
        const mockProps = {
            cartItems: [{id: 1}, {id: 2}],
            history:  [],
            toggleCartHidden: mockToggleCartHidden
        }
        const wrapper2 = shallow(<CartDropdown {...mockProps} />)
        expect(wrapper2.find('CartItemsStyles').children().length).toBe(2);
    })
})