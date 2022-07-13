import App from '../App'
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import newsList from '../MockData/News.json'

Enzyme.configure({ adapter: new Adapter() });

describe("exercise3 test", ()=>{
    let wrapper = mount(<App/>);
    beforeEach(()=>{
        wrapper = mount(<App/>);
    })
    afterEach(()=>{
        wrapper.unmount();
    })
    // test("Should render a News Card component", ()=>{
    //     expect(wrapper.find('NewsCard').length).toBe(1)
    // })
    test("Should have 4 news Card Components", ()=>{
        let newsCards = wrapper.find('NewsCard')
        expect(newsCards.length).toBe(4);
    })
    test("you Should paas imageUrl, description, thumbnailURL, props to News Component", ()=>{
        let newsCards = wrapper.find('NewsCard');
        let newsCard = newsCards.at(0)
        expect(Object.keys(newsCard.props())).toContain('thumbnailURL');
        expect(Object.keys(newsCard.props())).toContain('imageUrl');
        expect(Object.keys(newsCard.props())).toContain('description');
    })
    describe("Testing data correctness for First News card, Values passed to NewsCard should be correct", ()=>{
        test("Thumbnail URL", ()=>{
            let newsCards = wrapper.find('NewsCard');
            let newsCard = newsCards.at(0)
            let expectedNews = newsList[0];
            expect(newsCard.props().thumbnailURL).toBe(expectedNews.thumbnailURL);
        })
        test("image URL", ()=>{
            let newsCards = wrapper.find('NewsCard');
            let newsCard = newsCards.at(0)
            let expectedNews = newsList[0];
            expect(newsCard.props().imageUrl).toBe(expectedNews.imageUrl);
        })
        test("description", ()=>{
            let newsCards = wrapper.find('NewsCard');
            let newsCard = newsCards.at(0)
            let expectedNews = newsList[0];
            expect(newsCard.props().description).toBe(expectedNews.description);
        })
        test("Heaading", ()=>{
            let newsCards = wrapper.find('NewsCard');
            let newsCard = newsCards.at(0)
            let expectedNews = newsList[0];
            expect(newsCard.props().heading).toBe(expectedNews.name);
        })
        test("Provider Name", ()=>{
            let newsCards = wrapper.find('NewsCard');
            let newsCard = newsCards.at(0)
            let expectedNews = newsList[0];
            expect(newsCard.props().providerName).toBe(expectedNews.providerName);
        })
    })
   
})