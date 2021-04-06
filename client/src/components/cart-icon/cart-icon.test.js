import React from 'react';
import { shallow } from 'enzyme';
import CartIcon from './cart-icon.component';

describe('CartIcon Component Tests', () => {
  let wrapper;
  let mockToggleCartHidden;
  
  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 5,
      toggleCartHidden: mockToggleCartHidden
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it('should render and match CartIcon snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleCartHidden when icon is clicked', () => {
    wrapper.find('CartIconStyles').simulate('click');
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it('should render the itemCount as the text', () => {
    const itemCount = parseInt(wrapper.find('ItemCountStyles').text());
    expect(itemCount).toBe(5);
  });
});