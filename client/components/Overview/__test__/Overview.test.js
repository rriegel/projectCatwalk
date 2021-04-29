import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Overview from '../Overview.jsx';
import ImageGallery from '../ImageGallery.jsx';
import ProductInfoHead from './ProductInfoHead.jsx';
import ProductInfoDescription from '../ProductInfoDescription.jsx';
import ProductInfoShare from '../ProductInfoShare.jsx';
import StyleSelector from '../StyleSelector.jsx';
import StyleSelectorOption from '../StyleSelectorOption.jsx';
import ImageGallery from '../ImageGallery.jsx';
import AddToCart from '../AddToCart.jsx';
import SizeSelector from '../SizeSelector.jsx';
import SizeQuantitySelector from '../SizeQuantitySelector.jsx';
import Characteristics from '../Characteristics.jsx';
import ThumbnailCarousel from '../ThumbnailCarousel.jsx';
import ThumbnailCarouselPic from '../ThumbnailCarouselPic.jsx';
import ThumbnailCarouselMini from '../ThumbnailCarouselMini.jsx';
import ThumbnailCarouselMiniPic from '../ThumbnailCarouselMiniPic.jsx';
import ThumbnaiCarouselArrowDown from '../ThumbnailCarouselArrowDown.jsx';
import ThumbnaiCarouselArrowUp from '../ThumbnailCarouselArrowUp.jsx';

Enzyme.configure({ adapter: new Adapter() });

const Ov = shallow(< Overview currentItem={{ id: 10 }} />);
const ImgG = shallow(< ImageGallery />);
const ProdInfoH = shallow(<ProductInfoHead />);
const ProdInfoD = shallow(<ProductInfoDescription />);
const ProdInfoS = shallow(<ProductInfoShare />);
const StyleSel = shallow(<StyleSelector />);
const StyleSelO = shallow(<StyleSelectorOption />);
const Add = shallow(<AddToCart />);
const SizeSel = shallow(<SizeSelector />);
const SizeQSel = shallow(<SizeQuantitySelector />);
const Char = shallow(<Characteristics />);
const ThumbC = shallow(<ThumbnailCarousel />);
const ThumbCP = shallow(<ThumbnailCarouselPic />);
const ThumbCMini = shallow(<ThumbnailCarouselMini />);
const ThumbCMiniP = shallow(<ThumbnailCarouselMiniPic />);
const ThumbCAU = shallow(<ThumbnaiCarouselArrowDown />);
const ThumbCAD = shallow(<ThumbnaiCarouselArrowUp />);


describe('Component Rendering', () => {
  it('renders without crashing', () => {
    Ov;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    ImgG;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    ProdInfoH;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    ProdInfoD;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    ProdInfoS;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    StyleSel;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    StyleSelO;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    Add;
  });
});


describe('Component Rendering', () => {
  it('renders without crashing', () => {
    SizeSel;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    SizeQSel;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    Char;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    ThumbC;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    ThumbCP;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    ThumbCMini;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    ThumbCMiniP;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    ThumbCAU;
  });
});

describe('Component Rendering', () => {
  it('renders without crashing', () => {
    ThumbCAD;
  });
});





// describe('dummy test', () => {
//   it('should add', () => {
//     expect(1 + 2).toBe(3);
//   })
// })

