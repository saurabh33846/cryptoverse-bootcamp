import App from '../App'
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("Tests for News Component", ()=>{
    let wrapper = mount(<App/>);
    beforeEach(()=>{
        wrapper = mount(<App/>);
    })
    afterEach(()=>{
        wrapper.unmount();
    })

    console.debug(wrapper.debug())
    test("Testing for Sfety", ()=>{
        expect(true).toBe(true);
    })

    if(wrapper.find('#exercise1').length === 1) {
        describe("Testing Exercise 1 Test cases ", ()=>{
            test("It should render Container Component ", ()=>{
                expect(wrapper.find('Container').length).toBe(1)
            })
            test("Container should have NewsCard Component", ()=>{
                wrapper = mount(<App/>);
                const newsComponent = wrapper.find('NewsCard');
                expect(newsComponent.length).toBe(1);
            })
            test("News Card Component should have text as 'News Card Component'", ()=>{
                wrapper = mount(<App/>);
                const newsComponent = wrapper.find('News');
                expect(newsComponent.text()).toBe('News Card Component');
            })
        })
    } else {
        describe("Skipping exercise 1 test cases", ()=>{
            test("Exercise 1 skipped", ()=>{
                console.log("Skipping Exercise 1");
                expect(true).toBe(true);
            })
        })
        
    }

})