
import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';

describe('CartItem Component Tests', () => {
    let wrapper;

    beforeEach(() => {
        const mockItem = {
            imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
            price: 220,
            name: "Adidas NMD",
            quantity: 1 
        }
    
        wrapper = shallow(<CartItem item={mockItem}/>);
    })

    it('should render and match CartItem snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should render the name in NameSpan', () => {
        const name = wrapper.find('NameStyles').text()
        expect(name).toBe("Adidas NMD")
    })

    it('should render the price and quantity in PriceSpan', () => {
        const qxp = wrapper.find('PriceStyles').text()
        expect(qxp).toBe("1 x $220")
    })
})