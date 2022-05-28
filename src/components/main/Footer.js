import React from 'react';
import styled, { css } from 'styled-components';

const FooterBlock = styled.footer`
  width: 100%;
  height: 46rem;
  margin-top: 3.8rem;
`;

const Contents = styled.div`
    // width: 128rem;
    margin: 0 auto;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 0.3fr 0.3fr 0.3fr;
    border-bottom: solid 1px #cbcbcb;
    padding-bottom: 3.5rem;
    margin-top: 3.2rem;
`;

const StyledP = styled.p`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.4px;
  color: ${(props) => props.theme.grey1_color};

  ${(props) =>
    props.sub &&
    css`
      font-size: 1.4rem;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.14;
      letter-spacing: -0.28px;
      text-align: left;
    `}

  ${(props) =>
    props.desc &&
    css`
      font-size: 1.4rem;
      font-weight: normal;
      margin-top: 0.4rem;
    `}
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 2.1rem;

  ${(props) =>
    props.m &&
    css`
      margin-bottom: 1.1rem;
    `}

  ${(props) =>
    props.img &&
    css`
      gap: 0.7rem;
      margin-top: 1.2rem;
    `}
`;

const StyledButton = styled.button`
  width: 12.8rem;
  height: 4.2rem;
  padding: 1.15rem 2.15rem;
  border-radius: 6px;
  border: solid 1px #d8d8d8;
  background-color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.19;
  letter-spacing: -0.32px;
  color: #606060;
  white-space: nowrap;
`;

const IconImg = styled.img`
  width: 3.9rem;
  height: 3.9rem;
`;

const FooterMenu = styled.div`
  margin-top: 3.9rem;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 4.8rem;
  margin-bottom: 2.1rem;
`;

const StyledItem = styled.li`
  font-size: 1.8rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -0.36px;
  color: ${(props) => props.theme.grey1_color};
`;


const Footer = () => {
    return (
        <FooterBlock>
            <Contents>
                <Grid>
                    
                    <div>
                        <StyledP sub>바로가기</StyledP>
                        <StyledP desc>젯플린</StyledP>
                        <StyledP desc>프로젝트</StyledP>
                        <StyledP desc>스토리</StyledP>
                        <StyledP desc>라운지</StyledP>
                    </div>

                    <div>
                        <StyledP sub>이용안내</StyledP>
                        <StyledP desc>공지사항</StyledP>
                        <StyledP desc>FAQ</StyledP>
                    </div>

                    <div>
                        <StyledP sub>관련사이트</StyledP>
                        <StyledP desc>네이버 블로그</StyledP>
                        <StyledP desc>티스토리 블로그</StyledP>
                        <StyledP desc>인스타그램</StyledP>
                        <StyledP desc>velog</StyledP>
                    </div>

                    <div>
                        <StyledP sub>서비스약관</StyledP>
                        <StyledP desc>서비스 이용약관</StyledP>
                        <StyledP desc>개인정보 취급방침</StyledP>
                        <StyledP desc>전자금융거래약관</StyledP>
                        <StyledP desc>결제/환불약관</StyledP>
                    </div>

                </Grid>
            </Contents>
        </FooterBlock>
    );
};

export default Footer;