import App from '../App'
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
let newsDescription = "Archit Gupta, Founder & CEO Clear says the price of Bitcoin, the first and most prominent crypto, rose to $68,000 in November 2021. Shortly after, it nearly halved in price to $35,000 and continued to decline. Today it stands at around $21,000."

Enzyme.configure({ adapter: new Adapter() });

describe("exercise2 test", ()=>{
    let wrapper = mount(<App/>);
    beforeEach(()=>{
        wrapper = mount(<App/>);
    })
    afterEach(()=>{
        wrapper.unmount();
    })
    test("Should render a News Card component", ()=>{
        expect(wrapper.find('NewsCard').length).toBe(1)
    })
    test("News Card component Should have a description string as provided in the instruction", ()=>{
        let descriptionCont = wrapper.find('.cardContent>p');
        expect(descriptionCont.text()).toBe(newsDescription);
    })
    test("News card Container should have a class .newsContainer to it", ()=>{
        expect(wrapper.find(".newsContainer").length).toBe(1)
    })
})