import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import styled from 'styled-components';
import {
  arrayOf,
  shape,
  string,
} from 'prop-types';
import SlickStyles from './SlickStyles';
import { 
  BORDER_RADIUS,
  COLOR,
  CONTEXTUAL_COLOR, 
  FONT_STACK,
  SPACING 
} from '../../constants/theme';
import ic_close from '../../img/ic_close.svg';

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
  margin-bottom: ${SPACING['8']};
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
      <SlickStyles />
      <StyledSliderContainer>
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
