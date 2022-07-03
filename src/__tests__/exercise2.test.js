import App from '../App'
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("Tests for News Component Exercise 2", ()=>{
    let wrapper = mount(<App/>);
    beforeEach(()=>{
        wrapper = mount(<App/>);
    })
    afterEach(()=>{
        wrapper.unmount();
    })
    test("Testing for Sfety", ()=>{
        expect(true).toBe(true);
    })
    if(wrapper.find('#exercise2').length === 1) {
       describe("Testing Exercise 2", ()=>{
           console.log(wrapper.debug())
           test("Should render a News Card component", ()=>{
               expect(wrapper.find('NewsCard').length).toBe(1)
           })
           test("Should have a description string as ", ()=>{
               let descriptionCont = wrapper.find('.cardContent>p');
               expect(descriptionCont.text()).toBe("This is news Description");
           })
           test("Container should have a class .container to it", ()=>{
               expect(wrapper.find(".container").length).toBe(1)
           })
       })
    } else {
        console.log("Skipping test cases ")
    }
})