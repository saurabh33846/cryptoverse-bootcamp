import App from '../App'
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("exercise1 test", ()=>{
    let wrapper = mount(<App/>);
    beforeEach(()=>{
        wrapper = mount(<App/>);
    })
    afterEach(()=>{
        wrapper.unmount();
    })

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
        const newsComponent = wrapper.find('NewsCard');
        expect(newsComponent.text()).toBe('News Card Component');
    })

})