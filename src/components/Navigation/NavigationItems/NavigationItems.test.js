import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'
import NavigatonItem from './NavigationItem/NavigationItem'

configure({ adapter: new Adapter() }) 

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow( <NavigationItems / > )
    })

    it('should render two <NavigatonItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavigatonItem)).toHaveLength(2);
    });

    it('should render three <NavigatonItem /> elements if authenticated', () => {
        wrapper.setProps({ isAuth: true })
        expect(wrapper.find(NavigatonItem)).toHaveLength(3);
    });

    it('should an exact logout button', () => {
         wrapper.setProps({ isAuth: true })
        expect(wrapper.contains(<NavigatonItem link="/logout" >Logout</NavigatonItem>)).toEqual(true);
    });
})  