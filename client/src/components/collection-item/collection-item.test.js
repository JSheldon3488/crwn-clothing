import React from 'react';
import { shallow } from 'enzyme';
import CollectionItem from './collection-item.component'


describe('CollectionItem Component Tests', () => {
    let wrapper;
    let mockAddItem;

    beforeEach(() => {
        mockAddItem = jest.fn();

        const mockProps = {
            item: {
                imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
                price: 220,
                name: "Adidas NMD",
            },
            addItem: mockAddItem,
        }

        wrapper = shallow(<CollectionItem {...mockProps}/>);
    })

    it('should render and match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should render name as text', () => {
        expect(wrapper.find('NameSpanStyles').text()).toBe("Adidas NMD")
    })

    it('should render price as text', () => {
        expect(wrapper.find('PriceSpanStyles').text()).toBe("$220")
    })
    
    it('add button should click', () => {
        wrapper.find('AddButtonStyles').simulate('click')
        expect(mockAddItem).toHaveBeenCalled();
    })
});