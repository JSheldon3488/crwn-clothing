import React from 'react';
import { shallow } from 'enzyme';
import CheckoutItem from './checkout-item.component';


describe('CheckoutItem Component Tests', () => {
    let wrapper;
    let mockClearItem;
    let mockAddItem;
    let mockRemoveItem;

    beforeEach(() => {
        mockClearItem = jest.fn();
        mockAddItem = jest.fn();
        mockRemoveItem = jest.fn();

        const mockProps = {
            cartItem: {
                imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
                price: 220,
                name: "Adidas NMD",
                quantity: 3
            },
            clearItem: mockClearItem,
            addItem: mockAddItem,
            removeItem: mockRemoveItem,
        }

        wrapper = shallow(<CheckoutItem {...mockProps}/>);
    })

    it('should render and match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('remove button should click', () => {
        wrapper.find('div.remove').simulate('click')
        expect(mockRemoveItem).toHaveBeenCalled();
    })
    
    it('add button should click', () => {
        wrapper.find('div.add').simulate('click')
        expect(mockAddItem).toHaveBeenCalled();
    })

    it('clear button should click', () => {
        wrapper.find('RemoveButtonStyles').simulate('click')
        expect(mockClearItem).toHaveBeenCalled();
    })
});