import React from 'React';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../components/App.jsx';
import ScoreCard from '../components/ScoreCard.jsx';


configure({adapter: new Adapter()});

describe('App', () => {
  it('should renders App correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });


    it("should includes one div", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('div').length).toEqual(1);
    });


    it("should render ScoreCard component", () => {
      const wrapper = shallow(<App />);
      const scorecard = wrapper.find(ScoreCard);
      expect(scorecard.exists()).toBe(true);
    });
});

