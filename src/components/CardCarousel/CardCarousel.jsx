import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import styled, { createGlobalStyle } from 'styled-components';
import {
  arrayOf,
  shape,
  string,
} from 'prop-types';
import { 
  BORDER_RADIUS,
  COLOR,
  CONTEXTUAL_COLOR, 
  FONT_STACK,
  SPACING 
} from '../../constants/theme';
import ic_close from '../../img/ic_close.svg';

const SlickStyles = createGlobalStyle`
/* Slider */
.slick-slider
{
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list
{
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
}
.slick-list:focus
{
    outline: none;
}
.slick-list.dragging
{
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list
{
    -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
         -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}

.slick-track
{
    align-items: stretch;
    top: 0;
    left: 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;
}

[dir='rtl'] .slick-track {
  flex-direction: row-reverse;
}

.slick-track:before,
.slick-track:after
{
    display: table;

    content: '';
}
.slick-track:after
{
    clear: both;
}
.slick-loading .slick-track
{
    visibility: hidden;
}

.slick-slide
{
    display: none;
    min-height: 1px;
}

.slick-slide img
{
    display: block;
}
.slick-slide.slick-loading img
{
    display: none;
}
.slick-slide.dragging img
{
    pointer-events: none;
}
.slick-initialized .slick-slide
{
    display: flex;
}
.slick-loading .slick-slide
{
    visibility: hidden;
}
.slick-vertical .slick-slide
{
    display: block;

    height: auto;

    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}





@charset 'UTF-8';
/* Slider */
.slick-loading .slick-list
{
    background: #fff url('./ajax-loader.gif') center center no-repeat;
}

/* Arrows */
.slick-prev,
.slick-next
{
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
}
.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus
{
    color: transparent;
    outline: none;
    background: transparent;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before
{
    opacity: 1;
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before
{
    opacity: .25;
}

.slick-prev:before,
.slick-next:before
{
    font-size: 20px;
    line-height: 1;

    opacity: .75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-prev
{
    left: -25px;
}
[dir='rtl'] .slick-prev
{
    right: -25px;
    left: auto;
}
.slick-prev:before
{
    content: '←';
}
[dir='rtl'] .slick-prev:before
{
    content: '→';
}

.slick-next
{
    right: -25px;
}
[dir='rtl'] .slick-next
{
    right: auto;
    left: -25px;
}
.slick-next:before
{
    content: '→';
}
[dir='rtl'] .slick-next:before
{
    content: '←';
}

/* Dots */
.slick-dotted.slick-slider
{
    margin-bottom: 30px;
}

.slick-dots
{
    position: absolute;
    bottom: -25px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
}
.slick-dots li
{
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
}
.slick-dots li button
{
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
}
.slick-dots li button:hover,
.slick-dots li button:focus
{
    outline: none;
}
.slick-dots li button:hover:before,
.slick-dots li button:focus:before
{
    opacity: 1;
}
.slick-dots li button:before
{
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: .25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before
{
    opacity: .75;
    color: black;
}

.slick-arrow {
  background: #fff;
  border-radius: 16px;
  font-weight: bold;
  height: 32px;
  width: 32px;
}

.slick-arrow:hover {
  background: #fff;
}

.slick-arrow::before {
  color: #333;
}
`;

Modal.setAppElement('#___gatsby');

const StyledSliderContainer = styled.div`
  padding: 0 25px;
`;

const StyledCard = styled.article`
  background: rgba(255, 255, 255, .8);
  border-radius: ${BORDER_RADIUS.CORNER};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${SPACING['8']};
  margin: 0 20px;
  width: auto !important;
`;

const StyledCardQuote = styled.blockquote`
  color: ${CONTEXTUAL_COLOR.TEXT};
  font-family: ${FONT_STACK.SANS_SERIF};
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 12px;
  width: 100%;
`;

const StyledCardAuthor = styled.p`
  align-self: flex-end;
  color: ${CONTEXTUAL_COLOR.TEXT};
  font-family: ${FONT_STACK.SANS_SERIF};
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  margin: auto 0 0;
  width: 100%;
`;

const StyledModalQuote = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const StyledModalAuthor = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 0;
`;

const StyledCloseButton = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  margin-bottom: ${SPACING['5']};
  margin-left: ${SPACING['5']};
  margin-top: ${SPACING['5']};
  min-width: 85px;
  padding: 0 ${SPACING['3']};
`;

const StyledReadMore = styled.button`
  background: transparent none;
  border: 0;
  border-bottom: 1px solid ${COLOR.COLD_PURPLE};
  color: ${CONTEXTUAL_COLOR.LINK.LINK};
  cursor: pointer;
  display: inline;
  font-size: 16px;
  padding: 0;
`;

const charMaxLen = 300;

const CardCarousel = ({ data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        }
      },
    ]
  };

  const [modalData, setModalData] = useState({
    quote: '',
    author: '',
  });
  const renderModalData = ({ quote, author }) => {
    setModalData({
      quote,
      author,
    });
  };
  const clearModalData = () => {
    setModalData({
      quote: '',
      author: '',
    });
  };

  const [ modalIsOpen, setIsOpen ] = useState(false);
  const openModal = (data) => { 
    renderModalData(data);
    setIsOpen(true); 
  };
  const closeModal = () => {
    clearModalData();
    setIsOpen(false);
  };

  return (
    <>
      <StyledSliderContainer>
        <SlickStyles />
        <Slider {...settings}>
          {data.map((datum, i) => {
            const quotePreview = datum.quote.length > charMaxLen ?
              `${datum.quote.substring(0, charMaxLen)}…` :
              `${datum.quote}`;

            return (
              <StyledCard quote={quotePreview} author={datum.author} key={`fellow-testimonial-${i}`}>
                <StyledCardQuote>
                  {`"${quotePreview}" `}
                  {datum.quote.length > charMaxLen && (
                    <StyledReadMore onClick={() => openModal({quote: datum.quote, author: datum.author})}>Read more</StyledReadMore>
                  )}
                </StyledCardQuote>
                {datum.author && <StyledCardAuthor>{datum.author}</StyledCardAuthor>}
              </StyledCard>
            );
          })}
        </Slider>
      </StyledSliderContainer>
      <Modal isOpen={modalIsOpen} onRequestClose={() => closeModal()} className="Modal" overlayClassName="Overlay">
        <StyledCloseButton onClick={() => closeModal()}><img alt="Close icon" src={ic_close} /><span>Close</span></StyledCloseButton>
        <blockquote>
          <StyledModalQuote>"{modalData.quote}"</StyledModalQuote>
          {modalData.author && (
            <footer>
              <StyledModalAuthor>
                {modalData.author}
              </StyledModalAuthor>
            </footer>
          )}
        </blockquote>
      </Modal>
    </>
  );
};

CardCarousel.propType = {
  data: arrayOf(shape({
    quote: string.isRequired,
    author: string,
  })).isRequired,
};

export default CardCarousel;
