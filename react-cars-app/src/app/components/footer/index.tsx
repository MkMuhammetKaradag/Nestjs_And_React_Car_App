import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { Logo } from '../logo';


const FooterContainer=styled.div`
  //min-height:24em;
  background-color: #1d2124;
   ${tw`
   flex
   flex-col
   min-w-full
   pt-10
   md:pt-16
   items-center
   justify-center
   `};
`;
const InnerContainer=styled.div`
  ${tw`
  flex
  w-full
  h-full
  max-w-screen-2xl
  flex-wrap
  ml-2
  md:ml-20
    
  `};
`;
const AboutContainer=styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
  `}
`;

const AboutText=styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;
const SectionContainer=styled.div`
  ${tw`
    w-full
    md:w-auto 
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-6
    md:mt-0
  `}
`;
const LinksList=styled.ul`
  ${tw`
      outline-none
      list-none
      flex
      flex-col
  `}
`;
const ListItem=styled.li`
  ${tw`
    mb-3
  `};
  & > a{
    ${tw`
    text-sm
    text-white
    transition-all 
    hover:text-gray-300
  `}
  }
`;
const HeaderTitle=styled.h3`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-white
    mb-3 
  `}
`;

const RedIcon=styled.span`
  ${tw`
    w-8
    h-8
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
    `}
`;
const HorizontalContainer=styled.div`
  ${tw`
    flex
    items-center
  `}
`;
const SmallText=styled.h6`
  ${tw`
    text-sm
    text-white
  `}
`;
const BottomContainer=styled.div`
  ${tw`
    w-full
    flex
    justify-center
    md:justify-start
    max-w-screen-2xl
    mt-7
    md:mt-1
    `}
`;
const CopyrightText=styled.span`
  font-size:11px;
${tw`
  text-gray-300
  ml-0
  md:ml-14
  `}
`;
export const Footer = () => {
  return (
  <FooterContainer>
    <InnerContainer>      
      <AboutContainer>
        <Logo color="white" bgColor="dark"></Logo>
        <AboutText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro suscipit, tempora assumenda eaque ipsam.</AboutText>
      </AboutContainer>
      <SectionContainer>
        <HeaderTitle>Our Links</HeaderTitle>
      <LinksList>
        <ListItem><a href="#">Home</a></ListItem>
        <ListItem><a href="#">About Us</a></ListItem>
        <ListItem><a href="#">Services</a></ListItem>
        <ListItem><a href="#">Models</a></ListItem>
        <ListItem><a href="#">Blog</a></ListItem>
      </LinksList>
      </SectionContainer>
      <SectionContainer>
        <HeaderTitle>Other Links</HeaderTitle>
      <LinksList>
        <ListItem><a href="#">FAQ</a></ListItem>
        <ListItem><a href="#">Contact Us</a></ListItem>
        <ListItem><a href="#">Suport</a></ListItem>
        <ListItem><a href="#">Privacy policy</a></ListItem>
        <ListItem><a href="#">Terms &amp; Conditions</a></ListItem>
      </LinksList>
      </SectionContainer>
      <SectionContainer>
        <HeaderTitle>Call Now</HeaderTitle>
        <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
            </RedIcon>
            <SmallText>+90 555-000-0000</SmallText>
        </HorizontalContainer>
      </SectionContainer>
      <SectionContainer>
        <HeaderTitle>Mail</HeaderTitle>
        <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </RedIcon>
            <SmallText>info@Test.com</SmallText>
        </HorizontalContainer>
      </SectionContainer>
    </InnerContainer>
    <BottomContainer>
      <CopyrightText>Copyright &copy; {new Date().getFullYear()} YourCar. All rights Reserved</CopyrightText>
    </BottomContainer>
  </FooterContainer>
  )
}
