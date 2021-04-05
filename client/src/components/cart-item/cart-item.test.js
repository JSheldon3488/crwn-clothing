
import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';

it('Cart-Item Component test render and SnapShot', () => {
    const mockItem = {
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220,
        name: "Adidas NMD",
        quantity: 1 
    }
    
    expect(shallow(<CartItem item={mockItem}/>)).toMatchSnapshot();
})